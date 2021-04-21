import React, {useState} from 'react'
import FilterBox from './FilterBox'
import DataTable from './DataTable'
import Container from '@material-ui/core/Container'

const Dashboard = ({ records }) => {
  const [ageFilter, setAgeFilter] = useState([0, 120])
  const [sexFilter, setSexFilter] = useState('all')
  const [comorbidityFilter, setComorbidityFilter] = useState('')
  
  const handleAgeFilterChange = (event, newRange) => {
    setAgeFilter(newRange)
  }

  const handleSexFilterChange = (event) => {
    setSexFilter(event.target.value)
  }

  const handleComorbidityFilterChange = (event) => {
    setComorbidityFilter(event.target.value)
  }

  return (
    <div>
      <FilterBox 
        ageFilter={ageFilter}
        setAgeFilter={setAgeFilter}
        handleAgeFilterChange={handleAgeFilterChange}
        sexFilter={sexFilter}
        setSexFilter={setSexFilter}
        handleSexFilterChange={handleSexFilterChange}
        comorbidityFilter={comorbidityFilter}
        setComorbidityFilter={setComorbidityFilter}
        handleComorbidityFilterChange={handleComorbidityFilterChange}
      />
      <DataTable 
        records={records}
        ageFilter={ageFilter}
        sexFilter={sexFilter}
        comorbidityFilter={comorbidityFilter}
      />
    </div>
  )
}

export default Dashboard