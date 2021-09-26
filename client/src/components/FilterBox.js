import React from 'react'
import {
  Slider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
  TextField,
  Grid,
  Switch
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 5,
    marginBottom: 5,
  }
})

const sliderMarks = [
  {value: 0, label: 0},
  {value: 20, label: 20},
  {value: 40, label: 40},
  {value: 60, label: 60},
  {value: 80, label: 80},
  {value: 100, label: 100},
  {value: 120, label: 120},
]

const FilterBox = (props) => {
  const classes = useStyles()

  return (
    <Grid 
      container 
      className={classes.root} 
      spacing={1} 
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item xs={12} sm={3}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Nem</FormLabel>
          <RadioGroup row value={props.sexFilter} onChange={props.handleSexFilterChange}>
            <FormControlLabel value="all" control={<Radio />} label="Mind" />
            <FormControlLabel value="female" control={<Radio />} label="Nő" />
            <FormControlLabel value="male" control={<Radio />} label="Férfi" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography id="range-slider" gutterBottom>
          Életkor
        </Typography>      
        <Slider
          max={120}
          value={props.ageFilter}
          onChange={props.handleAgeFilterChange}
          valueLabelDisplay="auto"
          marks={sliderMarks}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <FormControlLabel
          labelPlacement="top"
          control={
            <Switch
              name="excludeWithComorbidity"
              color="primary"
              checked={props.excludeWithComorbidity}
              onChange={props.toggleExcludeWithComorbidity}
            />
          }
          label="Csak alapbetegségek nélkül"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField
          label="Alapbetegségek" 
          variant="outlined"
          fullWidth
          value={props.comorbidityFilter}
          onChange={props.handleComorbidityFilterChange}
          disabled={props.excludeWithComorbidity}
        />
      </Grid>
    </Grid>
  )
}

export default FilterBox