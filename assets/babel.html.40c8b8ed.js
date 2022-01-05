import{r,o as b,c as p,a as e,e as a,F as c,b as n,d as l}from"./app.f239267c.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const i={},o=e("h2",{id:"babel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#babel","aria-hidden":"true"},"#"),n(" Babel")],-1),d={href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"},u=n("Babel"),m=n(" \u662F\u4E00\u4E2A\u5E7F\u6CDB\u4F7F\u7528\u7684\u8F6C\u7801\u5668\uFF0C\u53EF\u4EE5\u5C06ES6\u4EE3\u7801\u8F6C\u4E3AES5\u4EE3\u7801\uFF0C\u4ECE\u800C\u5728\u73B0\u6709\u73AF\u5883\u6267\u884C\u3002"),g=l(`<h3 id="\u914D\u7F6E\u6587\u4EF6-babelrc" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6-babelrc" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6.babelrc</h3><p>Babel\u7684\u914D\u7F6E\u6587\u4EF6\u662F.babelrc\uFF0C\u5B58\u653E\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\u3002\u4F7F\u7528Babel\u7684\u7B2C\u4E00\u6B65\uFF0C\u5C31\u662F\u914D\u7F6E\u8FD9\u4E2A\u6587\u4EF6\u3002</p><p>\u8BE5\u6587\u4EF6\u7528\u6765\u8BBE\u7F6E\u8F6C\u7801\u89C4\u5219\u548C\u63D2\u4EF6\uFF0C\u57FA\u672C\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;presets&quot;: [],
  &quot;plugins&quot;: []
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><code>presets</code> \u5B57\u6BB5\u8BBE\u5B9A\u8F6C\u7801\u89C4\u5219\uFF0C\u5B98\u65B9\u63D0\u4F9B\u4EE5\u4E0B\u7684\u89C4\u5219\u96C6\uFF0C\u4F60\u53EF\u4EE5\u6839\u636E\u9700\u8981\u5B89\u88C5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># ES2015\u8F6C\u7801\u89C4\u5219
$ npm install --save-dev babel-preset-es2015

# react\u8F6C\u7801\u89C4\u5219
$ npm install --save-dev babel-preset-react

# ES7\u4E0D\u540C\u9636\u6BB5\u8BED\u6CD5\u63D0\u6848\u7684\u8F6C\u7801\u89C4\u5219\uFF08\u5171\u67094\u4E2A\u9636\u6BB5\uFF09\uFF0C\u9009\u88C5\u4E00\u4E2A
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5C06\u89C4\u5219\u52A0\u5165 <code>.babelrc</code> \u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;presets&quot;: [
      &quot;es2015&quot;,
      &quot;react&quot;,
      &quot;stage-2&quot;
    ],
    &quot;plugins&quot;: []
  }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u547D\u4EE4\u884C\u8F6C\u7801babel-cli" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u8F6C\u7801babel-cli" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u8F6C\u7801babel-cli</h3><p>Babel\u63D0\u4F9Bbabel-cli\u5DE5\u5177\uFF0C\u7528\u4E8E\u547D\u4EE4\u884C\u8F6C\u7801\u3002</p><p>\u5B83\u7684\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm install --global babel-cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u57FA\u672C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8F6C\u7801\u7ED3\u679C\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA
$ babel example.js

# \u8F6C\u7801\u7ED3\u679C\u5199\u5165\u4E00\u4E2A\u6587\u4EF6
# --out-file \u6216 -o \u53C2\u6570\u6307\u5B9A\u8F93\u51FA\u6587\u4EF6
$ babel example.js --out-file compiled.js
# \u6216\u8005
$ babel example.js -o compiled.js

# \u6574\u4E2A\u76EE\u5F55\u8F6C\u7801
# --out-dir \u6216 -d \u53C2\u6570\u6307\u5B9A\u8F93\u51FA\u76EE\u5F55
$ babel src --out-dir lib
# \u6216\u8005
$ babel src -d lib

# -s \u53C2\u6570\u751F\u6210source map\u6587\u4EF6
$ babel src -d lib -s
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u662F\u5728\u5168\u5C40\u73AF\u5883\u4E0B\uFF0C\u8FDB\u884CBabel\u8F6C\u7801\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u5982\u679C\u9879\u76EE\u8981\u8FD0\u884C\uFF0C\u5168\u5C40\u73AF\u5883\u5FC5\u987B\u6709Babel\uFF0C\u4E5F\u5C31\u662F\u8BF4\u9879\u76EE\u4EA7\u751F\u4E86\u5BF9\u73AF\u5883\u7684\u4F9D\u8D56\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u8FD9\u6837\u505A\u4E5F\u65E0\u6CD5\u652F\u6301\u4E0D\u540C\u9879\u76EE\u4F7F\u7528\u4E0D\u540C\u7248\u672C\u7684Babel\u3002</p><p>\u4E00\u4E2A\u89E3\u51B3\u529E\u6CD5\u662F\u5C06 <code>babel-cli</code> \u5B89\u88C5\u5728\u9879\u76EE\u4E4B\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5
$ npm install --save-dev babel-cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7136\u540E\uFF0C\u6539\u5199 <code>package.json</code> \u6587\u4EF6\uFF0C\u589E\u52A0\u4F9D\u8D56\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  // ...
  &quot;devDependencies&quot;: {
    &quot;babel-cli&quot;: &quot;^6.0.0&quot;
  },
  &quot;scripts&quot;: {
    &quot;build&quot;: &quot;babel src -d lib&quot;
  },
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8F6C\u7801\u7684\u65F6\u5019\uFF0C\u5C31\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm run build
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="babel-node" tabindex="-1"><a class="header-anchor" href="#babel-node" aria-hidden="true">#</a> babel-node</h3><p><code>babel-cli</code> \u5DE5\u5177\u81EA\u5E26\u4E00\u4E2A <code>babel-node</code> \u547D\u4EE4\uFF0C\u63D0\u4F9B\u4E00\u4E2A\u652F\u6301ES6\u7684REPL\u73AF\u5883\u3002\u5B83\u652F\u6301Node\u7684REPL\u73AF\u5883\u7684\u6240\u6709\u529F\u80FD\uFF0C\u800C\u4E14\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884CES6\u4EE3\u7801\u3002</p><p>\u5B83\u4E0D\u7528\u5355\u72EC\u5B89\u88C5\uFF0C\u800C\u662F\u968F <code>babel-cli</code> \u4E00\u8D77\u5B89\u88C5\u3002\u7136\u540E\uFF0C\u6267\u884C <code>babel-node</code> \u5C31\u8FDB\u5165PEPL\u73AF\u5883\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ babel-node
&gt; (x =&gt; x * 2)(1)
2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>babel-node</code> \u547D\u4EE4\u53EF\u4EE5\u76F4\u63A5\u8FD0\u884CES6\u811A\u672C\u3002\u5C06\u4E0A\u9762\u7684\u4EE3\u7801\u653E\u5165\u811A\u672C\u6587\u4EF6es6.js\uFF0C\u7136\u540E\u76F4\u63A5\u8FD0\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ babel-node es6.js
2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><code>babel-node</code> \u4E5F\u53EF\u4EE5\u5B89\u88C5\u5728\u9879\u76EE\u4E2D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm install --save-dev babel-cli
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\uFF0C\u6539\u5199 <code>package.json</code> \u6587\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;script-name&quot;: &quot;babel-node script.js&quot;
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u4F7F\u7528 <code>babel-node</code> \u66FF\u4EE3 <code>node</code>\uFF0C\u8FD9\u6837 <code>script.js</code> \u672C\u8EAB\u5C31\u4E0D\u7528\u505A\u4EFB\u4F55\u8F6C\u7801\u5904\u7406\u3002</p><h3 id="babel-register" tabindex="-1"><a class="header-anchor" href="#babel-register" aria-hidden="true">#</a> babel-register</h3><p><code>babel-register</code> \u6A21\u5757\u6539\u5199 <code>require</code> \u547D\u4EE4\uFF0C\u4E3A\u5B83\u52A0\u4E0A\u4E00\u4E2A\u94A9\u5B50\u3002\u6B64\u540E\uFF0C\u6BCF\u5F53\u4F7F\u7528 <code>require</code> \u52A0\u8F7D <code>.js</code>\u3001<code>.jsx</code>\u3001<code>.es</code> \u548C <code>.es6</code> \u540E\u7F00\u540D\u7684\u6587\u4EF6\uFF0C\u5C31\u4F1A\u5148\u7528Babel\u8FDB\u884C\u8F6C\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm install --save-dev babel-register
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528\u65F6\uFF0C\u5FC5\u987B\u9996\u5148\u52A0\u8F7D <code>babel-register</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>require(&quot;babel-register&quot;);
require(&quot;./index.js&quot;);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u7136\u540E\uFF0C\u5C31\u4E0D\u9700\u8981\u624B\u52A8\u5BF9 <code>index.js</code> \u8F6C\u7801\u4E86\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C<code>babel-register</code> \u53EA\u4F1A\u5BF9 <code>require</code> \u547D\u4EE4\u52A0\u8F7D\u7684\u6587\u4EF6\u8F6C\u7801\uFF0C\u800C\u4E0D\u4F1A\u5BF9\u5F53\u524D\u6587\u4EF6\u8F6C\u7801\u3002\u53E6\u5916\uFF0C\u7531\u4E8E\u5B83\u662F\u5B9E\u65F6\u8F6C\u7801\uFF0C\u6240\u4EE5\u53EA\u9002\u5408\u5728\u5F00\u53D1\u73AF\u5883\u4F7F\u7528\u3002</p><h3 id="babel-core" tabindex="-1"><a class="header-anchor" href="#babel-core" aria-hidden="true">#</a> babel-core</h3><p>\u5982\u679C\u67D0\u4E9B\u4EE3\u7801\u9700\u8981\u8C03\u7528Babel\u7684API\u8FDB\u884C\u8F6C\u7801\uFF0C\u5C31\u8981\u4F7F\u7528 <code>babel-core</code> \u6A21\u5757\u3002</p><p>\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm install babel-core --save
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\uFF0C\u5728\u9879\u76EE\u4E2D\u5C31\u53EF\u4EE5\u8C03\u7528 <code>babel-core</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var babel = require(&#39;babel-core&#39;);

// \u5B57\u7B26\u4E32\u8F6C\u7801
babel.transform(&#39;code();&#39;, options);
// =&gt; { code, map, ast }

// \u6587\u4EF6\u8F6C\u7801\uFF08\u5F02\u6B65\uFF09
babel.transformFile(&#39;filename.js&#39;, options, function(err, result) {
  result; // =&gt; { code, map, ast }
});

// \u6587\u4EF6\u8F6C\u7801\uFF08\u540C\u6B65\uFF09
babel.transformFileSync(&#39;filename.js&#39;, options);
// =&gt; { code, map, ast }

// Babel AST\u8F6C\u7801
babel.transformFromAst(ast, code, options);
// =&gt; { code, map, ast }
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,45),v=n("\u914D\u7F6E\u5BF9\u8C61 "),x=e("code",null,"options",-1),q=n("\uFF0C\u53EF\u4EE5\u53C2\u770B "),h={href:"http://babeljs.io/docs/usage/options/",target:"_blank",rel:"noopener noreferrer"},_=n("\u5B98\u65B9\u6587\u6863"),f=n("\u3002"),j=l(`<p>\u4E0B\u9762\u662F\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var es6Code = &#39;let x = n =&gt; n + 1&#39;;
var es5Code = require(&#39;babel-core&#39;)
  .transform(es6Code, {
    presets: [&#39;es2015&#39;]
  })
  .code;
// &#39;&quot;use strict&quot;;\\n\\nvar x = function x(n) {\\n  return n + 1;\\n};&#39;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>transform</code> \u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8868\u793A\u9700\u8981\u8F6C\u6362\u7684ES6\u4EE3\u7801\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8F6C\u6362\u7684\u914D\u7F6E\u5BF9\u8C61\u3002</p><h3 id="babel-polyfill" tabindex="-1"><a class="header-anchor" href="#babel-polyfill" aria-hidden="true">#</a> babel-polyfill</h3><p>Babel\u9ED8\u8BA4\u53EA\u8F6C\u6362\u65B0\u7684JavaScript\u53E5\u6CD5\uFF08syntax\uFF09\uFF0C\u800C\u4E0D\u8F6C\u6362\u65B0\u7684API\uFF0C\u6BD4\u5982Iterator\u3001Generator\u3001Set\u3001Maps\u3001Proxy\u3001Reflect\u3001Symbol\u3001Promise\u7B49\u5168\u5C40\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u5B9A\u4E49\u5728\u5168\u5C40\u5BF9\u8C61\u4E0A\u7684\u65B9\u6CD5\uFF08\u6BD4\u5982 <code>Object.assign</code>\uFF09\u90FD\u4E0D\u4F1A\u8F6C\u7801\u3002</p><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0CES6\u5728 <code>Array</code> \u5BF9\u8C61\u4E0A\u65B0\u589E\u4E86 <code>Array.from</code> \u65B9\u6CD5\u3002Babel\u5C31\u4E0D\u4F1A\u8F6C\u7801\u8FD9\u4E2A\u65B9\u6CD5\u3002\u5982\u679C\u60F3\u8BA9\u8FD9\u4E2A\u65B9\u6CD5\u8FD0\u884C\uFF0C\u5FC5\u987B\u4F7F\u7528 <code>babel-polyfill</code>\uFF0C\u4E3A\u5F53\u524D\u73AF\u5883\u63D0\u4F9B\u4E00\u4E2A\u57AB\u7247\u3002</p><p>\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm install --save babel-polyfill
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\uFF0C\u5728\u811A\u672C\u5934\u90E8\uFF0C\u52A0\u5165\u5982\u4E0B\u4E00\u884C\u4EE3\u7801\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &#39;babel-polyfill&#39;;
// \u6216\u8005
require(&#39;babel-polyfill&#39;);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Babel\u9ED8\u8BA4\u4E0D\u8F6C\u7801\u7684API\u975E\u5E38\u591A\uFF0C\u8BE6\u7EC6\u6E05\u5355\u53EF\u4EE5\u67E5\u770B <code> babel-plugin-transform-runtime</code> \u6A21\u5757\u7684definitions.js\u6587\u4EF6\u3002</p><h3 id="\u4E0E\u5176\u4ED6\u5DE5\u5177\u7684\u914D\u5408" tabindex="-1"><a class="header-anchor" href="#\u4E0E\u5176\u4ED6\u5DE5\u5177\u7684\u914D\u5408" aria-hidden="true">#</a> \u4E0E\u5176\u4ED6\u5DE5\u5177\u7684\u914D\u5408</h3><p>\u8BB8\u591A\u5DE5\u5177\u9700\u8981Babel\u8FDB\u884C\u524D\u7F6E\u8F6C\u7801\uFF0C\u8FD9\u91CC\u4E3E\u4E24\u4E2A\u4F8B\u5B50\uFF1AESLint\u548CMocha\u3002</p>`,13),$={href:"http://eslint.org/",target:"_blank",rel:"noopener noreferrer"},B=n("ESLint"),E=n(" \u7528\u4E8E\u9759\u6001\u68C0\u67E5\u4EE3\u7801\u7684\u8BED\u6CD5\u548C\u98CE\u683C\uFF0C\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B\uFF1A"),S=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm install --save-dev eslint babel-eslint
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\uFF0C\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6 <code>.eslint</code>\uFF0C\u5728\u5176\u4E2D\u52A0\u5165 <code>parser</code> \u5B57\u6BB5\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;parser&quot;: &quot;babel-eslint&quot;,
  &quot;rules&quot;: {
    ...
  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u518D\u5728 <code>package.json</code> \u4E4B\u4E2D\uFF0C\u52A0\u5165\u76F8\u5E94\u7684 <code>scripts</code> \u811A\u672C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;name&quot;: &quot;my-module&quot;,
    &quot;scripts&quot;: {
        &quot;lint&quot;: &quot;eslint my-files.js&quot;
    },
    &quot;devDependencies&quot;: {
        &quot;babel-eslint&quot;: &quot;...&quot;,
        &quot;eslint&quot;: &quot;...&quot;
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>Mocha \u5219\u662F\u4E00\u4E2A\u6D4B\u8BD5\u6846\u67B6\uFF0C\u5982\u679C\u9700\u8981\u6267\u884C\u4F7F\u7528ES6\u8BED\u6CD5\u7684\u6D4B\u8BD5\u811A\u672C\uFF0C\u53EF\u4EE5\u4FEE\u6539 <code>package.json</code> \u7684 <code>scripts.test</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;scripts&quot;: {
  &quot;test&quot;: &quot;mocha --ui qunit --compilers js:babel-core/register&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C<code>--compilers</code> \u53C2\u6570\u6307\u5B9A\u811A\u672C\u7684\u8F6C\u7801\u5668\uFF0C\u89C4\u5B9A\u540E\u7F00\u540D\u4E3Ajs\u7684\u6587\u4EF6\uFF0C\u90FD\u9700\u8981\u4F7F\u7528 <code>babel-core/register</code> \u5148\u8F6C\u7801\u3002</p>`,8);function y(k,P){const s=r("ExternalLinkIcon");return b(),p(c,null,[o,e("p",null,[e("a",d,[u,a(s)]),m]),g,e("p",null,[v,x,q,e("a",h,[_,a(s)]),f]),j,e("p",null,[e("a",$,[B,a(s)]),E]),S],64)}var I=t(i,[["render",y]]);export{I as default};
