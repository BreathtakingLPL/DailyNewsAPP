<template>
    <div>
      <van-cell>
        <!-- 标题区域的插槽 title slot-->
        <template #title>
          <div class="title-box">
            <!-- 标题 title-->
            <span>{{title}}</span>
            <!-- 单张图片 single cover-->
            <img :src="cover.images[0]" alt="" class="thumb" v-if='cover.type===1'>
          </div>
          <!-- 三张图片 3 cover pics-->
          <div class="thumb-box" v-if='cover.type===3'>
            <img :src="item" alt="" class="thumb" v-for="(item,i) in cover.images" :key="i">
          </div>
        </template>
        <!-- label 区域的插槽  label area slot-->
        <template #label>
          <div class="label-box">
            <span>Author: {{author}}&nbsp;&nbsp; {{cmtCount}} Comments &nbsp;&nbsp; Date:{{time}}</span>
            <!-- 关闭按钮 close button-->
            <van-icon name="cross" />
          </div>
        </template>
      </van-cell>
    </div>
  </template>

<script>
export default {
  name: 'articleInfo',
  props: {
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    cmtCount: {
      type: [Number, String],
      default: 0
    },
    time: {
      type: String,
      default: ''
    },
    // cover info
    cover: {
      type: Object,
      default: function () {
        return {
          type: 0
        }
      }
    }
  }

}
</script>

<style lang = 'less' scoped>
.label-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .thumb {
    // 矩形黄金比例：0.618
    width: 113px;
    height: 70px;
    background-color: #f8f8f8;
    object-fit: cover;
  }

  .title-box {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .thumb-box {
    display: flex;
    justify-content: space-between;
  }
</style>
