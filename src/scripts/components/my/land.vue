<template lang="">
  <div class="m-land">
    <img src="http://s.ccigmall.com/bcw/commons/img/user/login_bg.jpg" alt="">
    <div class="headly">
      <a href="#">
        <span>
          <b></b>
          <i></i>
        </span>
      </a>
      <h3>登陆</h3>
    </div>
    <div class="login">
      <div class="login-common">
        <label for="">用户名</label>
        <input type="text" placeholder="用户名/手机号" class="text-box" name="" value="">
      </div>
      <div class="login-common">
        <label for="">密码</label>
        <input type="password" placeholder="请输入密码" class="text-box" name="" value="">
      </div>
      <div class="login-btn">
        <button type="button" class="btn" name="button">登陆</button>
      </div>
      <div class="login-psw">
        <router-link tag="a" to="/register" class="zhuce">注册</router-link>
        <!-- <a href="#" class="zhuce">注册</a> -->
        <a href="#" class="zhaohui">找回密码</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
