Gulp任务执行
---

### 1.引入插件
将package.json中定义的插件引入进来：
```
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var cssBase64 = require('gulp-css-base64');
var include = require('gulp-include');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var sftp = require('gulp-sftp');
var browserSync = require('browser-sync');
var yargs = require('yargs').argv;
```


### 2.参数定义
```
var dist = __dirname + '/projects';

// SFTP参数
var host = '',
    user = '',
    pass = '',
    remotePath = '/home/admin/crm-mobile-server/target/crm-mobile-server.war/htdocs/frontend';

var projectName = 'dataCenter', // 项目名称
    baseHtml = '', // html文件路径
    baseScss = '', // scss文件路径
    baseImg = '', // images文件路径
    baseJs = '', // js开发文件路径
    htmlDist = '', // html文件路径
    cssDist = '', // css文件路径
    jsDist = '', // js编译文件路径
    imgDist = '',
    htmlRemotePath = '',
    cssRemotePath = '',
    imgRemotePath = '',
    jsRemotePath = '';
```


### 3.执行任务
默认任务：
```
gulp.task('default', function() {
    baseHtml = 'projects/' + projectName + '/*.mh5';
    baseScss = 'projects/' + projectName + '/scss/*.scss';
    baseJs = 'projects/' + projectName + '/js-dev/*.js';
    baseImg = 'projects/' + projectName + '/images/*.{png,jpg,gif}';

    htmlDist = dist.concat('/', projectName);
    cssDist = dist.concat('/', projectName, '/', 'css');
    jsDist = dist.concat('/', projectName, '/', 'js');
    imgDist = dist.concat('/', projectName, '/', 'images');

    htmlRemotePath = remotePath.concat('/projects/', projectName);
    cssRemotePath = remotePath.concat('/projects/', projectName, '/', 'css/');
    imgRemotePath = remotePath.concat('/projects/', projectName, '/', 'images/');
    jsRemotePath = remotePath.concat('/projects/', projectName, '/', 'js/');

    // 执行任务
    gulp.start('htmlSync', 'styles', 'imgSync', 'script', 'watch');
});
```

html同步：
```
gulp.task('htmlSync', function() {
    gulp.src(baseHtml)
        .pipe(browserSync.reload({
            stream: true
        }));
});
```

scss编译：
```
gulp.task('styles', function() {
    gulp.src(baseScss)
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', function(e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(autoprefixer())
        .pipe(changed(cssDist))
        .pipe(minifyCss())
        .pipe(gulp.dest(cssDist))
        .pipe(browserSync.reload({
            stream: true
        }));
});
```

images同步：
```
gulp.task('imgSync', function() {
    gulp.src(baseImg)
        .pipe(browserSync.reload({
            stream: true
        }));
});
```

js编译：
```
gulp.task('script', function() {
    gulp.src(baseJs)
        .pipe(include())
        .pipe(changed(jsDist))
        .pipe(uglify())
        .pipe(gulp.dest(jsDist))
        .pipe(browserSync.reload({
            stream: true
        }));
});
```

监视：
```
gulp.task('watch', function() {
    gulp.watch(baseHtml, ['htmlSync']);

    gulp.watch(baseScss, ['styles']);

    gulp.watch(baseImg, ['imgSync']);

    gulp.watch(baseJs, ['script']);
});
```

完整的gulpfile.js文件如下：
```
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var cssBase64 = require('gulp-css-base64');
var include = require('gulp-include');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var sftp = require('gulp-sftp');
var browserSync = require('browser-sync');
var yargs = require('yargs').argv;

var dist = __dirname + '/projects';

// SFTP参数
var host = '',
    user = '',
    pass = '',
    remotePath = '/home/admin/crm-mobile-server/target/crm-mobile-server.war/htdocs/frontend';

var projectName = 'dataCenter', // 项目名称
    baseHtml = '', // html文件路径
    baseScss = '', // scss文件路径
    baseImg = '', // images文件路径
    baseJs = '', // js开发文件路径
    htmlDist = '', // html文件路径
    cssDist = '', // css文件路径
    jsDist = '', // js编译文件路径
    imgDist = '',
    htmlRemotePath = '',
    cssRemotePath = '',
    imgRemotePath = '',
    jsRemotePath = '';

gulp.task('default', function() {
    baseHtml = 'projects/' + projectName + '/*.mh5';
    baseScss = 'projects/' + projectName + '/scss/*.scss';
    baseJs = 'projects/' + projectName + '/js-dev/*.js';
    baseImg = 'projects/' + projectName + '/images/*.{png,jpg,gif}';

    htmlDist = dist.concat('/', projectName);
    cssDist = dist.concat('/', projectName, '/', 'css');
    jsDist = dist.concat('/', projectName, '/', 'js');
    imgDist = dist.concat('/', projectName, '/', 'images');

    htmlRemotePath = remotePath.concat('/projects/', projectName);
    cssRemotePath = remotePath.concat('/projects/', projectName, '/', 'css/');
    imgRemotePath = remotePath.concat('/projects/', projectName, '/', 'images/');
    jsRemotePath = remotePath.concat('/projects/', projectName, '/', 'js/');

    // 执行任务
    gulp.start('htmlSync', 'styles', 'imgSync', 'script', 'watch');
});

gulp.task('htmlSync', function() {
    gulp.src(baseHtml)
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('styles', function() {
    gulp.src(baseScss)
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', function(e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(autoprefixer())
        .pipe(changed(cssDist))
        .pipe(minifyCss())
        .pipe(gulp.dest(cssDist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('imgSync', function() {
    gulp.src(baseImg)
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('script', function() {
    gulp.src(baseJs)
        .pipe(include())
        .pipe(changed(jsDist))
        .pipe(uglify())
        .pipe(gulp.dest(jsDist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function() {
    gulp.watch(baseHtml, ['htmlSync']);

    gulp.watch(baseScss, ['styles']);

    gulp.watch(baseImg, ['imgSync']);

    gulp.watch(baseJs, ['script']);
});
```

Gulp进行项目编译时，还可以通过SFTP插件进行代码同步，完整的代码如下：
```
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    cssBase64 = require('gulp-css-base64'),
    include = require('gulp-include'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    changed = require('gulp-changed'),
    sftp = require('gulp-sftp'),
    browserSync = require('browser-sync'),
    yargs = require('yargs').argv;

var dist = __dirname + '/projects';

// SFTP参数
var host = '',
    user = '',
    pass = '',
    remotePath = '/home/admin/crm-mobile-server/target/crm-mobile-server.war/htdocs/frontend';

var projectName = '', // 项目名称
    baseHtml = '', // html文件路径
    baseScss = '', // scss文件路径
    baseImg = '', // images文件路径
    baseJs = '', // js开发文件路径
    htmlDist = '', // html文件路径
    cssDist = '', // css文件路径
    jsDist = '', // js编译文件路径
    imgDist = '',
    htmlRemotePath = '',
    cssRemotePath = '',
    imgRemotePath = '',
    jsRemotePath = '';

// 默认任务
gulp.task('default', function() {
    if (!yargs.project || !yargs.host) {
        console.log('-----------------------');
        console.log('你输入的格式不合法，标准执行格式为：gulp --project=projectName --host=IP，其中projectName为开发项目名称，host为服务器IP。');
        console.log('示例：gulp --project=manageView --host=10.125.0.110，该命令执行manageView项目的编译，服务器IP为10.125.0.110。');
        console.log('服务器的user和pass缺省为admin，非该值时请补全参数，完整格式如下：');
        console.log('gulp --project=projectName --host=IP --user=username --pass=password');
        console.log('-----------------------');
        return;
    }

    projectName = yargs.project;
    host = yargs.host;

    baseHtml = 'projects/' + projectName + '/*.mh5';
    baseScss = 'projects/' + projectName + '/scss/*.scss';
    baseJs = 'projects/' + projectName + '/js-dev/*.js';
    baseImg = 'projects/' + projectName + '/images/*.{png,jpg,gif}';

    htmlDist = dist.concat('/', projectName);
    cssDist = dist.concat('/', projectName, '/', 'css');
    jsDist = dist.concat('/', projectName, '/', 'js');
    imgDist = dist.concat('/', projectName, '/', 'images');

    htmlRemotePath = remotePath.concat('/projects/', projectName);
    cssRemotePath = remotePath.concat('/projects/', projectName, '/', 'css/');
    imgRemotePath = remotePath.concat('/projects/', projectName, '/', 'images/');
    jsRemotePath = remotePath.concat('/projects/', projectName, '/', 'js/');

    // 执行任务
    gulp.start('htmlSync', 'styles', 'imgSync', 'script', 'watch');
});

// html同步
gulp.task('htmlSync', function() {
    gulp.src(baseHtml)
        .pipe(sftp({
            host: host,
            user: user,
            pass: pass,
            remotePath: htmlRemotePath
        }))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// scss编译
gulp.task('styles', function() {
    gulp.src(baseScss)
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', function(e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(autoprefixer())
        .pipe(changed(cssDist))
        .pipe(minifyCss())
        .pipe(gulp.dest(cssDist))
        .pipe(sftp({
            host: host,
            user: user,
            pass: pass,
            remotePath: cssRemotePath
        }))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// images同步
gulp.task('imgSync', function() {
    gulp.src(baseImg)
        .pipe(sftp({
            host: host,
            user: user,
            pass: pass,
            remotePath: imgRemotePath
        }))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// js编译
gulp.task('script', function() {
    gulp.src(baseJs)
        .pipe(include())
        .pipe(changed(jsDist))
        .pipe(uglify())
        .pipe(gulp.dest(jsDist))
        .pipe(sftp({
            host: host,
            user: user,
            pass: pass,
            remotePath: jsRemotePath
        }))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// 监视
gulp.task('watch', function() {
    gulp.watch(baseHtml, ['htmlSync']);

    gulp.watch(baseScss, ['styles']);

    gulp.watch(baseImg, ['imgSync']);

    gulp.watch(baseJs, ['script']);
});
```