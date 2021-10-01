import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Footer from './components/Footer'
import dataService from './services/data'
import timestampService from './services/timestamp'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    minWidth: '100%'

  }
})

const App = () => {
  const [records, setRecords] = useState([])
  const [timestamp, setTimestamp] = useState('')
  const classes = useStyles()

  useEffect(() => {
    dataService
      .getAll()
      .then(records => setRecords(records))
    timestampService
      .getAll()
      .then(timestamp => setTimestamp(timestamp))
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
      <Container className={classes.root} maxWidth={false}>
        <Router>
          <Navigation />
          <Main 
            records={records}
            timestamp={timestamp}
            ageGroups={ageGroupArray}
          />
          <Footer />
        </Router>
      </Container>
    </div>
  )
}

export default App