var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ProvidePlugin = require('webpack/lib/ProvidePlugin')
// var sprite = require('sprite-webpack-plugin')
var StyleLintPlugin = require('stylelint-webpack-plugin');
// var tinyPngWebpackPlugin = require('tinypng-webpack-plugin');
// var autoprefixer = require('autoprefixer');

var env = process.env.NODE_ENV
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
    app: './src/assets/js/main.js',
    font_icons: "./src/assets/js/font_icons"
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue', '.scss', '.pug'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'images': path.resolve(__dirname, '../src/assets/images'),
      'components': path.resolve(__dirname, '../src/components')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  devtool: "source-map",
  module: {
    preLoaders: [
      {
        test: /\.vue$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'eslint',
        include: projectRoot,
        exclude: /node_modules/
      },
    ],
    loaders: [
      {
        test: /font_icons\.(js|json)$/,
        loader: ExtractTextPlugin.extract('style-loader', 'raw-loader!string-replace-loader?search=url%5C("%5C/&replace=url("&flags=gm!fontgen-loader', {
            publicPath: '../'
        })
      },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!resolve-url-loader!sass-loader?sourceMap', {
                publicPath: '../'
            })
        },

      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
      {
        test: /\.pug$/,
        loader: "pug?pretty=true"
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },

      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        loader: 'file',
        query: {
          limit: 10000,
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogv)(\?.*)?$/,
        loader: 'file',
        query: {
          limit: 10000,
          name: 'videos/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'fonts/[name].[hash:3].[ext]'
        }
    },

    ]
  },
  plugins: [
    // new sprite({
    //     'source' : path.resolve(__dirname, '../src/assets/images/images_for_sprite'),
    //     'imgPath': path.resolve(__dirname, '../src/assets/images/sprite'),
    //     'cssPath': path.resolve(__dirname, '../src/assets/scss/'),
    //     'processor': 'scss'
    // }),
      //
      //   new tinyPngWebpackPlugin({
      //     key:"",
      //     relativePath: path.resolve(__dirname, '../src/assets/images/')//can be array,is relative path to output.puth
      // }),

    new StyleLintPlugin({
        configFile: '.stylelintrc.js',
        syntax: 'scss',
        files: ['src/assets/scss/**/*.s?(a|c)ss']
    }),

    new ExtractTextPlugin('css/[name].css', {
        allChunks: true
    }),

    new ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        "Tether": 'tether',
        "window.Tether": "tether"
    })
  ],
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  sassLoader: {
    includePaths: [
      'node_modules'
    ]
  },
  postcss: [
      require('autoprefixer')({
        browsers: ['last 10 versions']
      })
  ],
  vue: {
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
}, node: {
    global: 'window',
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

}
