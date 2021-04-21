import React from 'react'
import {
  Typography,
  Container,
  Link
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    marginTop: 'auto',
    backgroundColor: 'LightGray',
    padding: 20,
  }
})


const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.root}>
      <Container>
        <Typography variant="body1">
          This is the footer
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer