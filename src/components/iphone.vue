<template>
  <div class="" style="padding-top: 20px">
    <div class="ph">
      <div class="ph-outerbox">
        <div class="ph-box">
          <div class="ph-screen">
            <div class="ph-screen--header">
              <div class="ph-screen--header__left">
                <slot name="badgeLeft" />
                {{ badgeLeft || cpTime }}
              </div>
              <div class="ph-screen--header__faceid">
                <div class="ph-screen--header__faceid-receiver"></div>
              </div>
              <div class="ph-screen--header__right">
                <slot name="badgeRight" />
                {{ badgeRight }}
                <div class="ph-screen--header__battery"></div>
              </div>
            </div>
            <div class="ph-screen--content">
              <slot />
            </div>
          </div>
          <div class="ph-tool--aerial ph-tool--aerial-top"></div>
          <div class="ph-tool--aerial ph-tool--aerial-bottom"></div>
          <div class="ph-tool--mute"></div>
          <div class="ph-tool--plus"></div>
          <div class="ph-tool--minus"></div>
          <div class="ph-tool--power"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    badgeLeft: {
      type: String,
      default: ''
    },
    badgeRight: {
      type: String,
      default: '5G'
    }
  },
  computed: {
    cpTime() {
      const d = new Date()
      return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`
    }
  }
}
</script>
<style lang="scss" scoped>
.about {
  height: 950px;
  background-color: #efefef;
}
.ab-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}

$ratio: 814 /139.77; //6.000

$screen_border_width: 14.34px;
$iphone_color: rgba(19, 53, 83, 1);
$box-width: 6px;
$shadow-color: rgba(239, 239, 239, 0.7);
.tool-shadow {
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  box-shadow: 0.5px 0px 2px $shadow-color inset;
}
.ph {
  width: 500px;
  margin: 0 auto;
  &-outerbox {
    border-radius: 44px + $screen_border_width + $box-width;
    width: 375px + $screen_border_width * 2 + $box-width * 2;
    height: 814px + $screen_border_width * 2 + $box-width * 2;
    box-shadow: 2px 2px 10px #333;
  }
  &-box {
    position: relative;
    border-radius: 44px + $screen_border_width + $box-width;
    @extend .clearfix;
    height: 100%;
    box-shadow: 0px 0px 5px 0px $shadow-color inset;
    background-color: $iphone_color;
  }
  &-tool {
    &--aerial {
      width: 100%;
      height: 10px;
      background-color: rgba(66, 90, 104, 0.6);
      position: absolute;
      z-index: 10;
      &-top {
        top: 80px;
      }
      &-bottom {
        bottom: 80px;
      }
    }
    &--power {
      background-color: $iphone_color;
      height: 90px;
      width: $box-width;
      position: absolute;
      right: 1px;
      top: 46.31px * $ratio;
      transform: translate(100%, -50%);
      box-shadow: -0.5px 0px 3px $shadow-color inset;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    &--mute {
      background-color: $iphone_color;
      height: 2 * 2.85px * $ratio;
      width: $box-width;
      position: absolute;
      left: 0;
      transform: translate(-100%, -50%);
      top: 25.99px * $ratio;
      @extend .tool-shadow;
    }
    &--plus {
      background-color: $iphone_color;
      height: 56px;
      width: $box-width;
      position: absolute;
      left: 0;
      top: 39.31px * $ratio;
      transform: translate(-100%, -50%);
      @extend .tool-shadow;
    }
    &--minus {
      background-color: $iphone_color;
      height: 56px;
      width: $box-width;
      position: absolute;
      left: 0px;
      top: 53.31px * $ratio;
      transform: translate(-100%, -50%);
      @extend .tool-shadow;
    }
  }
  &-screen {
    border-radius: 44px + $screen_border_width;
    z-index: 20;
    position: absolute;
    @extend .ab-center;
    background-color: #000;
    width: 375px + $screen_border_width * 2;
    height: 814px + $screen_border_width * 2;
    &--header {
      position: absolute;
      top: $screen_border_width;
      left: 50%;
      height: 30px;
      z-index: 30;
      width: 100%;
      padding: 0 $screen_border_width 0;
      transform: translateX(-50%);
      font-size: 15px;
      &__left {
        float: left;
        padding-left: 25px;
        content: '05:20';
        width: 83px;
        line-height: 1;
        color: black;
        font-weight: bold;
        text-align: left;
        margin-top: 15px;
        background-color: transparent;
      }
      &__battery {
        margin-left: 5px;
        width: 30px;
        height: 15px;
        border: 1px solid #ccc;
        position: relative;
        border-radius: 3px;
        &::before {
          border-radius: 2px;
          position: absolute;
          height: 11px;
          width: 20px;
          left: 2px;
          content: '';
          top: 1px;
          background-color: #fff;
        }
        &::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(100%, -50%);
          width: 2px;
          height: 4px;
          border-top-right-radius: 1px;
          border-bottom-right-radius: 1px;
          border: 1px solid #ccc;
          background-color: transparent;
        }
      }
      &__right {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-content: center;
        vertical-align: bottom;
        float: left;
        padding-right: 20px;
        width: 83px;
        line-height: 1;
        color: black;
        font-weight: bold;
        text-align: right;
        margin-top: 15px;
        background-color: transparent;
      }
      &__faceid {
        float: left;
        height: 100%;
        width: 209px;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: #000;
        &-receiver {
          width: 40px;
          height: 6px;
          border-radius: 5px;
          background-color: #333;
          @extend .ab-center;
          &::after {
            margin-left: 30px;
            border-radius: 100%;
            content: '';
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            width: 8px;
            height: 8px;
            border: 3px solid #111;
            background-color: #222;
          }
        }
      }
    }

    &--content {
      overflow: auto;
      border-radius: 44px;
      width: 375px;
      height: 814px;
      z-index: 20;
      background-color: #efefef;
      @extend .ab-center;
      &::-webkit-scrollbar {
        width: 0px !important;
        height: 0px !important;
      }
    }
  }
}
</style>
