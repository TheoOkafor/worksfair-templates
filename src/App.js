import React from 'react';
import {
  BrowserRouter as Router,

  Switch,
  Route,
} from 'react-router-dom';

import './css/index.scss';
import PersonalPerfect from './containers/PersonalPerfect';
import NotFound from './containers/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/personal-perfect">
            <PersonalPerfect />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
