import React from 'react';
import About from 'Src/Container/About/About';
import User from 'Src/Container/User/User';
import SuperMarket from 'Src/Container/SuperMarket/SuperMarket';

const path = [
  {
    path: "/",
    exact: true,
    component: () => <h2>Home</h2>
  }, {
    path: "/user",
    component: User
  }, {
    path: "/about",
    component: About
  }, {
    path: "/will-match",
    component: () => <h2>will-match</h2>
  }, {
    path: "/superMarket",
    component: SuperMarket
  }
];

export default path;
