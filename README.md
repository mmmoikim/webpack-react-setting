# webpack react setting

- 리액트 셋팅 프로젝트입니다.

## basic webpack setting

- 웹팩 설정

### install webpack & plugins

```bash
npm init
npm install webpack
npm install webpack-cli ## webpack4 cli
npm install webpack-dev-server ## dev-server
npm install webpack-merge ## for config file merget
npm install html-webpack-plugin ## html template
```

### setting build script package.json

```js
  "scripts": {
    "build-dev": "webpack --mode development",
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --open --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

### make directory

```bash
.
├─ webpackconfig
│  ├─ webpack.config.common.js
│  ├─ webpack.config.dev.js
│  ├─ webpack.config.prod.js
│  └─ index.html
├─ src
│  └─ index.js
├─ .gitignore
├─ webpack.config.js ## webpack config file
├─ package-lock.json
└─ package.json
```

### webpack.config.js

- 개발서버랑 빌드용 컨피그 나눠서 관리
- common.js는 둘다 사용하는 config

```js
const merge = require('webpack-merge');
const common = require('./webpackconfig/webpack.config.common.js');
const dev = require('./webpackconfig//webpack.config.dev.js');
const prod = require('./webpackconfig//webpack.config.prod.js');

module.exports = (env, options) => {
    if (options.mode === 'development') {
        return merge(common, dev);
    }
    if (options.mode === 'production') {
        return merge(common, prod);
    }
}
```

### webpack.config.common.js

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(ROOT, 'src');
const BUILD_DIR = path.resolve(ROOT, 'dist');

module.exports = {
    entry: {
        app: [APP_DIR + '/index.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: BUILD_DIR
    },
    plugins: [
        //creation of HTML files to serve your webpack bundles
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        })
    ]
}
```

### index.html

- html-webpack-plugin을 써서 이 html template으로 빌드 할 꺼임.

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>hello</title>
</head>

<body>
    <div id="app"></div>
</body>

</html>
```

### webpack.config.prod.js

```js
const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(ROOT, 'src');
const BUILD_DIR = path.resolve(ROOT, 'dist');

module.exports = {
    mode: 'production'
}
```

### webpack.config.dev.js

```js
const webpack = require('webpack');

const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(ROOT, 'src');
const BUILD_DIR = path.resolve(ROOT, 'dist');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        //By default this is localhost
        host: 'localhost',
        //Enable webpack's Hot Module Replacement
        hot: true,
        //Tell the server where to serve content from
        contentBase: BUILD_DIR,
        // This option allows you to whitelist services that are allowed to access the dev server.
        allowedHosts: ['host.com'],
        //When using the HTML5 History API, the index.html page will likely have to be served in place of any 404 responses
        historyApiFallback: true,
        //Shows a full-screen overlay in the browser when there are compiler errors or warnings
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
```

```js
module.exports = {
    mode: 'production'
}
```

### src/index.js

- 엔트리

```js
function component() {
    var element = document.createElement('pre');
    element.innerHTML = 'HELLO !'
    return element;
}

document.body.appendChild(component());
```

### .gitigore

```bash
/node_modules
/dist
```

### build

```bash
npm run build
npm run dev
```

## webpack Plugins

### clean-webpack-plugin

- clean the /dist folder before each build
- https://webpack.js.org/guides/output-management/

``` js
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

    plugins: [
        new CleanWebpackPlugin()
    ]
```

## babel setting

### install babel

```bash
npm install @babel/core
npm install @babel/plugin-syntax-dynamic-import
npm install @babel/polyfill
npm install @babel/preset-env
npm install babel-loader
```

- @babel/core : Babel compiler core.
- @babel/plugin-syntax-dynamic-import : Allow parsing of import()
- @babel/polyfill : This will emulate a full ES2015+ environment (no < Stage 4 proposals) and is intended to be used in an application rather than a library/tool.
- @babel/preset-env : allows you to use the latest JavaScript without needing to micromanage which syntax transforms
- babel-loader :  allows transpiling JavaScript files using Babel and webpack.

### create babellc file

```js
{
    "presets": ["@babel/preset-env"],
    "plugins": ["@babel/plugin-syntax-dynamic-import"]
}
```

### set webpack module

```js
{
        test: /\.js/,
        exclude: /(node_modules)/,
        use: [{
            loader: 'babel-loader'
        }]
    }
```

## react setting

### install npm module

```bash
npm install react
npm install react-dom
npm install react-router-dom
npm install @babel/preset-react
```

### add babel preset

```js
  {
      "presets": ["@babel/preset-env", "@babel/preset-react"],
      "plugins": ["@babel/plugin-syntax-dynamic-import"]
  }
```

### edit webpack config module

```js
{
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
}
```

## src/index.js
```js
import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div>
    <p>hello</p>
  </div>
);

render(<App />, document.getElementById('app'));

```

## react Router setting

- path.js
```js
import React from 'react';

const path = [
  {
    path: "/",
    exact: true,
    component: () => <h2>Home</h2>
  }, {
    path: "/users",
    component: () => <h2>users</h2>
  }, {
    path: "/about",
    component: () => <h2>about</h2>
  }, {
    path: "/will-match",
    component: () => <h2>will-match</h2>
  }
];

export default path;

```

- Menu.js

```js
import React from 'react';
import {Link} from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (<nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
        <li>
          <Link to="/will-match/">Will Match</Link>
        </li>
        <li>
          <Link to="/old-match/">Old Match, to be redirected</Link>
        </li>
        <li>
          <Link to="/nomatch/">nomatch</Link>
        </li>
      </ul>
    </nav>);
  }
}

export default Menu;

```

- RoutePage.js

```js
import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";

import path from "./path"

class RoutePage extends React.Component {
  render() {
    return (<Switch>
      {
        path.map((obj, index) => {\
          return <Route key={index} path={obj.path} exact={obj.exact} component={obj.component}/>
        })
      }
      <Redirect from="/old-match" to="/will-match"/>
      <Route component={NoMatch}/>
    </Switch>);
  }
}

function NoMatch() {
  return <h2>404</h2>;
}

export default RoutePage;
```

- App.js

```js
import React from 'react';
import Menu from "./Menu.js"
import RoutePage from "./RoutePage.js"
import {BrowserRouter as Router} from "react-router-dom";

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

```


## alias setting
- 절대경로에 호칭 붙이기
- webpack.config
```js
module.exports = {
  resolve: {
    alias: {
      'Src': APP_DIR,
    },
    extensions: ['*', '.js', '.json']
  }
}

```

## css style loader setting
- style-loader : Adds CSS to the DOM by injecting a style tag, It's recommended to combine style-loader with the css-loader
- css-loader : The css-loader interprets import and url() like import/require() and will resolve them.

```js
{
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]', //모듈화 했을때 네이밍
          context: APP_DIR,
        }
      }
    }
  ]
}
```

## postcss setting
- postcss-preset-env : lets you convert modern CSS into something most browsers can understand

```bash
npm install postcss-loader
npm install postcss-preset-env
```

```js
{
  test: /\.css$/,
  use: [
    'style-loader',
    {
      loader: "css-loader",
      options: {
        importLoaders: 1, //The option importLoaders allows you to configure how many loaders before css-loader should be applied to @imported resources.
        modules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
          context: APP_DIR,
        }
      }
    },
    'postcss-loader'
  ]
}
```

- create postcs.config.js file

```js
module.exports = ({ file, options, env }) => ({
   plugins: {
     'postcss-preset-env': {}
   }
})
```
