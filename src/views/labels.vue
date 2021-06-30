<template>
  <div>
    <Layout>
      <ul class="tags">
        <li v-for="tag in tags" :key="tag.id" @click.capture="clickTag = tag">
          <span class="tagName">{{ tag.name }}</span>
          <div class="editicon">
            <div class="edit">
              <Icon name="edit" @click="updateTag" />
            </div>
            <div class="delete">
              <Icon name="delete" @click="removeTag" />
            </div>
          </div>
        </li>
      </ul>
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
  changeTag = "";
  clickTag: { id: string; name: string } = {
    id: "0",
    name: "0",
  };

  beforeCreate() {
    this.$store.commit("fetchTags");
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

  updateTag() {
    const newName = window.prompt("请输入新的标签名");
    const oldName = this.clickTag;
    if (newName) {
      if (!this.validate(newName)) return;
      this.$store.commit("updateTag", { oldName, newName });
    } else if (newName === "") {
      window.alert("标签名不能为空");
    } else {
      return;
    }
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

  removeTag() {
    const name = this.clickTag;
    if (window.confirm("确认要删除该标签吗")) {
      this.$store.commit("removeTag", name.id);
    } else {
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  padding-left: 0;
  margin-top: 16px;
  > li {
    background: #ffffff;
    margin: 8px 0;
    padding: 0 12px;
    border-radius: 4px;
    min-height: 38px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    .tagName {
      word-break: break-all;
    }
    .editicon {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > .edit {
        width: 20px;
        height: 20px;
        margin: 0 16px;
      }
      > .delete {
        width: 20px;
        height: 20px;
        margin: 0 8px;
      }
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
