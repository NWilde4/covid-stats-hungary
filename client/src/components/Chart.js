import React from 'react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  //ResponsiveContainer
} from 'recharts';
import {
  Paper
} from '@material-ui/core'

const style = {
  margin: "auto"
}

const Chart = (props) => {
  const {
    ageFilter,
    sexFilter,
    comorbidityFilter,
    filteredRecords
  } = props

  const ageGroupArray = []

  for (let i = 0; i < 121; i++) {
    let ageObject = {
      age: i,
      deaths: 0,
    }
    ageGroupArray.push(ageObject)
  }

  for (const record of filteredRecords) {
    ageGroupArray[record.age].deaths++
  }

  return(
    <Paper style={style} elevation={3}>
      <BarChart
        width={1000}
        height={300}
        data={ageGroupArray}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="age" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="deaths" fill="#8884d8" />
      </BarChart>
    </Paper>
    )
}



export default Chart