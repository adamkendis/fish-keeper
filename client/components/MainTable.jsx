import React, { Component, forwardRef } from 'react';
import axios from 'axios';
import Spinner from './Spinner.jsx';

import MaterialTable from 'material-table';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

class MainTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      fish: [],
    };
  }

  componentDidMount() {
    axios.get('/history')
      .then(res => {
        this.setState({ 
          loading: false,
          fish: res.data,
        })
      })
  }

  render() {
    const tableIcons = {
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
      ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
    };

    const spinnerStyle = {
      size: "75",
      color: "blue",
      loading: this.state.loading,
    }

    const tableOptions = {
      pageSize: 10,
      columnsButton: true,
    }

    return (
      <div>
        {
          this.state.loading ? 
            <Spinner {...spinnerStyle}/>  :
            <Container maxWidth="lg">
              <MaterialTable 
                title="Catch History"
                icons={tableIcons}
                columns={[
                  { title: "Species", field: "fish_species" },
                  { title: "Length", field: "fish_length", type: "numeric" },
                  { title: "Fly Pattern", field: "lure_type" },
                  { title: "Hook Size", field: "hook_size" },
                  { title: "Latitude", field: "latitude" },
                  { title: "Longitude", field: "longitude" },
                ]}
                options={tableOptions}
                data={this.state.fish}
              />
            </Container>
        }
      </div>
    )
  }
}

export default MainTable;