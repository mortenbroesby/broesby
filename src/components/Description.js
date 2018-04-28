import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';

import PageNotFound from './PageNotFound';
import s from '../styles/description.style';

const ExamplePageText = () => (
  <p style={s.p}>
    This page is under construction. Testing functionality.
  </p>
);

export default function ExampleComponent() {
  return (
    <Switch>
      <Route
        exact path="/example"
        render={() => (
          <div>
            <ExamplePageText />
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}
