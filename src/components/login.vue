<template>
    <div class="login-wrap">
        <header>
            <div class="logo-box">
                    <img src="../assets/img/login/logo.png" alt="">         
            </div>
            <h2>华为账号</h2>
            <p>登陆华为账号以使用云空间、华为应用及更多服务</p>
            <router-link to="/my">
                <van-icon size="6vw" name="arrow-left" />
            </router-link>
        </header>

        <!-- 验证码登录 -->
        <form v-if="login_wrap==0" class="login-mid-wrap" action="javascript:;" method="post">
            <div class="nation-box">
                <h4>国家/地区</h4>
                <p>中国  +86<van-icon name="arrow" /></p>
            </div>
            
            <div class="input-wrap">
                <span class="login-input">
                    <input type="text" placeholder="手机号" maxlength="11">
                </span>
                <span class="verification-input">
                    <input type="text" placeholder="短信验证码" maxlength="4">
                    <div v-if="current_get==0" class="disabled-get"><p>获取验证码</p></div>
                    <div v-if="current_get==1"><p>获取验证码</p></div>
                </span>
            </div>
    
            <div class="btn-wrap">
                <button v-if="current_login==0" class="disabled-btn" disabled>登录/注册</button>
                <button v-if="current_login==1" class="">登录/注册</button>
                <p @click="show_login_wrap">密码登录</p>
            </div>
        </form>

        <!-- 密码登录 -->
        <form v-if="login_wrap==1" class="login-mid-wrap" action="javascript:;" method="post">
            <div class="input-wrap">
                <span class="login-input">
                    <input type="text" placeholder="手机号/邮件地址/账号名" maxlength="11">
                </span>
                <span class="password-input">
                    <input type="password" placeholder="密码" maxlength="16">
                </span>
            </div>

            <div class="find-pwd">
                <p @click="show_login_wrap">短信验证码登录</p>
                <p>忘记密码</p>
            </div>
    
            <div class="btn-wrap">
                <button v-if="current_login==0" class="disabled-btn" disabled>登录/注册</button>
                <button v-if="current_login==1" class="">登录/注册</button>
                <button class="reg_btn" @click="switch_reg">注册账号</button>
            </div>
        </form>

        <!-- 用户注册 -->
        <form v-if="login_wrap==2" class="login-mid-wrap" action="javascript:;" method="post">
            <div class="nation-box">
                <h4>国家/地区</h4>
                <p>中国  +86<van-icon name="arrow" /></p>
            </div>
            
            <div class="input-wrap">
                <span class="login-input">
                    <input type="text" placeholder="手机号" maxlength="11">
                </span>
                <span class="verification-input">
                    <input type="text" placeholder="短信验证码" maxlength="4">
                    <div v-if="current_get==0" class="disabled-get"><p>获取验证码</p></div>
                    <div v-if="current_get==1"><p>获取验证码</p></div>
                </span>
            </div>
    
            <div class="btn-wrap">
                <button v-if="current_login==0" class="disabled-btn" disabled>注册</button>
                <button v-if="current_login==1" class="">登录/注册</button>
                <p @click="show_login_wrap">密码登录</p>
            </div>
        </form>


        <!-- 底部 -->
        <footer>
            <p>其他方式登录</p>
            <p><img src="../assets/img/login/qq.png" alt=""></p>
            <p><span>遇到问题</span><em>|</em><span>隐私声明</span></p>
        </footer>
    </div>
</template>

<style scoped src="../assets/css/login.css">

</style>

<script>
export default {
    data(){
        return{
            // 是否可以点击登录
            current_login:0,
            // 是否可以点击获取验证码
            current_get:0,
            login_wrap:1,
        }
    },
    methods:{
        show_login_wrap(){
            if(this.login_wrap==1){
                this.login_wrap=0
            }else{
                this.login_wrap=1
            }
        },
        switch_reg(){
            if(this.login_wrap==1){
                this.login_wrap=2
            }else{
                this.login_wrap=0
            }
        }
    }
}
</script>

