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
        <RouterLink to="/lsd">$LSD</RouterLink>
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
        <div className="component-header__mobile-nav__item">
          <div>Home</div>
          <div></div>
        </div>
        <div className="component-header__mobile-nav__item">
          <div>Mint</div>
          <div></div>
        </div>
        <div className="component-header__mobile-nav__item">
          <div>PunkyDex</div>
          <div>Coming Soon</div>
        </div>
        <div className="component-header__mobile-nav__item">
          <div>ArenaMarket</div>
          <div>Coming Soon</div>
        </div>
        <div className="component-header__mobile-nav__item">
          <div>Play</div>
          <div>Coming Soon</div>
        </div>
        <div className="component-header__mobile-nav__item">
          <div>$LSD</div>
          <div></div>
        </div>
        <div className="component-header__mobile-nav__item">
          <div>Punkon</div>
          <div>Coming Soon</div>
        </div>
        <div className="component-header__mobile-nav__item">
          <div>BattlePaper</div>
          <div></div>
        </div>
        <div className="component-header__mobile-nav__item">
          <div>Faq</div>
          <div>Coming Soon</div>
        </div>
        <div className="component-header__mobile-nav__item">
          <div>Partners</div>
          <div>Coming Soon</div>
        </div>
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
