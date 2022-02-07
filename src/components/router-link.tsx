import React from "react";
import { useHistory } from "react-router-dom";

interface IHyperLinkProps {
  to: string;
}

const RouterLink: React.FC<IHyperLinkProps> = ({ to, children }) => {
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push(to);
      }}
    >
      {children}
    </div>
  );
};

export default RouterLink;
