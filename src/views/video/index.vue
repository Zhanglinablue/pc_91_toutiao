<template>
  <div>
    <van-skeleton avatar title :row="3" />
    <van-skeleton avatar title :row="3" />
    <van-skeleton avatar title :row="3" />
  </div>
</template>

<script>
export default {
  name: 'videos'
}
</script>

<style lang="less" scoped>
.van-skeleton{
  margin-top: 10px;
}
</style>
