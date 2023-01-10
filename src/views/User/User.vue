<template>
<div class="user-container">
      <!--  Basic user info-->
      <div class="user-card">
        <!-- username avantar-->
        <van-cell>
          <!-- 使用 title 插槽来自定义标题  self difined title slot-->
          <template #icon>
            <img src="../../assets/logo.png" alt="" class="avatar" />
          </template>
          <template #title>
            <span class="username">Username</span>
          </template>
          <template #label>
            <van-tag color="#fff" text-color="#007bff">Apply for credential</van-tag>
          </template>
        </van-cell>
        <!--  moments, following, fans-->
        <div class="user-data">
          <div class="user-data-item">
            <span>0</span>
            <span>Moments</span>
          </div>
          <div class="user-data-item">
            <span>0</span>
            <span>Following</span>
          </div>
          <div class="user-data-item">
            <span>0</span>
            <span>Fans</span>
          </div>
        </div>
      </div>
      <!-- panel-->
    <van-cell-group class="action-card">
      <van-cell icon="edit" title="Edit" is-link />
      <van-cell icon="chat-o" title="Message" is-link />
      <van-cell icon="warning-o" title="Logout" is-link />
    </van-cell-group>
  </div>
</template>
<script>

// import request from '@/utils/request.js'

import { getArticleListAPI } from '@/API/articleAPI.js'

export default {
  name: 'User',
  data () {
    return {
      page: 1,
      limit: 5
    }
  },
  created () {
    this.initArticleList()
  },
  methods: {
    async initArticleList () {
      const { data: res } = await getArticleListAPI(this.page, this.limit)

      console.log(res)
    }
  }
}
</script>
<style lang="less" scoped>
  .user-container {
    .user-card {
      background-color: #007bff;
      color: white;
      padding-top: 20px;
      .van-cell {
        background: #007bff;
        color: white;
        &::after {
          display: none;
        }
        .avatar {
          width: 60px;
          height: 60px;
          background-color: #fff;
          border-radius: 50%;
          margin-right: 10px;
        }
        .username {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
    .user-data {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      font-size: 14px;
      padding: 30px 0;
      .user-data-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 33.33%;
      }
    }
  }
</style>
