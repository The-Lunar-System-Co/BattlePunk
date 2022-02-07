import React from "react";

const Header = () => {
  return (
    <div className="component-header">
      <div className="component-header__left">
        <div>Home</div>
        <div>Mint</div>
        <div>PunkyDex</div>
        <div>ArenaMarket</div>
        <div>Play</div>
      </div>
      <div className="component-header__right">
        <div>$LSD</div>
        <div>Punkon</div>
        <div>BattlePaper</div>
        <div>FAQ</div>
        <div>Parners</div>
      </div>
      <div className="component-header__mobile-bar-icon"></div>
    </div>
  );
};

export default Header;
