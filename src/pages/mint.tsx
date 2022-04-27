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
import BattlePunkPresaleABI from "../abis/battlepunk-presale.json";

// merkleTree functions
import {
  getMerklePremiumProof,
  getMerkleBasicProof,
  getMerklePremiumRoot,
  getMerkleBasicRoot
} from "../merkletree";

// variables
const BattlePunkPresaleAddress = "0x4AEfF2921DE7ea2E404F23B1565AcF25f93f9525";
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
      supportedChainIds: [4]
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
      // 1: "https://mainnet.infura.io/v3/407161c0da4c4f1b81f3cc87ca8310a7",
      4: "https://rinkeby.infura.io/v3/407161c0da4c4f1b81f3cc87ca8310a7"
    };
    const walletConnectConnector = new WalletConnectConnector({
      rpc: { 4: RPC_URLS[4] },
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

  const deposit = async () => {
    if (getDepositButtonEnabled()) {
      const BattlePunkPresaleContract = new Contract(
        BattlePunkPresaleAddress,
        BattlePunkPresaleABI,
        library.getSigner()
      );

      try {
        let merkleProof;

        if (tier === 2) {
          merkleProof = getMerklePremiumProof(account);
        } else if (tier === 1) {
          merkleProof = getMerkleBasicProof(account);
        } else {
          merkleProof = "";
        }

        console.log('merkleProof', merkleProof);

        const transaction = await BattlePunkPresaleContract.deposit(
          merkleProof,
          {
            value: parseEther((parseFloat(price) * count).toString())
          }
        );
        const receipt = await transaction.wait();
        setTransactionPending(false);
        if (receipt.status) {
          toast.success(transactionSuccessText);
          const _saledCount = await BattlePunkPresaleContract.saledCount()
          setSaledCount(_saledCount.toNumber());
          setCount(0);
        } else {
          toast.error(transactionFailText);
        }
      } catch (ex) {
        toast.warn(transactionRejectText);
        setTransactionPending(false);
      }
    }
  };

  const getDepositButtonEnabled = () => {
    if (!active) {
      return false;
    }
    if (transactionPending) {
      return false;
    }
    if (count === 0) {
      return false;
    }
    if (
      step === 0 ||
      (step === 1 && tier !== 2) ||
      (step === 2 && tier === 0)
    ) {
      return false;
    }
    return true;
  };

  const getTierLevelText = () => {
    if (tier === 0) {
      return "YOU ARE NOT IN WHITELIST";
    } else if (tier === 1) {
      return "YOU ARE IN BASIC-WHITELIST";
    } else {
      return "YOU ARE IN PREMIUM-WHITELIST";
    }
  };

  const getStepText = () => {
    if (step === 0) {
      return "SALE NOT ACTIVE";
    } else if (step === 1) {
      return "PREMIUM SALE";
    } else if (step === 2) {
      return "BASIC SALE";
    } else {
      return "OPEN SALE";
    }
  };

  const [price, setPrice] = useState("0");
  const [count, setCount] = useState(0);
  const [saledCount, setSaledCount] = useState(0);
  const [saledCountLimit, setSaledCountLimit] = useState(0);
  const [step, setStep] = useState(0);
  const [tier, setTier] = useState(0);
  const [tierMaxLimit, setTierMaxLimit] = useState(0);
  const [myContribution, setMyContribution] = useState(0);

  const [transactionPending, setTransactionPending] = useState(false);

  useEffect(() => {
    const init = async () => {
      setCount(0);
      if (active && !error) {
        const BattlePunkPresaleContract = new Contract(
          BattlePunkPresaleAddress,
          BattlePunkPresaleABI,
          library.getSigner()
        );
        const _price = await BattlePunkPresaleContract.price();
        setPrice(parseFloat(formatEther(_price)).toPrecision(2));

        const _saledCountLimit = await BattlePunkPresaleContract.saledCountLimit();
        setSaledCountLimit(_saledCountLimit.toNumber());

        const _saledCount = await BattlePunkPresaleContract.saledCount();
        setSaledCount(_saledCount.toNumber());

        const _step = await BattlePunkPresaleContract.step();
        setStep(_step);

        const _isPremiumUser = await BattlePunkPresaleContract.isPremiumUser(
          getMerklePremiumProof(account)
        );
        const _isBasicUser = await BattlePunkPresaleContract.isBasicUser(
          getMerkleBasicProof(account)
        );

        // merkleRoots for premium and basic
        const _merklePremiumRoot = getMerklePremiumRoot();
        const _merkleBasicRoot = getMerkleBasicRoot();
        console.log("merklePremiumRoot", _merklePremiumRoot);
        console.log("merkleBasicRoot", _merkleBasicRoot);

        const _premiumMaxLimit = await BattlePunkPresaleContract.premiumMaxLimit();
        const _basicMaxLimit = await BattlePunkPresaleContract.basicMaxLimit();
        const _openMaxLimit = await BattlePunkPresaleContract.openMaxLimit();
        if (_isPremiumUser) {
          setTier(2);
          setTierMaxLimit(_premiumMaxLimit);
        } else if (_isBasicUser) {
          setTier(1);
          setTierMaxLimit(_basicMaxLimit);
        } else {
          setTier(0);
          setTierMaxLimit(_openMaxLimit);
        }

        const _myContribution = await BattlePunkPresaleContract.contribution(
          account
        );
        setMyContribution(_myContribution.toNumber());
      }
    };
    init();
  }, [active, error, library, account]);

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
          <div>PREVIOUS SALE</div>
          <div>SOLD</div>
          <div>1123/1123</div>
          <div>PRICE</div>
          <div>0.1ETH</div>
        </div>
        <div className="page-mint__desktop__container__footer-right">
          <div>NEXT SALE</div>
          <div>SOLD</div>
          <div>{saledCount}/8877</div>
          <div>PRICE</div>
          <div>{parseFloat(price)}ETH</div>
        </div>
        <div className="page-mint__desktop__container__footer-center-1">
          {active ? getStepText() : "---"}
        </div>
        <div className="page-mint__desktop__container__footer-center-2">
          {active ? getTierLevelText() : "CONNECT TO THE ETHEREUM"}
        </div>
        <div className="page-mint__desktop__container__footer-center-3">
          SOLD {saledCount} / {saledCountLimit}
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
            if (active && count + myContribution < tierMaxLimit) {
              setCount(count + 1);
            }
          }}
        ></div>

        <div
          className="page-mint__desktop__container__footer-center-6"
          onClick={deposit}
          style={{
            cursor: getDepositButtonEnabled() ? "pointer" : "not-allowed",
          }}
        >
          {transactionPending ? "PENDING" : "DEPOSIT"}
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
          {active ? getStepText() : "---"}
        </div>
        <div className="page-mint__mobile__container__connected-to-ethereum">
          {active ? getTierLevelText() : "CONNECT TO THE ETHEREUM"}
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
            if (active && count + myContribution < tierMaxLimit) {
              setCount(count + 1);
            }
          }}
        ></div>

        <div className="page-mint__mobile__container__count">{count}</div>
        <div
          className="page-mint__mobile__container__mint-btn"
          onClick={deposit}
        >
          {transactionPending ? "PENDING" : "MINT"}
        </div>
      </div>
    </div>
  );
};

export default Mint;
