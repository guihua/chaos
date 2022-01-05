import{d as n}from"./app.f239267c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="\u83B7\u53D6-hashcode" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6-hashcode" aria-hidden="true">#</a> \u83B7\u53D6 HashCode</h2><p>\u83B7\u53D6 HashCode\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var _getHashCode = function(str) {
    var hash = 0;

    if (!_isNull(str)) {
        for (var i = 0; i &lt; str.length; i++) {
            hash = hash * 31 + str.charCodeAt(i);
            hash = _intValue(hash);
        }
    }

    return Math.abs(hash);
},
_isNull = function(str) {
    return str == null || str.value == &quot;&quot;;
},
_intValue = function(num) {
    var MAX_VALUE = 0x7fffffff;
    var MIN_VALUE = -0x80000000;

    if (num &gt; MAX_VALUE || num &lt; MIN_VALUE) {
        return num &amp;= 0xFFFFFFFF;
    }

    return num;
};
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u6B63\u5E38\u83B7\u53D6\u7684 hashCode \u5B58\u5728\u8D1F\u503C\uFF0C\u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u901A\u8FC7 <code>Math.abs</code> \u53D6\u7EDD\u5BF9\u503C\u3002</p>`,4);function r(l,p){return e}var i=s(a,[["render",r]]);export{i as default};
