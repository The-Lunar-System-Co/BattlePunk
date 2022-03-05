import React from "react";

// components
import HyperLink from "../components/hyper-link";

// images
import PanelImage from "../assets/images/lsd-page-panel.png";
import CoinImage from "../assets/images/lsd-page-coin.png";
import HoloImage from "../assets/images/lsd-page-body-bg.webp";
import DiagramImage from "../assets/images/lsd-page-body-diagram.png";
import CommunityImage from "../assets/images/lsd-page-body-community.png";
import PlayImage from "../assets/images/lsd-page-body-play.png";
import GovernanceImage from "../assets/images/lsd-page-body-governance.png";
import PieChartImage from "../assets/images/lsd-page-body-piechart.png";
import FooterBg from "../assets/images/punkon.png";

const LSD = () => {
  return (
    <div className="page-lsd">
      <div className="container">
        <div className="page-lsd__header">
          <div className="page-lsd__header__panel">
            <img src={PanelImage} alt="page-lsd-header-panel" />
            <div className="page-lsd__header__panel__container">
              <div className="page-lsd__header__panel__container__text">
                The ERC-20 token at the heart of the Lunar Ecosystem.
              </div>
            </div>
          </div>

          <div className="page-lsd__header__coin">
            <img src={CoinImage} alt="page-lsd-header-coin" />
          </div>
        </div>

        <div className="page-lsd__body">
          <img className="page-lsd__body__bg" src={HoloImage} alt="page-lsd-body" />
          <div className="page-lsd__body__container">
            <div className="page-lsd__body__container__1">
              <div className="page-lsd__body__container__1__left">
                <div className="page-lsd__body__container__1__left__title">
                  POWERING THE LUNAR SYSTEM
                </div>
                <div className="page-lsd__body__container__1__left__underline"></div>
                <div className="page-lsd__body__container__1__left__text">
                  LSD is designed by The Lunar System Company as a powerful
                  utility token. Holders can utilize it to buy and sell digital
                  assets within the Lunar Ecosystem, as well as earning
                  dividends in P2E Gameplay. Holders of Battlepunk NFT's can
                  earn Lunar System Dollar passively through ingame farming and
                  holder rewards.
                </div>
              </div>
              <div className="page-lsd__body__container__1__right">
                <img src={DiagramImage} alt="page-lsd-body-diagram" />
              </div>
            </div>

            <div className="page-lsd__body__container__2">
              <div className="page-lsd__body__container__2__community">
                <img src={CommunityImage} alt="page-lsd-body-community" />
                <div className="page-lsd__body__container__2__community__title">
                  Community
                </div>
              </div>
              <div className="page-lsd__body__container__2__play">
                <img src={PlayImage} alt="page-lsd-body-play" />
                <div className="page-lsd__body__container__2__community__title">
                  Play
                </div>
              </div>
              <div className="page-lsd__body__container__2__governance">
                <img src={GovernanceImage} alt="page-lsd-body-governance" />
                <div className="page-lsd__body__container__2__community__title">
                  Governance
                </div>
              </div>
            </div>

            <div className="page-lsd__body__container__3">
              <div className="page-lsd__body__container__3__left">
                <img src={PieChartImage} alt="page-lsd-body-piechart" />
              </div>
              <div className="page-lsd__body__container__3__right">
                <div className="page-lsd__body__container__3__right__title">
                  $LSD distribution
                </div>
                <div className="page-lsd__body__container__3__right__underline"></div>
                <div className="page-lsd__body__container__3__right__text">
                  LSD has a maximum suppy of 300,000,000 tokens however, the
                  initial circulating supply is set to 75,000,000 LSD - 25% of
                  the total supply. LSD will be unlocked in a pre-determined
                  schedule which lasts for 64 months from the public sale.
                </div>
              </div>
            </div>

            <div className="page-lsd__body__container__4">
              <div className="page-lsd__body__container__4__initial-supply">
                <div className="page-lsd__body__container__4__initial-supply__value">
                  75,000.00
                </div>
                <div className="page-lsd__body__container__4__initial-supply__title">
                  Initial Supply
                </div>
              </div>
              <div className="page-lsd__body__container__4__sale-price">
                <div className="page-lsd__body__container__4__sale-price__value">
                  $0.50
                </div>
                <div className="page-lsd__body__container__4__sale-price__title">
                  Public Sale Price
                </div>
              </div>
              <div className="page-lsd__body__container__4__total-supply">
                <div className="page-lsd__body__container__4__total-supply__value">
                  300,000.00
                </div>
                <div className="page-lsd__body__container__4__total-supply__title">
                  Total Supply
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <img className="footer__bg" src={FooterBg} alt="footer__bg" />
        <div className="footer__social-icons">
          <HyperLink
            href="https://discord.gg/battlepunkarena"
            className="footer__social-icons__social-1"
          />
          <HyperLink
            href="https://www.instagram.com/battlepunkarena/"
            className="footer__social-icons__social-2"
          />
          <HyperLink
            href="https://twitter.com/BattlepunkTCG/"
            className="footer__social-icons__social-3"
          />
          <HyperLink
            href="https://opensea.io/collection/battlepunk-arena-battlepunk"
            className="footer__social-icons__social-4"
          />
        </div>
      </div>
    </div>
  );
};

export default LSD;
