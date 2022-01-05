import{d as s}from"./app.f239267c.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h2 id="gulp\u4EFB\u52A1\u6267\u884C" tabindex="-1"><a class="header-anchor" href="#gulp\u4EFB\u52A1\u6267\u884C" aria-hidden="true">#</a> Gulp\u4EFB\u52A1\u6267\u884C</h2><h3 id="_1-\u5F15\u5165\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u5F15\u5165\u63D2\u4EF6" aria-hidden="true">#</a> 1.\u5F15\u5165\u63D2\u4EF6</h3><p>\u5C06package.json\u4E2D\u5B9A\u4E49\u7684\u63D2\u4EF6\u5F15\u5165\u8FDB\u6765\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var gulp = require(&#39;gulp&#39;);
var sass = require(&#39;gulp-sass&#39;);
var sourcemaps = require(&#39;gulp-sourcemaps&#39;);
var autoprefixer = require(&#39;gulp-autoprefixer&#39;);
var minifyCss = require(&#39;gulp-minify-css&#39;);
var cssBase64 = require(&#39;gulp-css-base64&#39;);
var include = require(&#39;gulp-include&#39;);
var uglify = require(&#39;gulp-uglify&#39;);
var rename = require(&#39;gulp-rename&#39;);
var changed = require(&#39;gulp-changed&#39;);
var sftp = require(&#39;gulp-sftp&#39;);
var browserSync = require(&#39;browser-sync&#39;);
var yargs = require(&#39;yargs&#39;).argv;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="_2-\u53C2\u6570\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_2-\u53C2\u6570\u5B9A\u4E49" aria-hidden="true">#</a> 2.\u53C2\u6570\u5B9A\u4E49</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var dist = __dirname + &#39;/projects&#39;;

// SFTP\u53C2\u6570
var host = &#39;&#39;,
    user = &#39;&#39;,
    pass = &#39;&#39;,
    remotePath = &#39;/home/admin/crm-mobile-server/target/crm-mobile-server.war/htdocs/frontend&#39;;

var projectName = &#39;dataCenter&#39;, // \u9879\u76EE\u540D\u79F0
    baseHtml = &#39;&#39;, // html\u6587\u4EF6\u8DEF\u5F84
    baseScss = &#39;&#39;, // scss\u6587\u4EF6\u8DEF\u5F84
    baseImg = &#39;&#39;, // images\u6587\u4EF6\u8DEF\u5F84
    baseJs = &#39;&#39;, // js\u5F00\u53D1\u6587\u4EF6\u8DEF\u5F84
    htmlDist = &#39;&#39;, // html\u6587\u4EF6\u8DEF\u5F84
    cssDist = &#39;&#39;, // css\u6587\u4EF6\u8DEF\u5F84
    jsDist = &#39;&#39;, // js\u7F16\u8BD1\u6587\u4EF6\u8DEF\u5F84
    imgDist = &#39;&#39;,
    htmlRemotePath = &#39;&#39;,
    cssRemotePath = &#39;&#39;,
    imgRemotePath = &#39;&#39;,
    jsRemotePath = &#39;&#39;;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="_3-\u6267\u884C\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-\u6267\u884C\u4EFB\u52A1" aria-hidden="true">#</a> 3.\u6267\u884C\u4EFB\u52A1</h3><p>\u9ED8\u8BA4\u4EFB\u52A1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gulp.task(&#39;default&#39;, function() {
    baseHtml = &#39;projects/&#39; + projectName + &#39;/*.mh5&#39;;
    baseScss = &#39;projects/&#39; + projectName + &#39;/scss/*.scss&#39;;
    baseJs = &#39;projects/&#39; + projectName + &#39;/js-dev/*.js&#39;;
    baseImg = &#39;projects/&#39; + projectName + &#39;/images/*.{png,jpg,gif}&#39;;

    htmlDist = dist.concat(&#39;/&#39;, projectName);
    cssDist = dist.concat(&#39;/&#39;, projectName, &#39;/&#39;, &#39;css&#39;);
    jsDist = dist.concat(&#39;/&#39;, projectName, &#39;/&#39;, &#39;js&#39;);
    imgDist = dist.concat(&#39;/&#39;, projectName, &#39;/&#39;, &#39;images&#39;);

    htmlRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName);
    cssRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName, &#39;/&#39;, &#39;css/&#39;);
    imgRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName, &#39;/&#39;, &#39;images/&#39;);
    jsRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName, &#39;/&#39;, &#39;js/&#39;);

    // \u6267\u884C\u4EFB\u52A1
    gulp.start(&#39;htmlSync&#39;, &#39;styles&#39;, &#39;imgSync&#39;, &#39;script&#39;, &#39;watch&#39;);
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>html\u540C\u6B65\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gulp.task(&#39;htmlSync&#39;, function() {
    gulp.src(baseHtml)
        .pipe(browserSync.reload({
            stream: true
        }));
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>scss\u7F16\u8BD1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gulp.task(&#39;styles&#39;, function() {
    gulp.src(baseScss)
        .pipe(sass({
            outputStyle: &#39;expanded&#39;
        }).on(&#39;error&#39;, function(e) {
            console.error(e.message);
            this.emit(&#39;end&#39;);
        }))
        .pipe(autoprefixer())
        .pipe(changed(cssDist))
        .pipe(minifyCss())
        .pipe(gulp.dest(cssDist))
        .pipe(browserSync.reload({
            stream: true
        }));
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>images\u540C\u6B65\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gulp.task(&#39;imgSync&#39;, function() {
    gulp.src(baseImg)
        .pipe(browserSync.reload({
            stream: true
        }));
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>js\u7F16\u8BD1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gulp.task(&#39;script&#39;, function() {
    gulp.src(baseJs)
        .pipe(include())
        .pipe(changed(jsDist))
        .pipe(uglify())
        .pipe(gulp.dest(jsDist))
        .pipe(browserSync.reload({
            stream: true
        }));
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u76D1\u89C6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gulp.task(&#39;watch&#39;, function() {
    gulp.watch(baseHtml, [&#39;htmlSync&#39;]);

    gulp.watch(baseScss, [&#39;styles&#39;]);

    gulp.watch(baseImg, [&#39;imgSync&#39;]);

    gulp.watch(baseJs, [&#39;script&#39;]);
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5B8C\u6574\u7684gulpfile.js\u6587\u4EF6\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var gulp = require(&#39;gulp&#39;);
var sass = require(&#39;gulp-sass&#39;);
var sourcemaps = require(&#39;gulp-sourcemaps&#39;);
var autoprefixer = require(&#39;gulp-autoprefixer&#39;);
var minifyCss = require(&#39;gulp-minify-css&#39;);
var cssBase64 = require(&#39;gulp-css-base64&#39;);
var include = require(&#39;gulp-include&#39;);
var uglify = require(&#39;gulp-uglify&#39;);
var rename = require(&#39;gulp-rename&#39;);
var changed = require(&#39;gulp-changed&#39;);
var sftp = require(&#39;gulp-sftp&#39;);
var browserSync = require(&#39;browser-sync&#39;);
var yargs = require(&#39;yargs&#39;).argv;

var dist = __dirname + &#39;/projects&#39;;

// SFTP\u53C2\u6570
var host = &#39;&#39;,
    user = &#39;&#39;,
    pass = &#39;&#39;,
    remotePath = &#39;/home/admin/crm-mobile-server/target/crm-mobile-server.war/htdocs/frontend&#39;;

var projectName = &#39;dataCenter&#39;, // \u9879\u76EE\u540D\u79F0
    baseHtml = &#39;&#39;, // html\u6587\u4EF6\u8DEF\u5F84
    baseScss = &#39;&#39;, // scss\u6587\u4EF6\u8DEF\u5F84
    baseImg = &#39;&#39;, // images\u6587\u4EF6\u8DEF\u5F84
    baseJs = &#39;&#39;, // js\u5F00\u53D1\u6587\u4EF6\u8DEF\u5F84
    htmlDist = &#39;&#39;, // html\u6587\u4EF6\u8DEF\u5F84
    cssDist = &#39;&#39;, // css\u6587\u4EF6\u8DEF\u5F84
    jsDist = &#39;&#39;, // js\u7F16\u8BD1\u6587\u4EF6\u8DEF\u5F84
    imgDist = &#39;&#39;,
    htmlRemotePath = &#39;&#39;,
    cssRemotePath = &#39;&#39;,
    imgRemotePath = &#39;&#39;,
    jsRemotePath = &#39;&#39;;

gulp.task(&#39;default&#39;, function() {
    baseHtml = &#39;projects/&#39; + projectName + &#39;/*.mh5&#39;;
    baseScss = &#39;projects/&#39; + projectName + &#39;/scss/*.scss&#39;;
    baseJs = &#39;projects/&#39; + projectName + &#39;/js-dev/*.js&#39;;
    baseImg = &#39;projects/&#39; + projectName + &#39;/images/*.{png,jpg,gif}&#39;;

    htmlDist = dist.concat(&#39;/&#39;, projectName);
    cssDist = dist.concat(&#39;/&#39;, projectName, &#39;/&#39;, &#39;css&#39;);
    jsDist = dist.concat(&#39;/&#39;, projectName, &#39;/&#39;, &#39;js&#39;);
    imgDist = dist.concat(&#39;/&#39;, projectName, &#39;/&#39;, &#39;images&#39;);

    htmlRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName);
    cssRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName, &#39;/&#39;, &#39;css/&#39;);
    imgRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName, &#39;/&#39;, &#39;images/&#39;);
    jsRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName, &#39;/&#39;, &#39;js/&#39;);

    // \u6267\u884C\u4EFB\u52A1
    gulp.start(&#39;htmlSync&#39;, &#39;styles&#39;, &#39;imgSync&#39;, &#39;script&#39;, &#39;watch&#39;);
});

gulp.task(&#39;htmlSync&#39;, function() {
    gulp.src(baseHtml)
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task(&#39;styles&#39;, function() {
    gulp.src(baseScss)
        .pipe(sass({
            outputStyle: &#39;expanded&#39;
        }).on(&#39;error&#39;, function(e) {
            console.error(e.message);
            this.emit(&#39;end&#39;);
        }))
        .pipe(autoprefixer())
        .pipe(changed(cssDist))
        .pipe(minifyCss())
        .pipe(gulp.dest(cssDist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task(&#39;imgSync&#39;, function() {
    gulp.src(baseImg)
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task(&#39;script&#39;, function() {
    gulp.src(baseJs)
        .pipe(include())
        .pipe(changed(jsDist))
        .pipe(uglify())
        .pipe(gulp.dest(jsDist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task(&#39;watch&#39;, function() {
    gulp.watch(baseHtml, [&#39;htmlSync&#39;]);

    gulp.watch(baseScss, [&#39;styles&#39;]);

    gulp.watch(baseImg, [&#39;imgSync&#39;]);

    gulp.watch(baseJs, [&#39;script&#39;]);
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br></div></div><p>Gulp\u8FDB\u884C\u9879\u76EE\u7F16\u8BD1\u65F6\uFF0C\u8FD8\u53EF\u4EE5\u901A\u8FC7SFTP\u63D2\u4EF6\u8FDB\u884C\u4EE3\u7801\u540C\u6B65\uFF0C\u5B8C\u6574\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var gulp = require(&#39;gulp&#39;),
    sass = require(&#39;gulp-sass&#39;),
    sourcemaps = require(&#39;gulp-sourcemaps&#39;),
    autoprefixer = require(&#39;gulp-autoprefixer&#39;),
    minifyCss = require(&#39;gulp-minify-css&#39;),
    cssBase64 = require(&#39;gulp-css-base64&#39;),
    include = require(&#39;gulp-include&#39;),
    uglify = require(&#39;gulp-uglify&#39;),
    rename = require(&#39;gulp-rename&#39;),
    changed = require(&#39;gulp-changed&#39;),
    sftp = require(&#39;gulp-sftp&#39;),
    browserSync = require(&#39;browser-sync&#39;),
    yargs = require(&#39;yargs&#39;).argv;

var dist = __dirname + &#39;/projects&#39;;

// SFTP\u53C2\u6570
var host = &#39;&#39;,
    user = &#39;&#39;,
    pass = &#39;&#39;,
    remotePath = &#39;/home/admin/crm-mobile-server/target/crm-mobile-server.war/htdocs/frontend&#39;;

var projectName = &#39;&#39;, // \u9879\u76EE\u540D\u79F0
    baseHtml = &#39;&#39;, // html\u6587\u4EF6\u8DEF\u5F84
    baseScss = &#39;&#39;, // scss\u6587\u4EF6\u8DEF\u5F84
    baseImg = &#39;&#39;, // images\u6587\u4EF6\u8DEF\u5F84
    baseJs = &#39;&#39;, // js\u5F00\u53D1\u6587\u4EF6\u8DEF\u5F84
    htmlDist = &#39;&#39;, // html\u6587\u4EF6\u8DEF\u5F84
    cssDist = &#39;&#39;, // css\u6587\u4EF6\u8DEF\u5F84
    jsDist = &#39;&#39;, // js\u7F16\u8BD1\u6587\u4EF6\u8DEF\u5F84
    imgDist = &#39;&#39;,
    htmlRemotePath = &#39;&#39;,
    cssRemotePath = &#39;&#39;,
    imgRemotePath = &#39;&#39;,
    jsRemotePath = &#39;&#39;;

// \u9ED8\u8BA4\u4EFB\u52A1
gulp.task(&#39;default&#39;, function() {
    if (!yargs.project || !yargs.host) {
        console.log(&#39;-----------------------&#39;);
        console.log(&#39;\u4F60\u8F93\u5165\u7684\u683C\u5F0F\u4E0D\u5408\u6CD5\uFF0C\u6807\u51C6\u6267\u884C\u683C\u5F0F\u4E3A\uFF1Agulp --project=projectName --host=IP\uFF0C\u5176\u4E2DprojectName\u4E3A\u5F00\u53D1\u9879\u76EE\u540D\u79F0\uFF0Chost\u4E3A\u670D\u52A1\u5668IP\u3002&#39;);
        console.log(&#39;\u793A\u4F8B\uFF1Agulp --project=manageView --host=10.125.0.110\uFF0C\u8BE5\u547D\u4EE4\u6267\u884CmanageView\u9879\u76EE\u7684\u7F16\u8BD1\uFF0C\u670D\u52A1\u5668IP\u4E3A10.125.0.110\u3002&#39;);
        console.log(&#39;\u670D\u52A1\u5668\u7684user\u548Cpass\u7F3A\u7701\u4E3Aadmin\uFF0C\u975E\u8BE5\u503C\u65F6\u8BF7\u8865\u5168\u53C2\u6570\uFF0C\u5B8C\u6574\u683C\u5F0F\u5982\u4E0B\uFF1A&#39;);
        console.log(&#39;gulp --project=projectName --host=IP --user=username --pass=password&#39;);
        console.log(&#39;-----------------------&#39;);
        return;
    }

    projectName = yargs.project;
    host = yargs.host;

    baseHtml = &#39;projects/&#39; + projectName + &#39;/*.mh5&#39;;
    baseScss = &#39;projects/&#39; + projectName + &#39;/scss/*.scss&#39;;
    baseJs = &#39;projects/&#39; + projectName + &#39;/js-dev/*.js&#39;;
    baseImg = &#39;projects/&#39; + projectName + &#39;/images/*.{png,jpg,gif}&#39;;

    htmlDist = dist.concat(&#39;/&#39;, projectName);
    cssDist = dist.concat(&#39;/&#39;, projectName, &#39;/&#39;, &#39;css&#39;);
    jsDist = dist.concat(&#39;/&#39;, projectName, &#39;/&#39;, &#39;js&#39;);
    imgDist = dist.concat(&#39;/&#39;, projectName, &#39;/&#39;, &#39;images&#39;);

    htmlRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName);
    cssRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName, &#39;/&#39;, &#39;css/&#39;);
    imgRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName, &#39;/&#39;, &#39;images/&#39;);
    jsRemotePath = remotePath.concat(&#39;/projects/&#39;, projectName, &#39;/&#39;, &#39;js/&#39;);

    // \u6267\u884C\u4EFB\u52A1
    gulp.start(&#39;htmlSync&#39;, &#39;styles&#39;, &#39;imgSync&#39;, &#39;script&#39;, &#39;watch&#39;);
});

// html\u540C\u6B65
gulp.task(&#39;htmlSync&#39;, function() {
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

// scss\u7F16\u8BD1
gulp.task(&#39;styles&#39;, function() {
    gulp.src(baseScss)
        .pipe(sass({
            outputStyle: &#39;expanded&#39;
        }).on(&#39;error&#39;, function(e) {
            console.error(e.message);
            this.emit(&#39;end&#39;);
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

// images\u540C\u6B65
gulp.task(&#39;imgSync&#39;, function() {
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

// js\u7F16\u8BD1
gulp.task(&#39;script&#39;, function() {
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

// \u76D1\u89C6
gulp.task(&#39;watch&#39;, function() {
    gulp.watch(baseHtml, [&#39;htmlSync&#39;]);

    gulp.watch(baseScss, [&#39;styles&#39;]);

    gulp.watch(baseImg, [&#39;imgSync&#39;]);

    gulp.watch(baseJs, [&#39;script&#39;]);
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br></div></div>`,23);function r(p,l){return e}var i=n(a,[["render",r]]);export{i as default};
