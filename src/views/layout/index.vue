<template>
  <div class="container">
    <van-nav-bar
    fixed
    v-if="showNavBar"
    title="黑马头条"
    right-text="搜索"
    @click-right="$router.push('/search')"></van-nav-bar>
    <div class="my-wrapper" :class="{noTop:!showNavBar}">
        <router-view></router-view>
    </div>
    <!-- 标签栏支持路由模式，用于搭配vue-router使用。路由模式下会匹配页面路径和标签的to属性，并自动选中对应的标签 -->
<van-tabbar route>
  <van-tabbar-item to="/" name="home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/question"  name="search" icon="chat-o">问答</van-tabbar-item>
  <van-tabbar-item to="/video" name="friends" icon="video-o">视频</van-tabbar-item>
  <van-tabbar-item to="/user" name="setting" icon="user-o">我的</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
  computed: {
    showNavBar () {
      return this.$route.path !== '/user'
    }
  }
}
</script>

<style scoped lang='less'>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}
</style>
