<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad :value.sync="record.amount"/>
            <Types :value.sync="record.type"/>
            <Notes @update:value="onUpdateNotes"/>
            <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>
            {{record}}
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumberPad from '@/components/money/numberPad.vue';
    import Types from '@/components/money/types.vue';
    import Notes from '@/components/money/notes.vue';
    import Tags from '@/components/money/tags.vue';
    import { Component } from 'vue-property-decorator';

    type Record = {
        tags:string[]
        notes:string
        type:string
        amount:number
    }//提前声明复杂类型

    @Component({
        components:{NumberPad,Types,Notes,Tags}
    })
    export default class Money extends Vue{
        tags=['衣','食','住','行','玩'];
        record:Record ={
            tags:[],
            notes:'',
            type:'-',
            amount:0
        }

        onUpdateTags(value:string[]){
            this.record.tags=value
        }
        onUpdateNotes(value:string){
            this.record.notes=value
        }
        
        
    }
</script>

<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column-reverse;
}
</style>