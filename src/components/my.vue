<template>
    <section class="myPage-wrap">
        <!-- <img class="back-img" src="../assets/img/myPage_img/background-img.png" alt=""> -->
        <!-- 头部，默认为隐藏 -->
        <header v-if="ifLogin==0" class="maPage-header">
            <div class="header-pic">
                <router-link to="/login">
                    <img src="../assets/img/myPage_img/pic.png" alt="">
                </router-link>
            </div>
            <router-link to="/login">
                <p>登录/注册</p>
            </router-link>
        </header>
        <header v-if="ifLogin==1" class="maPage-header">
            <div class="header-pic">
                <img src="../assets/img/myPage_img/pic.png" alt="">
            </div>
            <router-link to="/login">
            <router-link to="/login">
                <p>133****1624</p>
            </router-link>
            </router-link>
            <div class="header-icon">
                <img src="../assets/img/myPage_img/icon-img1.png" alt="">
            </div>
        </header>


        <!-- 顶部窗口 -->
        <div class="user-info-wrap">
            <div class="top-user-box">
                <div class="top-box-img">
                    <img src="../assets/img/myPage_img/pic.png" alt="">
                </div>
                <p>登录/注册</p>
                <div class="top-box-icon1">
                    <img src="../assets/img/myPage_img/icon-img1.png" alt="">
                </div>
                <div class="top-box-icon2">
                    <img src="../assets/img/myPage_img/Sign_no.png" alt="">
                </div>
            </div>
            <div class="mid-user-box">
                <ul>
                    <li>
                        <span>- -</span>
                        <i>积分></i>
                    </li>
                    <em>|</em>
                    <li>
                        <span>- -</span>
                        <i>优惠卷></i>
                    </li>
                    <em>|</em>
                    <li>
                        <span>- -</span>
                        <i>代金卷></i>
                    </li>
                </ul>
            </div>
            <div class="bottom-user-box">
                <div class="top-box">
                    <p>我的订单</p>
                    <span>全部订单<i>></i></span>
                </div>
                <div class="bottom-box">
                    <ul>
                        <li>
                            <svg viewBox="0 0 1024 1024"><path d="M706.909 243.2c65.551 0 118.691 53.487 118.691 119.467l0.014 47.467c18.155 3.053 31.986 18.844 31.986 37.867v128c0 19.022-13.832 34.814-31.986 37.867l-0.014 47.467c0 65.98-53.14 119.467-118.691 119.467h-415.418c-65.551 0-118.691-53.487-118.691-119.467v-298.667c0-65.98 53.14-119.467 118.691-119.467h415.418zM706.909 288h-415.418c-40.275 0-73.054 32.306-74.153 72.577l-0.028 2.090v298.667c0 40.538 32.096 73.531 72.105 74.638l2.076 0.029h415.418c40.275 0 73.054-32.306 74.153-72.577l0.028-2.090-0.009-46.933h-147.482c-56.554 0-102.4-45.846-102.4-102.4s45.846-102.4 102.4-102.4h147.482l0.009-46.933c0-40.538-32.096-73.531-72.105-74.638l-2.076-0.029zM812.8 454.4h-179.2c-30.486 0-55.441 23.684-57.467 53.656l-0.133 3.944c0 30.486 23.684 55.441 53.656 57.467l3.944 0.133h179.2v-115.2zM633.6 486.4c14.138 0 25.6 11.462 25.6 25.6s-11.462 25.6-25.6 25.6c-14.138 0-25.6-11.462-25.6-25.6s11.462-25.6 25.6-25.6z" fill="#000000"></path></svg>
                            <p>代付款</p>
                        </li>
                        <li>
                            <svg viewBox="0 0 1024 1024"><path d="M810.667 683.733c0 53.608-43.458 97.067-97.067 97.067v0h-403.2c-53.608 0-97.067-43.458-97.067-97.067v0-343.467c0-53.608 43.458-97.067 97.067-97.067v0h403.2c53.608 0 97.067 43.458 97.067 97.067v0zM765.858 410.65h-153.6l0.009 145.526c0 15.395-11.648 28.070-26.612 29.692l-3.254 0.175c-7.121 0-14.007-2.545-19.418-7.174v0l-50.982-43.623-50.982 43.623c-11.697 10.009-28.901 9.399-39.862-0.916v0l-2.249-2.359c-4.63-5.41-7.174-12.297-7.174-19.418v0-145.526h-153.6v273.084c0 27.554 21.322 50.128 48.366 52.123l3.901 0.143h403.2c28.866 0 52.267-23.401 52.267-52.267v0l-0.009-273.084zM567.45 413.85h-110.925v109.875l36.057-30.828c10.318-8.829 25.153-9.508 36.167-2.038v0l2.669 2.038 36.032 30.828v-109.875zM713.6 288h-403.2c-28.866 0-52.267 23.401-52.267 52.267v0 25.583h507.725l0.009-25.583c0-27.554-21.322-50.128-48.366-52.123l-3.901-0.143z" fill="#000000"></path></svg>
                            <p>待收货</p>
                        </li>
                        <li>
                            <svg viewBox="0 0 1024 1024"><path d="M633.067 246.4c128.13 0 232 103.87 232 232 0 126.849-101.803 229.92-228.163 231.969l-3.837 0.031h-52.262l-116.933 116.938c-8.698 8.698-22.583 9.046-31.696 1.044l-1.114-1.044c-8.698-8.698-9.046-22.583-1.044-31.696l1.044-1.114 123.733-123.733c3.988-3.988 9.279-6.375 14.873-6.745l1.532-0.051h61.867c102.504 0 185.6-83.096 185.6-185.6 0-101.479-81.442-183.936-182.531-185.575l-3.069-0.025h-216.533c-102.504 0-185.6 83.096-185.6 185.6 0 101.479 81.442 183.936 182.531 185.575l3.069 0.025h23.2c12.813 0 23.2 10.387 23.2 23.2 0 12.355-9.658 22.455-21.837 23.161l-1.363 0.039h-23.2c-128.13 0-232-103.87-232-232 0-126.849 101.803-229.92 228.163-231.969l3.837-0.031h216.533zM370.133 439.733c21.355 0 38.667 17.312 38.667 38.667s-17.312 38.667-38.667 38.667c-21.355 0-38.667-17.312-38.667-38.667s17.312-38.667 38.667-38.667zM524.8 439.733c21.355 0 38.667 17.312 38.667 38.667s-17.312 38.667-38.667 38.667c-21.355 0-38.667-17.312-38.667-38.667s17.312-38.667 38.667-38.667zM679.467 439.733c21.355 0 38.667 17.312 38.667 38.667s-17.312 38.667-38.667 38.667c-21.355 0-38.667-17.312-38.667-38.667s17.312-38.667 38.667-38.667z" fill="#000000"></path></svg>
                            <p>待评价</p>
                        </li>
                        <li>
                            <svg width="40" height="40" viewBox="0 0 1024 1024"><path d="M512 204.8c169.662 0 307.2 137.538 307.2 307.2 0 9.54-0.435 19.027-1.3 28.44-2.443 26.631-8.286 52.276-17.090 76.5v0l-0.783 1.698c-0.92 1.621-2.235 2.996-3.836 3.988-5.25 3.254-12.143 1.635-15.397-3.615v0l-53.107-85.692c-1.369-2.209-2.095-4.757-2.095-7.356 0-7.712 6.252-13.964 13.964-13.964v0h37.755c0-146.526-118.783-265.309-265.309-265.309-18.908 0-37.547 1.975-55.713 5.855-121.406 25.934-209.596 133.694-209.596 259.454 0 146.526 118.783 265.309 265.309 265.309 26.37 0 52.202-3.841 76.92-11.316 36.475-11.030 70.060-29.844 98.575-55.014 8.672-7.655 21.909-6.831 29.564 1.842s6.831 21.909-1.842 29.564c-33.006 29.134-71.902 50.924-114.171 63.706-28.64 8.661-58.556 13.109-89.045 13.109-169.662 0-307.2-137.538-307.2-307.2 0-145.623 102.099-270.379 242.736-300.421 21.038-4.494 42.61-6.779 64.464-6.779zM603.173 380.123c8.813 7.137 10.793 19.584 5.065 29.014l-1.754 2.491-51.481 63.547 34.098 0.025c10.45 0 19.074 8.545 20.339 19.59l0.16 2.81c0 11.42-7.82 20.843-17.927 22.225l-2.571 0.175-58.315-0.025v41.6l58.301 0.025c10.458 0 19.087 8.545 20.353 19.59l0.16 2.81c0 11.42-7.825 20.843-17.94 22.225l-2.573 0.175-58.301-0.025 0.014 33.114c0 10.252-8.545 18.713-19.59 19.954l-2.81 0.157c-11.42 0-20.843-7.672-22.225-17.588l-0.175-2.523-0.014-33.114-60.673 0.025c-10.458 0-19.087-8.545-20.353-19.59l-0.16-2.81c0-11.42 7.825-20.843 17.94-22.225l2.573-0.175 60.673-0.025v-41.6l-60.687 0.025c-10.45 0-19.074-8.545-20.339-19.59l-0.16-2.81c0-11.42 7.82-20.843 17.927-22.225l2.571-0.175 35.010-0.025-51.455-63.547c-7.785-9.614-6.303-23.719 3.311-31.505s23.719-6.303 31.505 3.311l63.974 79.043 64.025-79.043c7.785-9.614 21.891-11.097 31.505-3.311z" fill="#000000"></path></svg>
                            <p>退换退款</p>
                        </li>
                        <li>
                            <svg width="40" height="40" viewBox="0 0 1024 1024"><path d="M603.994 380.266c8.796-7.833 22.285-7.532 30.721 0.904 8.748 8.748 8.748 22.931 0 31.678v0l-79.963 79.926 243.173 0.026c11.744 0 21.275 10.035 21.275 22.4s-9.531 22.4-21.275 22.4l-245.758-0.026 83.452 83.486c7.833 8.796 7.532 22.285-0.904 30.721-8.748 8.748-22.931 8.748-31.678 0v0l-99.597-99.64c-19.153-20.493-18.737-52.638 1.249-72.624v0l98.348-98.348zM691.2 240l5.948 0.143c59.091 2.854 106.052 47.985 106.052 103.241 0 1.353-0.141 2.677-0.41 3.958 0.112 1.516 0.213 3.064 0.284 4.62l0.126 5.524v4.864c0 12.371-10.029 22.4-22.4 22.4-11.42 0-20.843-8.545-22.225-19.59l-0.175-2.81v-4.864c0-38.737-29.596-70.271-66.773-72.553l-4.322-0.132h-350.609c-37.729 0-68.722 30.099-70.966 68.249l-0.13 4.436v309.029c0 24.762 12.093 46.581 30.53 59.697 10.552 6.346 23.144 10.035 36.67 10.035v0l363.001-0.143c11.711-0.731 22.598-4.231 31.901-9.797 17.425-12.303 29.216-32.367 30.568-55.355l0.13-4.436v-5.169c0-12.371 10.029-22.4 22.4-22.4 11.42 0 20.843 8.545 22.225 19.59l0.175 2.81v5.169c0 1.904-0.045 3.797-0.133 5.679l0.133 2.023c0 24.498-9.231 47.005-24.657 64.721-20.142 26.074-50.929 43.298-85.776 44.936l-5.463 0.128h-350.609c-37.128 0-70.132-17.679-91.331-45.152-15.37-17.714-24.565-40.182-24.565-64.633v0-330.831l0.155-5.491c3.092-54.545 51.984-97.894 111.845-97.894v0h358.4z" fill="#000000"></path></svg>
                            <p>回收单</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 中间导航 -->
        <div class="nav-wrap">
            <ul>
                <li>
                    <img src="../assets/img/myPage_img/nav-icon1.png" alt="">
                    <p>会员频道</p>
                </li>
                <li>
                    <img src="../assets/img/myPage_img/nav-icon2.png" alt="">
                    <p>积分商城</p>
                </li>
                <li>
                    <img src="../assets/img/myPage_img/nav-icon3.png" alt="">
                    <p>互动有礼</p>
                </li>
                <li>
                    <img src="../assets/img/myPage_img/nav-icon4.png" alt="">
                    <p>喵喵智慧屋</p>
                </li>
                <li>
                    <img src="../assets/img/myPage_img/nav-icon5.png" alt="">
                    <p>优购码</p>
                </li>
                <li>
                    <img src="../assets/img/myPage_img/nav-icon6.png" alt="">
                    <p>关注店铺</p>
                </li>
                <li>
                    <img src="../assets/img/myPage_img/nav-icon7.png" alt="">
                    <p>Huawei Card</p>
                </li>
                <li>
                    <img src="../assets/img/myPage_img/nav-icon8.png" alt="">
                    <p>教育优惠</p>
                </li>
                <li>
                    <img src="../assets/img/myPage_img/nav-icon9.png" alt="">
                    <p>拼团</p>
                </li>
                <li>
                    <img src="../assets/img/myPage_img/nav-icon10.gif" alt="">
                    <p>超级体验官</p>
                </li>
            </ul>
        </div>

        <!-- 第二个当导航 -->
        <div class="two-nav-wrap">
            <div class="nav-box">
                <ul>
                    <li>
                        <img src="../assets/img/myPage_img/two-nav-icon1.png" alt="">
                        <p>官方客服</p>
                    </li>
                    <li>
                        <img src="../assets/img/myPage_img/two-nav-icon2.png" alt="">
                        <p>服务商店</p>
                    </li>
                    <li>
                        <img src="../assets/img/myPage_img/two-nav-icon3.png" alt="">
                        <p>暖心服务</p>
                    </li>
                    <li>
                        <img src="../assets/img/myPage_img/two-nav-icon4.png" alt="">
                        <p>一口价换电池</p>
                    </li>
                    <li>
                        <img src="../assets/img/myPage_img/two-nav-icon5.png" alt="">
                        <p>以旧换新</p>
                    </li>
                    <li>
                        <img src="../assets/img/myPage_img/two-nav-icon6.png" alt="">
                        <p>补购保障</p>
                    </li>
                    <li>
                        <img src="../assets/img/myPage_img/two-nav-icon7.png" alt="">
                        <p>收货地址</p>
                    </li>
                    <li>
                        <img src="../assets/img/myPage_img/two-nav-icon8.png" alt="">
                        <p>预约记录</p>
                    </li>
                    <li>
                        <img src="../assets/img/myPage_img/two-nav-icon9.png" alt="">
                        <p>常见问题</p>
                    </li>
                    
                </ul>
            </div>
        </div>

        <!-- 推广 -->
        <div class="main-rec-wrap">
            <div class="rec-list-wrap">
                <div class="left-rec-list">
                    <div class="rec-box">
                        <img src="../assets/img/myPage_img/adver-img1.png" alt="">
                    </div>
                </div>
                <div class="right-rec-list">
                    <div class="rec-box">
                        <img src="../assets/img/myPage_img/adver-img2.gif" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- 推荐列表 -->
        <div class="main-rec-wrap">
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
</template>

<style scoped src="../assets/css/myPage.css">

</style>

<script>
import $ from 'jquery'

export default {
    mounted(){
        $(window).scroll(function(){
            if($(window).scrollTop()>60){
                $('.maPage-header').css({'opacity':'1'});
            }else{
                $('.maPage-header').css({'opacity':'0'});
            }
        })
    },
    data(){
        return{
            ifLogin:0,
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
            ]
        }
    },
    methods:{
        
    }
}
</script>