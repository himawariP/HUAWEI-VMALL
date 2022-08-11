<template>
    <div class="main-index">
        <header>
            <div class="top-left-box">
                <img src="../assets/img/logo_red.png" alt="">
            </div>
            <!-- v-model="value" -->
            <router-link to="/search">
                <van-search  placeholder="吹风机" shape="round" background="#f0f3f5"/>
            </router-link>
            <div class="top-icon-box">
                <van-icon name="chat-o" badge="" size="5.5vw" />
            </div>
            <div class="top-right-box">
                <img src="../assets/img/box.png" alt="">
            </div>
        </header>

        <section>
            <div class="top-nav-tag">
                <!-- <span v-for="(item,index) in top_nav_list" :key="index">
                    {{item.title}}
                </span> -->
                <ul>
                    <li v-for="(item,index) in top_nav_list" :key="index">
                        {{item.title}}
                    </li>
                </ul>
            </div>
            <!-- 轮播图 -->
            <div class="main-switch-wrap">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
                    <van-swipe-item>
                        <router-link to="/xiangxi">
                            <img src="img/switch-img1.png" alt="">
                        </router-link>
                    </van-swipe-item>
                    <van-swipe-item>
                        <router-link to="/xiangxi">
                            <img src="img/switch-img2.png" alt="">
                        </router-link>
                    </van-swipe-item>
                    <van-swipe-item>
                        <router-link to="/xiangxi">
                            <img src="img/switch-img3.png" alt="">
                        </router-link>
                    </van-swipe-item>
                    <van-swipe-item>
                        <router-link to="/xiangxi">
                            <img src="img/switch-img4.png" alt="">
                        </router-link>
                    </van-swipe-item>
                    <van-swipe-item>
                        <router-link to="/xiangxi">
                            <img src="img/switch-img5.png" alt="">
                        </router-link>
                    </van-swipe-item>
                </van-swipe>
            </div>

            <!-- 中间图片 -->
            <div class="main-mid-img-wrap">
                <img src="../assets/img/mid-img.png" alt="">
            </div>

            <!-- 首页导航栏 -->
            <nav class="main-nav-wrap">
                <ul>
                    <li v-for="(item,index) in main_nav_list" :key="index">
                        <img :src="item.src" alt="">
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </nav>

            <!-- 限时购 -->
            <div class="time-limit-wrap">
                <div class="limit-content">
                    <div class="limit-top-box">
                        <span><h2>限时购</h2><em>好货限时抢</em></span>
                        <span>
                            <h2>秒杀</h2>
                            <em>距结束</em>
                            <van-count-down>
                                <template>
                                    <span class="block">11</span>
                                    <span class="colon">:</span>
                                    <span class="block">45</span>
                                    <span class="colon">:</span>
                                    <span class="block">14</span>
                                </template>
                            </van-count-down>
                        </span>
                    </div>
                    <div class="limit-bottom-box">
                        <ul>
                            <li v-for="(item,index) in xsg_list" :key="index">
                                <img :src="item.src" alt="">
                                <p>{{item.newPrice}}</p>
                                <p><s>{{item.oldPrice}}</s></p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 新人有礼 专享特惠 -->
            <div class="main-discount-wrap">
                <img src="../assets/img/discount-img.gif" alt="">
            </div>

            <!-- 旗舰新品·精选爆款 -->
            <div class="new-commodity-wrap">
                <div class="new-wrap-title">
                    <img src="../assets/img/title1.png" alt="">
                </div>
                <div class="new-commodity-list">
                    <div class="new-commodity-top">
                        <!-- 左边轮播图 -->
                        <div class="left-swipe-wrap">
                            <van-swipe class="my-swipe" :autoplay="5000" indicator-color="red">
                                <van-swipe-item>
                                    <img src="../assets/img/new-swipe-img1.png" alt="">
                                </van-swipe-item>
                                <van-swipe-item>
                                    <img src="../assets/img/new-swipe-img2.png" alt="">
                                </van-swipe-item>
                                <van-swipe-item>
                                    <img src="../assets/img/new-swipe-img3.png" alt="">
                                </van-swipe-item>
                            </van-swipe>
                        </div>
                        <!-- 右边 -->
                        <div class="right-commodity-wrap">
                            <div class="new-commodity-info">
                                <img src="../assets/img/new-commodity-img1.png" alt="">
                            </div>
                            <div class="new-commodity-info">
                                <img src="../assets/img/new-commodity-img2.png" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="new-commodity-bottom">
                        <div class="new-commodity-info">
                            <img src="../assets/img/new-commodity-img3.png" alt="">
                        </div>
                        <div class="new-commodity-info">
                            <img src="../assets/img/new-commodity-img4.png" alt="">
                        </div>
                        <div class="new-commodity-info">
                            <img src="../assets/img/new-commodity-img5.png" alt="">
                        </div>
                        <div class="new-commodity-info">
                            <img src="../assets/img/new-commodity-img6.png" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <!-- 猜你喜欢 -->
            <div class="main-rec-wrap">
                <div class="rec-wrap-title">
                    <p>猜你喜欢</p>
                </div>
                <div class="rec-list-wrap">
                    <div class="left-rec-list">
                        <div class="rec-box" v-for="(item,index) in rec_left_list.slice(0,Math.ceil(rec_left_list.length/2))" :key="index">
                            <div class="rec-cover">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="rec-content">
                                <h2 class="commodity-name">
                                    <span v-if="item.ifNew">新品上市</span>
                                    <span v-if="item.zfbt">享政府补贴</span>
                                    {{item.name}}
                                </h2>
                                <p class="commodity-intro">
                                    {{item.intro}}
                                </p>
                                <p class="commodity-price">{{item.price}}<s>{{item.oldPrice}}</s></p>
                                <p class="commodity-tags">
                                    <span v-if="item.xstj">限时特价</span>
                                    <span v-if="item.fqmx">分期免息</span>
                                    <span v-if="item.zsjf">赠送积分</span>
                                    <span v-if="item.pt">拼团</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="right-rec-list">
                        <div class="rec-box" v-for="(item,index) in rec_left_list.slice(Math.ceil(rec_left_list.length/2),rec_left_list.length)" :key="index">
                            <div class="rec-cover">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="rec-content">
                                <h2 class="commodity-name">
                                    <span v-if="item.ifNew">新品上市</span>
                                    <span v-if="item.zfbt">享政府补贴</span>
                                    {{item.name}}
                                </h2>
                                <p class="commodity-intro">
                                    {{item.intro}}
                                </p>
                                <p class="commodity-price">{{item.price}}<s>{{item.oldPrice}}</s></p>
                                <p class="commodity-tags">
                                    <span v-if="item.xstj">限时特价</span>
                                    <span v-if="item.fqmx">分期免息</span>
                                    <span v-if="item.zsjf">赠送积分</span>
                                    <span v-if="item.pt">拼团</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 底部文字 -->
            <div class="footer-txt">
                <p>已经没有更多了</p>
            </div>
        </section>
    </div>
</template>

<style scoped src="../assets/css/index.css">

</style>

<style>
header .van-search__content{
    background-color: #fff;
}
</style>

<script>
export default {
    data(){
        return{
            rec_left_list:[
                {
                    src:'img/rec-img1.png',
                    ifNew:false,
                    zfbt:false,
                    name:'Smart4u SH50城市轻骑智能闪盔（支持鸿蒙智联）',
                    intro:'众测优惠60元',
                    price:'￥159',
                    oldPrice:'',
                    fqmx:false,
                    zsjf:false,
                    xstj:false,
                    pt:false
                },
                {
                    src:'img/rec-img2.png',
                    ifNew:true,
                    zfbt:false,
                    name:'HUAWEI FreeBuds Pro 2',
                    intro:'晒单抽耳机收纳包 | 3期免息',
                    price:'￥1299',
                    oldPrice:'',
                    fqmx:true,
                    zsjf:true,
                    xstj:false,
                    pt:false
                },
                {
                    src:'img/rec-img3.png',
                    ifNew:true,
                    zfbt:false,
                    name:'华为畅享 50 Pro',
                    intro:'直降50元 | 晒单抽智能水杯',
                    price:'￥1299',
                    oldPrice:'',
                    fqmx:false,
                    zsjf:true,
                    xstj:true,
                    pt:false
                },
                {
                    src:'img/rec-img4.png',
                    ifNew:true,
                    zfbt:false,
                    name:'HUAWEI MatePad Pro 11英寸 2022',
                    intro:'预约立省200元',
                    price:'￥3499',
                    oldPrice:'',
                    fqmx:true,
                    zsjf:true,
                    xstj:false,
                    pt:false
                },
                {
                    src:'img/rec-img5.png',
                    ifNew:true,
                    zfbt:false,
                    name:'MateBook X Pro 微绒典藏/12代酷睿',
                    intro:'限时省100元/享12期免息',
                    price:'￥12899',
                    oldPrice:'￥12999',
                    fqmx:false,
                    zsjf:true,
                    xstj:true,
                    pt:false
                },
                {
                    src:'img/rec-img6.png',
                    ifNew:true,
                    zfbt:false,
                    name:'HUAWEI PixLab V1 彩色喷墨打印机',
                    intro:'限时直降50元',
                    price:'￥1449',
                    oldPrice:'￥1499',
                    fqmx:true,
                    zsjf:false,
                    xstj:true,
                    pt:false
                },
                {
                    src:'img/rec-img7.png',
                    ifNew:true,
                    zfbt:false,
                    name:'莫塞尔中秋礼盒',
                    intro:'预订省40',
                    price:'￥538',
                    oldPrice:'',
                    fqmx:false,
                    zsjf:false,
                    xstj:false,
                    pt:false
                },
                {
                    src:'img/rec-img9.png',
                    ifNew:false,
                    zfbt:true,
                    name:'【满8000减400】 MateBook 16s',
                    intro:'最高享400元政府补贴卷',
                    price:'￥9389',
                    oldPrice:'9999',
                    fqmx:true,
                    zsjf:false,
                    xstj:true,
                    pt:false
                }
            ],
            main_nav_list:[
                {
                    src:'img/main-nav-img1.png',
                    title:'智慧办公'
                },
                {
                    src:'img/main-nav-img2.png',
                    title:'智能家居'
                },
                {
                    src:'img/main-nav-img3.gif',
                    title:'华为手机'
                },
                {
                    src:'img/main-nav-img4.png',
                    title:'影音娱乐'
                },
                {
                    src:'img/main-nav-img5.png',
                    title:'运动健康'
                },
                {
                    src:'img/main-nav-img10.png',
                    title:'鸿蒙智联'
                },
                {
                    src:'img/main-nav-img11.png',
                    title:'众测'
                },
                {
                    src:'img/main-nav-img12.png',
                    title:'AITO汽车'
                },
                {
                    src:'img/main-nav-img13.png',
                    title:'华为智选'
                },
                {
                    src:'img/main-nav-img14.png',
                    title:'直播'
                }
            ],
            top_nav_list:[
                {
                    title:'华为专区'
                },
                {
                    title:'HarmonyOS'
                },
                {
                    title:'耳机'
                },
                {
                    title:'美食酒饮'
                },
                {
                    title:'手表'
                },
                {
                    title:'手机'
                },
                {
                    title:'手环'
                },
                {
                    title:'电脑'
                },
                {
                    title:'平板'
                },
                {
                    title:'家用电器'
                },
                {
                    title:'路由器'
                }
            ],
            xsg_list:[
                {
                    src:'img/xsg-img1.png',
                    newPrice:'￥'+'3969',
                    oldPrice:'￥'+'3999'
                },
                {
                    src:'img/xsg-img2.png',
                    newPrice:'￥'+'128',
                },
                {
                    src:'img/xsg-img3.png',
                    newPrice:'￥'+'129',
                    oldPrice:'￥'+'299'
                },
                {
                    src:'img/xsg-img4.png',
                    newPrice:'￥'+'2199',
                    oldPrice:'￥'+'3199'
                }
            ]
        }
    }
}
</script>


