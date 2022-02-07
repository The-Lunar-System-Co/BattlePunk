import React from "react";

interface IHyperLinkProps {
  className: string;
  href: string;
}

const HyperLink: React.FC<IHyperLinkProps> = ({
  className,
  href,
  children
}) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export default HyperLink;
