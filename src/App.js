import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Menu from "Src/Menu.js"
import RoutePage from "Src/RoutePage.js"

import "Style/test.css";


class App extends React.Component {
  render() {
    return (<div>
      <Router>
        <Menu/>
        <RoutePage/>
      </Router>
    </div>)
  }
}

export default App;
