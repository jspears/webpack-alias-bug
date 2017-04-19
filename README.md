Alias issue
===
So alias order matters, which is strange because it is an object, and objects don't have an order.


For example this does not work.
```js

{
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'core': path.resolve("../core/src"),
            'core/lib': path.resolve("../core/src")

        }
    }
}

```
While this does work,
```js
{
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            //core/lib first works!
            'core/lib': path.resolve("../core/src"),

            'core': path.resolve("../core/src"),
        }
    }
};

```

## Install
```bash
    $ git clone git@github.com:jspears/webpack-alias-bug.git
    $ cd webpack-alias-bug
    $ npm install
  
```

## Example
To see the problem

```sh
  $ cd component
  $ ../node_modules/.bin/webpack --entry ./src/index.js --output-filename=dist.js --config ./webpack.config.broke.js 
```
Output:
 ```
Hash: 86b2177a6a22d94a5c0f
Version: webpack 2.4.1
Time: 68ms
  Asset    Size  Chunks             Chunk Names
dist.js  3.1 kB       0  [emitted]  null
   [0] ../core/src/Stuff.js 25 bytes {0} [built]
   [1] ../core/src/index.js 26 bytes {0} [built]
   [2] ./src/index.js 144 bytes {0} [built]

ERROR in ./src/index.js
Module not found: Error: Can't resolve 'core/lib/dir/More' in '/Users/jspear1/walmart/webpack-alias-bug/component/src'
 @ ./src/index.js 2:11-39

```

While webpack.config.js succeeds
```bash
../node_modules/.bin/webpack --entry ./src/index.js --output-filename=dist.js --config webpack.config.js

```
Output:
```
Hash: f0e24c99f141f8cb103c
Version: webpack 2.4.1
Time: 63ms
  Asset     Size  Chunks             Chunk Names
dist.js  3.05 kB       0  [emitted]  null
   [0] ../core/src/Stuff.js 25 bytes {0} [built]
   [1] ../core/src/dir/More.js 25 bytes {0} [built]
   [2] ../core/src/index.js 26 bytes {0} [built]
   [3] ./src/index.js 144 bytes {0} [built]

```
