import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getPosition, processPosition } from '../utils/geolocation';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }
}))

const CatchForm = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    fish_species: '',
    fish_length: '',
    lure_type: '',
    hook_size: '',
    latitude: '',
    longitude: '',
    timestamp: '',
  });

  const options = {
    maximumAge: 15000,
    enableHighAccuracy: true,
    timeout: 15000,
  }

  // getPosition(options)
  //   .then(position => {
  //     const coords = processPosition(position);
  //     setValues({ 
  //       ...values, 
  //       latitude: coords.latitude,
  //       longitude: coords.longitude,
  //     });
  //   })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form>
      <TextField 
        id="species-input"
        label="Species"
        className={classes.textField}
        value={values.fish_species}
        onChange={handleChange('fish_species')}
        margin="normal"
      />
      <TextField 
        id="length-input"
        label="Fish length"
        className={classes.textField}
        value={values.fish_length}
        onChange={handleChange('fish_length')}
        margin="normal"
      />
      <TextField 
        id="lure-input"
        label="Fly/lure type"
        className={classes.textField}
        value={values.lure_type}
        onChange={handleChange('lure_type')}
        margin="normal"
      />
      <TextField 
        id="hook-size-input"
        label="Hook size"
        className={classes.textField}
        value={values.hook_size}
        onChange={handleChange('hook_size')}
        margin="normal"
      />
      <TextField
        disabled 
        id="latitude-input"
        label="Latitude"
        className={classes.textField}
        value={values.latitude}
        onChange={handleChange('latitude')}
        margin="normal"
      />
      <TextField
        disabled 
        id="longitude-input"
        label="Longitude"
        className={classes.textField}
        value={values.longitude}
        onChange={handleChange('longitude')}
        margin="normal"
      />
    </form>
  )
}


export default CatchForm;