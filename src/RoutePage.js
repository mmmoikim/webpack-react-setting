import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import path from "./path"

class RoutePage extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {path.map((obj, index) => (
            <Route
              key={index}
              path={obj.path}
              exact={obj.exact}
              component={obj.component}
            />
          ))}
          <Redirect from="/old-match" to="/will-match" />
          <Route component={NoMatch} />
        </Switch>
      </Router>
   );
 }
}


function NoMatch() {
  return <h2>404</h2>;
}

export default RoutePage;
