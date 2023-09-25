import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/videos">VIDEOS</Link>
    </nav>
  );
};

export default Nav;
