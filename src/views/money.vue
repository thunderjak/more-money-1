<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
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
    import { Component, Watch } from 'vue-property-decorator';

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
        recordList:Record[]=[];
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
        
        saveRecord(){
            const record2 = JSON.parse(JSON.stringify(this.record));
            this.recordList.push(record2);
            console.log(this.recordList)
        }
        @Watch('recordList')
        onRecordListChanged(){
            window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
        }
    }
</script>

<style lang="scss">
.layout-content{
    display: flex;
    flex-direction: column-reverse;
}
</style>