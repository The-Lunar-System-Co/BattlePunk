import React from "react";

// components
import HyperLink from "../components/hyper-link";

// images
import HeroMain from "../assets/images/landing-header-main.webp";
import Left1Hero from "../assets/images/landing-header-left-1.webp";
import Left2Hero from "../assets/images/landing-header-left-2.webp";
import Right1Hero from "../assets/images/landing-header-right-1.webp";
import Right2Hero from "../assets/images/landing-header-right-2.webp";

import BodyBorder from "../assets/images/landing-page-body-border.webp";
import Content1 from "../assets/images/landing-page-body-content-1.webp";
import Content2 from "../assets/images/landing-page-body-content-2.webp";
import Content3 from "../assets/images/landing-page-body-content-3.webp";
import Content5 from "../assets/images/landing-page-body-content-5.webp";
import Scroll from "../assets/images/landing-page-body-content-3-scroll.png";
import FooterBg from "../assets/images/punkon.png";

// mobile images
import Hero0 from "../assets/images/mobile-home/hero-0.webp";
import Hero1 from "../assets/images/mobile-home/hero-1.webp";
import Hero2 from "../assets/images/mobile-home/hero-2.webp";
import Hero3 from "../assets/images/mobile-home/hero-3.webp";
import Hero4 from "../assets/images/mobile-home/hero-4.webp";
import Section1 from "../assets/images/mobile-home/section-1.webp";
import Section2 from "../assets/images/mobile-home/section-2.webp";
import Section3 from "../assets/images/mobile-home/section-3.webp";
import Section4 from "../assets/images/mobile-home/section-4.webp";
import Section5 from "../assets/images/mobile-home/section-5.webp";
import Section6 from "../assets/images/mobile-home/section-6.webp";
import Section7 from "../assets/images/mobile-home/section-7.webp";
import Section8 from "../assets/images/mobile-home/section-8.webp";
import Section9 from "../assets/images/mobile-home/section-9.webp";
import Section10 from "../assets/images/mobile-home/section-10.webp";
import Section11 from "../assets/images/mobile-home/section-11.webp";
import PlayIcon from "../assets/images/mobile-home/play.png";

const Landing: React.FC = () => {
  return (
    <>
      <div className="page-landing">
        <div className="page-landing__header">
          <div className="page-landing__header__container">
            <img
              className="page-landing__header__container__main"
              src={HeroMain}
              alt="page-landing-header-main"
            />
            <div className="page-landing__header__container__other-heroes">
              <img
                src={Left1Hero}
                className="page-landing__header__container__other-heroes__left-1"
                alt="page-landing-header-left-1"
              />
              <img
                src={Left2Hero}
                className="page-landing__header__container__other-heroes__left-2"
                alt="page-landing-header-left-2"
              />
              <img
                src={Right1Hero}
                className="page-landing__header__container__other-heroes__right-1"
                alt="page-landing-header-right-1"
              />
              <img
                src={Right2Hero}
                className="page-landing__header__container__other-heroes__right-2"
                alt="page-landing-header-right-2"
              />
            </div>
          </div>
        </div>

        <div className="page-landing__body">
          <div className="page-landing__body__contents">
            <div className="page-landing__body__contents__content-1">
              <img src={Content1} alt="content-1" />
              <div className="page-landing__body__contents__content-1__container">
                <div className="page-landing__body__contents__content-1__container__social-group">
                  <HyperLink
                    href="https://discord.gg/battlepunkarena/"
                    className="page-landing__body__contents__content-1__container__social-group__social-1"
                  />
                  <HyperLink
                    href="https://www.instagram.com/battlepunkarena/"
                    className="page-landing__body__contents__content-1__container__social-group__social-2"
                  />
                  <HyperLink
                    href="https://twitter.com/BattlepunkNFT/"
                    className="page-landing__body__contents__content-1__container__social-group__social-3"
                  />
                  <HyperLink
                    href="https://opensea.io/"
                    className="page-landing__body__contents__content-1__container__social-group__social-4"
                  />
                </div>
              </div>
            </div>
            <div className="page-landing__body__contents__content-2">
              <img src={Content2} alt="content-1" />
              <div className="page-landing__body__contents__content-2__container">
                <div>OVER 350 BREEDS OF GENESIS PUNKIES</div>
                <div>EARN CRYPTO IN EPIC P2E BATTLES</div>
                <div>BE THE FIRST TO DISCOVER NEW RARE BREEDS</div>
              </div>
            </div>
            <div className="page-landing__body__contents__content-3">
              <img src={Content3} alt="content-1" />
            </div>
            <video
              className="page-landing__body__contents__content-4"
              autoPlay
              loop
              muted
              width="100%"
              height="100%"
            >
              <source
                src="/assets/videos/landing-page-1.mp4"
                type="video/mp4"
              />
            </video>
            <div className="page-landing__body__contents__content-5">
              <img src={Content5} alt="content-5" />
              <div className="page-landing__body__contents__content-5__container">
                <div className="">EXPLORE</div>
                <div className="">COLLECT</div>
                <div className="">BREED</div>
                <div className="">BATTLE</div>
              </div>
            </div>
            <video
              className="page-landing__body__contents__content-6"
              autoPlay
              loop
              muted
              width="100%"
            >
              <source
                src="/assets/videos/landing-page-2.mp4"
                type="video/mp4"
              />
            </video>
            <div className="page-landing__body__contents__border">
              <img src={BodyBorder} alt="content-1" />
            </div>
            <div className="page-landing__body__contents__scroll">
              <img src={Scroll} alt="scroll" />
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
              href="https://twitter.com/BattlepunkNFT/"
              className="footer__social-icons__social-3"
            />
            <HyperLink
              href="https://opensea.io/"
              className="footer__social-icons__social-4"
            />
          </div>
        </div>
      </div>

      <div className="page-landing-mobile">
        <div className="page-landing-mobile__header">
          <div className="page-landing-mobile__header__hero-0">
            <img src={Hero0} alt="mobile-hero-0" />
          </div>
          <div className="page-landing-mobile__header__hero-1">
            <img src={Hero1} alt="mobile-hero-0" />
          </div>
          <div className="page-landing-mobile__header__hero-2">
            <img src={Hero2} alt="mobile-hero-0" />
          </div>
          <div className="page-landing-mobile__header__hero-3">
            <img src={Hero3} alt="mobile-hero-0" />
          </div>
          <div className="page-landing-mobile__header__hero-4">
            <img src={Hero4} alt="mobile-hero-0" />
          </div>
        </div>
        <div className="page-landing-mobile__section-1">
          <img src={Section1} alt="page-landing-mobile-section-1" />
          <div className="page-landing-mobile__section-1__title">
            JOIN THE BATTLE
          </div>
          <div className="page-landing-mobile__section-1__text">
            the battlepunks are a collection of 10,000 galactic hero nfts at the
            heart of the battlepunk arena trading card game.
            <br />
            <br /> get your battlepunk to gain early access to the game, as well
            as exclusive access to drops, events, and other benefits within the
            battlepunk arena ecosystem.
          </div>
          <div className="page-landing-mobile__section-1__mint-btn"></div>
          <div className="page-landing-mobile__section-1__social-icons">
            <div className="page-landing-mobile__section-1__social-icons__1"></div>
            <div className="page-landing-mobile__section-1__social-icons__2"></div>
            <div className="page-landing-mobile__section-1__social-icons__3"></div>
            <div className="page-landing-mobile__section-1__social-icons__4"></div>
            <div className="page-landing-mobile__section-1__social-icons__5"></div>
          </div>
        </div>

        <div className="page-landing-mobile__section-2">
          <img src={Section2} alt="page-landing-mobile-section-2" />
          <div className="page-landing-mobile__section-2__text">
            the battlepunks are a collection of 10,000 galactic hero nfts at the
          </div>
        </div>

        <div className="page-landing-mobile__section-3">
          <img src={Section3} alt="page-landing-mobile-section-3" />
          <div className="page-landing-mobile__section-3__text">
            the battlepunks are a collection of 10,000 galactic hero nfts at the
          </div>
        </div>

        <div className="page-landing-mobile__section-4">
          <img src={Section4} alt="page-landing-mobile-section-4" />
          <div className="page-landing-mobile__section-4__text">
            the battlepunks are a collection of 10,000 galactic hero nfts at the
          </div>
        </div>

        <div className="page-landing-mobile__section-5">
          <img src={Section5} alt="page-landing-mobile-section-4" />
          <div className="page-landing-mobile__section-5__scroll">
            <img src={Scroll} alt="page-landing-mobile-section-5-scroll" />
          </div>
        </div>

        <div className="page-landing-mobile__section-6">
          <img src={Section6} alt="page-landing-mobile-section-6" />
        </div>

        <div className="page-landing-mobile__section-7">
          <img src={Section7} alt="page-landing-mobile-section-7" />
          <div className="page-landing-mobile__section-7__text">EXPLORE</div>
        </div>

        <div className="page-landing-mobile__section-8">
          <img src={Section8} alt="page-landing-mobile-section-8" />
          <div className="page-landing-mobile__section-8__text">COLLECT</div>
        </div>

        <div className="page-landing-mobile__section-9">
          <img src={Section9} alt="page-landing-mobile-section-9" />
          <div className="page-landing-mobile__section-9__text">BREED</div>
        </div>

        <div className="page-landing-mobile__section-10">
          <img src={Section10} alt="page-landing-mobile-section-10" />
          <div className="page-landing-mobile__section-10__text">BATTLE</div>
        </div>

        <div className="page-landing-mobile__section-11">
          <img src={Section11} alt="page-landing-mobile-section-11" />
          <a
            className="page-landing-mobile__section-11__video"
            href="https://youtu.be/ND6tcgTmU-c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={PlayIcon} alt="page-landing-mobile-section-11-video" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
