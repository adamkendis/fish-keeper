import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainTable from './MainTable';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path='/map' component={MainTable} />
        {/* <Route path='/catch' component={<div>Catch</div>} /> */}
        {/* <Route path='graphs' component={<div>Graphs</div>} /> */}
      </Switch>
    </main>
  )
}

export default Main;