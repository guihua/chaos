import{d as n}from"./app.f239267c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="flash-\u652F\u6301\u6027\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#flash-\u652F\u6301\u6027\u5224\u65AD" aria-hidden="true">#</a> Flash \u652F\u6301\u6027\u5224\u65AD</h2><p>\u5224\u65AD\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301 Flash\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>_hasFlash = function() {
    var hasFlash = false;

    try {
        hasFlash = Boolean(new ActiveXObject(&#39;ShockwaveFlash.ShockwaveFlash&#39;));
    } catch(exception) {
        hasFlash = (&#39;undefined&#39; != typeof navigator.mimeTypes[&#39;application/x-shockwave-flash&#39;]);
    }

    return hasFlash;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5224\u65AD\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301 Flash \u5E76\u5B89\u88C5 Flash \u63D2\u4EF6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>_detectFlash = function() {
    //navigator.mimeTypes\u662FMIME\u7C7B\u578B\uFF0C\u5305\u542B\u63D2\u4EF6\u4FE1\u606F
    if (navigator.mimeTypes.length &gt; 0) {
        //application/x-shockwave-flash\u662Fflash\u63D2\u4EF6\u7684\u540D\u5B57
        var flashAct = navigator.mimeTypes[&quot;application/x-shockwave-flash&quot;];

        return flashAct != null ? flashAct.enabledPlugin != null : false;
    } else if (self.ActiveXObject) {
        try {
            new ActiveXObject(&#39;ShockwaveFlash.ShockwaveFlash&#39;);
            return true;
        } catch (oError) {
            return false;
        }
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,5);function l(r,p){return e}var t=s(a,[["render",l]]);export{t as default};
