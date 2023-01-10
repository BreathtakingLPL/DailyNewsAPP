<template>
  <div class="home-container">
    <!-- Navbar -->
    <van-nav-bar fixed title="Daily News" />
    <!-- Article info-->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :disabled='finished'>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="Finished"
      @load="onLoad"
    >
      <articleInfo v-for="item in artlist" :key="item.id" :title="item.title" :author="item.aut_name" :cmtCount='item.comm_count' :time='item.pubdate' :cover="item.cover"></articleInfo>
    </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>

import request from '@/utils/request.js'
import articleInfo from '@/components/article/articleInfo.vue'
export default {
  name: 'Home',
  data () {
    return {
      page: 1, // page number
      limit: 10, // 10 articles per page
      artlist: [],
      loading: true, // if it is loading data
      finished: false, // if there is no data
      isLoading: false // if it is loading under pullFreshing mode
    }
  },
  components: {
    articleInfo
  },
  created () {
    // get artice list
    this.initArticleList()
  },
  methods: {
    // get article API
    async initArticleList (isRefresh) {
      const { data: res } = await request.get('/articles', {
        params: {
          _page: this.page,
          _limit: this.limit
        }
      })

      if (isRefresh) {
        this.artlist = [...res, ...this.artlist]
        this.isLoading = false
      } else {
        this.artlist = [...this.artlist, ...res]
        // console.log(res)
        this.loading = false
      }

      if (res.length === 0) {
        this.finished = true
      }
    },
    // load more articles
    onLoad () {
      // console.log('Onloading...')
      this.page++
      this.initArticleList()
    },
    // refresh page and load articles
    onRefresh () {
      // console.log('Refreshing')
      this.page++
      this.initArticleList(true)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
}
</style>
