import React, {useState, useEffect} from "react"
import { Chart } from "react-google-charts"
import "./chart.css"

export const BarChart   = (props) => {
const [data, setData] = useState([])

  useEffect(() => {
    setData(props.data)
  })


    return (
      <div className="box">
        <Chart
          width={"100%"}
          height={"100%"}
          chartType="BarChart"


          options={{
            hAxis: {
              title: 'Total Population',
              minValue: 0,
            },
            vAxis: {
              title: 'Country',
            },
          }}
          controls={[
            {
              controlEvents: [
                {
                  eventName: 'statechange',
                },
              ],
              controlType: 'CategoryFilter',
              options: {
                filterColumnIndex: 1,
                ui: {
                  labelStacking: 'vertical',
                  label: 'Country Selection:',
                  allowTyping: false,
                  allowMultiple: false,
                },
              },
            },
          ]}
          data={data}
          mapsApiKey="YOUR_KEY_HERE"
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    )
  }

export default BarChart
