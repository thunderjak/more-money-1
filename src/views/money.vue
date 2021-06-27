<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="submit" />
      <Tabs
        class-prefix="type"
        :dataSource="recordTypeList"
        :value.sync="record.type"
      />
      <FormItem
        fieldName="备注"
        placeholder="在这里输入备注"
        :value.sync="record.notes"
      />
      <Tags :value.sync="record.tags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/money/numberPad.vue";
import Tabs from "@/components/tabs.vue";
import FormItem from "@/components/money/FormItem.vue";
import Tags from "@/components/money/tags.vue";
import { Component } from "vue-property-decorator";
import recordTypeList from "@/constants/recordTypeList";

@Component({
  components: { NumberPad, Tabs, FormItem, Tags },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;

  // eslint-disable-next-line no-undef
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  created() {
    this.$store.commit("fetchRecords");
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  submit() {
    this.$store.commit("createRecord", this.record);
    this.record.notes = "";
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
