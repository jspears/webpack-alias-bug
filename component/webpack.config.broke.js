var path = require('path')
var webpack = {
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'core': path.resolve("../core/src"),
            'core/lib': path.resolve("../core/src"),

        }
    }
};
module.exports = webpack;
