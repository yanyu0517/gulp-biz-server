# gulp-biz-server


[![NPM version](https://img.shields.io/npm/v/gulp-biz-server.svg)](https://www.npmjs.com/package/gulp-biz-server)
[![NPM downloads total](https://img.shields.io/npm/dt/gulp-biz-server.svg)](https://www.npmjs.com/package/gulp-biz-server)
[![NPM license](https://img.shields.io/npm/l/gulp-biz-server.svg)](https://www.npmjs.com/package/gulp-biz-server)

biz-server gulp plugin


[![NPM Stat](https://nodei.co/npm/gulp-biz-server.png?downloads=true)](https://nodei.co/npm/gulp-biz-server)


## 配置

配置与[biz-server](https://github.com/yanyu0517/biz-server)的options一致

## 用法

    gulp.src('').pipe(bizserver({
    	port: 8088
    }))

上面会在当前文件夹打开一个8088的web server

mock功能配置为`/config/mockConfig.json`

mock功能配置文件可以参考[biz-mock](https://github.com/yanyu0517/biz-mock)

## demo

demo是基于[biz-ui](https://github.com/bizdevfe/biz-ui)实现的

    git clone https://github.com/yanyu0517/gulp-biz-server

    cd gulp-biz-server

    npm install 

    npm run demo


[demo code](https://github.com/yanyu0517/gulp-biz-server/tree/master/demo)

## License

Licensed under the [MIT license](http://opensource.org/licenses/MIT).





