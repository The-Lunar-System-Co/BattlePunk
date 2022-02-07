import React from "react";
import { useHistory } from "react-router-dom";

interface IHyperLinkProps {
  to: string;
  tooltip?: string;
}

const RouterLink: React.FC<IHyperLinkProps> = ({ to, tooltip, children }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push(to);
      }}
    >
      {children}
      {tooltip && <div className="tooltip">{tooltip}</div>}
    </div>
  );
};

export default RouterLink;
