<template>
  <div class="dashboard">
    <div class="left h-full float-left">
      <div class="left-top relative">
        <div class="datetime xl-ym">
          <div class="time relative">
            <span class="time__content">{{ time }}</span>
            <span class="time__ms right-0 bottom-0 absolute">{{ ms }}</span>
          </div>
          <div class="date">{{ date }}</div>
        </div>
      </div>
      <div class="left-bottom">
        <transition name="slide-fade">
          <div v-if="isWeatherReady" class="weather-container xl-ym">
            <div class="mb-sm">
              <div class="mr mb-sm">
                <span class="mr"><icon class="color-primary mr-xs" :icon="todayInfo.skycon.icon"></icon>{{ todayInfo.skycon.label }}</span>
                <span class="mr"><icon class="color-primary mr-xs" icon="wenduji"></icon>{{ todayInfo.temperature }} <i class="iconfont icon-sheshidu01"></i></span>
                <span><icon class="color-primary mr-xs" icon="shidu"></icon>{{ todayInfo.humidity }}</span>
              </div>
              <div v-if="todayInfo.precipitation_1h.some(i => !!i)" class="flex-row-nowrap items-end precipitation-container">
                <div class="precipitation" v-for="(item, index) in todayInfo.precipitation_1h" :key="index" :style="{ height: 100 * item + '%' }"></div>
              </div>
            </div>
            <div class="flex-row-nowrap mb-sm">
              <div class="daily-item mr" v-for="item in dailyTemperatureList" :key="item.date">
                <div class="flex-row-nowrap ">
                  <icon size="28" class="color-primary mr-xs" :icon="item.skycon.icon"></icon>
                  <div class="daily-item__temperature">
                    <div>{{ item.max }}</div>
                    <div>{{ item.min }}</div>
                  </div>
                </div>
                <div class="text-sm">{{ item.week }}</div>
              </div>
            </div>
            <div class="whitespace-normal">{{ todayInfo.forecast_keypoint }}</div>
          </div>
        </transition>
      </div>
    </div>
    <div class="right h-full float-left">
      <div class="right-top relative">
        <div class="search xm-yb mb-lg w-full">
          <div class="search-input flex-row-nowrap">
            <icon class="mr-sm" icon="sousuo"></icon>
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
import { generatorDate, fmtTime } from 'lo-utils'

const position = '113.459749,23.106402'

const { date, time, ms } = (() => {
  const date = ref<string>('')
  const time = ref<string>()
  const ms = ref<string>('')
  let timer = ref<ReturnType<typeof setInterval>>()
  function updateDateTime() {
    const currTime = Date.now()
    date.value = generatorDate(currTime, 'y - m - d  星期a')
    time.value = fmtTime(currTime, '·')
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
    time,
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
      mdn: 'https://developer.mozilla.org/zh-CN/search?q=',
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

const { isWeatherReady, todayInfo, dailyTemperatureList } = useWeatherInfo(position)
</script>

<style lang="scss"></style>

<style lang="scss" scoped>
$PRIMARY: #f0713a;
$BG: #1b1f25;
$TEXT: #e7d7c2;

.dashboard {
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
  &-top {
    height: 38.2%;
    .datetime {
      padding-left: 3vw;
      height: 9vw;
      user-select: none;
      .time {
        &__ms {
          transform: translate(2vw, -0.75vw);
          line-height: 1em;
          font-size: 3vw;
        }
        &__content {
          line-height: 1em;
          font-size: 7.5vw;
        }
      }
      .date {
        font-size: 1vw;
        margin-left: 1.5vw;
      }
    }
  }
  &-bottom {
    height: 61.8%;
    position: relative;
    .weather-container {
      // height: 180px;
      position: absolute;
      left: 0;
      top: 61.8%;
      margin-left: 4vw;
      &::after {
        content: '';
        z-index: -1;
        position: absolute;
        background-color: #292c34;
        height: 140%;
        width: 6vw;
        left: 0;
        top: 50%;
        transform: translate(-4vw, -50%);
        min-height: 100px;
        min-width: 100px;
      }
    }
    .precipitation {
      &-container {
        height: 30px;
        background-color: rgba($color: $PRIMARY, $alpha: 0.1);
      }
      width: 4px;
      margin-right: 1px;
      background-color: $PRIMARY;
    }
    .daily {
      &-item {
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
      &-input {
        width: 61.8%;
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
          border: 1px solid rgba($color: $PRIMARY, $alpha: 0.8);
          border-radius: 5px;
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

/* 可以为进入和离开动画设置不同的持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
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
