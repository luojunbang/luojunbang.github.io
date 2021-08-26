<template>
  <div ref="container" class="container" @scroll="onScroll">
    <div style="margin-right:-20px">
      <div v-for="(item, index) in containerHeight" :key="index" class="box">
        <div v-for="(subitem, subindex) in cpList(index)" :key="subindex" :style="{ height: subitem.height + 'px', background: subitem.color }" class="item"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const row = 5
    return {
      containerNum: row,
      containerHeight: new Array(row).fill(0),
      containerList: new Array(row).fill(0).map(i => []),
      list: []
    }
  },
  computed: {
    cpList() {
      return index => {
        return this.containerList[index]
      }
    }
  },
  mounted() {
    this.addList()
    const container = this.$refs.container
    window.addEventListener('scroll', e => {
      const scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop
      const windowHeight = e.target.documentElement.clientHeight || e.target.body.clientHeight
      if (windowHeight + scrollTop == container.scrollHeight) {
        this.addList()
      }
    })
  },
  methods: {
    onScroll(e) {
      console.log(e)
    },
    addList() {
      const list = new Array(100).fill(0).map(_ => ({
        height: (Math.random() * 200).toFixed(0),
        color:
          '#' +
          Math.random()
            .toString(16)
            .slice(2, 8)
      }))
      this.assignList(list)
    },
    assignList(list) {
      list.forEach(item => {
        const minIdx = this._calcHeight()
        this.containerList[minIdx].push(item)
        this.containerHeight[minIdx] += +item.height < 100 ? 100 : +item.height
      })
    },
    _calcHeight() {
      const { containerHeight } = this
      return containerHeight.reduce((rs, item, idx) => {
        return containerHeight[rs] > item ? idx : rs
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  box-sizing: border-box;
}
.container {
  width: 1080px;
  // overflow: auto;
  // height: 500px;
  margin: 0 auto;
  background-color: #efefef;
  & > div::after {
    display: block;
    content: '';
    clear: both;
    height: 0;
    visibility: hidden;
  }

  .box {
    float: left;
    width: 200px;
    margin-right: 20px;
  }
  .item {
    margin-bottom: 20px;
    min-height: 100px;
    border: 1px solid #333;
  }
}
</style>
