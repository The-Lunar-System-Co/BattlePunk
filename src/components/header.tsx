import React from "react";
import RouterLink from './router-link';

const Header = () => {
  return (
    <div className="component-header">
      <div className="component-header__left">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/mint">Mint</RouterLink>
        <RouterLink to="/">PunkyDex</RouterLink>
        <RouterLink to="/">ArenaMarket</RouterLink>
        <RouterLink to="/">Play</RouterLink>
      </div>
      <div className="component-header__right">
        <RouterLink to="/">$LSD</RouterLink>
        <RouterLink to="/">Punkon</RouterLink>
        <RouterLink to="/">BattlePaper</RouterLink>
        <RouterLink to="/">FAQ</RouterLink>
        <RouterLink to="/">Parners</RouterLink>
      </div>
      <div className="component-header__mobile-bar-icon"></div>
    </div>
  );
};

export default Header;
