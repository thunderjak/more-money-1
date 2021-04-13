<template>
    <div class="nav-wrapper">
        <div class="content">
        <slot/>  <!-- vue插槽slot -->
        </div>
        <Nav />
    </div>
</template>

<script>
    export default {
        name:'layout'
    }
</script>

<style lang="scss" scoped>
.nav-wrapper{
    display: flex;
    flex-direction:column;
    height: 100vh;
}
.content{
    overflow: auto;
    flex-grow:1
}
</style>