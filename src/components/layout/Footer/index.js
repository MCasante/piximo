import React from "react";
import "./style.css";

const Footer = (props) => {
  const { children } = props;
  return <footer className="page_footer">{children}</footer>;
};

export default Footer;
