<template>
    <div v-if="false">
        <trTable :config="config" :data="data">
            <template #btn="{ row }">
                <button>123</button>
            </template>
        </trTable>
    </div>
</template>
<script setup>
import trTable from "../../../components/table/index.vue";
import { ref } from "vue";

let config = ref([
    {
        prop: "name",
        label: "名称"
    },
    {
        prop: "sex",
        label: "性别"
    },
    {
        prop: "age",
        label: "年龄"
    },
    {
        prop: "btn",
        label: "按钮组",
        isSolt: true
    }
]);
let data = ref([
    {
        name: "张三",
        age: "18",
        sex: "女"
    },
    {
        name: "张4",
        age: "18",
        sex: "女"
    },
    {
        name: "张5",
        age: "18",
        sex: "女"
    }
]);
</script>
<style scoped></style>
