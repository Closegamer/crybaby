import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./containers/Home'));
const Tables = lazy(() => import('./containers/Tables'));
const Calculator = lazy(() => import('./containers/Calculator'));
const Robots = lazy(() => import('./containers/Robots'));
const Stories = lazy(() => import('./containers/Stories'));
const Bookmakers = lazy(() => import('./containers/Bookmakers'));
const Windows = lazy(() => import('./containers/Windows'));
const Loads = lazy(() => import('./containers/Loads'));

function Routes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/tables' component={Tables} />
        <Route exact path='/calculator' component={Calculator} />
        <Route exact path='/robots' component={Robots} />
        <Route exact path='/stories' component={Stories} />
        <Route exact path='/bookmakers' component={Bookmakers} />
        <Route exact path='/windows' component={Windows} />
        <Route exact path='/loads' component={Loads} />
      </Switch>
    </Suspense>
  );
}

export default Routes;
