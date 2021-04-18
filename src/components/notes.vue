<template>
    <div class="notes">
        <label class="remark">
            <span class="name">备注</span>
            <input type="text" placeholder="在这里输入备注">
        </label>    
    </div>
</template>

<script>
    export default {
        name:"notes"
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.notes{
    font-size: 14px;
    background: #f5f5f5;
    display: block;
    padding-left: 16px;
    display: flex;
    align-items: center;//水平居中
    .name{
        padding-right: 16px;
    }
    input{
        height: 48px;
        flex-grow: 1;
        background: transparent;
        border: none;
        padding-right: 16px;
    }
}
</style>