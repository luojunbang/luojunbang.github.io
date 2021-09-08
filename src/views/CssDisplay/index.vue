<template>
  <div class="clearfix pd-lr-sm" style="margin-right: -0px">
    <content-box title="倒影">
      <div class="reflections h-100 pd-t-lg">
        <div>HARRYPOTTER</div>
        <div>HARRYPOTTER</div>
      </div>
      <!--定义svg滤镜，这里使用的是feTurbulence滤镜-->
      <svg width="0" height="0">
        <filter id="displacement-wave-filter">
          <!--baseFrequency设置0.01 0.09两个值，代表x轴和y轴的噪声频率-->
          <feTurbulence baseFrequency="0.01 0.09">
            <!--这是svg动画的定义方式，通过动画不断改变baseFrequency的值，从而形成波动效果-->
            <animate attributeName="baseFrequency" dur="20s" keyTimes="0;0.5;1" values="0.01 0.09;0.02 0.13;0.01 0.09" repeatCount="indefinite"></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
      </svg>
    </content-box>
    <content-box title="文字展开" title-color="white">
      <div class="h-100">
        <div class="text-expand pd-t-lg">
          <div>HARRYPOTTER</div>
        </div>
      </div>
    </content-box>
    <content-box title="融合">
      <div class="circle-container h-100 pd-t-lg pd">
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
        <div class="ball"></div>
      </div>
    </content-box>
  </div>
</template>

<style lang="scss" scoped>
.reflections {
  & > * {
    font-size: 40px;
    &:last-child {
      opacity: 0.8;
      transform: translateY(-2px) scaleY(-1);
      //对模拟倒影的元素应用svg filter
      //url中对应的是上面svg filter的id
      filter: url(#displacement-wave-filter);
    }
  }
}

.text-expand {
  height: 100px;
  margin: 20px 20px;
  background-color: #000; // must has background
  filter: contrast(30);
  & > div {
    font-size: 40px;
    color: white;
    letter-spacing: -30px;
    animation: move-letter 3s linear infinite;
  }
  @keyframes move-letter {
    0% {
      opacity: 0;
      letter-spacing: -30px;
      filter: blur(10px);
    }
    25% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
      filter: blur(5px);
    }
    100% {
      letter-spacing: 5px;
      filter: blur(0px);
    }
  }
}

.circle-container {
  width: 320px;
  margin: 0 auto;
  position: relative;
  filter: contrast(30);
  background-color: #fff;
  .ball {
    filter: blur(20px);
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #000;
    animation: move-around 4s cubic-bezier(0.44, 0.79, 0.83, 0.96) infinite;
    transform-origin: left center;
    transform: scale(0.3);
    &:nth-child(2) {
      animation-delay: 0.4s;
    }
    &:nth-child(3) {
      animation-delay: 0.8s;
    }
    &:nth-child(4) {
      animation-delay: 1s;
    }
  }
  @keyframes move-around {
    0% {
      transform: translate(10px, 0px) scale(0.3);
    }
    45% {
      transform: translate(135px, 20px) scale(1);
    }
    85% {
      transform: translate(270px, 0px) scale(0.3);
    }
  }
}
</style>
