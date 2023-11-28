<template>
    <!--  -->
    <div class="table-responsive">
        <table class="table table-vcenter">
            <thead>
                <tr style="border-top: 1px solid rgba(97, 104, 118, 0.16)">
                    <th v-if="prop.selection">
                        <input type="checkbox" id="allCheck" class="form-check-input" />
                    </th>
                    <th v-for="(item, index) in prop.config">
                        {{ item.label }}
                    </th>
                </tr>
            </thead>
            <tbody v-if="prop.data.length">
                <tr v-for="(item1, index) in prop.data">
                    <td v-if="prop.selection" style="width: 40px">
                        <input
                            type="checkbox"
                            :value="JSON.stringify(item1)"
                            class="form-check-input"
                            id="listCheckBox"
                        />
                    </td>
                    <td v-for="(item2, index) in prop.config">
                        {{ item1[item2.prop] }}
                        <div v-if="item2.isSolt">
                            <slot :name="item2.prop" :row="item2"></slot>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-if="!prop.data.length" class="noDataClass">暂无数据</div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
let prop = defineProps({
    config: Array,
    data: Array,
    selection: Boolean
});

let emit = defineEmits(["selectionChange"]);
onMounted(() => {
    let isCheckList = [];
    let listCheckBox = document.querySelectorAll("#listCheckBox");
    let allCheck = document.querySelector("#allCheck");
    let JParse = [];
    listCheckBox.forEach((item) => {
        item.onclick = () => {
            JParse = [];
            if (item.checked) {
                isCheckList.push(item.value);
            } else {
                isCheckList.forEach((element, index) => {
                    if (element == item.value) {
                        isCheckList.splice(index, 1);
                    }
                });
                allCheck.checked = false;
            }
            isCheckList.forEach((element) => {
                JParse.push(JSON.parse(element));
            });

            emit("selectionChange", JParse);
        };
    });
    allCheck.onclick = () => {
        JParse = [];
        isCheckList = [];
        if (allCheck.checked) {
            listCheckBox.forEach((item) => {
                item.checked = true;
                isCheckList.push(item.value);
            });

            isCheckList.forEach((element) => {
                JParse.push(JSON.parse(element));
            });
        } else {
            listCheckBox.forEach((item) => {
                item.checked = false;
                isCheckList = [];
            });
        }
        emit("selectionChange", JParse);
    };
});
</script>
<script>
export default {
    name: "tabler-table"
};
</script>
<style scoped>
/*  */
.table {
    position: relative;
}
.noDataClass {
    border-bottom: 1px solid rgba(97, 104, 118, 0.16);
    text-align: center;
    padding: 10px 0;
    color: rgb(98, 98, 98);
}
</style>
