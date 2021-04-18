<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad/>
            <Type/>
            <Notes/>
            <Tags/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import NumberPad from '@/components/numberPad.vue';
    import Type from '@/components/type.vue';
    import Notes from '@/components/notes.vue';
    import Tags from '@/components/tags.vue';

    export default {
        name:'Money',
        components:{NumberPad,Type,Notes,Tags}
    }
</script>

<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column-reverse;
}
</style>