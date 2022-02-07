import React from "react";
import RouterLink from './router-link';

const Header = () => {
  return (
    <div className="component-header">
      <div className="component-header__left">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/mint">Mint</RouterLink>
        <RouterLink to="/" tooltip="Coming Soon">PunkyDex</RouterLink>
        <RouterLink to="/" tooltip="Under Construction">ArenaMarket</RouterLink>
        <RouterLink to="/" tooltip="Coming Soon: See Battle Paper For Planeed Release Date">Play</RouterLink>
      </div>
      <div className="component-header__right">
        <RouterLink to="/">$LSD</RouterLink>
        <RouterLink to="/"tooltip="Coming Very Soon">Punkon</RouterLink>
        <RouterLink to="/">BattlePaper</RouterLink>
        <RouterLink to="/"tooltip="Coming Soon">FAQ</RouterLink>
        <RouterLink to="/"tooltip="Coming Soon: Email us at info@lunarsystem.co about partnership inquires">Parners</RouterLink>
      </div>
      <div className="component-header__mobile-bar-icon"></div>
    </div>
  );
};

export default Header;
