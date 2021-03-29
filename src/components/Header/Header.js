import React from "react";
import "./Header.scss";
import Score from "../Score/Score";
const Header = () => {
  return (
    <header className="header">
      <img src="/images/logo.svg" />
      <Score />
    </header>
  );
};

export default Header;
