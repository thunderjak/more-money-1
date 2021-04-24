<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad/>
            <Types/>
            <Notes/>
            <Tags :dataSource="tags"/>
        </Layout>
    </div>
</template>

<script>
    import NumberPad from '@/components/money/numberPad.vue';
    import Types from '@/components/money/types.vue';
    import Notes from '@/components/money/notes.vue';
    import Tags from '@/components/money/tags.vue';

    export default {
        name:'Money',
        components:{NumberPad,Types,Notes,Tags},
        data(){
            return{
                tags:['衣','食','住','行','玩']
            }
        }
    }
</script>

<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column-reverse;
}
</style>