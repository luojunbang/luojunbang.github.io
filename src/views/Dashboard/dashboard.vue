<template>
  <div class="container relative">
    <div class="left h-100 fl">
      <div class="left-top relative">
        <div class="left-datetime left-m">
          <div class="time">
            <div class="relative time__content">
              {{ time }}
              <span class="right-b time__ms">{{ ms }}</span>
            </div>
          </div>
          <div class="date">{{ date }}</div>
        </div>
      </div>
      <div class="left-bottom">
        <div class="left-weather">
          <div class="weather-container left-m" v-show="isWeatherReady">
            <div class="realtime nowrap clearfix">
              <div class="fl mg-r mg-b-sm">
                <span class="mg-r"><i class="color-primary text-lg iconfont mg-r-xs" :class="'icon-' + todayInfo.skycon.icon"></i>{{ todayInfo.skycon.label }}</span>
                <span class="mg-r"><i class="color-primary text-lg iconfont mg-r-xs icon-wenduji"></i>{{ todayInfo.temperature }} <i class="iconfont icon-sheshidu01"></i></span>
                <span><i class="color-primary text-lg iconfont mg-r-xs icon-shidu"></i>{{ todayInfo.humidity * 100 }}%</span>
              </div>
              <div v-if="todayInfo.precipitation_1h.some(i => !!i)" class="fl flex-row-nowrap align-end precipitation-container">
                <div class="precipitation" v-for="(item, index) in todayInfo.precipitation_1h" :key="index" :style="{ height: 100 * item + '%' }"></div>
              </div>
            </div>
            <div class="flex-row-nowrap mg-b-sm">
              <div class="daily-item mg-r-sm" v-for="(item, index) in dailyTemperatureList" :key="item.date">
                <div class="daily-item__content flex-row-nowrap">
                  <i class="text-lg iconfont color-primary" :class="'icon-' + dailySkyconList[index].icon"></i>
                  <div class="daily-item__temperature">
                    <div class="">{{ ~~item.max }}</div>
                    <div class="">{{ ~~item.min }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nowrap">{{ todayInfo.forecast_keypoint }}</div>
          </div>
          <div class="weather-container daily-container left-m"></div>
        </div>
      </div>
    </div>
    <div class="right h-100 fl">
      <div class="right-top relative">
        <div class="search middle-b mg-b-lg w-100">
          <!-- <div class="search-logo"></div> -->
          <div class="search-input flex-row-nowrap">
            <i class="iconfont icon-sousuo mg-r-sm"></i>
            <input autofocus class="search-input__content flex1" v-model="inputText" @change="onChange" @keyup.enter="onKeyup" @input="onInput" />
          </div>

          <div class="search-button text-center">
            <button @click="handleSearchClick('google')">Google</button>
            <button @click="handleSearchClick('baidu')">Baidu</button>
            <button @click="handleSearchClick('mdn')">MDN Web Docs</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, onMounted, onUnmounted } from 'vue'
import useWeatherInfo from './composables/weather'

const position = '113.459749,23.106402'

import { generatorDate } from 'lo-utils'
const { date, time, ms } = (() => {
  const date = ref<string>('')
  const time = ref<string>('')
  const ms = ref<string>('')
  let timer = ref<number | undefined>(undefined)
  function updateDateTime() {
    const currTime = Date.now()
    date.value = generatorDate(currTime, 'y-m-d  星期a')
    time.value = generatorDate(currTime, 'h·i·s')
    ms.value = currTime.toString().slice(-3, -2)
  }
  onMounted(() => {
    timer.value = setInterval(() => {
      updateDateTime()
    }, 100)
  })
  onUnmounted(() => {
    clearInterval(timer.value)
  })
  return {
    ms,
    date,
    time
  }
})()

type searchType = 'baidu' | 'google' | 'mdn'

const { onInput, inputText, handleSearchClick, onKeyup, onChange } = (() => {
  const inputText = ref<string>('')
  const isActive = ref<boolean>(false)
  const handleSearchClick = (type: searchType = 'baidu') => {
    if (!inputText.value) return
    const config = {
      baidu: 'https://www.baidu.com/s?wd=',
      google: 'https://www.google.com.hk/search?q=',
      mdn: 'https://developer.mozilla.org/zh-CN/search?q='
    }
    const url = config[type] + encodeURIComponent(inputText.value)
    window.location.href = url
  }
  const onChange = () => {
    isActive.value = true
  }
  const onInput = () => (isActive.value = false)
  const onKeyup = () => {
    isActive.value && handleSearchClick()
  }
  return { inputText, handleSearchClick, onInput, onChange, onKeyup }
})()

const { isWeatherReady, todayInfo, dailySkyconList, dailyTemperatureList, dailyPrecipitationList } = useWeatherInfo(position)
console.log(dailySkyconList, dailyTemperatureList, dailyPrecipitationList)
</script>

<style lang="scss" scoped>
@import './common/iconfont.css';

$PRIMARY: #f0713a;
$BG: #1b1f25;
$TEXT: #e7d7c2;

.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  * {
    color: $TEXT;
  }
  .color-primary {
    color: $PRIMARY;
  }
}
.left {
  background-color: #1b1f25;
  width: 38.2%;
  &-datetime {
    padding-left: 3vw;
    height: 9vw;
    .time {
      user-select: none;
      // transform: translateX(-1vw);
      &__ms {
        transform: translate(2vw, -0.7vw);
        line-height: 1;
        font-size: 3vw;
      }
      &__content {
        line-height: 1;
        font-size: 7.5vw;
      }
    }
    .date {
      font-size: 1vw;
      margin-left: 1.5vw;
    }
  }
  &-top {
    height: 38.2%;
  }
  &-bottom {
    height: 61.8%;
    position: relative;
  }
  &-weather {
    position: absolute;
    left: 0;
    bottom: 30%;
    background-color: #292c34;
    height: 26%;
    width: 20%;
    min-height: 100px;
    min-width: 100px;
    .weather-container {
      margin-left: 4vw;
      .realtime {
        width: 750px;
      }
    }
    .precipitation {
      &-container {
        height: 30px;
        background-color: rgba(240, 113, 58, 0.1);
      }
      width: 4px;
      margin-right: 1px;
      background-color: $PRIMARY;
    }
    .daily {
      &-item {
        &__content {
          i {
            font-size: 36px;
            margin-right: 5px;
          }
        }
        &__temperature {
          div:nth-child(1) {
            border-bottom: 1px solid $PRIMARY;
          }
          div:nth-child(2) {
            opacity: 0.65;
          }
        }
        text-align: center;
      }
    }
  }
}
.right {
  width: 61.8%;
  background-color: #292c34;
  &-top {
    height: 38.2%;
    .search {
      &-logo {
        // background-color: #1b1f25;
        height: 150px;
        width: 40%;
        margin: 0 auto 50px;
      }
      &-input {
        width: 75%;
        height: 45px;
        border: 1px solid $PRIMARY;
        padding: 10px 20px;
        border-radius: 24px;
        margin: 0 auto 20px;
        &:hover {
          box-shadow: 2px 2px 10px 3px rgba($color: $PRIMARY, $alpha: 0.2);
        }
        input {
          border: none;
          outline: none;
          background-color: transparent;
        }
      }
      &-button {
        button {
          height: 36px;
          outline: none;
          border: 1px solid $PRIMARY;
          color: $PRIMARY;
          background-color: transparent;
          padding: 5px 10px;
          cursor: pointer;
          &:hover {
            background-color: $PRIMARY;
            color: $TEXT;
            box-shadow: 2px 2px 10px 3px rgba($color: $PRIMARY, $alpha: 0.2);
          }
        }
        button + button {
          margin-left: 20px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1000px) {
  .left {
    width: 100%;
    .time {
      &__ms {
        transform: translate(6.5vw, -0.7vw);
        line-height: 1;
        font-size: 9vw;
      }
      &__content {
        line-height: 1;
        font-size: 17vw;
      }
    }
    .date {
      font-size: 1vw;
      margin-left: 2.5vw;
    }
    .weather-container {
      margin-left: 5vw;
      .realtime {
        width: auto;
      }
    }
  }
  .right {
    width: 100%;
    position: absolute;
    top: 45%;
    background-color: transparent;
    button:nth-child(3) {
      display: none;
    }
    &-top {
      .search {
        top: 0;
      }
    }
  }
}
</style>
