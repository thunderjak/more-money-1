<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  @Prop() readonly value!: string[];
  selectedTags: string[] = [];
  changeTag = "";
  get tagList() {
    return this.$store.state.tagList;
  }

  created() {
    this.$store.commit("fetchTags");
  }

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
  validate(name: string) {
    this.changeTag = name;
    if (this.changeTag.length === 0) {
      window.alert("标签名不能为空");
      return false;
    }
    if (this.changeTag.length > 6) {
      window.alert("标签名不能长于6个字");
      return false;
    }
    return true;
  }
  createTag() {
    const name = window.prompt("请输入标签名");
    if (!name) {
      window.alert("标签名不能为空");
    } else {
      if (!this.validate(name)) return;
      this.$store.commit("createTag", name);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags {
  background: white;
  font-size: 14px;
  padding: 16px;
  display: flex;
  flex-grow: 1;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 $h/2;
      margin-right: $h/2;
      margin-top: 4px;
      &.selected {
        background: $color-highlight;
        color: rgb(255, 255, 255);
      }
    }
  }
  > .new {
    padding-top: 12px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>
