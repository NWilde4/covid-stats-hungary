import React from 'react'
import { Link } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
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

const baseUrl = `${window.location.origin}/api/records`

const Navigation = () => {
  const classes = useStyles()

  return (
    <AppBar className={classes.root} position='sticky'>
      <Toolbar variant='dense'>
        <Grid container justify="space-between">
          <Grid item>
            <Button color='inherit' component={Link} to='/'>
              <Typography variant='h6'>
                Covid-19 Halálozások
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button color='inherit' component={Link} to='/'>
              Kezdőlap
            </Button>
            <Button color='inherit' component={Link} to='/chart'>
              Diagram
            </Button>
            <Button color='inherit' component={Link} to='/datatable'>
              Táblázat
            </Button>
            <Button 
              color='inherit' 
              href={baseUrl}
              target="_blank"
              rel="noreferrer"
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