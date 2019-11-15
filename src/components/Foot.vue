<!--  -->
<template>
    <div class='footer'>
        <van-tabbar v-model="active">
        <van-tabbar-item to="/" icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item  to="/project" icon="search">项目</van-tabbar-item>
        <van-tabbar-item icon="friends-o">发现</van-tabbar-item>
        <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>

   
    </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
    export default {
        name:'',
        props:[''],
        data () {
            return {
                active: 0,
   
            };
        },
        components: {},
        computed: {},
        beforeMount() {},
        mounted() {},
        methods: {},
        watch: {}

    }

</script>

<style  scoped>
.footer{
    position:fixed;
    width:100%;
 
    z-index:999;
    bottom:0;
}
</style>