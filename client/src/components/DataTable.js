import React, {useState, useEffect} from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  TablePagination,
  Paper
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    margin: 0,
    marginBottom: 20,
  },
  container: {
    // maxHeight: 400,
  }
})

const DataTable = (props) => {
  const classes = useStyles()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const {
    ageFilter,
    sexFilter,
    comorbidityFilter,
    excludeWithComorbidity,
    filteredRecords
  } = props

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const rows = filteredRecords

  useEffect(() => {
    setPage(0)   
  }, 
    [ageFilter, sexFilter, comorbidityFilter, excludeWithComorbidity]
  )

  return (
    <Paper className={classes.root} elevation={3}>
      <TableContainer className={classes.container}>
        <Table 
          className={classes.container} 
          aria-label="sticky table"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{width: '5%'}}>Sorszám</TableCell>
              <TableCell style={{width: '5%'}}>Nem</TableCell>
              <TableCell style={{width: '5%'}}>Életkor</TableCell>
              <TableCell style={{width: '85%'}}>Alapbetegségek</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage )
            .map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.sex}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.comorbidities}</TableCell>
              </TableRow>
            ))
          }
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan="4">Összesen: {rows.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <TablePagination 
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
      />
    </Paper>
  )
}

export default DataTable