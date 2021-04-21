import React from 'react'

const AgeTable = ({ ageGroups }) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Age</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        {ageGroups.map(ageGroup => (
          <tr key={ageGroup.age}>
            <th>{ageGroup.age}</th>
            <th>{ageGroup.deaths}</th>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default AgeTable