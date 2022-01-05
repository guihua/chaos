import{r as e,o as r,c as p,a as n,e as l,F as t,d as c,b as s}from"./app.f239267c.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const b={},o=c(`<h2 id="boom-\u4E00\u6B3E\u6709\u8DA3\u7684javascript\u52A8\u753B\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#boom-\u4E00\u6B3E\u6709\u8DA3\u7684javascript\u52A8\u753B\u6548\u679C" aria-hidden="true">#</a> Boom\uFF1A\u4E00\u6B3E\u6709\u8DA3\u7684JavaScript\u52A8\u753B\u6548\u679C</h2><p>\u5B9E\u73B0\u51FA\u6765\u7684\u6548\u679C\u60CA\u5446\u4E86\uFF0C\u7EC6\u770B\u4EE3\u7801\u4E4B\u540E\uFF0C\u53D1\u73B0\u662F\u5728\u539F\u56FE\u4E4B\u4E0A\u6784\u9020\u5BB9\u5668\uFF0C\u5206\u5272\u539F\u6709\u56FE\u7247\u91C7\u7528\u52A8\u753B\u5B9E\u73B0\u3002</p><p>html\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;wrap&quot;&gt;
    &lt;img class=&#39;pic1&#39; src=&quot;./images2.jpg&quot;&gt;
    &lt;img class=&#39;pic2&#39; src=&quot;./images.jpg&quot;&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>css\u6837\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.wrap {
    position: absolute;
    top: 100px;
    left: 100px;
}
.pic1 {
    width: 300px;   // \u56FE\u7247\u8BBE\u7F6E\u4E3A\u539F\u59CB\u56FE\u7247\u5927\u5C0F\uFF0C\u4E0D\u80FD\u7F29\u653E
}
.pic2 {
    width: 116px;
}
.shake {
    animation: shakeAm 0.3s ease-in;    // \u56FE\u7247\u52A8\u753B
    -webkit-animation: shakeAm 0.3s ease-in;
}
@-webkit-keyframes shakeAm {
    0% {
        transform: rotateZ(0deg);
    }
    25% {
        transform: rotateZ(15deg);
    }
    50% {
        transform: rotateZ(0deg);
    }
    75% {
        transform: rotateZ(-15deg);
    }
    100% {
        transform: rotateZ(0deg);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>JavaScript\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>boom($(&#39;img&#39;));
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u521D\u59CB\u5316\u4E4B\u524D\uFF0C\u8C03\u7528\u6E90\u7801 <a href="/code/Boom.js">Boom</a>\u3002</p>`,9),m=s("\u8BE5\u6548\u679C\u51FA\u81EA\uFF1A"),u={href:"https://github.com/chokcoco/boomJS",target:"_blank",rel:"noopener noreferrer"},d=s("boomJS");function g(h,x){const a=e("ExternalLinkIcon");return r(),p(t,null,[o,n("p",null,[m,n("a",u,[d,l(a)])])],64)}var f=i(b,[["render",g]]);export{f as default};
