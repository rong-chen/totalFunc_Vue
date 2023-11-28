<template>
    <div class="home">
        <!--  -->
        <input type="file" @change="uploadFunc" class="uploadImage" />
        <tabler-button @click="send('img')">发送</tabler-button>
    </div>
    <img :src="uploadImageString" alt="" />
</template>
<script setup>
import { ref, onMounted } from "vue";
import { websocket } from "../../store/websocket/index";
import { userInfo } from "../../store/user";
let user = userInfo();

onMounted(() => {});

let uploadImageString = ref("");

const uploadFunc = (event) => {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = function () {
        uploadImageString.value = reader.result;
    };
};

let conn = websocket();

const send = (type) => {
    let params = {
        fromUuid: user.userInfo.Id,
        toUuid: "c9e8194b-2cf9-4f9e-b835-57b9b32f2411",
        sendMsg: "",
        msgType: "",
        at_list: []
    };

    if (type == "img") {
        params.msgType = "1";
        params.sendMsg = uploadImageString.value;
        conn.websocket.send(JSON.stringify(params));
    }
};
</script>

<style>
.home {
    /* height: 3000px; */
}
</style>
