import{d as e}from"./app.f239267c.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const n={},r=e(`<h1 id="react-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#react-\u63D2\u4EF6" aria-hidden="true">#</a> React \u63D2\u4EF6</h1><p>React \u5E38\u7528\u5F00\u53D1\u63D2\u4EF6\u3002</p><h2 id="react-\u6838\u5FC3\u5E93" tabindex="-1"><a class="header-anchor" href="#react-\u6838\u5FC3\u5E93" aria-hidden="true">#</a> React \u6838\u5FC3\u5E93</h2><h3 id="react" tabindex="-1"><a class="header-anchor" href="#react" aria-hidden="true">#</a> react</h3><p>React \u662F\u4E00\u5957\u7528\u6765\u5EFA\u7ACB\u7528\u6237\u4EA4\u4E92\u754C\u9762\u7684 JavaScript \u6846\u67B6\u3002</p><p>\u5B89\u88C5\u8FD9\u4E2A\u5305\u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u7ACB\u5373\u4F7F\u7528 React\uFF0C\u4E0D\u9700\u8981\u989D\u5916\u5B89\u88C5\u5176\u4ED6 JSX \u89E3\u6790\u63D2\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5
tnpm ii react --save-dev
# \u4F7F\u7528
import React from &#39;react&#39;;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CReact \u5B89\u88C5\u7684\u5305\u90FD\u662F\u5F00\u53D1\u6A21\u5F0F\u3002\u5F00\u53D1\u7248\u672C\u5305\u542B\u4E00\u4E9B\u5E38\u7528\u9519\u8BEF\u7684\u6269\u5C55\u8B66\u544A\u4FE1\u606F\uFF0C\u53CD\u4E4B\uFF0C\u751F\u4EA7\u7248\u672C\u5305\u542B\u6027\u80FD\u4F18\u5316\u7B49\u6240\u6709\u7684\u9519\u8BEF\u5904\u7406\u3002</p></blockquote><p>\u4F7F\u7528 React \u7684\u751F\u4EA7\u7248\u672C\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF <code>NODE_ENV</code> \u4E3A <code>production</code>\u3002\u5E38\u7528\u7684\u4EE3\u7801\u538B\u7F29\u5DE5\u5177\u5982 UglifyJS \u5728\u538B\u7F29\u4EE3\u7801\u65F6\uFF0C\u4F1A\u5C06\u5F00\u53D1\u6A21\u5F0F\u4E0B\u7684\u6269\u5C55\u5220\u9664\u3002</p><p>\u4F7F\u7528\u6848\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var React = require(&#39;react&#39;);
 
// Addons are in separate packages: 
var createFragment = require(&#39;react-addons-create-fragment&#39;);
var immutabilityHelpers = require(&#39;react-addons-update&#39;);
var CSSTransitionGroup = require(&#39;react-addons-css-transition-group&#39;);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="react-dom" tabindex="-1"><a class="header-anchor" href="#react-dom" aria-hidden="true">#</a> react-dom</h3><p>React-dom \u662F\u4E00\u4E2A React \u548C DOM \u4E00\u8D77\u5DE5\u4F5C\u7684\u57FA\u7840\u3002</p><p>\u8FD9\u4E2A\u5305\u4E3A\u7F51\u9875\u4E2D DOM \u7ED3\u6784\u7684\u6E32\u67D3\u670D\u52A1\uFF0C\u5B83\u901A\u5E38\u8981\u548C React \u4E00\u8D77\u4F7F\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5
tnpm ii react react-dom --save-dev
# \u4F7F\u7528
var React = require(&#39;react&#39;);
var ReactDOM = require(&#39;react-dom&#39;);
 
class MyComponent extends React.Component {
    render() {
        return &lt;div&gt;Hello World&lt;/div&gt;;
    }
}
 
ReactDOM.render(&lt;MyComponent /&gt;, node);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="react-router" tabindex="-1"><a class="header-anchor" href="#react-router" aria-hidden="true">#</a> react-router</h3><p>React-router \u662F React \u7684\u4E00\u4E2A\u8DEF\u7531\u534F\u8BAE\u6846\u67B6\uFF0C\u5B83\u4FDD\u8BC1\u6211\u4EEC\u7684\u9875\u9762\u89C6\u89C9\u4E0E\u8DEF\u5F84\u4FDD\u6301\u540C\u6B65\u3002\u5B83\u63D0\u4F9B\u4E00\u5957\u7B80\u5355\u7684 API \u6765\u5B8C\u6210\u8BF8\u5982\u5EF6\u8FDF\u52A0\u8F7D\u3001\u52A8\u6001\u8DEF\u7531\u5339\u914D\u548C\u8DEF\u5F84\u52A0\u8F7D\u7B49\u529F\u80FD\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5
tnpm ii react-router --save-dev
# \u4F7F\u7528
import { Router, Route, Link } from &#39;react-router&#39;;
...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="babel-\u6838\u5FC3\u5E93" tabindex="-1"><a class="header-anchor" href="#babel-\u6838\u5FC3\u5E93" aria-hidden="true">#</a> Babel \u6838\u5FC3\u5E93</h2><h3 id="babel-core" tabindex="-1"><a class="header-anchor" href="#babel-core" aria-hidden="true">#</a> babel-core</h3>`,20);function s(t,c){return r}var p=a(n,[["render",s]]);export{p as default};
