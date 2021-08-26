<template>
  <div class="container">
    <div class="search" :style="{ opacity: isShowSearch ? '1' : '0' }" @mouseover="onSearchOver" @mouseleave="onSearchLeave">
      <span>SEARCH:</span>
      <loInput v-model="searchText" />
    </div>
    <div class="block">
      <div class="noon">{{ cpNoon }}</div>
      <div class="clock">
        <span>{{ time | fmtTime('·') }}</span>
        <span>{{ Math.floor((time % 1000) / 100) }}</span>
      </div>
      <div class="date">{{ time | generatorDate('y-m-d 星期a') }}</div>
    </div>
  </div>
</template>

<script>
import loInput from '@/components/loInput'
import { generatorDate, fmtTime } from 'lo-utils'
export default {
  components: { loInput },
  filters: {
    fmtTime: fmtTime,
    generatorDate: generatorDate
  },
  data() {
    return {
      timer: null,
      isShowSearch: false,
      searchText: '',
      time: new Date(),
      name: 'Input Your Name...'
    }
  },
  computed: {
    cpNoon() {
      return this.time.getHours() >= 12 ? 'PM' : 'AM'
    },
    cpRange() {
      const hour = this.time.getHours()
      const config = {
        Morning: val => val > 6 && val < 12,
        Afternoon: val => val > 12 && val < 19,
        Night: val => val > 19 && val < 6
      }
      return Object.keys(config).reduce((rs, key) => (config[key](hour) ? key : rs), '')
    }
  },
  mounted() {
    // setInterval(() => {
    //   this.time = new Date()
    // }, 10)
    window.addEventListener('keyup', e => {
      if (e.keyCode === 13) window.location.href = 'https://www.baidu.com/s?wd=' + encodeURIComponent(this.searchText)
    })
  },
  methods: {
    onSearchLeave() {
      this.timer = setTimeout(() => {
        this.isShowSearch = false
        this.timer = null
      }, 3 * 1000)
    },
    onSearchOver() {
      if (this.timer) clearTimeout(this.timer)
      this.isShowSearch = true
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  color: #ccc;
  position: relative;
  .search {
    text-align: center;
    top: 20%;
    left: 50%;
    transform: translate(-50%, 0);
    position: absolute;
    font-size: 20px;
    line-height: 40px;
    display: flex;
    flex-flow: row nowrap;
    span {
      margin-right: 10px;
    }
    input {
      outline: none;
      background-color: transparent;
      color: #efefef;
      border-radius: 3px;
      height: 40px;
      padding: 0 10px;
      width: 50vw;
      font-size: 20px;
      border: 1px solid #efefef;
      &:hover,
      &:focus {
        border: 1px solid #efefef;
      }
    }
  }
  .noon {
    position: absolute;
    left: 0;
    top: 0;
    background: transparent;
  }
  .block {
    top: 50%;
    left: 12.5%;
    transform: translate(0, -50%);
    position: absolute;
    width: 75%;
    .clock {
      margin-left: -0px;
      line-height: 1;
      font-size: 18vw;
      span:fisrt-child {
        letter-spacing: -10px;
      }
      span:last-child {
        font-size: 6vw;
      }
    }
    .range {
      margin-top: 10px;
      font-size: 18px;
    }
    .date {
      margin-top: 5px;
      font-size: 18px;
    }
  }
}
</style>
