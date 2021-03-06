import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import App from "Src/App.js"
import RootStore from './stores';

const root = new RootStore(); // *** 루트 스토어 생성

ReactDOM.render(<Provider {...root} >
  <App/>
</Provider>, document.getElementById('app'));
