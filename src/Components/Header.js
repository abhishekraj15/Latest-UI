import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faRightToBracket,
  faMagnifyingGlass,
  faCircleUser
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>MEDIVEDA</h1>
        <button>
          <FontAwesomeIcon icon={faRightToBracket} />
        </button>
      </div>
      <div className="search">
        <button>
          <input type="text" placeholder="Search..." />
          <FontAwesomeIcon icon={faMagnifyingGlass}  size="lg"/>
        </button>
      </div>
      <div className="third-div">
        <div className="notification">
          <FontAwesomeIcon icon={faBell} size="lg" />
        </div>
        <div className="user-part">
          <div className="user">
            {/* <img src="../assests/user.png"></img> */}
            <FontAwesomeIcon icon={faCircleUser} size="xl"/>
          </div>
          <p className="user-name">
            Username
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
