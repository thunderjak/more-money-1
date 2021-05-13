<template>
  <div class="FormItem">
    <label class="remark">
      <span class="name">{{ this.fieldName }}</span>
      <input
        type="text"
        :value="value"
        @input="onValueChanged($event.target.value)"
        :placeholder="this.placeholder"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class FormItem extends Vue {
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;

  @Prop({ default: "" }) readonly value!: string;
  @Watch("value")
  onValueChanged(value: string, oldvalue: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.FormItem {
  font-size: 14px;
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
