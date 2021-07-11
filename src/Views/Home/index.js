import React from "react";

import "./styles.css";
import logo from "../../Assets/Images/logo.png";
import List from "../../components/List";

export default function Home() {
  return (
    <div className="container">
      <nav>
        <div className="nav-content">
          <img className="logo" src={logo} alt="logo"/>
          <input
            className="search"
            placeholder="Search for places, things and people"
          />
          <img
            className="perfil"
            src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="logo"
          />
          <h5 className="nav-text">Nome</h5>
          <h5 className="nav-text">Home</h5>
          <i className="fas fa-user icons" />
          <i className="fab fa-facebook-messenger icons" />
          <i className="fas fa-globe-americas icons" />
          <i className="arrow-down icons" />
        </div>
      </nav>

      <div className="body">
        <div className="left-menu"></div>
        <div className="content">
          <div className="post-container">
            <div className="post-container-header">
              <i className="fas fa-pen post-container-icon" />
              <h5>Update status</h5>
              <span className="separator">|</span>
              <i className="fas fa-images post-container-icon" />
              <h5>Add Photos/Video</h5>
            </div>
            <div className="post-container-content">
              <p>Whats on your mind ?</p>
            </div>
          </div>

          <List />
        </div>
        <div className="right-menu"></div>
      </div>
    </div>
  );
}
