import React from 'react'

const Stats = ({ records }) => {
  const totalDeaths = records.length

  return (
    <div>
      Total Deaths: {totalDeaths}
    </div>
  )
}

export default Stats