import{d as n}from"./app.f239267c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const e={},r=n(`<h2 id="weui-less\u516C\u7528\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#weui-less\u516C\u7528\u6A21\u5757" aria-hidden="true">#</a> WeUI Less\u516C\u7528\u6A21\u5757</h2><p>Mobile Tap Color</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.setTapColor(@c: rgba(0, 0, 0, 0)) {
    -webkit-tap-highlight-color: @c;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Set One PX</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.setTopLine(@c: #C7C7C7) {
    content: &quot; &quot;;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid @c;
    color: @c;
    transform-origin: 0 0;
    transform: scaleY(0.5);
}

.setBottomLine(@c: #C7C7C7) {
    content: &quot; &quot;;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid @c;
    color: @c;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
}

.setLeftLine(@c: #C7C7C7) {
    content: &quot; &quot;;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    border-left: 1px solid @c;
    color: @c;
    transform-origin: 0 0;
    transform: scaleX(0.5);
}

.setRightLine(@c: #C7C7C7) {
    content: &quot; &quot;;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    border-right: 1px solid @c;
    color: @c;
    transform-origin: 100% 0;
    transform: scaleX(0.5);
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>Set Arrow</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>._setArrow(@arrowsize, @borderColor, @borderWidth) {
    display: inline-block;
    height: @arrowsize;
    width: @arrowsize;
    border-width: @borderWidth @borderWidth 0 0;
    border-color: @borderColor;
    border-style: solid;
}

.setArrow(@direction, @arrowsize, @borderColor, @borderWidth) when (@direction = top) {
    ._setArrow(@arrowsize, @borderColor, @borderWidth);
    transform: matrix(0.71, -0.71, 0.71, 0.71, 0, 0); // rotate(-45deg)
}

.setArrow(@direction, @arrowsize, @borderColor, @borderWidth) when (@direction = right) {
    ._setArrow(@arrowsize, @borderColor, @borderWidth);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0); // rotate(45deg);
    position: relative;
    top: -2px;
}

.setArrow(@direction, @arrowsize, @borderColor, @borderWidth) when (@direction = down) {
    ._setArrow(@arrowsize, @borderColor, @borderWidth);
    transform: matrix(-0.71, 0.71, -0.71, -0.71, 0, 0); // rotate(135deg);
    position: relative;
    top: -3px;
}

.setArrow(@direction, @arrowsize, @borderColor, @borderWidth) when (@direction = left) {
    ._setArrow(@arrowsize, @borderColor, @borderWidth);
    transform: matrix(-0.71, -0.71, 0.71, -0.71, 0, 0); // rotate(-135deg);
    position: relative;
    top: -2px;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>Set Text</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.ellipsis(@w:auto) {
    width: @w;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
}

.ellipsisLn(@line) {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: @line;
}

.text_wrap() {
    word-wrap: break-word;
    word-break: break-all;
}

.hyphens() {
    word-wrap: break-word;
    -webkit-hyphens: auto;
    hyphens: auto;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,9);function a(l,p){return r}var o=s(e,[["render",a]]);export{o as default};
