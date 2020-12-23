import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1> ChemATOM </h1>
      <Link to="/"> Home </Link>
      <Link to="/" className="/">
        Bookcase
       </Link>
      <Link to="/about" className="about-link">
        About
       </Link>
    </div>
  );
};

export default Header;