<template>
  <div class="container">
    <div class="left h-100 fl relative">
      <div class="left-top relative">
        <div class="left-datetime left-m">
          <div class="time relative">
            <div class="left-m time__content">
              {{ time }}
              <span class="right-b time__ms">{{ ms }}</span>
            </div>
          </div>
          <div class="date mg-l">{{ date }}</div>
        </div>
      </div>

      <div class="left-bottom">
        <div class="left-weather">
          <div class="weather-container left-m" v-show="isWeatherReady">
            <div class="realtime mg-b-sm nowrap">
              <span class="mg-r"><i class="iconfont mg-r-xs" :class="'icon-' + todayInfo.skycon.icon"></i>{{ todayInfo.skycon.label }}</span>
              <span class="mg-r"><i class="iconfont mg-r-xs icon-wenduji"></i>{{ todayInfo.temperature }} <i class="iconfont icon-sheshidu01"></i></span>
              <span><i class="iconfont mg-r-xs icon-shidu"></i>{{ todayInfo.humidity * 100 }}%</span>
            </div>
            <div v-if="todayInfo.precipitation_1h.some(i => i)" class="flex-row-nowrap align-end precipitation-container mg-b-sm">
              <div class="precipitation" v-for="(item, index) in todayInfo.precipitation_1h" :key="index" :style="{ height: 100 * item + '%' }"></div>
            </div>
            <div class="nowrap">{{ todayInfo.forecast_keypoint }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="right h-100 fl">
      <div class="right-top relative">
        <div class="search ab-center w-100">
          <div class="search-logo"></div>
          <div class="search-input flex-row-nowrap">
            <i class="iconfont icon-sousuo mg-r-sm"></i>
            <input class="search-input__content flex1" v-model="inputText" @focus="isFocus = true" @blur="isFocus = false" />
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

<script lang="ts">
import { defineComponent, Ref, ref, onMounted, onUnmounted } from 'vue'
import useWeatherInfo from './composables/weather'
const position = '113.459749,23.106402'

import { generatorDate } from 'lo-utils'
export default defineComponent({
  setup() {
    function useDashboard(): {
      date: Ref<string>
      time: Ref<string>
      ms: Ref<string>
    } {
      const date = ref<string>('')
      const time = ref<string>('')
      const ms = ref<string>('')
      let timer = ref<number | null>(null)
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
        timer.value = null
      })
      return {
        ms,
        date,
        time
      }
    }
    const { date, time, ms } = useDashboard()

    type searchType = 'baidu' | 'google' | 'mdn'

    const { inputText, handleSearchClick, isFocus } = ((): {
      inputText: Ref<string>
      isFocus: Ref<boolean>
      handleSearchClick: (type: searchType) => void
    } => {
      const inputText = ref<string>('')
      const isFocus = ref<boolean>(false)
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
      const event = (e: { keyCode: number }) => {
        if (e.keyCode === 13 && inputText.value && isFocus.value) {
          handleSearchClick()
        }
      }
      onMounted(() => {
        window.addEventListener('keyup', event)
      })
      onUnmounted(() => {
        window.removeEventListener('keyup', event)
      })
      return { inputText, handleSearchClick, isFocus }
    })()

    const { isWeatherReady, todayInfo, dailySkyconList, dailyTemperatureList, dailyPrecipitationList } = useWeatherInfo(position)
    return {
      inputText,
      handleSearchClick,
      isFocus,
      isWeatherReady,
      todayInfo,
      dailySkyconList,
      dailyTemperatureList,
      dailyPrecipitationList,
      date,
      time,
      ms
    }
  }
})
</script>

<style lang="scss" scoped>
@import './common/iconfont.css';
.nowrap {
  white-space: nowrap;
}
$PRIMARY: #f0713a;
$BG: #1b1f25;
$TEXT: #e7d7c2;
.container {
  height: 100vh;
  min-width: 1000px;
  overflow: hidden;
  position: relative;
  * {
    color: $TEXT;
  }
}
.left {
  background-color: #1b1f25;
  width: 38.2%;
  &-datetime {
    padding-left: 3vw;
    width: 100%;
    height: 9vw;
    .time {
      user-select: none;
      height: 7.5vw;
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
    bottom: 200px;
    background-color: #292c34;
    height: 20%;
    width: 30%;
    min-width: 100px;
    min-height: 100px;
    .weather-container {
      margin-left: 50px;
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
  }
}
.right {
  width: 61.8%;
  background-color: #292c34;
  &-top {
    height: 61.8%;
    .search {
      padding-bottom: 100px;
      &-logo {
        background-color: #1b1f25;
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
          padding: 5px 20px;
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
</style>
