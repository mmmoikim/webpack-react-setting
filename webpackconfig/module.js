module.exports = {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader']
      }]
}
