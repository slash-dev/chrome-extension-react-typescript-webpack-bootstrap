const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [{
  entry: {
    popup: './src/popup/popup.tsx',
    background: './src/background/background.ts',
    options: './src/options/Options.tsx',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', ".js", ".jsx", ".png", ".less"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file'
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            lessOptions: {
              modifyVars: {
                // TODO: change the overrides.
                'primary-color': '#1DA57A'
              },
              javascriptEnabled: true,
            },
          },
        }],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/popup/popup.html',
      filename: 'popup.html',
      inject: 'body',
      chunks: ['popup']
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/background/index.html',
      filename: 'background.html',
      inject: 'body',
      chunks: ['background']
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/options/options.html',
      filename: 'options.html',
      inject: 'body',
      chunks: ['options']
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
  ]
},
{
  entry: {
    contentscript: './src/content_script/ContentScript.ts',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: '[name]',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['.tsx', '.ts', ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}];