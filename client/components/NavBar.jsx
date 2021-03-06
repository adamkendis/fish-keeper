import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// import MainTable from './MainTable';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <Typography
//       component="div"
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       <Box p={3}>{children}</Box>
//     </Typography>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const NavBar = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs 
        value={value} 
        onChange={handleChange} 
        centered={true} 
        >
          <Tab label="Submit a Catch" 
               component={Link} 
               to="/catch"/>
          <Tab label="Explore" 
               component={Link}
               to="/map" />
          <Tab label="Graphs" 
               component={Link}
               to="/graphs" />
        </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={0}>
        SUBMIT CATCH COMPONENT
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MainTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        CHARTS VIEW
      </TabPanel> */}
    </div>
  );
}

export default NavBar;

