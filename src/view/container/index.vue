<template>
    <el-container style="height: 100%; overflow: hidden">
        <el-aside>
            <div
                style="
                    display: flex;
                    justify-content: space-between;
                    padding: 10px;
                    height: 56px;
                    background: white;
                    border-right: 1px solid #dcdfe6;
                    border-bottom: 1px solid #dcdfe6;
                "
                :style="{
                    justifyContent: collapse ? 'center' : 'space-between'
                }"
            >
                <div style="display: flex; align-items: center">
                    <img style="width: 30px; height: 30px" src="../../assets/ttcdm.png" />
                    <div
                        style="
                            display: flex;
                            justify-content: space-between;
                            width: 100%;
                            font-weight: bold;
                            margin-left: 10px;
                            font-size: 18px;
                        "
                        v-if="!collapse"
                    >
                        图腾数安CDM
                    </div>
                </div>
                <div style="cursor: pointer" v-if="!collapse">
                    <!-- 面包屑  -->
                    <el-icon size="30" @click="collapsefunc"><Menu /></el-icon>
                </div>
            </div>
            <hMeau
                style="height: 100%"
                :style="{
                    padding: !collapse ? '10px' : '0px'
                }"
                :collapse="collapse"
            ></hMeau>
        </el-aside>
        <el-container style="background: #fff">
            <el-header class="elHeader">
                <el-page-header style="width: 100%">
                    <template #icon>
                        <el-icon size="30" v-if="collapse" @click="collapsefunc"
                            ><Menu
                        /></el-icon>
                        <div v-else></div>
                    </template>
                    <template #title>
                        <div
                            style="display: flex; align-items: center"
                            v-if="collapse"
                        ></div>
                        <div v-else></div>
                    </template>
                    <template #content>
                        <div style="cursor: pointer">
                            <!-- 面包屑  -->
                        </div>
                    </template>
                    <template #extra>
                        <div style="display: flex; align-items: center">
                            <el-icon @click="toggleFullScreen"><FullScreen /></el-icon>
                            <div></div>
                            <el-dropdown style="margin-left: 10px">
                                <span class="el-dropdown-link">
                                    用户信息
                                    <el-icon class="el-icon--right">
                                        <arrow-down />
                                    </el-icon>
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>Action 1</el-dropdown-item>
                                        <el-dropdown-item>Action 2</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <!--  -->
                    </template>
                </el-page-header>
            </el-header>
            <el-main>
                <div>
                    <div style="padding: 15px">
                        <router-view></router-view>
                    </div>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { routerInfo } from "../../store/router/index";
import hMeau from "../components/horizontalMeau/index.vue";
import { userInfo } from "../../store/user/index";
import { useRouter } from "vue-router";
let userIf = userInfo();
let rs = useRouter();

let router = routerInfo();

let collapse = ref(false);

let routerList = ref([]);
const collapsefunc = () => {
    collapse.value = !collapse.value;
    let aside = document.querySelector(".el-aside");
    if (collapse.value == true) {
        aside.style.width = "auto";
    } else {
        aside.style.width = "240px";
    }
};

onMounted(() => {
    routerList.value = router.getRouterInfo();

    let aside = document.querySelector(".el-aside");
    aside.style.width = "240px";
    userIf.getUserInfo();
});

const toggleFullScreen = () => {
    // 全屏和退出全屏
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            // 标准写法
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            // Firefox 浏览器
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            // Chrome 和 Safari
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            // IE11
            document.msExitFullscreen();
        }
        return;
    }

    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
};
</script>
<style>
.elHeader {
    align-items: center;
    display: flex;
    border-bottom: 1px solid #ebe9e9;
    height: 56px !important;
}
:focus-visible {
    outline: none;
}
.el-header {
    background: #ffffff;
}
.elHeader .el-divider--vertical {
    display: none;
}
</style>
<style scoped>
.tabMenu {
    /*  */
    /* background-color: red; */
    height: 40px;
    border-bottom: 1px solid #ebe9e9;
    display: flex;
    align-items: center;
    padding-left: 10px;
}
</style>
