import React, { useState } from 'react'
import Chart from './Chart'
import Home from './Home'
import FilterBox from './FilterBox'
import DataTable from './DataTable'
import { Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    margin: 'auto',
  },
})


const Main = ({ records, ageGroups, timestamp }) => {
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
    <Container className={classes.root} maxWidth={false}>
      <Switch>
        <Route path="/chart">
          <div className={classes.pageContainer}>
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
          </div>
        </Route>
        <Route path='/datatable'>
          <div className={classes.pageContainer}>
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
          </div>
        </Route>
        <Route path="/">
          <div className={classes.pageContainer}>
            <Home records={records} timestamp={timestamp} />
          </div>
        </Route>
      </Switch>
    </Container>
  )
}

export default Main