var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'inline-source-map',

    entry: {
        'datepicker': './examples/datepicker/index.js',
        'select': './examples/select',
        'pagination': './examples/pagination/index.js',
        'tree': './examples/tree',
        'dropdown': './examples/dropdown',
        'table': './examples/table'
    },

    output: {
        path: './examples/dist',
        filename: '[name].build.js'
    },
    
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {vue: 'vue/dist/vue.js'}
    },
    
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },

            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },

            { 
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.join(__dirname, 'src')
            },

            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },

            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new webpack.LoaderOptionsPlugin({
            vue: {
                  postcss: [
                    autoprefixer({
                        browsers: ['last 7 versions']
                    })
                ]
            }
        }),

        new webpack.DefinePlugin({
            'process.env': {
                ENV: JSON.stringify('development'),
                NODE_ENV: JSON.stringify('development')
            }
        }),


    ],

    devServer: {
        port: 3000,
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    }
};