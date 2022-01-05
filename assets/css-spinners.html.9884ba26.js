import{r,o as i,c as p,a as s,e,F as t,d as l,b as n}from"./app.f239267c.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const c={},u=l(`<h2 id="simple-loading-spinners-animated-with-css" tabindex="-1"><a class="header-anchor" href="#simple-loading-spinners-animated-with-css" aria-hidden="true">#</a> Simple loading spinners animated with CSS</h2><p>SCSS Variables Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$spinkit-spinner-margin: 40px auto !default;
$spinkit-size: 100px !default;
$spinkit-spinner-color: #333 !default;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_1-rotating-plane" tabindex="-1"><a class="header-anchor" href="#_1-rotating-plane" aria-hidden="true">#</a> 1.rotating-plane</h3><p>HTML Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;sk-rotating-plane&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>SCSS Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.sk-rotating-plane {
    width: $spinkit-size;
    height: $spinkit-size;
    margin: $spinkit-spinner-margin;
    animation: sk-rotatePlane 1.2s infinite ease-in-out;
    background-color: $spinkit-spinner-color;
}
@keyframes sk-rotatePlane {
    0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,8),o=n("\u6548\u679C\u53C2\u8003\uFF1A"),m={href:"https://jsfiddle.net/guihua/Lmsj7key/",target:"_blank",rel:"noopener noreferrer"},d=n("rotating-plane"),g=l(`<h3 id="_2-double-bounce" tabindex="-1"><a class="header-anchor" href="#_2-double-bounce" aria-hidden="true">#</a> 2.double bounce</h3><p>HTML Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;sk-double-bounce&quot;&gt;
    &lt;div class=&quot;sk-child sk-double-bounce1&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-child sk-double-bounce2&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>SCSS Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.sk-double-bounce {
    position: relative;
    width: $spinkit-size;
    height: $spinkit-size;
    margin: $spinkit-spinner-margin;

    .sk-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: sk-doubleBounce 2.0s infinite ease-in-out;
        opacity: .6;
        border-radius: 50%;
        background-color: $spinkit-spinner-color;
    }
    .sk-double-bounce2 {
        animation-delay: -1.0s;
    }
}
@keyframes sk-doubleBounce {
    0%, 100% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.0);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,5),h=n("\u6548\u679C\u53C2\u8003\uFF1A"),k={href:"https://jsfiddle.net/guihua/oLxw1gj6/",target:"_blank",rel:"noopener noreferrer"},v=n("double-bounce"),f=l(`<h3 id="_3-wave" tabindex="-1"><a class="header-anchor" href="#_3-wave" aria-hidden="true">#</a> 3.wave</h3><p>HTML Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;sk-wave&quot;&gt;
    &lt;div class=&quot;sk-rect sk-rect1&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-rect sk-rect2&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-rect sk-rect3&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-rect sk-rect4&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-rect sk-rect5&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>SCSS Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.sk-wave {
    font-size: 10px;
    width: $spinkit-size * 1.25;
    height: $spinkit-size;
    margin: $spinkit-spinner-margin;
    text-align: center;

    $rectCount: 5;
    $animationDuration: 1.2s;
    $delayRange: .4s;

    .sk-rect {
        display: inline-block;
        width: 6px;
        height: 100%;
        animation: sk-waveStretchDelay $animationDuration infinite ease-in-out;
        background-color: $spinkit-spinner-color;
    }
    @for $i from 1 through $rectCount {
        .sk-rect#{$i} {
            animation-delay: - $animationDuration + $delayRange / ($rectCount - 1) * ($i - 1);
        }
    }
}
@keyframes sk-waveStretchDelay {
    0%, 40%, 100% {
        transform: scaleY(.4);
    }
    20% {
        transform: scaleY(1.0);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div>`,5),_=n("\u6548\u679C\u53C2\u8003\uFF1A"),$={href:"https://jsfiddle.net/guihua/dvg65b5r/",target:"_blank",rel:"noopener noreferrer"},x=n("wave"),q=l(`<h3 id="_4-wandering-cubes" tabindex="-1"><a class="header-anchor" href="#_4-wandering-cubes" aria-hidden="true">#</a> 4.wandering-cubes</h3><p>HTML Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;sk-wandering-cubes&quot;&gt;
    &lt;div class=&quot;sk-cube sk-cube1&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube sk-cube2&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>SCSS Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.sk-wandering-cubes {
    $animationDuration: 1.8s;

    margin: $spinkit-spinner-margin;
    width: $spinkit-size;
    height: $spinkit-size;
    position: relative;

    .sk-cube {
        background-color: $spinkit-spinner-color;
        width: 10px;
        height: 10px;
        position: absolute;
        top: 0;
        left: 0;
        animation: sk-wanderingCube $animationDuration ease-in-out #{-$animationDuration} infinite both;
    }
    .sk-cube2 {
        animation-delay: -$animationDuration/2;
    }
}
@keyframes sk-wanderingCube {
    $cubeDistance: 30px;

    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: translateX($cubeDistance) rotate(-90deg) scale(0.5);
    }
    50% {
        /* Hack to make FF rotate in the right direction */
        transform: translateX($cubeDistance) translateY($cubeDistance) rotate(-179deg);
    }
    50.1% {
        transform: translateX($cubeDistance) translateY($cubeDistance) rotate(-180deg);
    }
    75% {
        transform: translateX(0) translateY($cubeDistance) rotate(-270deg) scale(0.5);
    }
    100% {
        transform: rotate(-360deg);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,5),y=n("\u6548\u679C\u53C2\u8003\uFF1A"),C={href:"https://jsfiddle.net/guihua/v24087oc/",target:"_blank",rel:"noopener noreferrer"},S=n("wandering-cubes"),D=l(`<h3 id="_5-spinner-pulse" tabindex="-1"><a class="header-anchor" href="#_5-spinner-pulse" aria-hidden="true">#</a> 5.spinner-pulse</h3><p>HTML Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;sk-spinner sk-spinner-pulse&quot;&gt;&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>SCSS Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.sk-spinner-pulse {
    width: $spinkit-size;
    height: $spinkit-size;
    margin: $spinkit-spinner-margin;
    animation: sk-pulseScaleOut 1.0s infinite ease-in-out;
    border-radius: 100%;
    background-color: $spinkit-spinner-color;
}
@keyframes sk-pulseScaleOut {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1.0);
        opacity: 0;
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,5),w=n("\u6548\u679C\u53C2\u8003\uFF1A"),z={href:"https://jsfiddle.net/guihua/h40exr38/",target:"_blank",rel:"noopener noreferrer"},R=n("spinner-pulse"),L=l(`<h3 id="_6-chasing-dots" tabindex="-1"><a class="header-anchor" href="#_6-chasing-dots" aria-hidden="true">#</a> 6.chasing-dots</h3><p>HTML Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;sk-chasing-dots&quot;&gt;
    &lt;div class=&quot;sk-child sk-dot1&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-child sk-dot2&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>SCSS Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.sk-chasing-dots {
    $animationDuration: 2.0s;

    position: relative;
    width: $spinkit-size;
    height: $spinkit-size;
    margin: $spinkit-spinner-margin;
    animation: sk-chasingDotsRotate $animationDuration infinite linear;
    text-align: center;

    .sk-child {
        position: absolute;
        top: 0;
        display: inline-block;
        width: 60%;
        height: 60%;
        animation: sk-chasingDotsBounce $animationDuration infinite ease-in-out;
        border-radius: 100%;
        background-color: $spinkit-spinner-color;
    }
    .sk-dot2 {
        top: auto;
        bottom: 0;
        animation-delay: - $animationDuration/2;
    }
}
@keyframes sk-chasingDotsRotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes sk-chasingDotsBounce {
    0%, 100% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.0);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div>`,5),j=n("\u6548\u679C\u53C2\u8003\uFF1A"),H={href:"https://jsfiddle.net/guihua/n4urzL9g/",target:"_blank",rel:"noopener noreferrer"},T=n("chasing-dots"),M=l(`<h3 id="_7-three-bounce" tabindex="-1"><a class="header-anchor" href="#_7-three-bounce" aria-hidden="true">#</a> 7.three-bounce</h3><p>HTML Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;sk-three-bounce&quot;&gt;
    &lt;div class=&quot;sk-child sk-bounce1&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-child sk-bounce2&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-child sk-bounce3&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>SCSS Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.sk-three-bounce {
    $animationDuration: 1.4s;
    $delayRange: .32s;

    width: $spinkit-size * 2;
    margin: $spinkit-spinner-margin;
    text-align: center;

    .sk-child {
        display: inline-block;
        width: $spinkit-size / 2;
        height: $spinkit-size / 2;
        animation: sk-three-bounce $animationDuration ease-in-out 0s infinite both;
        border-radius: 100%;
        background-color: $spinkit-spinner-color;
    }
    .sk-bounce1 {
        animation-delay: -$delayRange;
    }
    .sk-bounce2 {
        animation-delay: -$delayRange / 2;
    }
}
@keyframes sk-three-bounce {
    0%, 80%, 100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1.0);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div>`,5),B=n("\u6548\u679C\u53C2\u8003\uFF1A"),X={href:"https://jsfiddle.net/guihua/k86mkbd4/",target:"_blank",rel:"noopener noreferrer"},Y=n("three-bounce"),F=l(`<h3 id="_8-circle" tabindex="-1"><a class="header-anchor" href="#_8-circle" aria-hidden="true">#</a> 8.circle</h3><p>HTML Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;sk-circle&quot;&gt;
    &lt;div class=&quot;sk-circle1 sk-child&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle2 sk-child&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle3 sk-child&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle4 sk-child&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle5 sk-child&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle6 sk-child&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle7 sk-child&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle8 sk-child&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle9 sk-child&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle10 sk-child&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle11 sk-child&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle12 sk-child&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>SCSS Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.sk-circle {
    $circleCount: 12;
    $animationDuration: 1.2s;

    position: relative;
    width: $spinkit-size;
    height: $spinkit-size;
    margin: $spinkit-spinner-margin;

    .sk-child {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .sk-child:before {
        display: block;
        width: 15%;
        height: 15%;
        margin: 0 auto;
        content: &#39;&#39;;
        animation: sk-circleBounceDelay $animationDuration infinite ease-in-out both;
        border-radius: 100%;
        background-color: $spinkit-spinner-color;
    }
    @for $i from 2 through $circleCount {
        .sk-circle#{$i} {
            transform: rotate(360deg/$circleCount*($i - 1));
        }
    }
    @for $i from 2 through $circleCount {
        .sk-circle#{$i}:before {
            animation-delay: - $animationDuration + $animationDuration / $circleCount * ($i - 1);
        }
    }
}
@keyframes sk-circleBounceDelay {
    0%, 80%, 100% {
        transform: scale(0);
    }
    40% {
        transform: scale(1.0);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,5),V=n("\u6548\u679C\u53C2\u8003\uFF1A"),N={href:"https://jsfiddle.net/guihua/rh7xfhd8/",target:"_blank",rel:"noopener noreferrer"},E=n("circle"),A=l(`<h3 id="_9-cube-grid" tabindex="-1"><a class="header-anchor" href="#_9-cube-grid" aria-hidden="true">#</a> 9.cube-grid</h3><p>HTML Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;sk-cube-grid&quot;&gt;
    &lt;div class=&quot;sk-cube sk-cube1&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube sk-cube2&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube sk-cube3&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube sk-cube4&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube sk-cube5&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube sk-cube6&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube sk-cube7&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube sk-cube8&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube sk-cube9&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>SCSS Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.sk-cube-grid {
    $delayRange: .4s;

    width: $spinkit-size;
    height: $spinkit-size;
    margin: $spinkit-spinner-margin;

    .sk-cube {
        float: left;
        width: 33.33%;
        height: 33.33%;
        animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
        background-color: $spinkit-spinner-color;
    }
    /*
     * Spinner positions
     * 1 2 3
     * 4 5 6
     * 7 8 9
     */
    .sk-cube1 {
        animation-delay: $delayRange * .50;
    }
    .sk-cube2 {
        animation-delay: $delayRange * .75;
    }
    .sk-cube3 {
        animation-delay: $delayRange;
    }
    .sk-cube4 {
        animation-delay: $delayRange * .25;
    }
    .sk-cube5 {
        animation-delay: $delayRange * .50;
    }
    .sk-cube6 {
        animation-delay: $delayRange * .75;
    }
    .sk-cube7 {
        animation-delay: .0s;
    }
    .sk-cube8 {
        animation-delay: $delayRange * .25;
    }
    .sk-cube9 {
        animation-delay: $delayRange * .50;
    }
}
@keyframes sk-cubeGridScaleDelay {
    0%, 70%, 100% {
        transform: scale3D(1.0, 1.0, 1.0);
    }
    35% {
        transform: scale3D(.0, .0, 1.0);
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div>`,5),G=n("\u6548\u679C\u53C2\u8003\uFF1A"),I={href:"https://jsfiddle.net/guihua/c7tshnws/",target:"_blank",rel:"noopener noreferrer"},O=n("cube-grid"),P=l(`<h3 id="_10-fading-circle" tabindex="-1"><a class="header-anchor" href="#_10-fading-circle" aria-hidden="true">#</a> 10.fading-circle</h3><p>HTML Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;sk-fading-circle&quot;&gt;
    &lt;div class=&quot;sk-circle1 sk-circle&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle2 sk-circle&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle3 sk-circle&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle4 sk-circle&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle5 sk-circle&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle6 sk-circle&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle7 sk-circle&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle8 sk-circle&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle9 sk-circle&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle10 sk-circle&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle11 sk-circle&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-circle12 sk-circle&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>SCSS Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.sk-fading-circle {
    $circleCount: 12;
    $animationDuration: 1.2s;

    position: relative;
    width: $spinkit-size;
    height: $spinkit-size;
    margin: $spinkit-spinner-margin;

    .sk-circle {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .sk-circle:before {
        display: block;
        width: 15%;
        height: 15%;
        margin: 0 auto;
        content: &#39;&#39;;
        animation: sk-circleFadeDelay $animationDuration infinite ease-in-out both;
        border-radius: 100%;
        background-color: $spinkit-spinner-color;
    }
    @for $i from 2 through $circleCount {
        .sk-circle#{$i} {
            transform: rotate(360deg/$circleCount*($i - 1));
        }
    }
    @for $i from 2 through $circleCount {
        .sk-circle#{$i}:before {
            animation-delay: -$animationDuration + $animationDuration/$circleCount*($i - 1);
        }
    }
}
@keyframes sk-circleFadeDelay {
    0%, 39%, 100% {
        opacity: 0;
    }
    40% {
        opacity: 1;
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,5),Z=n("\u6548\u679C\u53C2\u8003\uFF1A"),J={href:"https://jsfiddle.net/guihua/tfgf7xa8/",target:"_blank",rel:"noopener noreferrer"},K=n("fading-circle"),Q=l(`<h3 id="_11-folding-cube" tabindex="-1"><a class="header-anchor" href="#_11-folding-cube" aria-hidden="true">#</a> 11.folding-cube</h3><p>HTML Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;div class=&quot;sk-folding-cube&quot;&gt;
    &lt;div class=&quot;sk-cube1 sk-cube&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube2 sk-cube&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube4 sk-cube&quot;&gt;&lt;/div&gt;
    &lt;div class=&quot;sk-cube3 sk-cube&quot;&gt;&lt;/div&gt;
&lt;/div&gt;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>SCSS Code\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.sk-folding-cube {
    $cubeCount: 4;
    $animationDuration: 2.4s;
    $delayRange: $animationDuration/2;
    
    position: relative;
    width: $spinkit-size;
    height: $spinkit-size;
    margin: $spinkit-spinner-margin;
    transform: rotateZ(45deg);

    .sk-cube {
        position: relative;
        float: left;
        width: 50%;
        height: 50%;
        transform: scale(1.1);
    }
    .sk-cube:before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: &#39;&#39;;
        transform-origin: 100% 100%;
        animation: sk-foldCubeAngle $animationDuration infinite linear both;
        background-color: $spinkit-spinner-color;
    }
    @for $i from 2 through $cubeCount {
        .sk-cube#{$i} {
            transform: scale(1.1) rotateZ(90deg*($i - 1));
        }
    }
    @for $i from 2 through $cubeCount {
        .sk-cube#{$i}:before {
            animation-delay: $delayRange/$cubeCount*($i - 1);
        }
    }
}
@keyframes sk-foldCubeAngle {
    0%, 10% {
        transform: perspective(140px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        transform: perspective(140px) rotateY(180deg);
        opacity: 0;
    }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div>`,5),U=n("\u6548\u679C\u53C2\u8003\uFF1A"),W={href:"https://jsfiddle.net/guihua/r0po2x9u/",target:"_blank",rel:"noopener noreferrer"},nn=n("folding-cube"),sn=n("\u5B8C\u6574\u7684"),an={href:"http://tobiasahlin.com/spinkit/",target:"_blank",rel:"noopener noreferrer"},en=n("\u7EBF\u4E0ADemo"),ln=n("\u3002");function rn(pn,tn){const a=r("ExternalLinkIcon");return i(),p(t,null,[u,s("p",null,[o,s("a",m,[d,e(a)])]),g,s("p",null,[h,s("a",k,[v,e(a)])]),f,s("p",null,[_,s("a",$,[x,e(a)])]),q,s("p",null,[y,s("a",C,[S,e(a)])]),D,s("p",null,[w,s("a",z,[R,e(a)])]),L,s("p",null,[j,s("a",H,[T,e(a)])]),M,s("p",null,[B,s("a",X,[Y,e(a)])]),F,s("p",null,[V,s("a",N,[E,e(a)])]),A,s("p",null,[G,s("a",I,[O,e(a)])]),P,s("p",null,[Z,s("a",J,[K,e(a)])]),Q,s("p",null,[U,s("a",W,[nn,e(a)])]),s("p",null,[sn,s("a",an,[en,e(a)]),ln])],64)}var un=b(c,[["render",rn]]);export{un as default};
