<template>
  <div class="t">
    <Layout>
      <Types class-prefix="type" :value.sync="value" />
      <Tabs
        class-prefix="interval"
        :dataSource="intervalList"
        :value.sync="interval"
      />
      statistics.vue
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Types from "@/components/money/types.vue";
import Tabs from "@/components/tabs.vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Types, Tabs },
})
export default class Statistics extends Vue {
  value = "-";
  interval = "day";

  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
}
</script>

<style lang="scss" scoped>
.t ::v-deep .type-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &::after {
      display: none;
    }
  }
}
</style>
