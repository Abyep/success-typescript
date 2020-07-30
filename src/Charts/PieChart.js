import React, { useEffect, useState } from "react"
import { Chart } from "react-google-charts"

const PieChart = (props) => {
  const [data, setData] = useState([])
  
    useEffect(() => {
      setData(props.data)
    })
  

    return (
      <div className="App">
        <Chart
         width={"60vw"}
         height={"50vh"}
          chartType="PieChart"
          data={data}
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    )
  
}
export default PieChart
