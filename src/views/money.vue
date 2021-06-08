<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />
      <Types :value.sync="record.type" />
      <FormItem
        fieldName="备注"
        placeholder="在这里输入备注"
        @update:value="onUpdateNotes"
      />
      <Tags :value.sync="record.tags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/money/numberPad.vue";
import Types from "@/components/money/types.vue";
import FormItem from "@/components/money/FormItem.vue";
import Tags from "@/components/money/tags.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { NumberPad, Types, FormItem, Tags },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

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

  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
