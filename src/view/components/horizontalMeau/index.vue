<template>
    <!-- 首页 -->
    <el-menu
        background-color="#ffffff"
        class="hMeauItem"
        unique-opened
        @select="selectMenu"
        :default-active="defaultActive"
        :collapse="prop.collapse"
    >
        <template v-for="item in routerList">
            <el-menu-item :index="item.fullPath" v-if="!item.children">
                <el-icon><location /></el-icon>
                <template #title>
                    <span>{{ item.label }}</span>
                </template>
            </el-menu-item>
            <el-sub-menu :index="item.fullPath" v-else>
                <template #title>
                    <el-icon><location /></el-icon>
                    <span> {{ item.label }}</span>
                </template>

                <el-menu-item-group>
                    <el-menu-item v-for="item2 in item.children" :index="item2.fullPath">
                        <el-icon><location /></el-icon>
                        <template #title> {{ item2.label }}</template>
                    </el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
        </template>
    </el-menu>
</template>
<script setup>
import { ref, onMounted, watch, watchEffect } from "vue ";
import { routerInfo } from "../../../store/router/index.js";
import { useRouter } from "vue-router";
let emit = defineEmits(["getActiveRouter"]);
let routers = useRouter();

let router = routerInfo();
let routerList = ref([]);
let defaultActive = ref("");
onMounted(() => {
    routerList.value = router.getRouterInfo();
    var test = window.location.href;
    defaultActive.value = test.split("#")[1];
});

const selectMenu = (val) => {
    defaultActive.value = val;
    routers.push(val);
};

let prop = defineProps({
    collapse: Boolean
});
</script>
<style>
.hMeauItem {
    width: 100%;
    height: calc(100vh - 56px) !important;
}
.hMeauItem .el-menu-item {
    color: #7b8190;
    font-size: 15px !important;
    font-weight: 700;
}
.hMeauItem .el-sub-menu__title {
    color: #7b8190;
    font-size: 15px !important;
    font-weight: 700;
}
.hMeauItem .el-menu-item.is-active {
    color: #038edc !important;
    background: #f2f3fe !important;
    border-radius: 3px;
}

.hMeauItem .el-sub-menu__title:hover {
    background-color: #ffffff;
}
.hMeauItem .el-menu-item:hover {
    background-color: #ffffff;
    color: #2d2d2d;
}
</style>
