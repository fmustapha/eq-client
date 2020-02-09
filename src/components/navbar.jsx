import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to={"/home/charts"}>
        EQ Works
      </Link>
    </nav>
  );
};

export default Navbar;
