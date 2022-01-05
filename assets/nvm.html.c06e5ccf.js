import{r as l,o as r,c as t,a as n,e as i,F as o,d as e,b as s}from"./app.f239267c.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const m={},c=e(`<h2 id="nvm\u7BA1\u7406node\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#nvm\u7BA1\u7406node\u7248\u672C" aria-hidden="true">#</a> nvm\u7BA1\u7406node\u7248\u672C</h2><h3 id="\u5B89\u88C5nvm" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5nvm" aria-hidden="true">#</a> \u5B89\u88C5nvm</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,3),d={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},v=s("\u67E5\u770B nvm \u7248\u672C\u66F4\u65B0"),u=s("\uFF0C\u82E5\u6709\u66F4\u65B0\uFF0C\u5B89\u88C5\u6700\u65B0\u7248\u672C\u3002"),b=e(`<p>\u5B8C\u6210\u540E\uFF0Cnvm\u5B89\u88C5\u5728 <code>~/.nvm</code> \u4E0B\u3002</p><h3 id="\u914D\u7F6E\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u73AF\u5883" aria-hidden="true">#</a> \u914D\u7F6E\u73AF\u5883</h3><p>\u5728 <code>~/.bash_profile</code> \u4E2D\u914D\u7F6Envm\u8DEF\u5F84\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u7F16\u8F91~/.bash_profile\u6587\u4EF6
nano ~/.bash_profile
# \u6DFB\u52A0nvm\u8DEF\u5F84
export NVM_DIR=&quot;$HOME/.nvm&quot;
[ -s &quot;$NVM_DIR/nvm.sh&quot; ] &amp;&amp; . &quot;$NVM_DIR/nvm.sh&quot; # This loads nvm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5B8C\u6210\u7F16\u8F91\u540E\uFF0C\u542F\u52A8\u914D\u7F6E\u751F\u6548\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>source ~/.bash_profile
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165 <code>nvm</code> \u547D\u4EE4\uFF0C\u5373\u53EF\u770B\u5230\u4E00\u5806\u76F8\u5173\u4FE1\u606F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Node Version Manager

Note: &lt;version&gt; refers to any version-like string nvm understands. This includes:
  - full or partial version numbers, starting with an optional &quot;v&quot; (0.10, v0.1.2, v1)
  - default (built-in) aliases: node, stable, unstable, iojs, system
  - custom aliases you define with \`nvm alias foo\`

Usage:
  nvm help                                  Show this message
  nvm --version                             Print out the latest released version of nvm
  nvm install [-s] &lt;version&gt;                Download and install a &lt;version&gt;, [-s] from source. Uses .nvmrc if available
    --reinstall-packages-from=&lt;version&gt;     When installing, reinstall packages installed in &lt;node|iojs|node version number&gt;
  nvm uninstall &lt;version&gt;                   Uninstall a version
  nvm use [--silent] &lt;version&gt;              Modify PATH to use &lt;version&gt;. Uses .nvmrc if available
  nvm exec [--silent] &lt;version&gt; [&lt;command&gt;] Run &lt;command&gt; on &lt;version&gt;. Uses .nvmrc if available
  nvm run [--silent] &lt;version&gt; [&lt;args&gt;]     Run \`node\` on &lt;version&gt; with &lt;args&gt; as arguments. Uses .nvmrc if available
  nvm current                               Display currently activated version
  nvm ls                                    List installed versions
  nvm ls &lt;version&gt;                          List versions matching a given description
  nvm ls-remote                             List remote versions available for install
  nvm version &lt;version&gt;                     Resolve the given description to a single local version
  nvm version-remote &lt;version&gt;              Resolve the given description to a single remote version
  nvm deactivate                            Undo effects of \`nvm\` on current shell
  nvm alias [&lt;pattern&gt;]                     Show all aliases beginning with &lt;pattern&gt;
  nvm alias &lt;name&gt; &lt;version&gt;                Set an alias named &lt;name&gt; pointing to &lt;version&gt;
  nvm unalias &lt;name&gt;                        Deletes the alias named &lt;name&gt;
  nvm reinstall-packages &lt;version&gt;          Reinstall global \`npm\` packages contained in &lt;version&gt; to current version
  nvm unload                                Unload \`nvm\` from shell
  nvm which [&lt;version&gt;]                     Display path to installed node version. Uses .nvmrc if available

Example:
  nvm install v0.10.32                  Install a specific version number
  nvm use 0.10                          Use the latest available 0.10.x release
  nvm run 0.10.32 app.js                Run app.js using node v0.10.32
  nvm exec 0.10.32 node app.js          Run \`node app.js\` with the PATH pointing to node v0.10.32
  nvm alias default 0.10.32             Set default node version on a shell

Note:
  to remove, delete, or uninstall nvm - just remove the \`$NVM_DIR\` folder (usually \`~/.nvm\`)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><p>\u67E5\u770B\u7EBF\u4E0A\u7684node\u7248\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nvm ls-remote
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u9009\u62E9\u9700\u8981\u7684\u7248\u672C\u8FDB\u884C\u5B89\u88C5\u3002\u6839\u636E\u9700\u8981\uFF0C\u672C\u5730\u5B89\u88C5\u7684node\u7248\u672C\u662F4.5.0\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nvm install 4.5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u4F7F\u7528\u8BE5\u7248\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nvm use 4.5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>nvm\u5B89\u88C5node\u540E\uFF0C\u4F1A\u5C06\u5404\u4E2A\u7248\u672C\u7684node\u5B89\u88C5\u5728 <code>~/.nvm/versions/node</code> \u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u770B\u5B89\u88C5\u7684node\u7248\u672C
ls -a ~/.nvm/versions/node
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6216\u8005\u901A\u8FC7nvm\u67E5\u770B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u770B\u672C\u5730node\u7248\u672C
nvm ls
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u6211\u672C\u5730\u5B89\u88C5\u4E86\u4E24\u4E2Anode\u7248\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>v4.5.0
v7.1.0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5176\u4E2D\uFF0Cnvm\u4F1A\u901A\u8FC7\u989C\u8272\u6807\u8BC6\u672C\u5730\u4F7F\u7528\u7684node\u7248\u672C\uFF0C\u6216\u8005\uFF0C\u901A\u8FC7\u547D\u4EE4\u67E5\u770B\u672C\u5730\u5F53\u524D\u4F7F\u7528\u7684\u7248\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nvm current
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528 <code>nvm use</code> \u547D\u4EE4\u53EA\u4F1A\u5728\u5F53\u524Dbash\u91CC\u751F\u6548\uFF0C\u91CD\u65B0\u6253\u5F00\u4E00\u4E2Abash\u4F60\u4F1A\u53D1\u73B0$PATH\u7684\u503C\u5DF2\u7ECF\u4E0D\u5305\u542B\u521A\u624D\u7684node\u76EE\u5F55\u4E86\uFF0C\u6B64\u65F6\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u5236\u5B9A\u672C\u5730\u7684\u9ED8\u8BA4node\u7248\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nvm alias default &lt;version&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u6211\u672C\u5730\u6307\u5B9A4.5\u4E3A\u9ED8\u8BA4\u7248\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nvm alias default 4.5
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u8FD9\u6837\uFF0C\u5C31\u5B9E\u73B0\u4E86\u672C\u5730nvm\u7BA1\u7406node\u73AF\u5883\u3002</p>`,28);function g(h,x){const a=l("ExternalLinkIcon");return r(),t(o,null,[c,n("p",null,[n("a",d,[v,i(a)]),u]),b],64)}var N=p(m,[["render",g]]);export{N as default};
