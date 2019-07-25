# webpack react setting

- 리액트 셋팅 프로젝트입니다.

## install webpack & plugins

```bash
npm init
npm install webpack
npm install webpack-cli ## webpack4 cli
npm install webpack-dev-server ## dev-server
npm install webpack-merge ## for config file merget
npm install html-webpack-plugin ## html template
```

## setting build script package.json

```js
  "scripts": {
    "build-dev": "webpack --mode development",
    "build": "webpack --mode production",
    "dev": "webpack-dev-server --open --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

## make directory

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

## webpack.config.js

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

## webpack.config.common.js

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

## index.html

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

## webpack.config.prod.js

```js
const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(ROOT, 'src');
const BUILD_DIR = path.resolve(ROOT, 'dist');

module.exports = {
    mode: 'production'
}
```

## webpack.config.dev.js
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

## src/index.js

- 엔트리

```js
function component() {
    var element = document.createElement('pre');
    element.innerHTML = 'HELLO !'
    return element;
}

document.body.appendChild(component());
```

## .gitigore

```
/node_modules
/dist
```

## build !

```
npm run build
npm run dev
```