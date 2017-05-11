<template lang="html">
   
    
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