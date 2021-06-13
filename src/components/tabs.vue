<template>
  <div>
    <ul class="tabs">
      <li
        v-for="item in dataSource"
        :key="item.value"
        :class="{
          selected: item.value === value,
          [classPrefix + '-item']: classPrefix,
        }"
        @click="selectTab(item)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type DataSourceItem = { text: string; value: string };

@Component
export default class Tabs extends Vue {
  @Prop(String)
  readonly value!: string;
  @Prop(String)
  classPrefix?: string;
  @Prop({ required: true, type: Array })
  dataSource!: DataSourceItem[];

  selectTab(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tabs {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 18px;
  > li {
    width: 50%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected {
      color: $color-highlight;
    }
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: $color-highlight;
    }
  }
}
</style>
