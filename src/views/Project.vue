<!--  -->
<template>
    <div class='project'>
        <div class="img-box">
            <div v-for="(item,i) in images" :key="i" >
               <img style="width:100%;" :src="item" />
               <div class="img-text">
                   <div class="img-text-left">
                       
                   </div>
                   <div class="img-text-middle">
                       <div></div>
                       <div></div>
                   </div>
                   <div class="img-text-right">
                       <div></div>
                       <div></div>
                    
                   </div>

               </div>

            </div>
        </div>

            <Footer />
    </div>
</template>

<script>
import Footer from '../components/Foot';
    export default {
        name:'',
        props:[''],
        data () {
            return {
             images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg'
            ],
            };
        },
        components: {Footer},
        computed: {},
        beforeMount() {},
        mounted() {},
        methods: {},
        watch: {}

    }

</script>

<style  scoped>
.img-box{
    padding:15px;
}
</style>