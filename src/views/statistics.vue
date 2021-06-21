<template>
  <div class="t">
    <Layout>
      <Tabs
        class-prefix="type"
        :dataSource="recordTypeList"
        :value.sync="type"
      />
      <Tabs
        class-prefix="interval"
        :dataSource="intervalList"
        :value.sync="interval"
      />
      <div>
        <ol>
          <li v-for="(group, index) in result" :key="index">
            <h3 class="title">{{ group.title }}</h3>
            <ol>
              <li v-for="item in group.items" :key="item.id" class="record">
                <span>{{ tagString(item.tags) }}</span>
                <span class="notes">{{ item.notes }}</span>
                <span>￥{{ item.amount }}</span>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tabs from "@/components/tabs.vue";
import { Component } from "vue-property-decorator";
import intervalList from "@/constants/intervalList";
import recordTypeList from "@/constants/recordTypeList";
import dayjs from "dayjs";

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  // eslint-disable-next-line no-undef
  tagString(tags: Tag[]) {
    return tags.length === 0 ? "无" : tags.join(",");
  }

  get recordList() {
    // eslint-disable-next-line no-undef
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const { recordList } = this;
    // eslint-disable-next-line no-undef
    type hashTableValue = { title: string; items: RecordItem[] };

    const hashTable: {
      [key: string]: hashTableValue;
    } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt!.split("T");

      hashTable[date] = hashTable[date] || { title: date, items: [] };
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreate() {
    this.$store.commit("fetchRecords");
  }

  type = "-";
  interval = "day";
  recordTypeList = recordTypeList;
  intervalList = intervalList;
}
</script>

<style lang="scss" scoped>
.t ::v-deep {
  .type-item {
    background: white;
    &.selected {
      background: #c4c4c4;
      &::after {
        display: none;
      }
    }
  }
  .interval-item {
    font-size: 20px;
    height: 48px;
  }
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>
