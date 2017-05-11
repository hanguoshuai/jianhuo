<template lang="html">
  <div class="m-cart">
    <header class='h-cart'>
      <router-link tag='span' to='/center' class="h-cart_left yo-ico">&#xf07d;</router-link>
      <span class="h-cart_cart">购物车</span>
    </header>
    <div class="cart-bx">
			<p>您还未登录哦，登录后可以显示您之前加入的商品。</p>
			<router-link to="/" tag="a">立即登录</router-link>
		</div>
    <div class="cart_no">
    	<img src="http://m.91xsj.com/commons/newimg/cart_01.png">
    	<p>购物车空空 先去买点啥呢</p>
    	<p><router-link to="/" tag="a">先逛逛</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
