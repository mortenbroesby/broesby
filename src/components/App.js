import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Description from './Description';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';

import s from '../styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>Broesby.dk</h1>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={Description} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
