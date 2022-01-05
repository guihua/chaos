import{d as n}from"./app.f239267c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h2 id="\u6D17\u724C\u7B97\u6CD5-\u7ED9\u6570\u7EC4\u968F\u673A\u6392\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u6D17\u724C\u7B97\u6CD5-\u7ED9\u6570\u7EC4\u968F\u673A\u6392\u5E8F" aria-hidden="true">#</a> \u6D17\u724C\u7B97\u6CD5\uFF1A\u7ED9\u6570\u7EC4\u968F\u673A\u6392\u5E8F</h2><p>\u6D17\u724C\u7B97\u6CD5\u662F\u4E00\u4E2A\u6BD4\u8F83\u5F62\u8C61\u7684\u672F\u8BED\uFF0C\u672C\u8D28\u4E0A\u8BA9\u4E00\u4E2A\u6570\u7EC4\u5185\u7684\u5143\u7D20\u968F\u673A\u6392\u5217\u3002</p><p>\u4EE3\u7801\u5B9E\u73B0\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Array.prototype.shuffle = function() {
    var input = this;

    for (var i = input.length - 1; i &gt;= 0; i--) {

        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];

        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

var tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

tempArray.shuffle();

// console the result
console.log(tempArray);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,4);function r(p,l){return e}var c=s(a,[["render",r]]);export{c as default};
