import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import Chart from './Chart'
import Stats from './Stats'
import AgeTable from './AgeTable'
import FilterBox from './FilterBox'
import DataTable from './DataTable'
import recordsService from '../services/records'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {

  },
})


const Main = ({ records, ageGroups }) => {
  const [ageFilter, setAgeFilter] = useState([0, 120])
  const [sexFilter, setSexFilter] = useState('all')
  const [comorbidityFilter, setComorbidityFilter] = useState('')
  const [excludeWithComorbidity, setExcludeWithComorbidity] = useState(false)
 
  const classes = useStyles()
  
  const filteredRecords = records
    .filter(record => 
      (record.age >= ageFilter[0] 
        && record.age <= ageFilter[1]
        && record.comorbidities.toLowerCase().includes(comorbidityFilter)
        && ((excludeWithComorbidity)
          ? record.comorbidities.toLowerCase().includes('nem ismert')
          : record
        )

        && ((sexFilter === 'female') 
          ? record.sex.toLowerCase().startsWith('n')
          : (sexFilter === 'male') 
          ? record.sex.toLowerCase().startsWith('f')
          : record
        )
      )
    )

  const handleAgeFilterChange = (event, newRange) => {
    setAgeFilter(newRange)
  }

  const handleSexFilterChange = (event) => {
    setSexFilter(event.target.value)
  }

  const handleComorbidityFilterChange = (event) => {
    setComorbidityFilter(event.target.value)
  }

  const toggleExcludeWithComorbidity = () => {
    setComorbidityFilter('')
    setExcludeWithComorbidity(!excludeWithComorbidity)
  }

  return (
    <Container className={classes.root}>
      <Switch>
        <Route path="/chart">
          <FilterBox 
            ageFilter={ageFilter}
            handleAgeFilterChange={handleAgeFilterChange}
            sexFilter={sexFilter}
            handleSexFilterChange={handleSexFilterChange}
            comorbidityFilter={comorbidityFilter}
            handleComorbidityFilterChange={handleComorbidityFilterChange}
            excludeWithComorbidity={excludeWithComorbidity}
            toggleExcludeWithComorbidity={toggleExcludeWithComorbidity}
          />
          <Chart 
            filteredRecords={filteredRecords}
          />
        </Route>
        <Route path='/agetable'>
          <AgeTable ageGroups={ageGroups} />
        </Route>
        <Route path='/datatable'>
          <FilterBox 
            ageFilter={ageFilter}
            handleAgeFilterChange={handleAgeFilterChange}
            sexFilter={sexFilter}
            handleSexFilterChange={handleSexFilterChange}
            comorbidityFilter={comorbidityFilter}
            handleComorbidityFilterChange={handleComorbidityFilterChange}
            excludeWithComorbidity={excludeWithComorbidity}
            toggleExcludeWithComorbidity={toggleExcludeWithComorbidity}
          />
          <DataTable 
            filteredRecords={filteredRecords}
            ageFilter={ageFilter}
            sexFilter={sexFilter}
            comorbidityFilter={comorbidityFilter}
            excludeWithComorbidity={excludeWithComorbidity}
          />
        </Route>
        <Route path="/">
          <Stats records={records} />
        </Route>
      </Switch>
    </Container>
  )
}

export default Main