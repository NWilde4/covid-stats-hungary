import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  Card,
  CardContent
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    margin: 'auto',
    maxWidth: '800px',
  },
  headline: {
    textAlign: 'center',
  },
  cardGrid: {
    marginTop: '40px',
    marginBottom: '40px',
    textAlign: 'center',
  },
  card: {
    width: '100%'
  },
  textContent: {
    textAlign: 'justify',
    marginTop: '20px',
    marginBottom: '20px',
  },
})

const Home = ({ records, timestamp }) => {
  const classes = useStyles()

  const sumDeaths = records.length
  const sumNoComorbidities = records.filter(record => (
    record.comorbidities.toLowerCase().includes('nem ismert')
    )).length
  const ratioNoComorbities = (sumNoComorbidities / sumDeaths * 100).toFixed(2)
  const averageAge = (records.reduce((acc, record) => acc + record.age, 0) 
    / sumDeaths).toFixed(2)

  return (
    <div className={classes.root} >
      <div className={classes.headline}>
        <Typography variant='h4'>
          Magyarországi koronavírusos elhunytak adatai
        </Typography>
      </div>
      <Grid 
        container 
        className={classes.cardGrid} 
        spacing={3} 
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h5' color="textSecondary">
                Elhunytak
              </Typography>
              <Typography variant='h4'>
                {sumDeaths.toLocaleString().replace(/,/g," ",)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant='h5' color="textSecondary">
                Átlagéletkor
              </Typography>
              <Typography variant='h4'>
                {averageAge}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant='h5' color="textSecondary">
                Alapbetegség nélkül
              </Typography>
              <Typography variant='h4'>
                {ratioNoComorbities}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div className={classes.textContent}>
        <Typography variant='body1'>
          Az oldal a magyarországi koronavírusos elhunytak adatait dolgozza fel és
          teszi közzé kereshető és szűrhető formában. Az adatok a hivatalos 
          tájékoztató oldalról származnak és a rendszeresen frissülnek.
        </Typography>
        <Typography variant='body2'>
          Utolsó frissítés: {timestamp}
        </Typography>
      </div>
    </div>
  )
}

export default Home