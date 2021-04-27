import React from 'react'
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer
} from 'recharts';
import {
  Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: 400,
    width: '100%',
    marginBottom: 20,
  },
})


const Chart = ({ filteredRecords }) => {
  const classes = useStyles()
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
    <Paper className={classes.root} elevation={3}>
      <ResponsiveContainer className={classes.container}>
        <BarChart
          name="hello"
          data={ageGroupArray}
          legendType="diamond"
          margin={{
            top: 30,
            right: 30,
            left: 30,
            bottom: 30,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" name="Életkor" />>
          <YAxis label={{ value: 'Elhunytak száma', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="deaths" name="Elhunytak" fill="#ba000d" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
    )
}



export default Chart