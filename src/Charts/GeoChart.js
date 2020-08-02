import React, { useState, useEffect } from "react"
import { Chart } from "react-google-charts"

const GeoChart = (props) => {
  const [data, setData] = useState([])
  
    useEffect(() => {
      setData(props.data)
    })
  

    return (
      <div className="box">
      <Chart
        width={"100%"}
        height={"100%"}
          chartType="GeoChart"
          data={data}
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    )
  
}
export default GeoChart
