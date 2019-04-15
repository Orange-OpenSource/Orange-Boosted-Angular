// Helper: root() is defined at the bottom
var path = require('path');
var webpack = require('webpack');

// Webpack Plugins
//var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const METADATA = {
  baseUrl: '.',
};

const ANGULAR_V_KEY = '@angular/common';
const NGBOOTSTRAP_V_KEY = '@ng-bootstrap/ng-bootstrap';

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTestWatch = ENV === 'test-watch';
var isTest = ENV === 'test' || isTestWatch;
var isProd = ENV === 'build:docs';

module.exports = function makeWebpackConfig() {
  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {};

  /**
   *  Mode
   *  Reference: https://webpack.js.org/concepts/mode/#usage
   */
  config.mode = 'none';
  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  if (isProd) {
    config.devtool = 'source-map';
  }
  else if (isTest) {
    config.devtool = 'inline-source-map';
  }
  else {
    config.devtool = 'eval-source-map';
  }

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   */
  config.entry = isTest ? {
    'module': './src/index.ts'
    } : {
    'polyfills': './docs/polyfills.ts',
    'vendor': './docs/vendor.ts',
    'app': './docs/main.ts' // our angular app
  };

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   */
  config.output = isTest ? {} : {
    path: isProd ? root('_gh_pages') : root('.tmp'),
    publicPath: isProd ? '/' : 'http://localhost:3030/',
    filename: isProd ? 'js/[name].[hash].js' : 'js/[name].js',
    chunkFilename: isProd ? '[id].[hash].chunk.js' : '[id].chunk.js'
  };

  /**
   * Resolve
   * Reference: http://webpack.github.io/docs/configuration.html#resolve
   */
  config.resolve = {
    // only discover files that have those extensions
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
    modules: [root('node_modules')]
  };

  var atlOptions = '';
  if (isTest && !isTestWatch) {
    // rs-loader needs to output inlineSourceMap for code coverage to work with source maps.
    atlOptions = 'inlineSourceMap=true&sourceMap=false';
  }

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */
  config.module = {
    rules: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loaders: ['ts-loader?' + atlOptions, 'angular2-template-loader', '@angularclass/hmr-loader'],
        exclude: [isTest ? /\.(e2e)\.ts$/ : /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/]
      },
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      /* load fonts for css files */
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use : [
          {
            loader: 'file-loader',
            options: {
              name:'assets/fonts/[name].[ext]'
            }
          }
        ]
      },

      // Support for *.json files.
      {test: /\.json$/, use: 'json-loader'},

      // Support for CSS as raw text
      // use 'null' loader in test mode (https://github.com/webpack/null-loader)
      // all css in src/style will be bundled in an external css file
      {
        test: /\.css$/,
        exclude: root('assets/css'),
        // use: isTest ? 'null-loader' : ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'postcss-loader']})
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            //options: { root: '.', minimize: isProd }
          }
        ]
      },
      // all css required in src/app files will be merged in js files
      {test: /\.css$/, include: root('assets/css'), use: 'raw-loader!postcss-loader'},

      // support for .html as raw text
      // todo: change the loader to something that adds a hash to images
      {test: /\.html$/, use: 'raw-loader',  exclude: root('docs/index.html')},
      // remove warning on system.import
      {
        test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
        parser: { system: true, commonjs: true },  // enable SystemJS
      }
    ]
  };

  /**
   * Plugins
   * Reference: http://webpack.github.io/docs/configuration.html#plugins
   * List: http://webpack.github.io/docs/list-of-plugins.html
   */
  config.plugins = [
    // Define env variables to help with builds
    // Reference: https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      // Environment helpers
      'process.env': {
        ENV: JSON.stringify(ENV)
      },
      NGBOOSTED_VERSION: JSON.stringify(require(root('package-dist.json')).version),
      BOOSTED_VERSION: JSON.stringify(require(root('package.json')).dependencies.boosted),
      ANGULAR_VERSION: JSON.stringify(require(root('package.json')).dependencies[ANGULAR_V_KEY]),
      NGBOOTSTRAP_VERSION: JSON.stringify(require(root('package.json')).dependencies[NGBOOTSTRAP_V_KEY])
    }),

    // Workaround needed for angular 2 angular/angular#11580
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /@angular(\\|\/)core(\\|\/)fesm5(\\|\/)esm5/,
        root('./docs') // location of your src
      ),

    // Tslint configuration for webpack 2
    new webpack.LoaderOptionsPlugin({
      options: {
        /**
         * PostCSS
         * Reference: https://github.com/postcss/autoprefixer-core
         * Add vendor prefixes to your css
         */
        postcss: [
          autoprefixer({
            browsers: ['last 2 version']
          })
        ]
      }
    }),
  ];

  if (!isTest && !isTestWatch) {
    // Generate common chunks if necessary
    // Reference: https://webpack.github.io/docs/code-splitting.html
    // Reference: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
    // new CommonsChunkPlugin({
    //  name: ['vendor', 'polyfills']
    // }),
    config.plugins = {
        optimization: {
          splitChunks: {
            cachedGroups: {
              vendor : {
                name: 'vendor',
                chunks: 'all',
                enforce: true,
                priorit: 1
              },
              polyfills: {
                name: "polyfills",
                enforce: true,
                priority: 2
              }
            }
          }
        }
      },
      config.plugins= [
      // Inject script and link tags into html files
      // Reference: https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        template: './docs/index.html',
        chunksSortMode: 'dependency',
        metadata: METADATA
      }),

      // Extract css files
      // Reference: https://github.com/webpack/extract-text-webpack-plugin
      // Disabled when in test mode or not in build mode
      new ExtractTextPlugin({filename: 'assets/css/[name].[hash].css', disable: !isProd}),

      new CopyWebpackPlugin([{
        from: root('docs/assets/img'),
        to: 'assets/img'
      }]),

      new CopyWebpackPlugin([{
        from: root('docs/assets/lang'),
        to: 'assets/i18n'
      }])
    ]
  }

  // Add build specific plugins
  if (isProd) {
    config.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoEmitOnErrorsPlugin()

      // // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // // Dedupe modules in the output
      // new webpack.optimize.DedupePlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      // new webpack.optimize.UglifyJsPlugin({sourceMap: true, mangle: { keep_fnames: true }})

    );
  }

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: '.tmp',
    host: 'localhost',
    port: 3030,
    historyApiFallback: true,
    quiet: true,
    stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
  };
  return config;
}();

// Helper functions
function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}
