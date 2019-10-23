import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SubmitButton from './SubmitButton';
import { pick } from 'lodash';
import axios from 'axios';
// import { getPosition, processPosition } from '../utils/geolocation';
// import Spinner from './Spinner';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'block',
  },
  textField: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: 200,
  }
}));

const CatchForm = (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    loading: true,
    fish_species: '',
    fish_length: '',
    lure_type: '',
    hook_size: '',
    latitude: props.latitude || '',
    longitude: props.longitude || '',
    timestamp: props.timestamp || '',
    altitude: props.altitude || '',
    date: props.date || '',
    time: props.time || '',
  });
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleLocationClick = e => {
    e.preventDefault();
    let keys = ['latitude', 'longitude', 'fish_species', 'fish_length', 'lure_type', 'hook_size', 'timestamp'];
    let newCatch = pick(values, keys);
    console.log(newCatch);
    axios.post('/catch', values)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      })
  }
  
  // const spinnerStyle = {
  //   size: "25",
  //   color: "#42B4D1",
  //   loading: values.loading,
  // }

  return (
    <form className={classes.container}>
      <TextField 
        id="species-input"
        label="Species"
        className={classes.textField}
        value={values.fish_species}
        onChange={handleChange('fish_species')}
        margin="normal"
      />
      <br></br>
      <TextField 
        id="length-input"
        label="Fish length (in)"
        className={classes.textField}
        value={values.fish_length}
        onChange={handleChange('fish_length')}
        margin="normal"
      />
      <br></br>
      <TextField 
        id="lure-input"
        label="Fly/lure type"
        className={classes.textField}
        value={values.lure_type}
        onChange={handleChange('lure_type')}
        margin="normal"
      />
      <br></br>
      <TextField 
        id="hook-size-input"
        label="Hook size"
        className={classes.textField}
        value={values.hook_size}
        onChange={handleChange('hook_size')}
        margin="normal"
      />
      <br></br>
      <TextField
        id="date-input"
        label="Date"
        className={classes.textField}
        value={values.date}
        onChange={handleChange('date')}
        margin="normal"
      />
      <br></br>
      <TextField
        id="time-input"
        label="Time"
        className={classes.textField}
        value={values.time}
        onChange={handleChange('time')}
        margin="normal"
      />
      <br></br>
      <TextField
        id="altitude-input"
        label="Altitude"
        className={classes.textField}
        value={values.altitude}
        onChange={handleChange('altitude')}
        margin="normal"
      />
      <br></br>
      <TextField
        disabled 
        id="latitude-input"
        label="Latitude"
        className={classes.textField}
        value={values.latitude}
        onChange={handleChange('latitude')}
        margin="normal"
      />
      <br></br>
      <TextField
        disabled 
        id="longitude-input"
        label="Longitude"
        className={classes.textField}
        value={values.longitude}
        onChange={handleChange('longitude')}
        margin="normal"
      />
      <br></br>
      <SubmitButton onClick={handleLocationClick} >
            Submit
      </SubmitButton>
    </form>
  )
};

export default CatchForm;