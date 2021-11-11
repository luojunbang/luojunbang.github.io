<template>
  <div class="container h-100">
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
        <div class="left-weather" v-show="isWeatherReady">
          <div class="weather-container left-m">
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
    <div class="right h-100 fl"></div>
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
        date.value = generatorDate(currTime, 'y-m-d  周a')
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

    // function useSearch() {}
    // const { inputText } = useSearch()

    const { isWeatherReady, todayInfo, dailySkyconList, dailyTemperatureList, dailyPrecipitationList } = useWeatherInfo(position)
    return {
      isWeatherReady,
      todayInfo,
      dailySkyconList,
      dailyTemperatureList,
      dailyPrecipitationList,
      // inputText,
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
$BG: #1b1f25;
$TEXT: #e7d7c2;
.container {
  min-width: 1000px;
  overflow: hidden;
  position: relative;
  * {
    text-align: left;
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
      background-color: #f0713a;
    }
  }
}
.right {
  width: 61.8%;
  padding: 50px;
  background-color: #292c34;
}
</style>
