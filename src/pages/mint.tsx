import React from "react";

// components
import Header from "../components/header";
import Modal from "../components/modal";

// images
import MintPageBackground from "../assets/images/ming-page-bg.webp";
import MintPageHeaderBackground from "../assets/images/mint-page-header.webp";
import MetamaskImage from "../assets/images/metamask.svg";
import WalletConnectImage from "../assets/images/walletconnect.svg";

import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
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
  } = context;

  const [isWalletModalOpen, setIsWalletModalOpen] = React.useState(false);

  const openWalletModalHandler = () => setIsWalletModalOpen(true);
  const closeWalletModalHandler = () => setIsWalletModalOpen(false);

  const connectMetamask = () => {
    const injected = new InjectedConnector({
      supportedChainIds: [1, 3, 4]
    });
    try {
      activate(injected);
    } catch (ex) {
      console.log(ex);
    }
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
        <div className="component-modal__modal__item" onClick={() => {
          connectMetamask();
          closeWalletModalHandler();
        }}>
          <img
            className="component-modal__modal__item__img"
            src={MetamaskImage}
            alt="metamask"
          />
          <div className="component-modal__modal__item__text">Metamask</div>
        </div>
        <div className="component-modal__modal__item">
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
      <div className="page-mint__container">
        <img
          className="page-mint__container__bg"
          src={MintPageBackground}
          alt="page-mint-bg"
        />
        <div className="page-mint__container__footer-left">
          <div>PREVIOUSE SALE</div>
          <div>SOLD</div>
          <div>1000/1000</div>
          <div>PRICE</div>
          <div>0.1ETH</div>
        </div>
        <div className="page-mint__container__footer-right">
          <div>NEXT SALE</div>
          <div>SOLD</div>
          <div>0/300</div>
          <div>PRICE</div>
          <div>0.3ETH</div>
        </div>
        <div className="page-mint__container__footer-center-1">
          MINT YOUR BATTLER
        </div>
        <div className="page-mint__container__footer-center-2">
          CONNECT TO THE ETHEREUM
        </div>
        <div className="page-mint__container__footer-center-3">
          SOLD 206/500
        </div>
        <div className="page-mint__container__footer-center-4">0.15ETH</div>
        <div className="page-mint__container__footer-center-5">3</div>
        <div className="page-mint__container__footer-center-6">MINT</div>
      </div>
      <div className="page-mint__header">
        <img
          className="page-mint__header__bg"
          src={MintPageHeaderBackground}
          alt="page-mint-header-bg"
        />
        <div
          className="page-mint__header__connect-btn"
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
        <div className="page-mint__header__back-nft"></div>
        <div className="page-mint__header__current-nft"></div>
        <div className="page-mint__header__next-nft"></div>
      </div>
    </div>
  );
};

export default Mint;
