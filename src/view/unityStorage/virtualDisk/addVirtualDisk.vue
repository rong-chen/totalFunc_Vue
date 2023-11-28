<template>
    <!--  -->
    <div class="addVirtualDisk">
        <div style="background-color: rgb(222, 220, 220)">
            <div
                style="display: flex; justify-content: space-between; align-items: center"
            >
                <div class="currentTitle">新增</div>
                <el-icon style="margin-right: 10px" size="20"><Close /></el-icon>
            </div>
        </div>
        <div style="padding: 10px; min-height: 300px">
            <el-form :model="form" label-width="120px" label-position="top">
                <div>
                    <el-form-item label="存储池">
                        <div class="storagePool">
                            <tabler-input class="" disabled v-model="form.storageName" />
                        </div>
                    </el-form-item>
                </div>
            </el-form>
        </div>

        <div class="footer_btn">
            <tabler-button style="margin-right: 10px">上一步</tabler-button>
            <tabler-button style="margin-right: 10px">下一步</tabler-button>
            <tabler-button style="margin-right: 10px" type="primary">完成</tabler-button>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

let form = ref({});
let progress = ref(0);
onMounted(() => {
    //
});
</script>
<style>
.addVirtualDisk {
}
.currentTitle {
    padding: 10px;
}
</style>
<style scoped>
.storagePool {
    width: 200px;
    position: relative;
}
.footer_btn {
    text-align: right;
    padding: 10px;
    border-top: 1px solid rgba(97, 104, 118, 0.16);
}
</style>
