import React from 'react';
import Menu from "./Menu.js"
import RoutePage from "./RoutePage.js"

class App extends React.Component {
  render() {
    return (
      <div>
      <Menu/>
      <RoutePage/>
      </div>
    )
  }
}


export default App;
