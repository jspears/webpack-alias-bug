var path = require('path')
var webpack = {
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'core/lib': path.resolve("../core/src"),

            'core': path.resolve("../core/src"),
        }
    }
};
module.exports = webpack;
