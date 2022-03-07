import React from "react";
import { useHistory } from "react-router-dom";

interface IDesktopNavItem {
  to: string;
  tooltip?: string;
}

const DesktopNavItem: React.FC<IDesktopNavItem> = ({
  to,
  tooltip,
  children
}) => {
  const history = useHistory();
  return (
    <div
      className="component-desktop-nav-item"
      onClick={() => {
        history.push(to);
      }}
    >
      {children}
      {tooltip && <div className="tooltip">{tooltip}</div>}
    </div>
  );
};

export default DesktopNavItem;
