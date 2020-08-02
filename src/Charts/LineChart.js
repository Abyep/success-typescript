import React, { useState, useEffect } from "react"
import { Chart } from "react-google-charts"

const LineChart = (props) => {
  const [data, setData] = useState([])
  
    useEffect(() => {
      setData(props.data)
    })
  
    return (
      <div className="box">


<Chart
style={{marginTop :"20%"}}
  width={'100%'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['Date', 'Value'],
    [new Date(1996, 1, 1), 2000 * Math.random()],
    [new Date(1997, 1, 1), 2000 * Math.random()],
    [new Date(1998, 1, 1), 2000 * Math.random()],
    [new Date(1999, 1, 1), 2000 * Math.random()],
    [new Date(2000, 1, 1), 2000 * Math.random()],
    [new Date(2001, 1, 1), 2000 * Math.random()],
    [new Date(2002, 1, 1), 2000 * Math.random()],
    [new Date(2003, 1, 1), 2000 * Math.random()],
    [new Date(2004, 1, 1), 2000 * Math.random()],
    [new Date(2005, 1, 1), 2000 * Math.random()],
    [new Date(2006, 1, 1), 2000 * Math.random()],
    [new Date(2007, 1, 1), 2000 * Math.random()],
    [new Date(2008, 1, 1), 2000 * Math.random()],
    [new Date(2009, 1, 1), 2000 * Math.random()],
  ]}
  options={{
    // Use the same chart area width as the control for axis alignment.
    chartArea: { height: '40%', width: '90%' },
    hAxis: { slantedText: false },
    vAxis: { viewWindow: { min: 0, max: 2000 } },
    legend: { position: 'none' },
  }}
  rootProps={{ 'data-testid': '3' }}
  chartPackages={['corechart', 'controls']}
  controls={[
    {
      controlType: 'ChartRangeFilter',
      options: {
        filterColumnIndex: 0,
        ui: {
          chartType: 'LineChart',
          chartOptions: {
            chartArea: { width: '90%', height: '50%' },
            hAxis: { baselineColor: 'none' },
          },
        },
      },
      controlPosition: 'bottom',
      controlWrapperParams: {
        state: {
          range: { start: new Date(1997, 1, 9), end: new Date(2002, 2, 20) },
        },
      },
    },
  ]}
/>
      </div>
    )
  
}
export default LineChart
