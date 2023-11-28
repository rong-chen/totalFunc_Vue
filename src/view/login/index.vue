<template>
    <div
        id="userLayout"
        :style="{
            backgroundSize: '100% 100%'
        }"
    >
        <div class="" v-loading="loading">
            <div class="">
                <div class="containers">
                    <div class="container-item loginform">
                        <div class="textalinge">
                            <img src="/src/assets/icon.png" class="icon" alt="" />
                            <h3 class="companyTitle">图腾数安CDM副本数据管理平台</h3>
                            <el-form
                                ref="loginForm"
                                :model="loginFormData"
                                :rules="rules"
                                :validate-on-rule-change="false"
                                @keyup.enter.native="submitForm"
                            >
                                <div class="prompt" v-if="showPrompt">
                                    长时间未操作，请重新登录
                                </div>
                                <el-form-item prop="username">
                                    <el-input
                                        v-model="loginFormData.username"
                                        type="text"
                                        placeholder="账号"
                                        required=""
                                    >
                                        <template #suffix>
                                            <img
                                                class="width25"
                                                src="/src/assets/user.png"
                                                alt=""
                                            />
                                        </template>
                                    </el-input>
                                </el-form-item>
                                <el-form-item prop="password" style="margin-top: 10px">
                                    <el-input
                                        v-model="loginFormData.password"
                                        type="password"
                                        placeholder="口令"
                                        required=""
                                    >
                                        <template #suffix>
                                            <img
                                                class="width25"
                                                src="/src/assets/password.png"
                                                alt=""
                                        /></template>
                                    </el-input>
                                </el-form-item>
                                <div class="form-group">
                                    <button class="btnLogin" @click.prevent="submitForm">
                                        登录
                                    </button>
                                </div>
                                <div class="version">
                                    <div class="">
                                        <label class="">
                                            <el-checkbox
                                                label="记住我"
                                                style="color: #0051ea"
                                                v-model="loginFormData.isCheckbox"
                                            />
                                        </label>
                                    </div>
                                    <div class="">
                                        <a style="color: #0051ea">{{ branch }}</a>
                                        <a style="color: #5d85ec">[{{ commitId }}]</a>
                                    </div>
                                </div>
                            </el-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { login } from "../../api/login";
import { userInfo } from "../../store/user";
import { useRouter } from "vue-router";
const router = useRouter();
let uif = userInfo();

let loading = ref(false);
onMounted(() => {
    let login = localStorage.getItem("loginInfo");
    if (login) {
        loginFormData.value = JSON.parse(login);
    }
});

window.onbeforeunload = function (event) {};

const loginForm = ref(null);
let loginFormData = ref({
    username: "",
    password: "",
    isCheckbox: false
});

const checkUsername = (rule, value, callback) => {
    if (value.length < 0) {
        return callback(new Error("请输入正确的用户名"));
    } else {
        callback();
    }
};

const checkPassword = (rule, value, callback) => {
    if (value.length < 0) {
        return callback(new Error("请输入正确的密码"));
    } else {
        callback();
    }
};
const rules = reactive({
    username: [{ validator: checkUsername, trigger: "blur" }],
    password: [{ validator: checkPassword, trigger: "blur" }],
    captcha: [
        {
            message: "验证码格式不正确",
            trigger: "blur"
        }
    ]
});

const submitForm = () => {
    loginForm.value.validate(async (v) => {
        if (v) {
            loading.value = true;
            login(loginFormData.value).then((res) => {
                if (loginFormData.value.isCheckbox && res.code == 200) {
                    localStorage.setItem(
                        "loginInfo",
                        JSON.stringify({
                            username: loginFormData.value.username,
                            password: loginFormData.value.password,
                            isCheckbox: true
                        })
                    );
                    //
                    loading.value = false;
                }
                if (res.code == 200) {
                    uif.token = res.data.token;
                    router.push({ path: "/layout/index" });
                }
            });
        } else {
        }
    });
};
</script>

<style scoped>
#userLayout {
    height: 100%;
    width: 100%;
    min-width: 1300px;
}
.containers {
    width: 100%;
    position: relative;
    height: 100vh;
}
.textalinge {
    text-align: center;
}
.loginform {
    width: 400px;
    background-color: white;
    border-radius: 20px;
    padding: 30px;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
}
/* 0051ea */
.companyTitle {
    color: #0051ea;
    text-align: center;
    font-size: 23px;
    margin-bottom: 30px;
}
.icon {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 40px;
    width: 40px;
}
.btnLogin {
    background-color: white;
    border: 1px solid #285eec;
    color: #285eec;
    width: 100%;
    height: 40px;
    border-radius: 3px;
    margin-top: 20px;
    /*  */
}
.width25 {
    width: 20px;
}
.version {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.twofactorAuthentication {
    font-weight: 700;
}
.prompt {
    margin-bottom: 10px;
    text-align: left;
    color: rgb(209, 36, 47);
}
</style>
<style>
#userLayout .el-dialog {
    border-radius: 3px;
}
</style>
