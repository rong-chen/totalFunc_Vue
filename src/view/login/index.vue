<template>
    <div class="test-container">
        <div class="input-model">
            <div class="title">胖狐聊天室</div>
            <div style="padding: 10px 20px; margin-top: 10px">
                <el-form
                    label-position="left"
                    label-width="120px"
                    :rules="rules"
                    style="width: 460px; margin-top: 30px"
                    :model="LicenseParams"
                    ref="ruleFormRef"
                >
                    <el-form-item label="账号" prop="deviceSn">
                        <input
                            class="form-control"
                            placeholder="账号"
                            v-model="LicenseParams.username"
                            style="width: 280px"
                        />
                    </el-form-item>
                    <el-form-item label="密码" prop="authObj">
                        <input
                            class="form-control"
                            placeholder="密码"
                            v-model="LicenseParams.password"
                            style="width: 280px"
                        />
                    </el-form-item>
                </el-form>
            </div>

            <div
                style="
                    border-top: 1px solid #cecece;
                    padding: 10px;
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    justify-content: right;
                    height: 70px;
                "
            >
                <button class="btn-primary btn">注册</button>
                <button @click="submit(ruleFormRef)" class="btn-primary btn">登陆</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from "vue";
import { login } from "../../api/login";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { userInfo } from "../../store/user/index";
const user = userInfo();

const router = useRouter();
const ruleFormRef = ref();
let LicenseParams = ref({
    username: "", //设备号
    password: "" //授权对象
});
onMounted(() => {
    //
    if (user.token) {
        router.push({ path: "/layout/index" });
    }
});

const rules = reactive({
    username: [{ required: true, message: "请填写完整", trigger: "blur" }],
    password: [{ required: true, message: "请填写完整", trigger: "blur" }]
});

const submit = async (formEl) => {
    if (!formEl) return;
    await formEl.validate((valid) => {
        if (valid) {
            login(LicenseParams.value).then((res) => {
                console.log(res);
                if (res.code == 200) {
                    user.token = res.data.token;
                    localStorage.setItem("token", res.data.token);
                    router.push({ path: "/layout/index" });
                }
            });
        } else {
        }
    });
};
</script>
<style>
.test-container .el-input__wrapper.is-focus {
    color: inherit;
    background-color: var(--tblr-bg-forms);
    border-color: #90b5e2;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(32, 107, 196, 0.25);
}
</style>
<style scoped>
.test-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-image: url("../../assets/bg1.png");
    position: relative;
    justify-content: right;
    overflow: hidden;
    background-size: 100% 100%;
}

.test-container::after {
    content: "";
    display: block;
    position: absolute;
    right: 0%;
    bottom: 0%;
    backdrop-filter: blur(5px);
    width: 100%;
    height: 100%;
}

.input-model {
    /* width: 30%; */
    /* text-align: right; */
    background-color: #ffffff80;
    z-index: 11;
    border-radius: 3px;
    margin: auto;
    /* min-height: 600px; */
}
.input-model .el-input {
    /* flex: 1; */
}
.input-model > div {
    display: flex;
    /* align-items: center; */
    width: 100%;
    display: flex;
}

.title {
    padding: 10px;
    font-weight: bold;
    background-color: #707030;
    box-sizing: border-box;
    height: 50px;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: white;
}
.licenseCss {
    display: flex;
    width: 100%;
    word-break: break-all;
    overflow-wrap: break-word;
    border: 1px solid #dcdfe6;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
    text-align: left;
    line-height: 22px;
    position: relative;
    min-height: 150px;
    color: #737373;
}
.licenseCss:hover {
    display: block;
    background-color: #f5f7fa;
}
.copy {
    position: relative;
}
.positionA {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
}
.emailLabel {
    background-color: #e2e2e2 !important;
    text-align: center;
}
.label-item {
    width: 80px;
}
</style>
<style></style>
