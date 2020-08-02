import React, { Component, useEffect } from "react"
import { connect, useSelector, RootStateOrAny } from "react-redux"
import "./App.css"
import LineChart from "./Charts/LineChart"
import PieChart from "./Charts/PieChart"

import GeoChart from "./Charts/GeoChart"

import BarChart from "./Charts/BarChart"
import SideBar from "./Sidebar"
import Header from "./Header"
import { getData } from "./Saga"



export const App   = (props : any) => {
  const newData = useSelector((state :RootStateOrAny) => state.reducer.data);
const [option, setOption] = React.useState<Number | undefined>(1)

const [sideDrawerOpen, setSideDrawerOpen] = React.useState<boolean | undefined | null>(true)

useEffect(() => {
  props.getData()
},[])


const handleNavigation = (param : Number) => {
setOption(param)
}



const backdropClickHandler = () => {
  setSideDrawerOpen(!sideDrawerOpen)
}

   return (   <div className="App">
      <Header backdropClickHandler={backdropClickHandler} show={sideDrawerOpen}   handleNavigation={(option : Number) => handleNavigation(option)} />
        {newData && newData.length !== 0 && (
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection:"column",
              marginTop :"10%",
              marginLeft :"15%"
            }}
          >
            <strong> World census of use of tobacco products</strong>
       

            <div className="homepageMainDiv">
            <BarChart data={newData}/>
            <LineChart data={newData} />
            <GeoChart data={newData} />
            <PieChart data={newData} />
            </div>

          </div>
        )}
    </div>
    )



          }



const mapDisPatchToProps= (dispatch : any) => {
return {
  getData : () => dispatch(getData())
}
}

const mapStateToProps = (state : RootStateOrAny) => {
  return {
    data: state.reducer.data,
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(App)
