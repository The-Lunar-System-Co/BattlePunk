import React, { useEffect, useState } from "react";

// components
import Modal from "../components/modal";

// images
import MintPageDesktopBackground from "../assets/images/mint-page-desktop-bg.jpg";
import MintPageMobileBackground from "../assets/images/mint-page-mobile-bg.webp";
import MintPageMobileGif from "../assets/images/mint-page-mobile-gif.gif";
import MetamaskImage from "../assets/images/metamask.svg";
import WalletConnectImage from "../assets/images/walletconnect.svg";

import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  InjectedConnector
  // NoEthereumProviderError
} from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { formatEther, parseEther } from "@ethersproject/units";
import { Contract } from "@ethersproject/contracts";
import { ToastContainer, toast } from "react-toastify";

// abis
import BABPABI from "../abis/battlepunk.json";

// variables
const BABPAddress = "0x68087a38a8eEAf7c614b634eD50837de71069d47";
const transactionSuccessText = "Transaction Success";
const transactionFailText = "Transaction Fail";
const transactionRejectText = "Transaction Reject";

const Mint = () => {
  const context = useWeb3React();
  const {
    library,
    // chainId,
    account,
    activate,
    deactivate,
    active,
    error
    // connector
  } = context;

  const [isWalletModalOpen, setIsWalletModalOpen] = React.useState(false);

  const openWalletModalHandler = () => setIsWalletModalOpen(true);
  const closeWalletModalHandler = () => setIsWalletModalOpen(false);

  const connectMetamask = () => {
    const injectedConnector = new InjectedConnector({
      supportedChainIds: [1]
    });
    // activate(injectedConnector, err => {
    //   console.log("metamaskConnectErr", err);
    //   if (err instanceof NoEthereumProviderError) {
    //     window.alert("No Ethereum Provider");
    //   }
    //   else if (err instanceof UnsupportedChainIdError) {
    //     window.alert("Unsupported chainId");
    //   }
    // });
    activate(injectedConnector);
  };

  const connectWalletConnect = () => {
    const RPC_URLS = {
      1: "https://mainnet.infura.io/v3/407161c0da4c4f1b81f3cc87ca8310a7"
    };
    const walletConnectConnector = new WalletConnectConnector({
      rpc: { 1: RPC_URLS[1] },
      bridge: "https://bridge.walletconnect.org",
      qrcode: true,
      // @ts-ignore
      pollingInterval: 12000
    });
    activate(
      walletConnectConnector,
      err => {
        console.log("-err", err);
      },
      false
    ).catch(err => {
      if (err instanceof UnsupportedChainIdError) {
        activate(walletConnectConnector);
      } else {
        console.log("Pending Error Occured");
      }
    });
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  };

  const mint = async () => {
    if (getMintButtonEnabled()) {
      const BABPContract = new Contract(
        BABPAddress,
        BABPABI,
        library.getSigner()
      );

      try {
        const transaction = await BABPContract.mint(count, {
          value: parseEther((parseFloat(price) * count).toString())
        });
        const receipt = await transaction.wait();
        setTransactionPending(false);
        if (receipt.status) {
          toast.success(transactionSuccessText);
        } else {
          toast.error(transactionFailText);
        }
      } catch (ex) {
        toast.warn(transactionRejectText);
        setTransactionPending(false);
      }
    }
  };

  const getMintButtonEnabled = () => {
    if (!active) {
      return false;
    }
    if (transactionPending) {
      return false;
    }
    if (count === 0) {
      return false;
    }
    return true;
  };

  const [price, setPrice] = useState("0");
  const [totalSupply, setTotalSupply] = useState(0);
  const [maxSupply, setMaxSupply] = useState(0);
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);

  const [transactionPending, setTransactionPending] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (active && !error) {
        const BABPContract = new Contract(
          BABPAddress,
          BABPABI,
          library.getSigner()
        );
        const _price = await BABPContract.PRICE();
        setPrice(parseFloat(formatEther(_price)).toPrecision(2));

        const _maxCount = await BABPContract.MAX_BY_MINT();
        setMaxCount(_maxCount.toNumber());

        const _maxSupply = await BABPContract.MAX_SUPPLY();
        setMaxSupply(_maxSupply.toNumber());

        const _totalSupply = await BABPContract.totalSupply();
        setTotalSupply(_totalSupply.toNumber());
      }
    };
    init();
  }, [active, error, library]);

  return (
    <div className="page-mint">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Modal
        isOpen={isWalletModalOpen}
        closeModalHandler={closeWalletModalHandler}
      >
        <div
          className="component-modal__modal__item"
          onClick={() => {
            connectMetamask();
            closeWalletModalHandler();
          }}
        >
          <img
            className="component-modal__modal__item__img"
            src={MetamaskImage}
            alt="metamask"
          />
          <div className="component-modal__modal__item__text">Metamask</div>
        </div>
        <div
          className="component-modal__modal__item"
          onClick={() => {
            connectWalletConnect();
            closeWalletModalHandler();
          }}
        >
          <img
            className="component-modal__modal__item__img"
            src={WalletConnectImage}
            alt="walletconnect"
          />
          <div className="component-modal__modal__item__text">
            WalletConnect
          </div>
        </div>
      </Modal>
      <div className="page-mint__desktop__container">
        <img
          className="page-mint__desktop__container__bg"
          src={MintPageDesktopBackground}
          alt="page-mint-bg"
        />

        <div
          className="page-mint__desktop__container__connect-btn"
          onClick={() => {
            if (active) {
              disconnect();
            } else {
              openWalletModalHandler();
            }
          }}
        >
          {error instanceof UnsupportedChainIdError
            ? "Wrong NET"
            : account
            ? `${account.substring(0, 6)}...${account.substring(
                account.length - 4
              )}`
            : "Connect Wallet"}
        </div>

        <div className="page-mint__desktop__container__footer-left">
          <div>PREVIOUSE SALE</div>
          <div>SOLD</div>
          <div>1000/1000</div>
          <div>PRICE</div>
          <div>0.1ETH</div>
        </div>
        <div className="page-mint__desktop__container__footer-right">
          <div>NEXT SALE</div>
          <div>SOLD</div>
          <div>0/300</div>
          <div>PRICE</div>
          <div>0.3ETH</div>
        </div>
        <div className="page-mint__desktop__container__footer-center-1">
          MINT YOUR BATTLER
        </div>
        <div className="page-mint__desktop__container__footer-center-2">
          {active ? "CONNECT TO THE ETHEREUM" : "---"}
        </div>
        <div className="page-mint__desktop__container__footer-center-3">
          SOLD {totalSupply}/{maxSupply}
        </div>

        <div className="page-mint__desktop__container__footer-center-4">
          {active ? `${parseFloat(price) * count} ETH` : "--- ETH"}
        </div>

        <div className="page-mint__desktop__container__footer-center-5">
          {count}
        </div>

        <div
          className="page-mint__desktop__container__footer-center-arrow-left"
          onClick={() => {
            if (active && count > 0) {
              setCount(count - 1);
            }
          }}
        ></div>

        <div
          className="page-mint__desktop__container__footer-center-arrow-right"
          onClick={() => {
            if (active && count < maxCount) {
              setCount(count + 1);
            }
          }}
        ></div>

        <div
          className="page-mint__desktop__container__footer-center-6"
          onClick={mint}
        >
          {transactionPending ? "PENDING" : "MINT"}
        </div>
      </div>

      <div className="page-mint__mobile__container">
        <div className="page-mint__mobile__container__gif">
          <img src={MintPageMobileGif} alt="page-mint-mobile-gif" />
        </div>
        <img
          className="page-mint__mobile__container__bg"
          src={MintPageMobileBackground}
          alt="page-mint-bg"
        />
        <div
          className="page-mint__mobile__container__connect-btn"
          onClick={e => {
            e.preventDefault();
            console.log("kkk");
            if (active) {
              disconnect();
            } else {
              openWalletModalHandler();
            }
          }}
        >
          {error instanceof UnsupportedChainIdError
            ? "Wrong NET"
            : account
            ? `${account.substring(0, 6)}...${account.substring(
                account.length - 4
              )}`
            : "Connect Wallet"}
        </div>
        <div className="page-mint__mobile__container__gif">
          <img src={MintPageMobileGif} alt="page-mint-mobile-gif" />
        </div>
        <div className="page-mint__mobile__container__gif__mask"></div>
        <div className="page-mint__mobile__container__premium-sale">
          PREMIUM SALE
        </div>
        <div className="page-mint__mobile__container__connected-to-ethereum">
          {active ? "CONNECT TO THE ETHEREUM" : "---"}
        </div>
        <div className="page-mint__mobile__container__price">
          {active ? `${parseFloat(price) * count} ETH` : "--- ETH"}
        </div>

        <div
          className="page-mint__mobile__container__arrow-left"
          onClick={() => {
            if (active && count > 0) {
              setCount(count - 1);
            }
          }}
        ></div>
        <div
          className="page-mint__mobile__container__arrow-right"
          onClick={() => {
            if (active && count < maxCount) {
              setCount(count + 1);
            }
          }}
        ></div>

        <div className="page-mint__mobile__container__count">{count}</div>
        <div className="page-mint__mobile__container__mint-btn" onClick={mint}>
          {transactionPending ? "PENDING" : "MINT"}
        </div>
      </div>
    </div>
  );
};

export default Mint;
