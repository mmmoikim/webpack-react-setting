import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Menu from "Src/Menu.js"
import RoutePage from "Src/RoutePage.js"

const App = () => {
    return (<div>
      <Router basename="/webpack-react-setting">
        <Menu/>
        <RoutePage/>
      </Router>
    </div>)
}


export default App;
