<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad/>
            <Types/>
            <Notes/>
            <Tags/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import NumberPad from '@/components/money/numberPad.vue';
    import Types from '@/components/money/types.vue';
    import Notes from '@/components/money/notes.vue';
    import Tags from '@/components/money/tags.vue';

    export default {
        name:'Money',
        components:{NumberPad,Types,Notes,Tags}
    }
</script>

<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column-reverse;
}
</style>