<!--  -->
<template>
<div class='home'>

<van-skeleton
  title
  avatar
  :row="3"
  :loading="loading"
>
     <div class="swipe">
        <van-swipe :autoplay="3000" @change="onChange">
            <van-swipe-item v-for="(item, index) in moviesInfo" :key="index">
                <div style="padding:15px;">  <img  style="width:100%" v-lazy="item.imgUrl" /></div>
                <div class="notice-box">
                    <div class="img-box-title"  :style="{'color': item.color}">
                      <div class="title">  {{item.title}} </div>
                      <div class="fav"> 
                          <div>  <span> <van-icon name="good-job-o" />{{item.like}}</span>
                        <span> <van-icon name="good-job-o" />{{item.hate}}</span>   </div>
                        <div style="display: flex;align-items: center;"><van-icon name="good-job-o" /><label class="good-text">收益测算</label></div>
                          
                        </div>
                    <van-divider :style="{ color: '#eee', borderColor: '#eee', padding: '0 10px' }" />
                    <div class="notice-text">
                        <div>{{item.director}}</div>
                        <div>主演：<span v-for='(actor,i) in item.actor' :key = 'i'>{{actor}} </span> </div>
                        <div>投资期:<span>{{item.notice}}</span></div>
                    
                    </div>
                    <div class="progress-box">
                        <div class="progress-box-left">
                            <van-circle
                            v-model="currentRate"
                            :rate="currentTotalRate"
                            :speed="50"
                            :text="((item.nowV / item.totalV)*100).toFixed(0) +'%'"
                            size="50"
                           
                            />

                        </div>
                        <div class="progress-box-right">
                            <div>{{item.nowV}}元</div>
                             <van-divider :style="{ margin:'2px' ,color: '#eee', borderColor: '#eee' }" />
                            <div>{{item.totalV}}元</div>

                        </div>
                  
                    </div>


                    </div>

                </div>

            </van-swipe-item>
        </van-swipe>
    </div>
</van-skeleton>
    <div class="nav">
        <van-grid>
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
      </van-grid>
    </div>

    <van-divider />

    <div class="note-box">
        <div class="note-box-left">
            <img style="width:90px;" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        </div>
        <div class="note-box-right">
            <div class="note-style1" style="height:40px;">
                <van-tag type="warning">大盘</van-tag>
                <label style="margin-left:5px;">平台累计交易20234笔 </label>
                <label>2019/11/11 </label>

            </div>
            <div class="note-style1">
                <van-tag type="warning">  投资 </van-tag>
            <div style="width:80%" > <van-notice-bar
                    text="138****8888投资10000.00元 怪盗下课"
                    left-icon="volume-o"
                    />
                 </div>

               
            </div>
        </div>
    </div>

    <div class="banner">
         <van-image v-for="(i,index) in images" :key="index"
            width="100%"
            height="120px"
            fit="scale-down"
            :src="i"
            />
    </div>
<Footer />
</div>
</template>

ß

<script>
import Vue from 'vue';
import { Skeleton } from 'vant';
import { Grid, GridItem } from 'vant';
import { Tag } from 'vant';
import Footer from '../components/Foot';
import {
    Divider,NoticeBar,Image,
    Icon,
    Swipe,
    SwipeItem,
    Circle,
    Lazyload
} from 'vant';
Vue.use(NoticeBar);
Vue.use(Grid).use(GridItem);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Divider);
Vue.use(Icon);
Vue.use(Lazyload);
Vue.use(Circle);
Vue.use(Skeleton);
Vue.use(Image);
Vue.use(Tag);
export default {
    name: '',
    props: [''],
    data() {
        return {
            loading: true,
            currentRate:0,
            currentTotalRate:0,
            images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg'
            ],
            moviesInfo:[
                {
                    'actor':['第三方','时尚','大的','史蒂夫','史蒂夫','史蒂夫','史蒂夫'],
                    'director':'电商是',
                    'title':'都是粉色的飞机离开',
                    'color':'#fff',
                    'like':999,
                    'hate':888,
                    'imgUrl':'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'notice':'11月5日上映，投资日起11个自然月',
                    'nowV':150000,
                    'totalV':150000,
                    
                },
                {
                    'actor':['第三方','时尚','大的','史蒂夫','史蒂夫','史蒂夫','史蒂夫'],
                    'director':'电商是',
                    'title':'都是粉色的飞机离sfsdfss开2222',
                    'color':'red',
                    'like':199,
                    'hate':1888,
                    'imgUrl':'https://img.yzcdn.cn/vant/apple-2.jpg',
                    'notice':'11月5日上映，投资日起11个自然月',
                    'nowV':55500,
                    'totalV':150003,
                },      
            ]
        };
    },
    components: {Footer},
    computed: {
        text() {
            return this.currentRate.toFixed(0) + '%'
        },
   
    },
    beforeMount() {},
    mounted() {
        this.onChange(0)
        this.loading = false;
    },
    methods: {
        onChange(index){
            this.currentRate = 0;
            let that = this
            this.moviesInfo.forEach(function(v,i){
             if (i==index) {that.currentTotalRate = v.nowV/v.totalV *100}
           
            })
            // if (index==0)  this.currentTotalRate=10;
            // if (index==1)  this.currentTotalRate=40;
        }
    },
    watch: {
        
    }

}
</script>

<style  scoped>
.swipe{
    height:315px;
}
.notice-box{
    
    position:absolute;
    z-index:999;
    box-shadow: 3px 4px 10px #888888;
    left:170px;
    width:150px;
    background:#47466194;
    border-radius:10px;
    top:20px;
    padding:20px;
}
.img-box-title{
    z-index:999;
   
    
    font-size:12px;
}
.title{
    text-align: left;
}
.fav{
    margin-top:15px;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.good-text{
    font-size:10px;
    line-height: 12px;
    width:24px;
    overflow:hidden;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
}
.notice-text{
    font-size:12px;
    text-align:left;
}
.progress-box{
    align-items: center;
    display:flex;
    justify-content: space-between;
}
.progress-box-right{
    padding-right:20px;
    display:flex;
    text-align:left;
    flex-direction: column;
}
.progress-box-left{
    font-size:12px;
}
.note-box-right{
    display:flex;
    flex-direction: column;
}
.note-box{
    display:flex;
    padding:15px;
    font-size:12px;
}
.note-style1{
    padding:0 15px;
    display:flex;  
    align-items: center;
 
    justify-content: space-between;
}
 
</style>
