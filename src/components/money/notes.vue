<template>
  <div class="notes">
    <label class="remark">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text" v-model="value" :placeholder="this.placeholder" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;

  value = "";
  @Watch("value")
  onValueChanged(value: string, oldvalue: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.notes {
  font-size: 14px;
  background: #f5f5f5;
  display: block;
  padding-left: 16px;
  display: flex;
  align-items: center; //水平居中
  .name {
    padding-right: 16px;
  }
  input {
    height: 48px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
