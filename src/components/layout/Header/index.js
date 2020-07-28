import React from "react";
import "./style.css";

const Header = (props) => {
  const { logo, logoText, children } = props;

  return (
    <header class="page_header">
      <div className="logo">
        <img src={logo} alt="Piximo" />
        <h1>{logoText}</h1>
      </div>

      <div className="menu_holder">{children}</div>
    </header>
  );
};

export default Header;
