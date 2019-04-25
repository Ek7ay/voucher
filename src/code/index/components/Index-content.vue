<template>
    <div class="main">
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Index-content"
    }
</script>

<style lang="stylus" scoped>
  .main
    background-color #92b8ff
    position fixed
    top 80px
    left 220px
    right 0
    bottom 0
    z-index -1
</style>
