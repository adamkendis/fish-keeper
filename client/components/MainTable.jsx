import React, { Component } from 'react';
import MaterialTable from 'material-table';

class MainTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fish: [],
    };
  }
  render() {
    return (
      <div>
        <MaterialTable 
          title="Catch History"
          columns={[
            { title: "Species", field: "fish_species" },
            { title: "Length", field: "fish_length", type: "numeric" },
            { title: "Fly Pattern", field: "lure_type" },
            { title: "Hook Size", field: "hook_size" },
            { title: "Latitude", field: "latitude" },
            { title: "Longitude", field: "longitude" },
          ]},
          data={this.state.fish}
        
        />
      </div>
    )
  }
}