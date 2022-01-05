import{r as s,o as r,c as n,a as t,e as a,F as i,d,b as e}from"./app.f239267c.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const c={},p=d(`<h2 id="\u7528-nodelist-js-\u64CD\u4F5C-dom" tabindex="-1"><a class="header-anchor" href="#\u7528-nodelist-js-\u64CD\u4F5C-dom" aria-hidden="true">#</a> \u7528 NodeList.js \u64CD\u4F5C DOM</h2><p>\u8FD1\u5E74\u6765\uFF0CjQuery \u5DF2\u7ECF\u6210\u4E3A web\uFF08\u5F00\u53D1\uFF09 \u4E2D\u5B9E\u9645\u610F\u4E49\u4E0A\u7684 JavaScript \u5E93\u3002\u5B83\u89E3\u51B3\u4E86\u8BB8\u591A\u8DE8\u6D4F\u89C8\u5668\u7684\u4E0D\u517C\u5BB9\u6027\u95EE\u9898\uFF0C\u540C\u65F6\u6DFB\u52A0\u4E86\u4E00\u5C42\u53D7\u6B22\u8FCE\u7684\u8BED\u6CD5\u7CD6\u7528\u4E8E\u5BA2\u6237\u7AEF\u7684\u811A\u672C\u7F16\u5199\u3002\u5B83\u5C06 DOM \u64CD\u4F5C\u8FD9\u4E00\u5927\u75DB\u5904\u8FDB\u884C\u4E86\u62BD\u8C61\uFF0C\u4F46\u662F\u81EA\u5B83\u51FA\u73B0\u4EE5\u6765\uFF0C\u539F\u751F\u6D4F\u89C8\u5668 API \u5DF2\u7ECF\u6709\u4E86\u663E\u8457\u6539\u5584\u5E76\u4E14\u4E5F\u8BB8\u4F60\u5E76\u4E0D\u9700\u8981 jQuery\u7684\u60F3\u6CD5\u5F00\u59CB\u88AB\u4EBA\u4EEC\u6240\u63A5\u53D7\u3002</p><p>\u4E0B\u5217\u662F\u4E00\u4E9B\u539F\u56E0\uFF1A</p><ol><li><p>jQuery \u5305\u542B\u5F88\u591A\u4F60\u5E76\u4E0D\u9700\u8981\u6216\u4E0D\u4F1A\u4F7F\u7528\u5230\u7684\u529F\u80FD\uFF08\u56E0\u6B64\u7565\u663E\u81C3\u80BF\uFF09\u3002</p></li><li><p>jQuery \u5F88\u591A\u4EBA\u6765\u8BF4\u592A\u8FC7\u7EB7\u7E41\u3002\u901A\u5E38\u4F53\u79EF\u8F83\u5C0F\u7684\u5E93\u53EF\u4EE5\u66F4\u597D\u7684\u5B8C\u6210\u7279\u5B9A\u4EFB\u52A1\u3002</p></li><li><p>\u5C31 DOM \u64CD\u4F5C\u800C\u8A00\uFF0C\u6D4F\u89C8\u5668 API \u5982\u4ECA\u53EF\u4EE5\u505A\u5927\u591A\u6570 jQuery \u53EF\u4EE5\u505A\u7684\u4E8B\u3002</p></li><li><p>\u6D4F\u89C8\u5668 API \u73B0\u5728\u66F4\u52A0\u540C\u6B65\uFF0C\u4F8B\u5982\uFF0C\u4F7F\u7528 addEventListener \u800C\u975E attachEvent\u3002</p></li></ol><p>\u76EE\u524D\u7684\u95EE\u9898\u662F\u4F7F\u7528\u666E\u901A\u7684\uFF08\u6216\u539F\u59CB\u7684\uFF09JavaScript \u8FDB\u884C DOM \u64CD\u4F5C\u540C jQuery \u4E00\u6837\u4EE4\u4EBA\u538C\u70E6\u3002\u56E0\u4E3A\u4F60\u4E0D\u5F97\u4E0D\u8BFB\u5199\u591A\u4F59\u7684\u4EE3\u7801\uFF0C\u5E76\u4E14\u5904\u7406\u6D4F\u89C8\u5668\u4E2D\u65E0\u7528\u7684 NodeList \u3002</p><p>\u4EC0\u4E48\u662F NodeList\uFF1A</p><blockquote><p>NodeList \u5BF9\u8C61\u662F\u8282\u70B9\u96C6\u5408\uFF0C\u5982 Node.childNodes \u548C document.querySelectorAll \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u3002</p></blockquote><p>\u4EE5\u53CA\u6709\u65F6\u4F1A\u51FA\u73B0\u7684\u52A8\u6001 NodeLists \uFF08\u4EE4\u4EBA\u56F0\u60D1\u7684\uFF09\uFF1A</p><blockquote><p>\u5728\u4E00\u4E9B\u573A\u666F\u4E0B\uFF0CNodeList \u662F\u4E00\u4E2A\u52A8\u6001\u96C6\u5408\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5728 DOM \u4E0A\u7684\u64CD\u4F5C\u90FD\u4F1A\u53CD\u5C04\u5230\u8FD9\u4E2A\u96C6\u5408\u4E2D\u3002\u4F8B\u5982\uFF0CNode.childNodes \u5C31\u662F\u52A8\u6001\u7684\u3002</p></blockquote><p>\u6D4F\u89C8\u5668\u4E5F\u6CA1\u6709\u63D0\u4F9B\u4EFB\u4F55\u6709\u6548\u7684\u529E\u6CD5\u6765\u64CD\u4F5C\u8FD9\u4E9B NodeList \u5BF9\u8C61\u3002</p><p><a href="/nodelist/NodeList.js">NodeList.js</a> \u662F\u539F\u751F DOM API \u7684\u4E00\u4E2A\u5C01\u88C5\uFF0C\u5B83\u8BA9\u4F60\u5728\u64CD\u4F5C\u8282\u70B9\u6570\u7EC4\uFF08\u4E5F\u5C31\u662F\u6211\u7684 NodeList\uFF09\u65F6\u50CF\u64CD\u4F5C\u5355\u4E2A\u8282\u70B9\u4E00\u6837\u3002\u76F8\u6BD4\u6D4F\u89C8\u5668\u7684\u539F\u751F NodeList \u5BF9\u8C61\uFF0C\u8FD9\u7ED9\u4F60\u5E26\u6765\u4E86\u66F4\u591A\u7684\u5B9E\u7528\u6027\u3002</p><p>\u4F7F\u7528\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u9009\u62E9 DOM \u8282\u70B9
$$(selector);
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,13),u=e("\u66F4\u591A\u4F7F\u7528\u65B9\u6CD5\uFF0C\u53C2\u8003 "),_={href:"https://github.com/eorroe/NodeList.js",target:"_blank",rel:"noopener noreferrer"},h=e("Github\u6559\u7A0B"),N=e(" \u3002");function m(b,L){const o=s("ExternalLinkIcon");return r(),n(i,null,[p,t("p",null,[u,t("a",_,[h,a(o)]),N])],64)}var x=l(c,[["render",m]]);export{x as default};
