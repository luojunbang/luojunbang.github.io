<template>
  <div class="body verification-code">
    <input ref="refInput" v-model="codeInput" type="text" class="num-input" @focus="isInputFocus = true" @blur="isInputFocus = false" @input="handleInput" />
    <div class="num" @click="handleInputFocued">
      <template v-for="(item, index) in list">
        <div :key="index" class="num-box" style="width:30px" :class="cpIsCurrInput === index ? 'cursor' : ''">
          <span class="num-text">{{ item }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
const numberAnimation = function*(from = 0, to = 200, times = 10) {
  let _f = parseFloat(from),
    _t = parseFloat(to);
  if (isNaN(_t)) return '-';
  if (isNaN(_f)) _f = 0;
  const decimalCount =
    to.toString().indexOf('.') > -1
      ? to.toString().substr(to.toString().indexOf('.') + 1).length
      : 0;
  const step = +((_t - _f) / times).toFixed(decimalCount + 1);
  if (step === 0) return _t;
  if (_f <= _t) {
    while (_f <= _t) {
      yield +_f.toFixed(decimalCount);
      _f += step;
    }
  } else {
    while (_f >= _t) {
      yield +_f.toFixed(decimalCount);
      _f += step;
    }
  }
  return _t;
};
export default {
  props: {
    num: {
      type: Number,
      default:6,
    },
    range: {
      type: String,
      default: '0123456789',
    },
  },
  data () {
    return {
      list: [],
      codeInput: '',
      isInputFocus: false,
    };
  },
  computed: {
    cpIsCurrInput () {
      if (this.isInputFocus) {
        return this.codeInput.length;
      } else {
        return -1;
      }
    },
  },
  created (){
    this._numberAni = [];
  },
  mounted () {
    let idx = 0;
    while(idx<this.num){
      idx++;
      this.list.push('');
    }
  },
  methods: {
    handleInput (e) {
      const val = e.target.value.substring(0, this.num);
      this.codeInput = val;
      if(this.codeInput.length> this.num) return;
      //控制输入
      
      const _currInputIndex = val.length - 1;
      const _t = val.charAt(_currInputIndex);
      this.list.forEach((item, index) => {
        if (index > _currInputIndex) {
          this.$set(this.list,index,'');
        }
      });
      if(_currInputIndex==-1) return;
      this._numberAni[_currInputIndex] = numberAnimation(this.list[_currInputIndex],_t);
      setTimeout(()=>{
        this.setView(_currInputIndex);
      },30);
    },
    setView (idx){
      let _temp = this._numberAni[idx].next();
      this.$set(this.list,idx,_temp.value!==undefined?_temp.value:this.list[idx]);
      // this.list[idx] = _temp.value!==undefined?_temp.value:this.list[idx];
      if (!_temp.done&& _temp.value!==undefined) {
        setTimeout(()=>{
          this.setView(idx);
        },30);
      }else{
        this._numberAni[idx]=null;
      }
    },
    handleInputFocued () {
      this.$refs.refInput.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.verification-code.body {
  width: 80%;
  margin: 0 auto;
}
@keyframes cursor-toggle {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.cursor::after {
  content: "";
  width: 1px;
  height: 60%;
  position: absolute;
  background-color: #333;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: cursor-toggle 0.8s infinite;
}
.verification-code {
  .num {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    &-box {
      height: 50px;
      padding: 0 5px;
      text-align: center;
      position: relative;
      box-shadow: 0px 20px 60px -10px rgba(68, 53, 106, 0.08);
      border-bottom: 2px solid #333;
    }
    &-text {
      font-size: 28px;
      line-height: 50px;
    }
    &-input {
      width: 0;
      height: 0;
      opacity: 0;
    }
  }
}
</style>
