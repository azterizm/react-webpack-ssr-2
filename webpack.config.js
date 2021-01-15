const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

const common = {
  mode: 'development',
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
}

const client = {
  name: 'client',
  target: 'web',
  entry: path.resolve('src/client.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: m => /node_modules/.test(m.resource),
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  ...common
}

const server = {
  name: 'server',
  target: 'node',
  externals: [webpackNodeExternals()],
  entry: path.resolve('src/server.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [ new MiniCssExtractPlugin({ filename: 'styles.css' }) ],

  ...common,
}

module.exports = [client, server]
