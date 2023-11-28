<template>
    <router-view> </router-view>
</template>
<script setup>
setElementStyle(); //初始化主题色
function setElementStyle() {
    const el = document.documentElement;
    el.style.setProperty("--el-color-primary", "#206bc4");
    el.style.setProperty("--el-color-primary-light-5", "red");
}
</script>

<style>
::-webkit-scrollbar {
    width: 0;
    display: none;
}

/* 隐藏垂直滚动条 */
</style>
<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}
.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
