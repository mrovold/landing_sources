const path = require('path'); // подключаем пакет path, он нужен для того чтобы webpack корректно прописывал пути, сам webpack ищет пути начиная с корня диска (c://user и т.д.)
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
};

module.exports = {

  externals: {
    paths: PATHS
  },

  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js' // входной файл, webpack будет собиратья пакеты/файлы и всё остальное исходя из того что написано в этом файле
  },
  output: {
    filename: 'js/[name].js', // [name] берётся из ярлыка в объекте entry, в данном случае [name] будет равно index, если входных точек/файлов несколько, то выходные будут создаваться автоматически с соответствующими именами
    path: PATHS.dist, // то место куда будет сохраняться собранный js файл [name].js
    publicPath: '', // publicPath нужен для dev сервера
    clean: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: { esModule: false }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: false, url: false }
          },
          {
            loader: 'postcss-loader',
            options: {}
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: false,}
          }
        ]
      },
      {
        test: /\.(ttf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]'
        }
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      '~': 'src',
      vue$: 'vue/dist/vue.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(
      {
        filename: `${PATHS.assets}css/main.css`
      }
    ),
    new HTMLWebpackPlugin({
      hash: false,
      template: `${PATHS.src}/index.html`,
      filename: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/${PATHS.assets}/img`, to: `${PATHS.assets}/img` },
        { from: `${PATHS.src}/${PATHS.assets}/fonts`, to: `${PATHS.assets}/fonts` },
        { from: `${PATHS.src}/${PATHS.assets}/static`, to: '' }
      ]
    })
  ]
};
