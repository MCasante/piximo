import React from "react";
import "./style.css";

const Header = (props) => {
  const { logo, logoText, children } = props;

  return (
    <header className="page_header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Piximo" />
          <h1>{logoText}</h1>
        </div>

        <div className="menu_holder">{children}</div>
      </div>
    </header>
  );
};

export default Header;
