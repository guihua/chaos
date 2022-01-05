import{r as a,o as c,c as l,a as n,e as s,w as i,F as p,d as r,b as e}from"./app.f239267c.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const h={},d=r('<h2 id="\u9875\u9762\u7BA1\u7406\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u7BA1\u7406\u7C7B" aria-hidden="true">#</a> \u9875\u9762\u7BA1\u7406\u7C7B</h2><h3 id="history\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#history\u5BF9\u8C61" aria-hidden="true">#</a> History\u5BF9\u8C61</h3><p>\u6D4F\u89C8\u5668\u7A97\u53E3\u6709\u4E00\u4E2A <code>history</code> \u5BF9\u8C61\uFF0C\u7528\u6765\u4FDD\u5B58\u6D4F\u89C8\u5386\u53F2\u3002</p><p><code>history</code> \u5BF9\u8C61\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u65B9\u6CD5\uFF0C\u5141\u8BB8\u5728\u6D4F\u89C8\u5386\u53F2\u4E4B\u95F4\u79FB\u52A8\u3002</p><ul><li><p>back()\uFF1A\u79FB\u52A8\u5230\u4E0A\u4E00\u4E2A\u8BBF\u95EE\u9875\u9762\uFF0C\u7B49\u540C\u4E8E\u6D4F\u89C8\u5668\u7684\u540E\u9000\u952E\u3002</p></li><li><p>forward()\uFF1A\u79FB\u52A8\u5230\u4E0B\u4E00\u4E2A\u8BBF\u95EE\u9875\u9762\uFF0C\u7B49\u540C\u4E8E\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\u952E\u3002</p></li><li><p>go()\uFF1A\u63A5\u53D7\u4E00\u4E2A\u6574\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u79FB\u52A8\u5230\u8BE5\u6574\u6570\u6307\u5B9A\u7684\u9875\u9762\uFF0C\u6BD4\u5982go(1)\u76F8\u5F53\u4E8Eforward()\uFF0Cgo(-1)\u76F8\u5F53\u4E8Eback()\u3002</p></li></ul>',5),b=e("\u66F4\u591Ahistory\u7684\u4ECB\u7ECD\uFF0C\u53C2\u8003\uFF1A"),m={href:"http://javascript.ruanyifeng.com/bom/history.html",target:"_blank",rel:"noopener noreferrer"},_=e("\u962E\u4E00\u5CF0\u2014\u2014History\u5BF9\u8C61"),f=e("\u3002"),g=r(`<h3 id="\u4E8B\u4EF6\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u7ED1\u5B9A" aria-hidden="true">#</a> \u4E8B\u4EF6\u7ED1\u5B9A</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if (type == &#39;click&#39; &amp;&amp; supportTouch) {
    (function(dom, event) {
        var touchStartY;

        that.$container.on(&#39;touchstart&#39;, dom, function(e) {
            touchStartY = e.changedTouches[0].clientY;
        });

        that.$container.on(&#39;touchend&#39;, dom, function(e) {
            if (Math.abs(e.changedTouches[0].clientY - touchStartY) &gt; 10) {
                return;
            }

            e.preventDefault();

            events[dom][event].call(this, e);
        });
    })(t, type);
} else {
    this.$container.on(type, t, events[t][type]);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,2),x=e("Touch\u4E8B\u4EF6\u652F\u6301\uFF0C\u53C2\u8003\uFF1A"),v=e("Touch\u4E8B\u4EF6\u652F\u6301\u5224\u65AD"),y=n("p",null,[n("a",{href:"pageManager.js"},"\u5B8C\u6574\u7248\u9875\u9762\u7BA1\u7406\u7C7B")],-1);function k(T,w){const t=a("ExternalLinkIcon"),o=a("RouterLink");return c(),l(p,null,[d,n("p",null,[b,n("a",m,[_,s(t)]),f]),g,n("p",null,[x,s(o,{to:"/weui/touch.html"},{default:i(()=>[v]),_:1})]),y],64)}var L=u(h,[["render",k]]);export{L as default};
