import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

import { store } from './index';

import Application from './components/Application';
import Home from './pages/home'
import Sudoku from './pages/sudoku/index'
import Information from './pages/information/index'

const AppRoutes = (
  <Route path="/" component={Application}>
    <IndexRoute component={Sudoku} />
    {/**<Route path="home">
      <IndexRoute component={Home}/>
    </Route>*/}
    <Route path="sudoku">
      <IndexRoute component={Sudoku}/>
    </Route>
    <Route path="info">
      <IndexRoute component={Information}/>
    </Route>
  </Route>
);

export default AppRoutes;

