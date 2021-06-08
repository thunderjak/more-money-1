<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link
          class="tag"
          v-for="tag in tags"
          :key="tag.id"
          :to="`/labels/edit/${tag.id}`"
        >
          <span>{{ tag.name }}</span>
          <Icon name="right" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <bigButton class="createTag" @click="createTag">新建标签</bigButton>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import bigButton from "@/components/bigButton.vue";

@Component({
  components: { bigButton },
})
export default class Labels extends Vue {
  get tags() {
    return this.$store.state.tagList;
  }

  beforeCreate() {
    this.$store.commit("fetchTags");
  }

  createTag() {
    const name = window.prompt("请输入标签名");
    if (!name) {
      window.alert("标签名不能为空");
    }
    this.$store.commit("createTag", name);
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      color: #666;
      height: 18px;
      width: 18px;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 10px 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>
