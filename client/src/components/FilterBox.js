import React from 'react'
import {
  Slider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Typography,
  TextField,
  Grid,
  Paper,
  Switch
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 20
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
    >
      <Grid item xs={12} sm={3}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup row value={props.sexFilter} onChange={props.handleSexFilterChange}>
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography id="range-slider" gutterBottom>
          Age range
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
          label="Show only without comorbidities"
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <TextField 
          label="Comorbidities" 
          variant="outlined"
          value={props.comorbidityFilter}
          onChange={props.handleComorbidityFilterChange}
          disabled={props.excludeWithComorbidity}
        />
      </Grid>
    </Grid>
  )
}

export default FilterBox