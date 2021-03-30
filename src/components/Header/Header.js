import React from "react";
import "./Header.scss";
import Score from "../Score/Score";
const Header = () => {
  return (
    <header className="header">
      <img src="/images/logo.svg" alt="rock-paper-scissors" />
      <Score />
    </header>
  );
};

export default Header;
