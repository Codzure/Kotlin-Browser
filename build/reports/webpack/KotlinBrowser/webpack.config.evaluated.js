{
  mode: 'development',
  resolve: {
    modules: [
      '/Users/leonard/IdeaProjects/KotlinBrowser/build/js/packages/KotlinBrowser/kotlin-dce-dev',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/leonard/IdeaProjects/KotlinBrowser/build/js/packages/KotlinBrowser/kotlin-dce-dev/KotlinBrowser.js'
    ]
  },
  output: {
    path: '/Users/leonard/IdeaProjects/KotlinBrowser/build/distributions',
    filename: [Function: filename],
    library: 'KotlinBrowser',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  stats: {
    warningsFilter: [
      /Failed to parse source map/
    ],
    warnings: false,
    errors: false
  },
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      '/Users/leonard/IdeaProjects/KotlinBrowser/build/processedResources/js/main'
    ]
  }
}