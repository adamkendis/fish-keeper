import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import SubmitButton from './SubmitButton';
import { pick } from 'lodash';
import axios from 'axios';
import { getPosition, processPosition, convertToLocalTime } from '../utils/geolocation';
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
  });
  const [coordinates, setCoords] = useState({
    latitude: props.latitude || null,
    longitude: props.longitude || null,
    timestamp: props.timestamp || '',
    timestamp: null,
    // altitude: props.altitude || '',
    // date: props.date || '',
    // time: props.time || '',
  });
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleLocationClick = e => {
    e.preventDefault();
    const options = {
      maximumAge: 20000,
      enableHighAccuracy: true,
      timeout: 15000,
    };
    getPosition(options)
      .then(position => {
        const coords = processPosition(position);
        const [ date, time ] = convertToLocalTime(coords.timestamp)
        coords.date = date;
        coords.time = time;
        if (!coords.altitude) {
          coords.altitude = 'Not supported on device.'
        }
        console.log(coords);
        let pickedCoords = pick(['latitude', 'longitude', 'timestamp'], coords);
        setCoords(pickedCoords);
      })
      .then(() => {
        let keys = ['fish_species', 'fish_length', 'lure_type', 'hook_size'];
        let catchInfo = pick(values, keys);
        let newCatch = Object.assign(catchInfo, coordinates);
        axios.post('/catch', newCatch)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.error(err);
          })
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
        disabled
      />
      <br></br>
      <TextField
        id="time-input"
        label="Time"
        className={classes.textField}
        value={values.time}
        onChange={handleChange('time')}
        margin="normal"
        disabled
      />
      <br></br>
      <TextField
        id="altitude-input"
        label="Altitude"
        className={classes.textField}
        value={values.altitude}
        onChange={handleChange('altitude')}
        margin="normal"
        disabled
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