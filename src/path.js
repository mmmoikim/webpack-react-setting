import React from 'react';

const path = [
    {
     path: "/",
     exact: true,
     component: () => <h2>Home</h2>
   },
   {
     path: "/users",
     component: () => <h2>users</h2>
   },
   {
     path: "/about",
     component: () => <h2>about</h2>
   },
   {
     path: "/will-match",
     component: () => <h2>will-match</h2>
   }
];

export default path;
