import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Paper,
  Button,
  Typography,
  Grid
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    margin: '0px',
    padding: '0px'
  }
})

const Navigation = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root} position='sticky'>
      <Toolbar variant='dense'>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant='h6'>
              COVID STATS HUNGARY
            </Typography>
          </Grid>
          <Grid item>
            <Button color='inherit' component={Link} to='/'>
              Home
            </Button>
            <Button color='inherit' component={Link} to='/chart'>
              Chart
            </Button>
            <Button color='inherit' component={Link} to='/agetable'>
              Age Table
            </Button>
            <Button color='inherit' component={Link} to='/datatable'>
              Data Table
            </Button>
            <Button 
              color='inherit' 
              href='http://localhost:3001/records' 
              target="_blank"
            >
              API
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation