import{d as s}from"./app.f239267c.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const e={},a=s(`<h2 id="postcss-gulp\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#postcss-gulp\u914D\u7F6E" aria-hidden="true">#</a> PostCSS\uFF1AGulp\u914D\u7F6E</h2><p>\u5728\u9879\u76EE\u4E2D\u4F7F\u7528Gulp\u6765\u914D\u7F6EPostCSS\u3002</p><h3 id="\u63D2\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> \u63D2\u4EF6\u914D\u7F6E</h3><p>package.json\u4E2D\u9700\u8981\u914D\u7F6E\u5404\u4E2A\u4F9D\u8D56\u7684\u63D2\u4EF6\uFF0C\u5177\u4F53\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;name&quot;: &quot;postcss&quot;,
  &quot;version&quot;: &quot;0.0.1&quot;,
  &quot;description&quot;: &quot;PostCSS Gulp Plugin&quot;,
  &quot;keywords&quot;: [
    &quot;gulpplugin&quot;,
    &quot;PostCSS&quot;,
    &quot;css&quot;
  ],
  &quot;author&quot;: &quot;guihua.pgh&quot;,
  &quot;license&quot;: &quot;MIT&quot;,
  &quot;dependencies&quot;: {
    &quot;postcss&quot;: &quot;^5.2.0&quot;,
    &quot;gulp&quot;: &quot;^3.9.1&quot;
  },
  &quot;devDependencies&quot;: {
    &quot;autoprefixer&quot;: &quot;^6.4.1&quot;,
    &quot;cssnext&quot;: &quot;^1.8.4&quot;,
    &quot;gulp-postcss&quot;: &quot;^6.2.0&quot;,
    &quot;precss&quot;: &quot;^1.4.0&quot;
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u8FDB\u5165package.json\u6587\u4EF6\u6240\u5728\u7684\u76EE\u5F55\uFF0C\u8FDB\u884C\u63D2\u4EF6\u5B89\u88C5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tnpm install
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="gulp\u4EFB\u52A1\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#gulp\u4EFB\u52A1\u914D\u7F6E" aria-hidden="true">#</a> Gulp\u4EFB\u52A1\u914D\u7F6E</h3><p>\u5728gulpfile.js\u4E2D\uFF0C\u9700\u8981\u5F15\u5165\u5404\u4E2A\u63D2\u4EF6\uFF0C\u4E14\u5B9A\u4E49\u6267\u884C\u7684\u4EFB\u52A1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var gulp = require(&#39;gulp&#39;);
var postcss = require(&#39;gulp-postcss&#39;);
var autoprefixer = require(&#39;autoprefixer&#39;);
var cssnext = require(&#39;cssnext&#39;);
var precss = require(&#39;precss&#39;);

gulp.task(&#39;css&#39;, function() {
    var processors = [
        autoprefixer, 
        cssnext, 
        precss
    ];

    return gulp.src(&#39;./src/*.css&#39;)
        .pipe(postcss(processors))
        .pipe(gulp.dest(&#39;./dest&#39;));
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5728\u6587\u4EF6\u6839\u76EE\u5F55\uFF0C\u6267\u884Ccss\u6587\u4EF6\u7F16\u8BD1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gulp css
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5373\u53EF\u5B8C\u6210css\u6587\u4EF6\u7F16\u8BD1\u3002</p>`,13);function r(p,u){return a}var c=n(e,[["render",r]]);export{c as default};
