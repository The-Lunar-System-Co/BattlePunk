import React, { useState } from "react";
import DesktopNavItem from "./desktop-nav-item";
import MobileNavItem from "./mobile-nav-item";

const Header = () => {
  const [isMobileDropDownOpen, setIsMobileDropDownOpen] = useState(false);

  return (
    <div className="component-header">
      <div className="component-header__left">
        <DesktopNavItem to="/">Home</DesktopNavItem>
        <DesktopNavItem
          to="https://battlepunkarena.typeform.com/Whitelist"
          isHyperLink
        >
          Whitelist
        </DesktopNavItem>
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
        <DesktopNavItem
          to="https://s3.eu-central-1.amazonaws.com/lunarsystem.co/Battlepaper.pdf"
          isHyperLink
        >
          BattlePaper
        </DesktopNavItem>
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
        <div className="component-header__mobile-nav__logo">Menu</div>
        <MobileNavItem to="/" setIsMobileDropDownOpen={setIsMobileDropDownOpen}>
          Home
        </MobileNavItem>
        <MobileNavItem
          to="https://battlepunkarena.typeform.com/Whitelist"
          isHyperLink
          setIsMobileDropDownOpen={setIsMobileDropDownOpen}
        >
          Whitelist
        </MobileNavItem>
        <MobileNavItem
          isComingSoon
          to="/"
          setIsMobileDropDownOpen={setIsMobileDropDownOpen}
        >
          PunkyDex
        </MobileNavItem>
        <MobileNavItem
          isComingSoon
          to="/"
          setIsMobileDropDownOpen={setIsMobileDropDownOpen}
        >
          ArenaMarket
        </MobileNavItem>
        <MobileNavItem
          isComingSoon
          to="/"
          setIsMobileDropDownOpen={setIsMobileDropDownOpen}
        >
          Play
        </MobileNavItem>
        <MobileNavItem
          to="/lsd"
          setIsMobileDropDownOpen={setIsMobileDropDownOpen}
        >
          $LSD
        </MobileNavItem>
        <MobileNavItem
          isComingSoon
          to="/"
          setIsMobileDropDownOpen={setIsMobileDropDownOpen}
        >
          Punkon
        </MobileNavItem>
        <MobileNavItem
          to="https://s3.eu-central-1.amazonaws.com/lunarsystem.co/Battlepaper.pdf"
          isHyperLink
          setIsMobileDropDownOpen={setIsMobileDropDownOpen}
        >
          BattlePaper
        </MobileNavItem>
        <MobileNavItem
          isComingSoon
          to="/"
          setIsMobileDropDownOpen={setIsMobileDropDownOpen}
        >
          Faq
        </MobileNavItem>
        <MobileNavItem
          isComingSoon
          to="/"
          setIsMobileDropDownOpen={setIsMobileDropDownOpen}
        >
          Partners
        </MobileNavItem>
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
