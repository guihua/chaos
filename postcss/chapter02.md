PostCSS：Gulp配置
---
在项目中使用Gulp来配置PostCSS。

### 插件配置
package.json中需要配置各个依赖的插件，具体如下：
```
{
  "name": "postcss",
  "version": "0.0.1",
  "description": "PostCSS Gulp Plugin",
  "keywords": [
    "gulpplugin",
    "PostCSS",
    "css"
  ],
  "author": "guihua.pgh",
  "license": "MIT",
  "dependencies": {
    "postcss": "^5.2.0",
    "gulp": "^3.9.1"
  },
  "devDependencies": {
    "autoprefixer": "^6.4.1",
    "cssnext": "^1.8.4",
    "gulp-postcss": "^6.2.0",
    "precss": "^1.4.0"
  }
}
```

进入package.json文件所在的目录，进行插件安装：
```
tnpm install
```


### Gulp任务配置
在gulpfile.js中，需要引入各个插件，且定义执行的任务：
```
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

gulp.task('css', function() {
    var processors = [
        autoprefixer, 
        cssnext, 
        precss
    ];

    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
```

在文件根目录，执行css文件编译：
```
gulp css
```

即可完成css文件编译。