import React, { Component } from "react"
import {connect,useSelector, RootStateOrAny} from "react-redux"
import "./header.css"
import Backdrop from "../Backdrop"
import Sidebar from "../Sidebar"
import { openSidebar } from "../Saga"

export const Header   = (props : any) => {

  const backdropClickHandler = () => {
    props.openSidebar()
  }

  console.log(props)
    return (
      <>
        <div className="header">
          <div className="companyName">
            {" "}
            <Backdrop drawerClickHandler={backdropClickHandler} />
          </div>
          <div className="account">My Account</div>
        </div>
        <Sidebar show={props.sidebar}    />
      </>
    )
  }
  const mapDisPatchToProps= (dispatch : any) => {
    return {
      openSidebar : () => dispatch(openSidebar())
    }
    }
    
    const mapStateToProps = (state : RootStateOrAny) => {
      return {
        sidebar : state.reducer.sidebar
      }
    }
    
    export default connect(mapStateToProps, mapDisPatchToProps)(Header)
    