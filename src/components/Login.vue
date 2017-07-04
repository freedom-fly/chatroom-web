<<template>
  <div class="login">
        <div class="logincontent">
            <div class="input">
                <i class="icon-user"></i>
                <input type="text" v-model="userName" placeholder="请输入用户名">
            </div>
            <div class="input">
                <i class="icon-pass"></i>
                <input type="password" v-model="password" placeholder="请输入密码">
            </div>
            <div>
                <input type="button" v-on:click="login" value="登录" class="submit">
            </div>
            <div class="version">
                <p>版本信息 <span>{{version}}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userName: '5003',
            password: '123456',
            version:''
        }
    },
    methods: {
        login() {
            alert(this.userName + '--' + this.password)
        }
    }
}
</script>
<style>
.version {
    text-align: right;
    position: relative;
    top: 40px;
    right: 20px;
    color: #465376;
}

.login {
    max-width: 100%;
    margin: auto;
    width: 372px;
    height: 391px;
    margin: auto;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 307px
}

.logincontent {
    max-width: 100%;
    width: 374px;
    height: 360px;
    margin: auto;
    padding: 66px 11% 0px;
    border-radius: 10px;
    text-align: left;
}

.logincontent input {
    outline: none;
    border: none;
    font-size: 14px;
    height: 39px;
}

.logincontent .input {
    width: 100%;
    height: 40px;
    border-bottom: #8c8c8c 1px solid;
    margin-bottom: 20px;
}

#i_messagedate1 {
    position: absolute;
    left: 35px;
    top: 2px;
    cursor: pointer;
}


/*.content .input input {
    width: 250px;
    height: 40px;
    max-width: 85%;
}*/

.logincontent i {
    margin: 15px 10px 0 10px;
}

.logincontent .input:hover,
.logincontent .input:focus {
    border-color: #48c1ff;
    color: #48c1ff;
}

.logincontent label {
    font-size: 12px;
    color: #8c8c8c;
    position: relative;
    top: -2px;
}

.logincontent input.submit {
    width: 78%;
    height: 58px !important;
    border-radius: 10px;
    background-color: #48c1ff;
    margin-top: 70px;
    color: #fff;
    font-size: 20px;
    margin-left: 11%;
}
</style>


