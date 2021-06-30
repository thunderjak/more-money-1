import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone'
import createId from '@/lib/createId'
import router from '@/router'

Vue.use(Vuex)



const store= new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag:undefined
  }as RootState,
  mutations: {
    fetchRecords(state) {
      state.recordList= JSON.parse(window.localStorage.getItem('recordList') || '[]');
    },
    createRecord(state,record){
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date().toISOString();
      state.recordList.push(record2);
      store.commit('saveRecord')
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    },
    fetchTags(state){
      const defaultLabels = [{id: "1", name:'衣'},
      {id: "2", name:'食'},
      {id: "3", name:'住'},
      {id: "4", name:'行'}];
      state.tagList = JSON.parse(window.localStorage.
        getItem('tagList')||JSON.stringify(defaultLabels))
    },
    createTag(state,name:string){
      const names = state.tagList.map(item=>item.name)
      if(names.indexOf(name)>=0){
        window.alert('标签名重复了')
      }
      const id = createId().toString()
      state.tagList.push({id,name:name})
      store.commit('saveTags')
      window.alert('添加成功')
    },
    saveTags(state){
      window.localStorage.setItem('tagList',
        JSON.stringify(state.tagList))
    },
    setCurrentTag(state,id:string){
      state.currentTag= state.tagList.filter(t=>t.id === id)[0]
    },
    updateTag(state,name:ChangeNames){
      const names=state.tagList.map(item=>item.name)
      if(names.indexOf(name.newName)>=0){
        window.alert('标签名重复了');
      }else{
        const tag = state.tagList.filter(item => item.id === name.oldName.id)[0];
        tag.name = name.newName;
        store.commit('saveTags');
      }
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit('saveTags');
      } else {
        window.alert('删除失败');
      }
    },

  },
  actions: {
  },
  modules: {
  }
})

export default store