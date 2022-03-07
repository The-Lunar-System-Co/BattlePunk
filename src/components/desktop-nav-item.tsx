import React from "react";
import { useHistory } from "react-router-dom";

interface IDesktopNavItem {
  to: string;
  tooltip?: string;
  isHyperLink?: boolean;
}

const DesktopNavItem: React.FC<IDesktopNavItem> = ({
  to,
  tooltip,
  isHyperLink,
  children
}) => {
  const history = useHistory();
  return (
    <>
      {isHyperLink ? (
        <a
          className="component-desktop-nav-item"
          href={to}
          target="_blank"
          rel="noreferrer"
        >
          {children}
          {tooltip && <div className="tooltip">{tooltip}</div>}
        </a>
      ) : (
        <div
          className="component-desktop-nav-item"
          onClick={() => {
            history.push(to);
          }}
        >
          {children}
          {tooltip && <div className="tooltip">{tooltip}</div>}
        </div>
      )}
    </>
  );
};

export default DesktopNavItem;
