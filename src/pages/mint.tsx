import React from "react";

// components
import Header from "../components/header";
import Modal from "../components/modal";

// images
import MintPageDesktopBackground from "../assets/images/mint-page-desktop-bg.jpg";
import MintPageMobileBackground from "../assets/images/mint-page-mobile-bg.webp";
import MintPageMobileGif from "../assets/images/mint-page-mobile-gif.gif";
import MetamaskImage from "../assets/images/metamask.svg";
import WalletConnectImage from "../assets/images/walletconnect.svg";

import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  InjectedConnector,
  NoEthereumProviderError
} from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import { formatEther, parseEther } from "@ethersproject/units";
// import { Contract } from "@ethersproject/contracts";

const Mint = () => {
  const context = useWeb3React();
  const {
    // library,
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
      supportedChainIds: [1, 3, 4]
    });
    activate(injectedConnector, err => {
      console.log("metamaskConnectErr", err);
      if (err instanceof NoEthereumProviderError) {
        window.alert("No Ethereum Provider");
      }
    });
  };

  const connectWalletConnect = () => {
    const RPC_URLS = {
      1: "https://mainnet.infura.io/v3/407161c0da4c4f1b81f3cc87ca8310a7",
      4: "https://rinkeby.infura.io/v3/407161c0da4c4f1b81f3cc87ca8310a7"
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

  return (
    <div className="page-mint">
      <Header />
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
          CONNECT TO THE ETHEREUM
        </div>
        <div className="page-mint__desktop__container__footer-center-3">
          SOLD 206/500
        </div>
        <div className="page-mint__desktop__container__footer-center-4">
          0.15ETH
        </div>
        <div className="page-mint__desktop__container__footer-center-5">3</div>
        <div className="page-mint__desktop__container__footer-center-6">
          MINT
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
        <div className="page-mint__mobile__container__gif">
          <img src={MintPageMobileGif} alt="page-mint-mobile-gif" />
        </div>
        <div className="page-mint__mobile__container__gif__mask">
        </div>
        <div className="page-mint__mobile__container__premium-sale">
          PREMIUM SALE
        </div>
        <div className="page-mint__mobile__container__connected-to-ethereum">
          CONNECTED TO ETHEREUM
        </div>
        <div className="page-mint__mobile__container__price">0.15ETH</div>
        <div className="page-mint__mobile__container__id">3</div>
        <div className="page-mint__mobile__container__mint-btn">MINT</div>
      </div>
    </div>
  );
};

export default Mint;
