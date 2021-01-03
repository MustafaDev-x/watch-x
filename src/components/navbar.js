import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  container">
      <Link to="/" className="navbar-brand mb-0 h1 " style={{color: "#dc3545"}} >
        <h2 style={{color: "#dc3545", fontFamily: "itlic"}}>WATCH<span> X</span></h2>

      </Link>


      <div className=" navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto ">
          <Link to="/TV-Show">
            <li className="nav-item active">
              <a className="nav-link" >
              TV-Show <span className="sr-only">(current)</span>
              </a>
            </li>
          </Link>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
