import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Footer from './components/Footer'
import Chart from './components/Chart'
import Stats from './components/Stats'
import AgeTable from './components/AgeTable'
import Dashboard from './components/Dashboard'
import recordsService from './services/records'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import { Container, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {

  },
  main: {
    display: 'flex'
  }
})

const App = () => {
  const [records, setRecords] = useState([])
  const classes = useStyles()

  useEffect(() => {
    recordsService
      .getAll()
      .then(records => setRecords(records))
  }, [])

  const ageGroupArray = []

  for (let i = 0; i < 121; i++) {
    let ageObject = {
      age: i,
      deaths: 0,
    }
    ageGroupArray.push(ageObject)
  }

  for (const record of records) {
    ageGroupArray[record.age].deaths++
  }

  return (
    <div>
      <CssBaseline />
      <Container className={classes.root}>
        <Router>
          <Navigation />
          <Main 
            records={records} 
            ageGroups={ageGroupArray}
            className={classes.main} 
          />
          <Footer />
        </Router>
      </Container>
    </div>
  )
}

export default App