import React, { Component } from "react"
import "./sidebar.css"

const Sidebar = (props) => {
  let drawerClasses = 'sidebar'
  if (props.show) {
    drawerClasses = 'sidebar open'
  }


    return (
      <>
        <div className={drawerClasses}>
          <div
            onClick={() => props.handleNavigation(2)}
            className="sidebar-detail"
          >
            Line Graph
          </div>
          <div
            onClick={() => props.handleNavigation(4)}
            className="sidebar-detail"
          >
            Pie Graph
          </div>
          <div
            onClick={() => props.handleNavigation(3)}
            className="sidebar-detail"
          >
            Geo Graph
          </div>
          <div
            onClick={() => props.handleNavigation(1)}
            className="sidebar-detail"
          >
            Bar Graph
          </div>
        </div>
      </>
    )
  
}
export default Sidebar
