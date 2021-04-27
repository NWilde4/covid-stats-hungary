import React from 'react'
import {
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 20,
    backgroundColor: 'LightGray',
    padding: 10,
    textAlign: 'center'
  }
})


const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Typography variant="body1">
        Wilde Norman © 2021
      </Typography>
      <Typography variant="body2">
        <a 
          href='https://koronavirus.gov.hu/elhunytak' 
          target="_blank"
          rel="noreferrer"
        >
        Adatforrás
        </a>
      </Typography>
    </footer>
  )
}

export default Footer