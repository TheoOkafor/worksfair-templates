import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './css/index.scss';
const PersonalPerfect = React.lazy(() =>
  import('./containers/PersonalPerfect')
);
const CorporateCool = React.lazy(() => import('./containers/CorporateCool'));
const NotFound = React.lazy(() => import('./containers/NotFound'));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/personal-perfect">
              <PersonalPerfect />
            </Route>
            <Route exact path="/corporate-cool">
              <CorporateCool />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
