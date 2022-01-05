import{r as l,o as c,c as p,a as e,e as r,F as i,d as s,b as n}from"./app.f239267c.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const d={},o=s(`<h2 id="javascript\u9898\u76EE" tabindex="-1"><a class="header-anchor" href="#javascript\u9898\u76EE" aria-hidden="true">#</a> JavaScript\u9898\u76EE</h2><h3 id="\u9898\u76EE1" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE1" aria-hidden="true">#</a> \u9898\u76EE1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(function() {
    return typeof arguments;
})();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;object&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>arguments</code> \u662F\u5BF9\u8C61,\u4F2A\u6570\u7EC4\u6709\u4E24\u4EF6\u4E8B\u8981\u6CE8\u610F\u8FD9\u91CC\uFF1A \u53C2\u6570\u4E0D\u662F\u6570\u7EC4\uFF0C\u5B83\u662F\u4E00\u4E2A\u6570\u7EC4\u4E00\u6837\u7684\u7269\u4F53,\u4F60\u53EF\u4EE5\u4F7F\u7528\u65B9\u62EC\u53F7\u548C\u6574\u6570\u7D22\u5F15\u7684\u5143\u7D20\u3002</p>`,6),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof",target:"_blank",rel:"noopener noreferrer"},u=n("typeof\u5BF9\u7C7B\u578B\u7684\u5224\u65AD"),m=n("\u3002"),x=s(`<h3 id="\u9898\u76EE2" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE2" aria-hidden="true">#</a> \u9898\u76EE2</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var f = function g() {
    return 23;
};
typeof g();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>g is not defined(\u2026)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>function g(){ return 23; }</code> \u662F\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u4E8B\u5B9E\u4E0A\u53EA\u662F\u4E00\u4E2A\u540D\u5B57\uFF0C\u4E0D\u662F\u4E00\u4E2A\u51FD\u6570\u58F0\u660E \u51FD\u6570\u5B9E\u9645\u4E0A\u662F\u7ED1\u5B9A\u5230\u53D8\u91CFf\uFF0C\u4E0D\u662Fg\u3002</p><p>\u6307\u5B9A\u7684\u6807\u8BC6\u7B26\u5728\u51FD\u6570\u8868\u8FBE\u5F0F\u867D\u7136\u6709\u5176\u7528\u9014\uFF1A\u5806\u6808\u8DDF\u8E2A\u662F\u6E05\u6670\u800C\u4E0D\u662F\u5145\u65A5\u7740\u65E0\u540D\u7684\u51FD\u6570\uFF0C\u4F60\u53EF\u4EE5\u6709\u4E00\u4E2A\u533F\u540D\u51FD\u6570\u9012\u5F52\u8C03\u7528\u672C\u8EAB\u4E0D\u4F7F\u7528argument.callee\u3002</p><h3 id="\u9898\u76EE3" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE3" aria-hidden="true">#</a> \u9898\u76EE3</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(function(x) {
    delete x;
    return x;
})(1);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>JavaScript \u4E2D\u53C2\u6570\u4E0D\u53EF\u5220\u9664\u3002</p>`,11),v={href:"http://perfectionkills.com/understanding-delete/",target:"_blank",rel:"noopener noreferrer"},g=n("Understanding Delete"),f=n("\u3002"),h=s(`<h3 id="\u9898\u76EE4" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE4" aria-hidden="true">#</a> \u9898\u76EE4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var y = 1,
    x = y = typeof x;
x;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;undefined&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><code>var a, b;</code> \u5C55\u5F00\u5C31\u662F <code>var a; var b;</code>\uFF1B<code>A = B = C;</code> \u76F8\u5F53\u4E8E <code>B = C = B;</code>\u3002</p><p>\u4EE5\u4E0A\u4EE3\u7801\u91CD\u5199\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var y = 1;
y = typeof x;
var x = y;
x;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5F53\u6267\u884C <code>y = typeof x</code> \u65F6\uFF0Cx \u8FD8\u6CA1\u6709\u88AB\u5B9A\u4E49\uFF0C\u6240\u4EE5y\u6210\u4E3A\u5B57\u7B26\u4E32 <code>undefined</code>\uFF0C\u7136\u540E\u88AB\u5206\u914D\u5230x\u3002</p><h3 id="\u9898\u76EE5" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE5" aria-hidden="true">#</a> \u9898\u76EE5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(function f(f) {
    return typeof f();
})(function() {
    return 1;
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;number&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E3A\u4E86\u4FBF\u4E8E\u7406\u89E3\u6211\u4EEC\u7EE7\u7EED\u5206\u89E3:</p><p>\u7B2C\u4E00\u90E8\u5206</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var baz = function() {
    return 1;
};
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7B2C\u4E8C\u90E8\u5206</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(function f(f) {
    return typeof f();
})(baz);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728\u8FD9\u91CC\uFF0C\u51FD\u6570f\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570\u662F\u53E6\u4E00\u4E2A\u51FD\u6570,f\u51FD\u6570\u5185\u90E8\u6267\u884C\u8FD9\u4E2A\u5B9E\u53C2\u51FD\u6570\u5E76\u4E14\u8FD4\u56DE\u7C7B\u578B\u3002</p><p>\u65E0\u8BBA\u662F\u4ECE\u8C03\u7528\u8BE5\u51FD\u6570\u8FD4\u56DE\uFF0C\u5373\u4F7F\u53C2\u6570\u540D\u79F0f\u4E0E\u51FD\u6570\u540D\u51B2\u7A81\uFF0C\u51FD\u6570\u63A5\u53D7\u672C\u8EAB\u4F5C\u4E3A\u81EA\u5DF1\u7684\u53C2\u6570\uFF0C\u7136\u540E\u8C03\u7528\uFF0C\u6B64\u65F6\u5C31\u770B\u8C01\u66F4\u5177\u6709\u66F4\u9AD8\u7684\u4F18\u5148\u7EA7\u4E86\uFF0C\u663E\u7136\uFF0C\u53C2\u6570\u7684\u4F18\u5148\u7EA7\u66F4\u9AD8\uFF0C\u6240\u4EE5\u5B9E\u9645\u6267\u884C\u7684\u662F <code>return typeof 1</code>\u3002</p><h3 id="\u9898\u76EE6" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE6" aria-hidden="true">#</a> \u9898\u76EE6</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var foo = {
    bar: function() {
        return this.baz;
    },
    baz: 1
};

(function() {
    return typeof arguments[0]();
})(foo.bar);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;undefined&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E3A\u4EC0\u4E48\u662F <code>undefined</code>\uFF1F\u6211\u4EEC\u5FC5\u987B\u8981\u77E5\u9053this\u8FD0\u7B97\u7B26\u662F\u600E\u4E48\u5DE5\u4F5C\u7684\u3002</p><p>JS\u8BED\u8A00\u7CBE\u7CB9\u603B\u7ED3\u7684\u5F88\u7CBE\u70BC\uFF1A 1 \u7EAF\u7CB9\u7684\u51FD\u6570\u8C03\u7528 2 \u4F5C\u4E3A\u5BF9\u8C61\u65B9\u6CD5\u7684\u8C03\u7528 3 \u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u8C03\u7528 4 apply\u8C03\u7528</p><p>\u6211\u4EEC\u770B\u770B\u9898\u76EE\u662F\u5C5E\u4E8E\u90A3\u79CD\u73AF\u5883\uFF1F</p><p>\u5728 <code>arguments[0]()</code> \u4E2D\u6267\u884C\u4E86\u4E00\u4E2A\u65B9\u6CD5\uFF0C<code>arguments[0]</code> \u5C31\u662F <code>foo.bar</code> \u65B9\u6CD5\u3002\u6CE8\u610F\uFF1A\u8FD9\u5728 <code>foo.bar</code> \u4E2D\u7684 <code>this</code> \u662F\u6CA1\u6709\u7ED1\u5B9A\u5230 <code>foo</code>\u3002</p><p>\u867D\u7136 <code>foo.bar</code> \u4F20\u9012\u7ED9\u4E86\u51FD\u6570\uFF0C\u4F46\u662F\u771F\u6B63\u6267\u884C\u7684\u65F6\u5019\uFF0C\u51FD\u6570 <code>bar</code> \u7684\u4E0A\u4E0B\u6587\u73AF\u5883\u662F <code>arguments</code>\uFF0C\u5E76\u4E0D\u662F <code>foo</code>\u3002</p><p><code>arguemnts[0]</code> \u53EF\u4EE5\u7406\u89E3\u4E3A <code>arguments.0</code>\uFF08\u4E0D\u8FC7\u5199\u4EE3\u7801\u5C31\u4E0D\u8981\u8FD9\u6837\u4E86\uFF0C\u8BED\u6CD5\u4F1A\u9519\u8BEF\u7684\uFF09\uFF0C\u6240\u4EE5\u8FD9\u6837\u770B\u6765\uFF0C\u4E0A\u4E0B\u6587\u73AF\u5883\u662F <code>arguemnts</code> \u5C31\u6CA1\u95EE\u9898\u4E86\uFF0C\u6240\u4EE5\u5728\u6267\u884C <code>baz</code> \u7684\u65F6\u5019\u81EA\u7136 <code>this</code> \u5C31\u662F <code>window</code> \u4E86\uFF0C<code>window</code> \u4E0A\u6CA1\u6709 <code>baz</code> \u5C5E\u6027\uFF0C\u8FD4\u56DE\u7684\u5C31\u662F <code>undefined</code>\uFF0C<code>typeof</code> \u8C03\u7528\u7684\u8BDD\u5C31\u8F6C\u6362\u6210 <code>undefined</code> \u4E86\u3002</p><h3 id="\u9898\u76EE7" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE7" aria-hidden="true">#</a> \u9898\u76EE7</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var foo = {
    bar: function() {
        return this.baz;
    },
    baz: 1
}
typeof(f = foo.bar)();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;undefined&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u7684\u51FD\u6570\u53EF\u4EE5\u6539\u5199\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var foo = {
    bar: function() {
        return this.baz;
    },
    baz: 1
}

f = foo.bar;

typeof f();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u628A <code>foo.bar</code> \u5B58\u50A8\u7ED9 <code>f</code> \u7136\u540E\u8C03\u7528\uFF0C\u6240\u4EE5 <code>this</code> \u5728 <code>foo.bar</code> \u5F15\u7528\u7684\u662F\u5168\u5C40\u5BF9\u8C61\uFF0C\u6240\u4EE5\u5C31\u6CA1\u6709 <code>baz</code> \u5C5E\u6027\u4E86\u3002</p><p>\u6362\u53E5\u8BDD\u8BF4\uFF0C<code>foo.bar</code> \u6267\u884C\u7684\u65F6\u5019\u4E0A\u4E0B\u6587\u662F <code>foo</code>\uFF0C\u4F46\u662F\u5F53\u628A <code>foo.bar</code> \u8D4B\u503C\u7ED9 <code>f</code> \u7684\u65F6\u5019\uFF0C<code>f</code> \u7684\u4E0A\u4E0B\u6587\u73AF\u5883\u662F <code>window</code>\uFF0C\u662F\u6CA1\u6709 <code>baz</code> \u7684\uFF0C\u6240\u4EE5\u662F <code>undefined</code>\u3002</p><h3 id="\u9898\u76EE8" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE8" aria-hidden="true">#</a> \u9898\u76EE8</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var f = (function f() {
    return &quot;1&quot;;
}, function g() {
    return 2;
})();

typeof f;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;number&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u9017\u53F7\u64CD\u4F5C\u7B26\u7684\u4F7F\u7528\u53EF\u4EE5\u5F88\u6DF7\u6DC6\uFF0C\u4F46\u8FD9\u6BB5\u8BF4\u660E\u5B83\u7684\u884C\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var x = (1, 2, 3); 
x;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>x\u7684\u503C\u662F3\uFF0C\u8FD9\u8868\u660E\uFF0C\u5F53\u4F60\u6709\u4E00\u7CFB\u5217\u7684\u7EC4\u5408\u5728\u4E00\u8D77\uFF0C\u5E76\u7531\u9017\u53F7\u5206\u9694\u7684\u8868\u8FBE\u5F0F\uFF0C\u5B83\u4EEC\u4ECE\u5DE6\u5230\u53F3\u8FDB\u884C\u8BA1\u7B97\uFF0C\u4F46\u53EA\u6709\u6700\u540E\u4E00\u4E2A\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u4FDD\u5B58\u3002\u7531\u4E8E\u540C\u6837\u7684\u539F\u56E0\uFF0C\u8FD9\u4E2A\u95EE\u9898\u53EF\u4EE5\u6539\u5199\u4E3A\u51CF\u5C11\u6DF7\u4E71\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var f = (function g() {
    return 2;
})();

typeof f;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u9898\u76EE9" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE9" aria-hidden="true">#</a> \u9898\u76EE9</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var x = 1;

if (function f() {}) {
    x += typeof f;
}

x;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;1function&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u51FD\u6570\u58F0\u660E\u7684\u5B9E\u9645\u89C4\u5219\u5982\u4E0B\uFF1A</p><p>\u51FD\u6570\u58F0\u660E\u53EA\u80FD\u51FA\u73B0\u5728\u7A0B\u5E8F\u6216\u51FD\u6570\u4F53\u5185\u3002\u4ECE\u8BED\u6CD5\u4E0A\u8BB2\uFF0C\u5B83\u4EEC\u4E0D\u80FD\u51FA\u73B0\u5728Block\uFF08\u5757\uFF09\uFF08{ ... }\uFF09\u4E2D\uFF0C\u4F8B\u5982\u4E0D\u80FD\u51FA\u73B0\u5728 if\u3001while \u6216 for \u8BED\u53E5\u4E2D\u3002\u56E0\u4E3A Block\uFF08\u5757\uFF09 \u4E2D\u53EA\u80FD\u5305\u542BStatement\u8BED\u53E5\uFF0C \u800C\u4E0D\u80FD\u5305\u542B\u51FD\u6570\u58F0\u660E\u8FD9\u6837\u7684\u6E90\u5143\u7D20\u3002\u53E6\u4E00\u65B9\u9762\uFF0C\u4ED4\u7EC6\u770B\u4E00\u770B\u89C4\u5219\u4E5F\u4F1A\u53D1\u73B0\uFF0C\u552F\u4E00\u53EF\u80FD\u8BA9\u8868\u8FBE\u5F0F\u51FA\u73B0\u5728Block\uFF08\u5757\uFF09\u4E2D\u60C5\u5F62\uFF0C\u5C31\u662F\u8BA9\u5B83\u4F5C\u4E3A\u8868\u8FBE\u5F0F\u8BED\u53E5\u7684\u4E00\u90E8\u5206\u3002\u4F46\u662F\uFF0C\u89C4\u8303\u660E\u786E\u89C4\u5B9A\u4E86\u8868\u8FBE\u5F0F\u8BED\u53E5\u4E0D\u80FD\u4EE5\u5173\u952E\u5B57function\u5F00\u5934\u3002\u800C\u8FD9\u5B9E\u9645\u4E0A\u5C31\u662F\u8BF4\uFF0C\u51FD\u6570\u8868\u8FBE\u5F0F\u540C\u6837\u4E5F\u4E0D\u80FD\u51FA\u73B0\u5728Statement\u8BED\u53E5\u6216Block\uFF08\u5757\uFF09\u4E2D\uFF08\u56E0\u4E3ABlock\uFF08\u5757\uFF09\u5C31\u662F\u7531Statement\u8BED\u53E5\u6784\u6210\u7684\uFF09\u3002</p><p>f\u5728\u8FD9\u4E86\u6CA1\u6709\u88AB\u5B9A\u4E49,\u6240\u4EE5typeof f \u662F\u5B57\u7B26\u4E32&quot;undefined&quot; \uFF0C\u5B57\u7B26\u4E0E\u6570\u5B57\u76F8\u52A0\u7ED3\u679C\u4E5F\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32, \u6240\u4EE5\u6700\u540E\u7684x\u5C31\u662F&quot;1undefined&quot;\u4E86\u3002</p><h3 id="\u9898\u76EE10" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE10" aria-hidden="true">#</a> \u9898\u76EE10</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(function f() {
    function f() {
        return 1;
    }
    return f();

    function f() {
        return 2;
    }
})();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u7B80\u5355\u7684\u6765\u8BF4\u5728\u6267\u884Creturn\u4E4B\u524D\uFF0C\u51FD\u6570\u58F0\u660E\u4F1A\u5728\u4EFB\u4F55\u8868\u8FBE\u5F0F\u88AB\u89E3\u6790\u548C\u6C42\u503C\u4E4B\u524D\u5148\u88AB\u89E3\u6790\u548C\u6C42\u503C\uFF0C \u5373\u4F7F\u4F60\u7684\u58F0\u660E\u5728\u4EE3\u7801\u7684\u6700\u540E\u4E00\u884C\uFF0C\u5B83\u4E5F\u4F1A\u5728\u540C\u4F5C\u7528\u57DF\u5185\u7B2C\u4E00\u4E2A\u8868\u8FBE\u5F0F\u4E4B\u524D\u88AB\u89E3\u6790/\u6C42\u503C\u3002</p><p>\u53C2\u8003\u5982\u4E0B\u4F8B\u5B50\uFF0C\u51FD\u6570fn\u662F\u5728alert\u4E4B\u540E\u58F0\u660E\u7684\uFF0C\u4F46\u662F\u5728alert\u6267\u884C\u7684\u65F6\u5019\uFF0Cfn\u5DF2\u7ECF\u6709\u5B9A\u4E49\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>alert(fn());

function fn() {
    return &#39;Hello world!&#39;;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u9898\u76EE\u4E2D\u51FD\u6570\u63D0\u5347\u4E86\u4E24\u6B21\uFF0C\u7B2C\u4E8C\u6B21\u628A\u7B2C\u4E00\u6B21\u8986\u76D6\u4E86\uFF0C\u6240\u4EE5 return \u540E\u9762\u7684 f \u662F return \u8BED\u53E5\u7684\u4E0B\u4E00\u6761\u8BED\u53E5\u58F0\u660E\u7684\u51FD\u6570 f \u3002 \u6CE8\u610F\u81EA\u6267\u884C\u51FD\u6570 <code>(function f (){})();</code> \u4E2D\u7684 f \u5E76\u6CA1\u6709\u51FD\u6570\u63D0\u5347\u6548\u679C\uFF0C\u5B83\u662F\u8868\u8FBE\u5F0F</p><h3 id="\u9898\u76EE11" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE11" aria-hidden="true">#</a> \u9898\u76EE11</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function f() {
    return f;
}
new f() instanceof f;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>false
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u600E\u6837\u53BB\u7406\u89E3 <code>new f()</code>\uFF1F</p><p>\u9996\u5148\u8FD9\u4E2A\u64CD\u4F5C\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\u5E76\u8C03\u7528\u6784\u9020\u51FD\u6570\u51FD\u6570\u8FD9\u4E00\u65B0\u7684\u5BF9\u8C61\u4F5C\u4E3A\u5B83\u7684\u5F53\u524D\u4E0A\u4E0B\u6587\u5BF9\u8C61\u3002</p><p><code>f()</code> \u8FD4\u56DE\u4E86 <code>return f;</code>\u3002</p><p>\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u8986\u76D6\u4E86\u8FD9\u4E2A\u5B9E\u4F8B\uFF0C\u8FD9\u4E2Anew \u5C31\u5F62\u540C\u865A\u8BBE\u3002</p><p>\u503C\u5F97\u6CE8\u610F\u7684\u662F instanceof \u68C0\u6D4B\u7684\u662F\u539F\u578B</p><h3 id="\u9898\u76EE12" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE12" aria-hidden="true">#</a> \u9898\u76EE12</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var x = [typeof x, typeof y][1];
typeof typeof x;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;string&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u9898\u76EE\u6BD4\u8F83\u7B80\u5355\uFF0C\u6CE8\u610F\u4E0B\u8FD4\u56DE\u7C7B\u578B\u5373\u53EF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>x = [,][1];
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5373 x = &quot;string&quot;\u3002</p><h3 id="\u9898\u76EE13" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE13" aria-hidden="true">#</a> \u9898\u76EE13</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function(foo) {
    return typeof foo.bar;
})({
    foo: {
        bar: 1
    }
});
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;undefined&quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5148\u5206\u89E3\u4E00\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var baz = {
    foo: {
        bar: 1
    }
};

(function(foo) {
    return typeof foo.bar;
})(baz);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u53BB\u6389\u51FD\u6570\u5173\u8054\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var baz = {
    foo: {
        bar: 1
    }
};
var foo = baz;
typeof foo.bar;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6700\u540E\uFF0C\u901A\u8FC7\u66FF\u4EE3\u6211\u4EEC\u9664\u53BB\u4E2D\u95F4\u53D8\u91CFfoo\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var baz = {
    foo: {
        bar: 1
    }
};
typeof baz.bar;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6240\u4EE5\u73B0\u5728\u5C31\u5F88\u6E05\u6670\u4E86\uFF0C\u5C5E\u6027\u4E2D\u6CA1\u6709\u5B9A\u4E49baz\uFF1B\u5B83\u88AB\u5B9A\u4E49\u4E3Abaz.foo\u4E0A\u4E86\uFF0C\u6240\u4EE5\u7ED3\u679C\u662F\uFF1A\u201Dundefined&quot;\u3002</p><h3 id="\u9898\u76EE13-1" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE13-1" aria-hidden="true">#</a> \u9898\u76EE13</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>with(function(x, undefined) {}) length;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>with\u7528\u5F97\u5F88\u5C11\uFF0Cwith\u8BED\u53E5\u5C31\u662F\u7528\u4E8E\u6682\u4FEE\u6539\u4F5C\u7528\u57DF\u94FE\u7684\u6216\u8005\u901A\u5E38\u7528\u6765\u7F29\u77ED\u7279\u5B9A\u60C5\u5F62\u4E0B\u5FC5\u987B\u5199\u7684\u4EE3\u7801\u91CF\u3002</p><p>\u4F7F\u7528with\u8BED\u53E5\u7684JavaScript\u4EE3\u7801\u5F88\u96BE\u4F18\u5316\uFF0C\u56E0\u6B64\u5B83\u7684\u8FD0\u7B97\u901F\u5EA6\u6BD4\u4E0D\u4F7F\u7528with\u8BED\u53E5\u7684\u7B49\u4EF7\u4EE3\u7801\u8981\u6162\u5F97\u591A\u3002\u800C\u4E14\uFF0C\u5728with\u8BED\u53E5\u4E2D\u7684\u51FD\u6570\u5B9A\u4E49\u548C\u53D8\u91CF\u521D\u59CB\u5316\u53EF\u80FD\u4F1A\u4EA7\u751F\u4EE4\u4EBA\u60CA\u8BB6\u7684\u3001\u76F8\u62B5\u89E6\u7684\u884C\u4E3A\uFF0C\u56E0\u6B64\u6211\u4EEC\u907F\u514D\u4F7F\u7528with\u8BED\u53E5\u3002</p><p>with\u7684\u7528\u6CD5\u662F\u8FD9\u6837\u7684\uFF1A</p><p>with(object) {}\uFF0C\u5728\u5927\u62EC\u53F7\u91CC\u9762\uFF0C\u53EF\u4EE5\u5F15\u7528object\u7684\u5C5E\u6027\u800C\u4E0D\u7528\u4F7F\u7528object.attr\u8FD9\u79CD\u5F62\u5F0F\u3002</p><p>\u8FD9\u9053\u9898\u91CC\u9762\uFF0Cwith\u63A5\u53D7\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EA\u4E0D\u8FC7\u8FD9\u4E2A\u5BF9\u8C61\u662F\u51FD\u6570\uFF0C\u51FD\u6570\u6709length\u5C5E\u6027\uFF0C\u4EE3\u8868\u5F62\u53C2\u7684\u4E2A\u6570\uFF0C\u6240\u4EE5\u4E0A\u9762\u8FD4\u56DE\u7684\u503C\u662F2\u3002</p>`,96);function y(_,q){const a=l("ExternalLinkIcon");return c(),p(i,null,[o,e("p",null,[e("a",b,[u,r(a)]),m]),x,e("p",null,[e("a",v,[g,r(a)]),f]),h],64)}var k=t(d,[["render",y]]);export{k as default};
