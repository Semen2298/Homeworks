const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js', // Точка входа
  output: {
    filename: 'main.js', // Имя бандла
    path: path.resolve(__dirname, 'dist'), // Папка для сборки
    clean: true, // Очистка папки dist перед каждой сборкой
  },
  mode: 'development', // Режим разработки
  devServer: {
    static: './dist', // Папка для сервера разработки
    port: 8080, // Порт
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Работа с CSS
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/, // Работа с JS
        exclude: /node_modules/, // Исключение для node_modules
        use: 'babel-loader',
      },
      {
        test: /\.html$/, // Работа с HTML
        use: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Шаблон HTML
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css', // Имя файла CSS
    }),
  ],
};
