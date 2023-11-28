<template>
    <div class="virtualDisk-container">
        <div v-if="currentPage == 'table'">
            <h3 style="padding: 0.5rem 0 0 0.5rem">虚拟磁盘信息</h3>
            <div
                style="
                    border-top: 1px solid rgba(97, 104, 118, 0.16);
                    padding: 10px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                "
            >
                <div>
                    <tabler-button type="primary" @click="openAddPage">
                        <svg
                            t="1699519036577"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="4192"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M981.333333 469.333333H554.666667V42.666667c0-23.466667-19.2-42.666667-42.666667-42.666667s-42.666667 19.2-42.666667 42.666667v426.666666H42.666667c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666667h426.666666v426.666666c0 23.466667 19.2 42.666667 42.666667 42.666667s42.666667-19.2 42.666667-42.666667V554.666667h426.666666c23.466667 0 42.666667-19.2 42.666667-42.666667s-19.2-42.666667-42.666667-42.666667"
                                fill="#ffffff"
                                p-id="4193"
                            ></path>
                        </svg>
                    </tabler-button>
                    <tabler-button style="margin-left: 10px">
                        <svg
                            t="1699519176110"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="5264"
                            width="16"
                            height="16"
                        >
                            <path
                                d="M202.666667 256h-42.666667a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64H266.666667v565.333333a53.333333 53.333333 0 0 0 53.333333 53.333334h384a53.333333 53.333333 0 0 0 53.333333-53.333334V352a32 32 0 0 1 64 0v469.333333c0 64.8-52.533333 117.333333-117.333333 117.333334H320c-64.8 0-117.333333-52.533333-117.333333-117.333334V256z m224-106.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z m-32 288a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z m170.666666 0a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z"
                                fill="#2c2c2c"
                                p-id="5265"
                            ></path>
                        </svg>
                    </tabler-button>
                </div>
                <div style="display: flex; justify-content: right">
                    <tabler-input style="width: 200px; margin-right: 20px"></tabler-input>
                    <tabler-button type="primary">搜索</tabler-button>
                </div>
            </div>
            <div>
                <tabler-table
                    @selection-change="selectionChange"
                    :config="table.config"
                    :data="table.data"
                    selection
                >
                    <template #test2="{ row }">
                        <tabler-button>123</tabler-button>
                    </template>
                    <template #test5="{ row }">
                        <tabler-button>123</tabler-button>
                    </template>
                </tabler-table>
                <!-- <tabler-button type="success">你好呀</tabler-button>
            <tabler-input
                v-model="input"
                icon="<el-icon><Search /></el-icon>
            "
            ></tabler-input> -->
            </div>
            <div style="padding: 15px" class="tabler-foother">
                <div>共0数据</div>
                <div>
                    <el-pagination
                        :page-size="20"
                        :pager-count="11"
                        layout="prev, pager, next"
                        :total="1000"
                    />
                </div>
            </div>
        </div>
        <div v-else-if="currentPage == 'add'">
            <addVirtualDisk></addVirtualDisk>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import addVirtualDisk from "./addVirtualDisk.vue";
let input = ref("");
let currentPage = ref("table");
const openAddPage = () => {
    currentPage.value = "add";
};
const selectionChange = (val) => {
    // console.log(val);
};

let table = ref({
    config: [
        { prop: "name", label: "名称" },
        { prop: "test1", label: "描述" },
        { prop: "test2", label: "状态", isSolt: true },
        { prop: "test3", label: "授权终端" },
        { prop: "test4", label: "协议" },
        { prop: "test5", label: "", isSolt: true }
    ],
    data: [
        {
            name: "1",
            test1: "2",
            test3: "4",
            test4: "5"
        },
        {
            name: "11",
            test1: "22",
            test3: "43",
            test4: "54"
        },
        {
            name: "111",
            test1: "222",
            test3: "433",
            test4: "544"
        }
    ]
});
</script>
<style scoped>
.virtualDisk-container {
    /*  */
    border: 1px solid rgba(97, 104, 118, 0.16);
}
.tabler-foother {
    /*  */
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
