import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1>HATs</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1>PETs</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1>BROEKs</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1>JEANSs</h1>
            <span>Shop Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1>T-SHIRTs</h1>
            <span>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
