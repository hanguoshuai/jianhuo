<template lang="html">
   
    <div>
<mt-navbar v-model="selected">
  <mt-tab-item id="1">选项一</mt-tab-item>
  <mt-tab-item id="2">选项二</mt-tab-item>
  <mt-tab-item id="3">选项三</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
  </mt-tab-container-item>
</mt-tab-container>
    </div>
</template>
<style>

</style>
<script>
        import Vue from 'vue';
        import { Navbar, TabItem } from 'mint-ui';

        Vue.component(Navbar.name, Navbar);
        Vue.component(TabItem.name, TabItem);
    export default {
        data:function(){
            selected:'1'
            
        },
        method:{

        },
        mouted:function(){
            console.log(0)
        }
    }
</script>