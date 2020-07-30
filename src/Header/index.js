import React, { Component } from "react"
import "./header.css"
import Backdrop from "../Backdrop"
import Sidebar from "../Sidebar"

const Header = (props) => {
    return (
      <>
        <div className="header">
          <div className="companyName">
            {" "}
            <Backdrop drawerClickHandler={props.backdropClickHandler} />
          </div>
          <div className="account">My Account</div>
        </div>
        <Sidebar show={props.show}   handleNavigation={(option) => props.handleNavigation(option)} />
      </>
    )
  }

export default Header
