<template>
            <div class="tags">
                <div class="new">
                    <button>新增标签</button>
                </div>
                <ul class="current">
                    <li>衣</li>
                    <li class="selected">食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
            </div>
</template>

<script>
    export default {
        name:"tags"
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.tags{
    font-size: 14px;
    padding: 16px;
    display: flex;
    flex-grow: 1;
    flex-direction: column-reverse;
  > .current{
      display: flex;
      flex-wrap: wrap;
      > li{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #d9d9d9;
        $h:24px;
        height: $h;
        border-radius: $h/2;
        padding: 0 $h/2;
        margin-right: $h/2;
        margin-top: 4px;
        &.selected{
            background: $color-highlight;
            color: rgb(255, 255, 255);
        }
      }
    }
    > .new{
        padding-top: 12px;
        button{
            background: transparent;
            border: none;
            color: #999;
            border-bottom: 1px solid ;
            padding: 0 3px;
        }
    }
}
</style>