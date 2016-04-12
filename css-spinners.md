Simple loading spinners animated with CSS
---

SCSS Variables Code：
```
$spinkit-spinner-margin: 40px auto !default;
$spinkit-size: 100px !default;
$spinkit-spinner-color: #333 !default;
```



### 1.rotating-plane
HTML Code：
```
<div class="sk-rotating-plane"></div>
```

SCSS Code：
```
.sk-rotating-plane {
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
```

效果参考：[rotating-plane](https://jsfiddle.net/guihua/Lmsj7key/)


### 2.double bounce
HTML Code：
```
<div class="sk-double-bounce">
    <div class="sk-child sk-double-bounce1"></div>
    <div class="sk-child sk-double-bounce2"></div>
</div>
```

SCSS Code：
```
.sk-double-bounce {
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
```

效果参考：[double-bounce](https://jsfiddle.net/guihua/oLxw1gj6/)


### 3.wave
HTML Code：
```
<div class="sk-wave">
    <div class="sk-rect sk-rect1"></div>
    <div class="sk-rect sk-rect2"></div>
    <div class="sk-rect sk-rect3"></div>
    <div class="sk-rect sk-rect4"></div>
    <div class="sk-rect sk-rect5"></div>
</div>
```

SCSS Code：
```
.sk-wave {
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
```

效果参考：[wave](https://jsfiddle.net/guihua/dvg65b5r/)


### 4.wandering-cubes
HTML Code：
```
<div class="sk-wandering-cubes">
    <div class="sk-cube sk-cube1"></div>
    <div class="sk-cube sk-cube2"></div>
</div>
```

SCSS Code：
```
.sk-wandering-cubes {
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
```

效果参考：[wandering-cubes](https://jsfiddle.net/guihua/v24087oc/)


### 5.spinner-pulse
HTML Code：
```
<div class="sk-spinner sk-spinner-pulse"></div>
```

SCSS Code：
```
.sk-spinner-pulse {
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
```

效果参考：[spinner-pulse](https://jsfiddle.net/guihua/h40exr38/)


### 6.chasing-dots
HTML Code：
```
<div class="sk-chasing-dots">
    <div class="sk-child sk-dot1"></div>
    <div class="sk-child sk-dot2"></div>
</div>
```

SCSS Code：
```
.sk-chasing-dots {
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
```

效果参考：[chasing-dots](https://jsfiddle.net/guihua/n4urzL9g/)


### 7.three-bounce
HTML Code：
```
<div class="sk-three-bounce">
    <div class="sk-child sk-bounce1"></div>
    <div class="sk-child sk-bounce2"></div>
    <div class="sk-child sk-bounce3"></div>
</div>
```

SCSS Code：
```
.sk-three-bounce {
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
```

效果参考：[three-bounce](https://jsfiddle.net/guihua/k86mkbd4/)


### 8.circle
HTML Code：
```
<div class="sk-circle">
    <div class="sk-circle1 sk-child"></div>
    <div class="sk-circle2 sk-child"></div>
    <div class="sk-circle3 sk-child"></div>
    <div class="sk-circle4 sk-child"></div>
    <div class="sk-circle5 sk-child"></div>
    <div class="sk-circle6 sk-child"></div>
    <div class="sk-circle7 sk-child"></div>
    <div class="sk-circle8 sk-child"></div>
    <div class="sk-circle9 sk-child"></div>
    <div class="sk-circle10 sk-child"></div>
    <div class="sk-circle11 sk-child"></div>
    <div class="sk-circle12 sk-child"></div>
</div>
```

SCSS Code：
```
.sk-circle {
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
        content: '';
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
```

效果参考：[circle](https://jsfiddle.net/guihua/rh7xfhd8/)


### 9.cube-grid
HTML Code：
```
<div class="sk-cube-grid">
    <div class="sk-cube sk-cube1"></div>
    <div class="sk-cube sk-cube2"></div>
    <div class="sk-cube sk-cube3"></div>
    <div class="sk-cube sk-cube4"></div>
    <div class="sk-cube sk-cube5"></div>
    <div class="sk-cube sk-cube6"></div>
    <div class="sk-cube sk-cube7"></div>
    <div class="sk-cube sk-cube8"></div>
    <div class="sk-cube sk-cube9"></div>
</div>
```

SCSS Code：
```
.sk-cube-grid {
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
```

效果参考：[cube-grid](https://jsfiddle.net/guihua/c7tshnws/)


### 10.fading-circle
HTML Code：
```
<div class="sk-fading-circle">
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
</div>
```

SCSS Code：
```
.sk-fading-circle {
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
        content: '';
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
```

效果参考：[fading-circle](https://jsfiddle.net/guihua/tfgf7xa8/)


### 11.folding-cube
HTML Code：
```
<div class="sk-folding-cube">
    <div class="sk-cube1 sk-cube"></div>
    <div class="sk-cube2 sk-cube"></div>
    <div class="sk-cube4 sk-cube"></div>
    <div class="sk-cube3 sk-cube"></div>
</div>
```

SCSS Code：
```
.sk-folding-cube {
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
        content: '';
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
```

效果参考：[folding-cube](https://jsfiddle.net/guihua/r0po2x9u/)


完整的[线上Demo](http://tobiasahlin.com/spinkit/)。