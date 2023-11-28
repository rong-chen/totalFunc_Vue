<template>
    <div class="friendManage">
        <span class="friendCard" v-for="(item, index) in 100">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                        ...
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="text item">
                    {{ "List item " + o }}
                </div>
                <template #footer>Footer content</template>
            </el-card>
        </span>
    </div>
</template>
<style scoped>
.friendManage {
    /*  */
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    justify-content: center;
}
.friendCard {
    margin: 10px;
    display: block;
}
</style>
