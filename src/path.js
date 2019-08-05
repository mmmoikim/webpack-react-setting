import React from 'react';
import About from 'Src/Container/About';
import User from 'Src/Container/User';

const path = [
  {
    path: "/",
    exact: true,
    component: () => <h2>Home</h2>
  }, {
    path: "/users",
    component: User
  }, {
    path: "/about",
    component: About
  }, {
    path: "/will-match",
    component: () => <h2>will-match</h2>
  }
];

export default path;
