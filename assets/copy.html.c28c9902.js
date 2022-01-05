import{r as l,o as t,c as p,a as e,e as r,F as c,d as s,b as n}from"./app.f239267c.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=s(`<h2 id="js\u5B9E\u73B0\u590D\u5236\u5230\u526A\u8D34\u677F\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#js\u5B9E\u73B0\u590D\u5236\u5230\u526A\u8D34\u677F\u529F\u80FD" aria-hidden="true">#</a> JS\u5B9E\u73B0\u590D\u5236\u5230\u526A\u8D34\u677F\u529F\u80FD</h2><p>\u4F7F\u7528\u7CFB\u7EDF\u63D0\u4F9B\u7684\u526A\u8D34\u677F\u662F\u4E00\u9879\u57FA\u672C\u7684IT\u6280\u80FD\u3002</p><h3 id="\u526A\u8D34\u677F\u7684\u5B89\u5168\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u526A\u8D34\u677F\u7684\u5B89\u5168\u673A\u5236" aria-hidden="true">#</a> \u526A\u8D34\u677F\u7684\u5B89\u5168\u673A\u5236</h3><p>\u7531\u4E8E\u526A\u8D34\u677F\u7684\u5B89\u5168\u673A\u5236\uFF0C\u51E0\u5E74\u524D\uFF0C\u6D4F\u89C8\u5668\u4E0D\u5177\u5907\u76F4\u63A5\u8BBF\u95EE\u526A\u8D34\u677F\u7684\u80FD\u529B\u3002</p><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u6574\u5408\u57FA\u672C\u7684\u526A\u8D34\u677F\u529F\u80FD\uFF0C\u4F46\u8FD8\u662F\u6709\u4E00\u4E9B\u9650\u5236\uFF1A</p><ol><li><p>\u5927\u90E8\u5206\u6D4F\u89C8\u5668\u652F\u6301\u526A\u8D34\u677F\u529F\u80FD\uFF0CMac\u548CiOS\u4E0A\u7684Safari\u9664\u5916\u3002</p></li><li><p>\u4E0D\u540C\u6D4F\u89C8\u5668\u7684\u652F\u6301\u7A0B\u5EA6\u4E0D\u5C3D\u76F8\u540C\uFF0C\u4E00\u4E9B\u529F\u80FD\u5E76\u4E0D\u5B8C\u6574\u6216\u5B58\u5728\u7F3A\u9677\u3002</p></li><li><p>\u7528\u6237\u5FC5\u987B\u901A\u8FC7\u70B9\u51FB\u9F20\u6807\u6216\u6309\u952E\u7684\u65B9\u5F0F\u6765\u4E3B\u52A8\u89E6\u53D1\uFF0C\u811A\u672C\u5E76\u4E0D\u80FD\u968F\u65F6\u64CD\u7EB5\u526A\u8D34\u677F\u3002</p></li></ol><h3 id="document-execcommand-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#document-execcommand-\u65B9\u6CD5" aria-hidden="true">#</a> document.execCommand()\u65B9\u6CD5</h3><p><code>document.execCommand()</code> \u662F\u9700\u8981\u8C03\u7528\u7684\u5173\u952E\u65B9\u6CD5\uFF0C\u5B83\u53EF\u4EE5\u4F20\u5165\u7684\u53C2\u6570\u5305\u62EC <code>cut</code>\uFF0C<code>copy</code> \u548C <code>paste</code>\u3002</p><p>\u5728\u8C03\u7528\u4E4B\u524D\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>document.queryCommandSupported(\u2018copy\u2019);</code> \u6216 <code>document.queryCommandEnabled(\u2018copy\u2019);</code> \u65B9\u6CD5\uFF08\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u529F\u80FD\u76F8\u540C\uFF09\u6765\u68C0\u6D4B\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301\u590D\u5236\u547D\u4EE4\u3002</p><blockquote><p>Chrome \u867D\u7136\u652F\u6301\u590D\u5236\u547D\u4EE4\u7684\uFF0C\u4F46\u5728 Chorme \u4E2D\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u90FD\u4F1A\u8FD4\u56DE false \u503C\u3002</p></blockquote><p>\u68C0\u6D4B <code>document.execCommand</code> \u65B9\u6CD5\u662F\u5426\u5B58\u5728\u4E5F\u662F\u4E00\u4E2A\u5224\u65AD\u65B9\u6CD5\uFF0C\u4F46\u66F4\u597D\u7684\u505A\u6CD5\u662F\u5C06 <code>document.execCommand(\u2018copy\u2019)</code> \u8C03\u7528\u653E\u5728 <code>try-catch</code> \u5757\u5185\u3002</p><p>\u63A5\u4E0B\u6765\u5C31\u5F97\u8003\u8651\u7528\u6237\u80FD\u590D\u5236\u4EC0\u4E48\u5185\u5BB9\u4E86\uFF0C\u811A\u672C\u9700\u8981\u80FD\u591F\u9009\u4E2D\u6587\u672C\uFF0C\u597D\u5728\u6240\u6709\u7684\u6D4F\u89C8\u5668\u90FD\u5141\u8BB8\u4F7F\u7528 <code>select()</code> \u65B9\u6CD5\u9009\u62E9\u6587\u672C\u8F93\u5165\u548C\u6587\u672C\u533A\u57DF\u7684\u5185\u5BB9\uFF0C\u5E76\u4E14\u5728 Firefox \u548C Chrome\uFF0FOpera \u6D4F\u89C8\u5668\u4E2D\uFF0C\u8FD8\u80FD\u4F7F\u7528 <code>document.createRange</code> \u65B9\u6CD5\u6765\u4ECE\u4EFB\u4F55\u5143\u7D20\u4E2D\u9009\u62E9\u6587\u672C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// select text in #myelement node
// \u9009\u62E9 #myelement \u6807\u7B7E\u4E2D\u7684\u6587\u672C
var
    myelement = document.getElementById(&#39;#myelement&#39;),
    range = document.createRange();

range.selectNode(myelement);
window.getSelection().addRange(range);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7136\u800C\uFF0CIE/Edge \u5E76\u4E0D\u652F\u6301\u8FD9\u4E00\u65B9\u6CD5\u3002</p><h3 id="\u4F7F\u7528clipboard-js" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528clipboard-js" aria-hidden="true">#</a> \u4F7F\u7528clipboard.js</h3>`,15),u=n("\u5982\u679C\u4F60\u5DF2\u7ECF\u653E\u5F03\u6253\u9020\u4E00\u4E2A\u9AD8\u9C81\u68D2\u6027\u7684\u8DE8\u6D4F\u89C8\u5668\u526A\u8D34\u677F\u65B9\u6848\uFF0C\u90A3\u4E48 "),m={href:"https://github.com/zenorocha/clipboard.js.git",target:"_blank",rel:"noopener noreferrer"},d=n("clipboard.js"),g=n(" \u4F1A\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\u3002"),h=s(`<p>\u5B83\u63D0\u4F9B\u4E86\u591A\u79CD\u914D\u7F6E\u65B9\u6CD5\uFF0C\u4F8B\u5982\u901A\u8FC7\u6DFB\u52A0 HTML5 \u6570\u636E\u5C5E\u6027\u6765\u6307\u5B9A\u89E6\u53D1\u5668\u548C\u590D\u5236\u5BF9\u8C61\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;input id=&quot;copyme&quot; value=&quot;text in this field will be copied&quot; /&gt;
&lt;button data-clipboard-target=&quot;#copyme&quot;&gt;copy&lt;/button&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u81EA\u5DF1\u6765\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5DF1\u6765\u5B9E\u73B0" aria-hidden="true">#</a> \u81EA\u5DF1\u6765\u5B9E\u73B0</h3><p>\u867D\u7136 clipboard.js \u53EA\u6709 2kb\uFF0C\u4F46\u6211\u4EEC\u53EA\u752820\u884C\u4EE3\u7801\u5C31\u80FD\u5B9E\u73B0\uFF0C\u524D\u63D0\u662F\u4F60\u80FD\u63A5\u53D7\u4EE5\u4E0B\u6761\u4EF6\uFF1A</p><ul><li><p>\u53EA\u6709\u5BF9\u5E94\u7684\u8868\u5355\u533A\u57DF\u80FD\u591F\u88AB\u590D\u5236</p></li><li><p>\u5728\u4E00\u4E9B\u6D4F\u89C8\u5668\u4E2D\u65E0\u6548\uFF08\u6CA1\u9519\uFF0C\u5C31\u662FSafari\uFF09\uFF0C\u4F46\u53EF\u4EE5\u5728\u9009\u4E2D\u6587\u672C\u540E\u63D0\u793A\u7528\u6237\u4F7F\u7528\u5FEB\u6377\u952E Ctrl/Cmd + C\u3002</p></li></ul><p>\u50CF clipboard.js \u4E00\u6837\uFF0C\u6211\u4EEC\u4F1A\u4F7F\u7528\u4E00\u4E2A\u6309\u94AE\u4F5C\u4E3A\u89E6\u53D1\u5668\uFF0C\u6DFB\u52A0\u6570\u636E\u5C5E\u6027\uFF08data-copytarget\uFF09\u6765\u6307\u5B9A\u62F7\u8D1D\u5185\u5BB9\u7684\u76EE\u6807\uFF08#website\uFF09\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;input type=&quot;text&quot; id=&quot;website&quot; value=&quot;http://www.sitepoint.com/&quot; /&gt;
&lt;button data-copytarget=&quot;#website&quot;&gt;copy&lt;/button&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0B\u9762\u7684\u81EA\u6267\u884C\u51FD\u6570\u4F1A\u7ED9\u6240\u6709\u5E26\u6709 data-copytarget \u5C5E\u6027\u7684\u5143\u7D20\u6DFB\u52A0\u4E00\u4E2A\u70B9\u51FB\u4E8B\u4EF6\u5904\u7406\u65B9\u6CD5\uFF0C\u53BB\u9009\u4E2D\u533A\u57DF\u91CC\u7684\u6587\u672C\u5E76\u6267\u884C document.execCommand(\u2018copy\u2019) \u3002\u5982\u679C\u8FD9\u4E00\u64CD\u4F5C\u5931\u8D25\u4E86\uFF0C\u6587\u672C\u5C06\u4FDD\u6301\u9009\u4E2D\u72B6\u6001\u540C\u65F6\u5F39\u51FA\u63D0\u793A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(function() {

    &#39;use strict&#39;;

    // click events
    // \u6DFB\u52A0\u70B9\u51FB\u4E8B\u4EF6
    document.body.addEventListener(&#39;click&#39;, copy, true);

    // event handler
    // \u6DFB\u52A0\u65F6\u95F4\u5904\u7406\u65B9\u6CD5
    function copy(e) {

        // find target element
        // \u641C\u7D22\u76EE\u6807\u5143\u7D20
        var
            t = e.target,
            c = t.dataset.copytarget,
            inp = (c ? document.querySelector(c) : null);

        // is element selectable?
        // \u5224\u65AD\u5143\u7D20\u662F\u5426\u80FD\u88AB\u9009\u4E2D
        if (inp &amp; amp; amp; &amp; amp; amp; inp.select) {

            // select text
            // \u9009\u62E9\u6587\u672C
            inp.select();

            try {
                // copy text
                // \u590D\u5236\u6587\u672C
                document.execCommand(&#39;copy&#39;);
                inp.blur();
            } catch (err) {
                alert(&#39;please press Ctrl/Cmd+C to copy&#39;);
            }

        }

    }

})();
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div>`,9),y=n("\u5177\u4F53\u6848\u4F8B\u8BF7\u67E5\u770B\uFF1A"),x={href:"https://jsfiddle.net/5fxtuvvj/",target:"_blank",rel:"noopener noreferrer"},v=n("\u590D\u5236\u6587\u672C"),_=s(`<p>\u590D\u5236\u6D4F\u89C8\u5668\u94FE\u63A5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var _copy = function() {
    jQuery(&#39;body&#39;).append(&#39;&lt;input type=&quot;hidden&quot; id=&quot;copy&quot;&gt;&#39;);

    var copyObj = document.getElementById(&#39;copy&#39;);
    copyObj.value = window.location.href;

    var toastStr = &#39;&lt;div class=&quot;cmui-toast&quot;&gt;&lt;div class=&quot;cmui-toast-inner&quot;&gt;&lt;p&gt;{message}&lt;/p&gt;&lt;/div&gt;&lt;/div&gt;&#39;;

    if (copyObj &amp;&amp; copyObj.select) {
        copyObj.select();

        try {
            document.execCommand(&#39;copy&#39;);
            copyObj.blur();
            toastStr = toastStr.replace(/{message}/g, &#39;\u590D\u5236\u6210\u529F\uFF0C\u53EF\u4EE5\u5206\u4EAB\u7ED9\u4ED6\u4EBA\u5566\uFF01&#39;);
        } catch (err) {
            alert(&#39;please press Ctrl/Cmd+C to copy URI\uFF01&#39;);
            toastStr = toastStr.replace(/{message}/g, &#39;\u8BF7\u6309 Ctrl/Cmd+C \u6765\u590D\u5236\u94FE\u63A5\u5206\u4EAB\u7ED9\u4ED6\u4EBA\uFF01&#39;);
        }

        jQuery(&#39;body&#39;).append(toastStr);

        setTimeout(function() {
            jQuery(&#39;.cmui-toast&#39;).remove();
        }, 2000);
    }
};
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,2);function f(q,C){const a=l("ExternalLinkIcon");return t(),p(c,null,[b,e("p",null,[u,e("a",m,[d,r(a)]),g]),h,e("p",null,[y,e("a",x,[v,r(a)])]),_],64)}var k=o(i,[["render",f]]);export{k as default};
