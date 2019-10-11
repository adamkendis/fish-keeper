import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const buttonStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
}))

const SubmitButton = (props) => {
  const classes = buttonStyles();

  return (
    <Fragment>
      <Button variant="contained" color="primary" className={classes.button} onClick={props.onClick}>
          Submit
      </Button>
    </Fragment>
  )
}

export default SubmitButton;