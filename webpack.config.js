var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var pkg = require('./package.json');
var banner = `${pkg.name} v${pkg.version}\n${pkg.description}\n${pkg.homepage}\n@author ${pkg.author}`;

var optimist = require('optimist');
var ENV = optimist.argv.env || 'dev';

module.exports = {
    entry: {
        'vue-swiper': path.join(__dirname, 'src/vue-swiper.vue')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        library: 'VueSwiper',
        libraryTarget: 'umd',
        filename: "[name].js"
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.vue$/, loader: 'vue'},
            {test: /\.less$/, loader: "css?sourceMap!postcss!less?sourceMap"}
        ]
    },
    postcss: [autoprefixer({browsers: ['last 2 versions', '0.5%']})],
    babel: {
        "presets": ["es2015"]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `"${ENV}"`
            }
        })
    ],
    externals: {
        // require("vue") is external and available
        //  on the global var Vue
        'vue': 'Vue',
    }
};



if (ENV === 'dev') {
    // module.exports.devtool = '#eval-source-map';
} else {
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: true
    }));
    module.exports.plugins.push(new webpack.BannerPlugin(banner));
    module.exports.output.filename = "[name].min.js";
}
