<template>
    <div class="nav">
      <router-link to="/money">记账</router-link>
      |
      <router-link to="/labels">标签</router-link>
      |
      <router-link to="/statistics">统计</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped> //scoped指定当前组件为影响范围，细节看https://cn.vuejs.org/v2/guide/comparison.html#组件作用域内的-CSS
.nav{border: 1px solid red;}
</style>