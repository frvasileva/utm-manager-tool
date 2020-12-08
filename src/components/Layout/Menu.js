import React from "react";
import { Link } from "gatsby";
import "./Layout.scss";

const Menu = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="profile-menu">
            <div className="user-profile-icon">
            </div>
          </div>
          <div className="menu-wrapper">
            <ul className="main-menu-list">
              <li className="nav-item active">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/createUtm">Create UTM</Link>
              </li>
              <li className="nav-item">
                <Link to="/create-facebook-group">Create Fb Group</Link>
              </li>
              <li className="nav-item">
                <Link to="/utms">Utms</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
