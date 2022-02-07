import React from "react";

// components
import Header from "../components/header";
import HyperLink from "../components/hyper-link";

// images
import HeaderHeroes from "../assets/images/landing-page-header.webp";
import BodyBorder from "../assets/images/landing-page-body-border.webp";
import Content1 from "../assets/images/landing-page-body-content-1.webp";
import Content2 from "../assets/images/landing-page-body-content-2.webp";
import Content3 from "../assets/images/landing-page-body-content-3.webp";
import Content5 from "../assets/images/landing-page-body-content-5.webp";
import Scroll from "../assets/images/landing-page-body-content-3-scroll.webp";

const Landing: React.FC = () => {
  return (
    <div className="page-landing">
      <Header />
      <div className="page-landing__header">
        <img src={HeaderHeroes} alt="page-landing-header" />
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
            <div className="page-landing__body__contents__content-3__container">
              <img src={Scroll} alt="scroll" />
            </div>
          </div>
          <video
            className="page-landing__body__contents__content-4"
            autoPlay
            loop
            muted
            width="100%"
            height="100%"
          >
            <source src="/assets/videos/landing-page-1.mp4" type="video/mp4" />
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
            height="100%"
          >
            <source src="/assets/videos/landing-page-2.mp4" type="video/mp4" />
          </video>
          <div className="page-landing__body__contents__border">
            <img src={BodyBorder} alt="content-1" />
          </div>
        </div>
      </div>
      <div className="page-landing__footer">
        <HyperLink
          href="https://discord.gg/battlepunkarena"
          className="page-landing__footer__social-1"
        />
        <HyperLink
          href="https://www.instagram.com/battlepunkarena/"
          className="page-landing__footer__social-2"
        />
        <HyperLink
          href="https://twitter.com/BattlepunkNFT/"
          className="page-landing__footer__social-3"
        />
        <HyperLink
          href="https://opensea.io/"
          className="page-landing__footer__social-4"
        />
      </div>
    </div>
  );
};

export default Landing;
