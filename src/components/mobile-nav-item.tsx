import React from "react";
import { useHistory } from "react-router-dom";

interface IMobileNavItem {
  isComingSoon?: boolean;
  to: string;
  setIsMobileDropDownOpen: (isMobileDropDownOpen: boolean) => void;
}

const MobileNavItem: React.FC<IMobileNavItem> = ({
  isComingSoon,
  to,
  children,
  setIsMobileDropDownOpen
}) => {
  const history = useHistory();
  return (
    <div
      className="component-mobile-nav-item"
      onClick={() => {
        history.push(to);
        setIsMobileDropDownOpen(false);
      }}
    >
      <div className="component-mobile-nav-item__title">{children}</div>
      {isComingSoon && (
        <div className="component-mobile-nav-item__coming-soon">
          Coming soon
        </div>
      )}
    </div>
  );
};

export default MobileNavItem;
