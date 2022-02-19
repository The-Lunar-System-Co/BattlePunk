import React, { useState } from "react";
import RouterLink from "./router-link";

const Header = () => {
  const [isMobileDropDownOpen, setIsMobileDropDownOpen] = useState(false);

  return (
    <div className="component-header">
      <div className="component-header__left">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/mint">Mint</RouterLink>
        <RouterLink to="/" tooltip="Coming Soon">
          PunkyDex
        </RouterLink>
        <RouterLink to="/" tooltip="Under Construction">
          ArenaMarket
        </RouterLink>
        <RouterLink
          to="/"
          tooltip="Coming Soon: See Battle Paper For Planeed Release Date"
        >
          Play
        </RouterLink>
      </div>
      <div className="component-header__right">
        <RouterLink to="/">$LSD</RouterLink>
        <RouterLink to="/" tooltip="Coming Very Soon">
          Punkon
        </RouterLink>
        <RouterLink to="/">BattlePaper</RouterLink>
        <RouterLink to="/" tooltip="Coming Soon">
          FAQ
        </RouterLink>
        <RouterLink
          to="/"
          tooltip="Coming Soon: Email us at info@lunarsystem.co about partnership inquires"
        >
          Partners
        </RouterLink>
      </div>
      <div
        className="component-header__mobile-nav"
        style={{ maxHeight: isMobileDropDownOpen ? "100vh" : "0px" }}
      >
        <div className="component-header__mobile-nav__item">Home</div>
        <div className="component-header__mobile-nav__item">Mint</div>
        <div className="component-header__mobile-nav__item">PunkyDex</div>
        <div className="component-header__mobile-nav__item">ArenaMarket</div>
        <div className="component-header__mobile-nav__item">Play</div>
        <div className="component-header__mobile-nav__item">$LSD</div>
        <div className="component-header__mobile-nav__item">Punkon</div>
        <div className="component-header__mobile-nav__item">BattlePaper</div>
        <div className="component-header__mobile-nav__item">Faq</div>
        <div className="component-header__mobile-nav__item">Partners</div>
      </div>
      <div
        className={[
          "component-header__mobile-nav-btn",
          isMobileDropDownOpen ? "active" : ""
        ].join(" ")}
        onClick={() => setIsMobileDropDownOpen(!isMobileDropDownOpen)}
      >
        <span className="component-header__mobile-nav-btn__bar" />
        <span className="component-header__mobile-nav-btn__bar" />
        <span className="component-header__mobile-nav-btn__bar" />
      </div>
    </div>
  );
};

export default Header;
