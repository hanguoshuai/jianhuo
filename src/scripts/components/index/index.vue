<template>
    <div class='m-index'>
        <header class='yo-header  yo-header-a'>
            <h2 class="title">尖货</h2>
            <span class="regret yo-ico">&#xe610;</span>
            <span class="affirm yo-ico">&#xf067;</span>
        </header>
        <section>
            <router-view></router-view>
        </section>
        <nav>
            <ul>
              <router-link tag='li' to='/banner' class='yo-ico' active-class='active'>
                  &#xe632;<b>首页</b>
              </router-link>
              <router-link tag='li' to='/list' class='yo-ico' active-class='active'>
                  &#xe6ee;<b>分类</b>
              </router-link>
              <router-link tag='li' to='/center' class='yo-ico' active-class='active'>
                  &#xe73d;<b>尖货</b>
              </router-link>
              <router-link tag='li' to='/cart' class='yo-ico' active-class='active'>
                &#xe618;<b>购物车</b>
              </router-link>
              <router-link tag='li' to='/my' class='yo-ico' active-class='active'>
                  &#xe621;<b>我</b>
              </router-link>
            </ul>
        </nav>
    </div>
</template>
<script>
  export default{

  }
</script>
