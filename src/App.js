import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/index.scss";
import routes from "./routes";

const Home = React.lazy(() => import("./containers/App/Home"));
const NotFound = React.lazy(() => import("./containers/App/NotFound"));

function App() {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            {routes.map((item) => (
              <Route key={item.route} exact path={item.route}>
                <item.component />
              </Route>
            ))}
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
