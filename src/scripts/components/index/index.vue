<template>
    <div class='m-index'>

        <section>
            <router-view></router-view>
        </section>
        <nav>
            <ul>
              <router-link tag='li' to='/banner' active-class='active'>
                  <span class='yo-ico'>&#xe632;<b>首页</b></span>
              </router-link>
              <router-link tag='li' to='/list' active-class='active'>
                  <span class='yo-ico'>&#xe6ee;<b>分类</b></span>
              </router-link>
              <router-link tag='li' to='/center' active-class='active'>
                  <span class='yo-ico'>&#xe73d;<b>尖货</b></span>
              </router-link>
              <router-link tag='li' to='/cart' active-class='active'>
                <span class='yo-ico'>&#xe618;<b>购物车</b></span>
              </router-link>
              <router-link tag='li' to='/my' active-class='active'>
                <span class='yo-ico'>&#xe621;<b>我</b></span>
              </router-link>
            </ul>
        </nav>
    </div>
</template>
<script>
  export default{

  }
</script>
