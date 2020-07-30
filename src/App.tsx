import React, { Component } from "react"
import { connect } from "react-redux"
import "./App.css"
import LineChart from "./Charts/LineChart"
import PieChart from "./Charts/PieChart"

import GeoChart from "./Charts/GeoChart"

import BarChart from "./Charts/BarChart"
import SideBar from "./Sidebar"
import Header from "./Header"
import { getData } from "./Saga"

interface ChartProps{
  data : Array<String>;
  option : Number,
  sideDrawerOpen:Boolean,
  getData : Function
}

interface ChartState {
  data : Array<String>;
  option : Number,
  sideDrawerOpen:Boolean,

}

class App extends Component< ChartProps, ChartState> {
  constructor(props : ChartProps ) {
    super(props)
    this.state = {
      data: [],
      option: 1,
      sideDrawerOpen:true
    }
  }

  componentDidMount() {
    this.props.getData()
  }
  static getDerivedStateFromProps(nextProps : any, prevState : any) {
    if (nextProps.data !== null) {
      return { data: nextProps.data }
    } else return null
  }

  handleNavigation = (param : Number) => {
    this.setState({
      option: param,
    })
  }

   drawerToggleClickHandler = () => {
    this.setState({
     sideDrawerOpen: !this.state.sideDrawerOpen 
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen  })
  }

  render() {
    return (
      <div className="App">
        <Header backdropClickHandler={this.backdropClickHandler} show={this.state.sideDrawerOpen}   handleNavigation={(option : Number) => this.handleNavigation(option)} />
        <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
          {this.state.data.length !== 0 && (
            <div
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-evenly",
                alignItems: "center",
                flexDirection: "column",
                marginTop :"10%"
              }}
            >
              <strong> World census of use of tobacco products</strong>
              {this.state.option === 1 && <BarChart data={this.state.data} />}
              {this.state.option === 2 && <LineChart data={this.state.data} />}
              {this.state.option === 3 && <GeoChart data={this.state.data} />}
              {this.state.option === 4 && <PieChart data={this.state.data} />}
            </div>
          )}
        </div>
      </div>
    )
  }
}
const mapDisPatchToProps= (dispatch : any) => {
return {
  getData : () => dispatch(getData())
}
}

const mapStateToProps = (state : any) => {
  return {
    data: state.reducer.data,
  }
}

export default connect(mapStateToProps, mapDisPatchToProps)(App)
