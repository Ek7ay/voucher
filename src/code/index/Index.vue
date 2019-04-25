<template>
    <div>
      <index-header></index-header>
      <index-menu></index-menu>
      <index-content></index-content>
    </div>
</template>

<script>
    import IndexHeader from './components/Index-header'
    import IndexMenu from './components/Index-menu'
    import IndexContent from './components/Index-content'
    export default {
        name: "Index",
        components:{
          IndexHeader : IndexHeader,
          IndexMenu : IndexMenu,
          IndexContent : IndexContent
        }
    }
</script>

<style scoped>
</style>
