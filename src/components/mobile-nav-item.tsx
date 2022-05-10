import React from "react";
import { useHistory } from "react-router-dom";

interface IMobileNavItem {
  isComingSoon?: boolean;
  to: string;
  setIsMobileDropDownOpen: (isMobileDropDownOpen: boolean) => void;
  isHyperLink?: boolean;
}

const MobileNavItem: React.FC<IMobileNavItem> = ({
  isComingSoon,
  to,
  children,
  setIsMobileDropDownOpen,
  isHyperLink
}) => {
  const history = useHistory();
  return (
    <>
      {isHyperLink ? (
        <a
          className="component-mobile-nav-item"
          href={to}
          target="_blank"
          rel="noreferrer"
        >
          <div className="component-mobile-nav-item__title">{children}</div>
          {isComingSoon && (
            <div className="component-mobile-nav-item__coming-soon">
              Coming soon
            </div>
          )}
        </a>
      ) : (
        <div
          className="component-mobile-nav-item"
          onClick={() => {
            if (!isComingSoon) {
              history.push(to);
            }
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
      )}
    </>
  );
};

export default MobileNavItem;
