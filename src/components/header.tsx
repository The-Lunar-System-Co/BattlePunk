import React, { useState } from "react";
import DesktopNavItem from "./desktop-nav-item";
import MobileNavItem from "./mobile-nav-item";

const Header = () => {
  const [isMobileDropDownOpen, setIsMobileDropDownOpen] = useState(false);

  return (
    <div className="component-header">
      <div className="component-header__left">
        <DesktopNavItem to="/">Home</DesktopNavItem>
        <DesktopNavItem to="/mint">Mint</DesktopNavItem>
        <DesktopNavItem to="/" tooltip="Coming Soon">
          PunkyDex
        </DesktopNavItem>
        <DesktopNavItem to="/" tooltip="Under Construction">
          ArenaMarket
        </DesktopNavItem>
        <DesktopNavItem
          to="/"
          tooltip="Coming Soon: See Battle Paper For Planeed Release Date"
        >
          Play
        </DesktopNavItem>
      </div>
      <div className="component-header__right">
        <DesktopNavItem to="/lsd">$LSD</DesktopNavItem>
        <DesktopNavItem to="/" tooltip="Coming Very Soon">
          Punkon
        </DesktopNavItem>
        <DesktopNavItem to="/">BattlePaper</DesktopNavItem>
        <DesktopNavItem to="/" tooltip="Coming Soon">
          FAQ
        </DesktopNavItem>
        <DesktopNavItem
          to="/"
          tooltip="Coming Soon: Email us at info@lunarsystem.co about partnership inquires"
        >
          Partners
        </DesktopNavItem>
      </div>
      <div
        className="component-header__mobile-nav"
        style={{ maxHeight: isMobileDropDownOpen ? "100vh" : "0px" }}
      >
        <MobileNavItem>Home</MobileNavItem>
        <MobileNavItem>Mint</MobileNavItem>
        <MobileNavItem isComingSoon>PunkyDex</MobileNavItem>
        <MobileNavItem isComingSoon>ArenaMarket</MobileNavItem>
        <MobileNavItem isComingSoon>Play</MobileNavItem>
        <MobileNavItem>$LSD</MobileNavItem>
        <MobileNavItem isComingSoon>Punkon</MobileNavItem>
        <MobileNavItem>BattlePaper</MobileNavItem>
        <MobileNavItem isComingSoon>Faq</MobileNavItem>
        <MobileNavItem isComingSoon>Partners</MobileNavItem>
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
