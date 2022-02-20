import React from "react";

// components
import Header from "../components/header";

// images
import MintPageBackground from "../assets/images/ming-page-bg.webp";
import MintPageHeaderBackground from "../assets/images/mint-page-header.webp";

const Mint = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = React.useState(true);

  const openWalletModalHandler = () => setIsWalletModalOpen(true);
  // const closeWalletModalHandler = () => setIsWalletModalOpen(false);
  return (
    <div className="page-mint">
      <Header />
      <div className="page-mint__container">
        {isWalletModalOpen && (
          <img
            className="page-mint__container__bg"
            src={MintPageBackground}
            alt="page-mint-bg"
          />
        )}
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
          onClick={openWalletModalHandler}
        >
          Connect Wallet
        </div>
        <div className="page-mint__header__back-nft"></div>
        <div className="page-mint__header__current-nft"></div>
        <div className="page-mint__header__next-nft"></div>
      </div>
    </div>
  );
};

export default Mint;
