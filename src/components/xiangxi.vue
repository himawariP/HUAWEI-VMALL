<template>
    <div class="xiangxi-wrap"> 
        <header v-show="topShow==0" class="top-box1">
            <router-link to="/searchResult">
                <van-icon name="arrow-left" />
            </router-link>
            <van-popover v-model="showPopover" trigger="click" placement="bottom-end" :actions="actions" @select="goWrap">
                <template #reference>
                    <van-icon type="primary" name="wap-nav" />
                </template>
            </van-popover>
        </header>

        <header v-show="topShow==1" class="top-box2">
            <router-link to="/searchResult">
                <van-icon name="arrow-left" />
            </router-link>
            <ul>
                <li v-for="(item,index) in nav_list" :key="index" :class="{'act':index==view_position}" @click="fn(index)">{{item}}</li>
                <span id="hk"></span>
            </ul>
            <div class="top-box2-right">

            </div>
            <van-popover v-model="showPopover" trigger="click" placement="bottom-end" :actions="actions" @select="goWrap">
                <template #reference>
                    <van-icon type="primary" name="wap-nav" />
                </template>
            </van-popover>      
        </header>

        <section>
            <!-- 轮播图 -->
            <div class="top-switch-wrap">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" @change="switch_onChange">
                    <van-swipe-item v-for="(item,index) in switch_img_list" :key="index" @click="openImg(item,index)">
                        <img :src="item" alt="">
                    </van-swipe-item>
                    <template #indicator>
                        <div class="custom-indicator">{{ current + 1 }}/{{switch_img_list.length}}</div>
                    </template>
                </van-swipe>
            </div>
            
            <!-- 价格 -->
            <div class="price-wrap">
                <div class="price-left-wrap">
                    <van-tag type="danger">限时特惠</van-tag>
                    <p><i>￥</i>5888 <s>￥5988</s></p>
                </div>
                <div class="price-right-wrap">
                    <p>距结束还剩</p>
                    <p>
                        <van-count-down :time="time">
                            <template #default="timeData">
                                <span class="block">{{ timeData.days }}</span>
                                <span class="colon">天</span>
                                <span class="block">{{ timeData.hours }}</span>
                                <span class="colon">:</span>
                                <span class="block">{{ timeData.minutes }}</span>
                                <span class="colon">:</span>
                                <span class="block">{{ timeData.seconds }}</span>
                            </template>
                        </van-count-down>
                    </p>
                </div>
            </div>

            <!-- 商品信息 -->
            <div class="commodity-wrap-box">
                <div v-show="index==commodity_index" v-for="(color,index) in commodity_type_list" :key="index" class="commodity-info">
                    <h2 class="commodity-name">
                        HUAWEI P50 Pro 
                        <span v-show="index==commodity_edition" v-for="(edition,index) in color.editionState" :key="index">
                            {{edition.edition}}
                        </span>
                        {{color.color}} 鸿蒙手机
                    </h2>
                    <p class="commodity-intro">
                        【现货速发: 直降100元 到手价5388元起】①最高享12期免息 ②部分版本赠199元66W超级快充套装 | 更多甄选手机点击了解>>
                    </p>
                    <!-- 赠品 -->
                    <div class="gift-box">
                        <div class="gift-left-box">
                            <van-cell  @click="showPopup_gift">赠品</van-cell>
                        </div>
                        <div class="gift-mid-box">
                            <van-cell v-for="(item,index) in gift_img_list" :key="index" @click="showPopup_gift">
                                <span><img :src="item.src" alt=""></span>
                            </van-cell>
                        </div>
                        <div class="gift-right-box">
                            <van-cell  @click="showPopup_gift">
                                <van-icon name="ellipsis" />
                            </van-cell>    
                        </div>
                    </div>

                    <!-- 优惠 -->
                    <div class="discount-box">
                        <div class="discount-left-box">
                            <van-cell  @click="showPopup_discount">优惠</van-cell>
                        </div>
                        <div class="discount-mid-box">
                            <van-cell  @click="showPopup_discount">
                                <div class="discount-mid-list">
                                    <p><van-tag color="red" text-color="red" plain type="primary">限时特惠</van-tag> 限时直降100元</p>
                                    <p><van-tag color="red" text-color="red" plain type="primary">支付赠卷</van-tag> 赠华为FreeBuds Pro 2 优惠券20元</p>
                                    <p>
                                        <van-tag color="red" text-color="red" plain type="primary">支付赠卷</van-tag>
                                        <van-tag color="red" text-color="red" plain type="primary">分期免息</van-tag>
                                        <van-tag color="red" text-color="red" plain type="primary">赠送积分</van-tag>
                                    </p>
                                </div>
                            </van-cell>  
                        </div>
                        <div class="discount-right-box">
                            <van-cell  @click="showPopup_discount">
                                <van-icon name="ellipsis" />
                            </van-cell>    
                        </div>
                    </div>
                </div>
            </div>

            <!-- 商品型号 -->
            <div class="commodity-wrap-box">
                <div class="commodity-content-box">
                    <div v-show="index==commodity_index" v-for="(item,index) in commodity_type_list" :key="index" class="commodity-model-box">
                        <!-- 颜色 -->
                        <div class="commodity-box">
                            <p>颜色</p>
                            <ul>
                                <li v-for="(color,color_index) in commodity_type_list" :key="color_index" :class="{'act':color_index==commodity_index}">
                                    <button v-if="color.hasColor==true" @click="selColor(color,color_index)">{{color.color}}</button>
                                    <button v-if="color.hasColor==false" class="noColor" disabled><s>{{color.color}}</s></button>
                                </li>
                            </ul>
                        </div>
                        <!-- 型号 -->
                        <div class="commodity-box">
                            <p>版本</p>
                            <ul class="commodity-edition-box">
                                <li v-for="(edition,edition_index) in item.editionState" :key="edition_index" :class="{'act':edition_index==commodity_edition}">
                                    <button v-if="edition.hasEdition==true" @click="selEdition(edition_index)">{{edition.edition}}</button>
                                    <button v-if="edition.hasEdition==false" class="noColor" disabled><s>{{edition.edition}}</s></button>
                                </li>
                            </ul>
                        </div>
                        <!-- 网络 -->
                        <div class="commodity-box">
                            <p>网络</p>
                            <ul>
                                <li class="act">
                                    <button>4G 全网通</button> 
                                </li>
                            </ul>
                        </div>
                        <!-- 类型 -->
                        <div class="commodity-box">
                            <p>类型</p>
                            <ul>
                                <li class="act">
                                    <button>官方标配（无充电套装及耳机）</button> 
                                </li>
                                <li >
                                    <button class="noColor" disabled><s>官方标配（含充电套装）</s></button>
                                </li>
                            </ul>
                        </div>
                        <!-- 数量 -->
                        <div class="commodity-box">
                            <p>数量</p>
                            <div class="right-box">
                                <van-stepper v-model="commodity_nums" />
                            </div>
                        </div>
                        <!-- 保障 -->
                        <div class="discount-box">
                            <div class="discount-left-box">
                                <van-cell @click="showPopup_discount">保障</van-cell>
                            </div>
                            <div class="discount-mid-box">
                                <van-cell  @click="showPopup_discount">
                                    <div class="discount-mid-list">
                                        <p>
                                            选购
                                            <van-tag color="red" text-color="red" plain type="primary">无忧服务</van-tag>
                                            <van-tag color="red" text-color="red" plain type="primary">碎屏宝</van-tag>
                                            <van-tag color="red" text-color="red" plain type="primary">延长宝</van-tag>
                                        </p>
                                    </div>
                                </van-cell>  
                            </div>
                            <div class="discount-right-box">
                                <van-cell  @click="showPopup_discount">
                                    <van-icon name="ellipsis" />
                                </van-cell>    
                            </div>
                        </div>
                        <!-- 免息 -->
                        <div class="discount-box">
                            <div class="discount-left-box">
                                <van-cell @click="showPopup_discount">免息</van-cell>
                            </div>
                            <div class="discount-mid-box">
                                <van-cell  @click="showPopup_discount">
                                    <div class="discount-mid-list">
                                        <p>
                                            花呗/掌上生活分期直购，最高享12期免息
                                        </p>
                                    </div>
                                </van-cell>  
                            </div>
                            <div class="discount-right-box">
                                <van-cell  @click="showPopup_discount">
                                    <van-icon name="ellipsis" />
                                </van-cell>    
                            </div>   
                        </div>
                    </div>
                </div>
            </div>

            <!-- 搭配 -->
            <div class="commodity-wrap-box">
                <div class="commodity-content-box">
                    <div class="commodity-box">
                        <p>搭配</p>
                        <div>
                            <span class="box-img-span" v-for="(item,index) in dp_img_list" :key="index">
                                <img :src="item.src" alt="">
                                <svg v-show="item.discount" class="sale-price" width="100%" height="100%">
                                    <text x="50%" y="50%" dy=".35em" font-size="2.5vw" fill="#333" text-anchor="middle">{{item.txt}}</text>
                                </svg>
                            </span>
                        </div>
                        <van-icon class="dp-icon" name="arrow" />
                    </div>
                </div>
            </div>

            <!-- 配送和服务 -->
            <div class="commodity-wrap-box">
                <div class="commodity-content-box">
                    <!-- 送至 -->
                    <van-cell @click="delivery_showPopup">
                        <div class="commodity-box">
                            <p>送至</p>
                            <div class="delivery-box">
                                <p><van-icon name="passed" />北京 北京市 东城区</p>
                                <p>送至</p>
                            </div>
                            <van-icon name="ellipsis" />
                        </div>
                    </van-cell>
                    <!-- 服务 -->
                    <van-cell @click="showPopup_discount">
                        <div class="commodity-box">
                            <p>服务</p>
                            <div class="service-box">
                                <p><van-icon name="passed" />满48元包邮</p>
                                <p><van-icon name="passed" />由华为终端提供商品、发货开票及售后服务</p>
                            </div>
                            <van-icon name="ellipsis" />
                        </div>
                    </van-cell>
                </div>
            </div>

            <!-- 推荐 -->
            <div class="commodity-wrap-box">
                <div class="commodity-content-box">
                    <div class="commodity-box">
                        <p>推荐</p>
                        <div class="recommend-box">
                            <a>HUAWEI P50 Pro 2022虎年限量款保护壳</a>
                            <a>HUAWEI P50 Pro 智能视窗保护套</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 回收 -->
            <div class="commodity-wrap-box">
                <div class="commodity-content-box">
                    <div class="commodity-box">
                        <p>回收</p>
                        <div class="recovery-box">
                            <p>
                                <van-tag color="red" text-color="red" plain type="primary">高价回收</van-tag>
                                高价回收送多重购新补贴
                            </p>
                        </div>
                        <!-- <van-icon name="ellipsis" /> -->
                    </div>
                </div>
            </div>

            <!-- 用户评价 -->
            <div id="evaluationWrap" class="commodity-wrap-box">
                <div class="commodity-content-box">
                    <div class="content-box">
                        <div class="content-title-box">
                            <h3>用户评价(11094)</h3>
                            <p class="evaluation-title">
                                <span>95%</span>
                                好评
                                <van-icon name="arrow" />
                            </p>
                        </div>
                        <div class="content-tag-box">
                            <ul>
                                <li v-for="(tag,index) in evaluation_tags_list.slice(0,4)" :key="index">
                                    <span>{{tag}}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="content-evaluation-box">
                            <ul>
                                <li v-for="(item,index) in evaluation_list.slice(0,5)" :key="index">
                                    <div class="evaluation-left-box">
                                        <div class="evaluation-username">
                                            <span><img :src="item.user_pic" alt=""></span>
                                            <p>
                                                {{item.user_name}}
                                                <van-rate readonly size="3.5vw" v-model="item.score" />
                                            </p>
                                        </div>
                                        <div class="evaluation-content">
                                            <p>{{item.evaluation_content}}</p>
                                        </div>
                                    </div>
                                    <div class="evaluation-right-box">
                                        <img :src="item.evaluation_img[0]" alt="">
                                        <span>共{{item.evaluation_img.length}}张</span>
                                    </div>
                                </li>
                                <div class="evaluation-more">
                                    <span>
                                        <van-icon size="6vw" name="more-o" />
                                        <p>查看更多</p>
                                    </span>
                                </div>
                            </ul>
                        </div>
                        <div class="evaluation-footer">
                            <button>查看全部评论</button>
                            <button>购买咨询(63)</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 入手体验 -->
            <div class="commodity-wrap-box">
                <div class="commodity-content-box">
                    <div class="content-box">
                        <div class="content-title-box">
                            <h3>入手体验</h3>
                            <p class="experience-title">
                                查看全部
                                <van-icon name="arrow" />
                            </p>
                        </div>
                        <div class="content-experience-box">
                            <ul>
                                <li v-for="(item,index) in experience_list.slice(0,3)" :key="index">
                                    <div class="experience-left-box">
                                        <img :src="item.src" alt="">
                                        <span>
                                            <van-icon color="#fff" size="5vw" name="play-circle-o" />
                                            <p>视频</p>
                                        </span>
                                    </div>
                                    <div class="experience-right-box">
                                        <p>{{item.title}}</p>
                                        <div>
                                            <span>
                                                <a href="javascript:;">
                                                    <img :src="item.user_pic" alt="">
                                                </a>
                                                <b>{{item.user_name}}</b>
                                            </span>
                                            <span>
                                                <a href="">
                                                    <van-icon name="browsing-history-o" />
                                                </a>
                                                <i>{{item.views}}</i>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 分割线 -->
            <van-divider id="ggcs">规格参数</van-divider>

             <!-- 规格参数 -->
            <div class="commodity-wrap-box">
                <div class="commodity-content-box">
                    <div class="content-box">
                        <div class="content-title-box">
                            <h3>规格参数</h3>
                        </div>
                        <div class="specification-content">
                            <ul >
                                <li>
                                    <p>主体</p>
                                    <p>{{specification.main}}</p>
                                </li>
                                <li><p>品牌</p><p>{{specification.brand}}</p></li>
                                <li><p>型号</p><p>{{specification.edition}}</p></li>
                                <li><p>传播名</p><p>{{specification.name}}</p></li>
                            </ul>
                            <van-cell @click="specification_showPopup">
                                <button>查看全部参数</button>
                            </van-cell>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 分割线 -->
            <van-divider id="twxx">图文详细</van-divider>

            <!-- 图文详细 -->
            <div class="img-list-wrap">
                <ul>
                    <li v-for="(item,index) in img_list" :key="index">
                        <img :src="item" alt="">
                    </li>
                </ul>
            </div>

            <!-- 规格参数弹出窗 -->
            <van-popup v-model="show_Popup_specification" round  position="bottom" :style="{ height: '80%' }" closeable close-icon="close">
                <div class="discount-popup-wrap">
                    <h3>规格参数</h3>
                    <div class="specification-popup">
                        <ul>
                            <li>
                                <h4>详细参数</h4>
                                <p>主体</p>
                            </li>
                            <li>
                                <h4>品牌</h4>
                                <p>{{specification.brand}}</p>
                            </li>
                            <li>
                                <h4>型号</h4>
                                <p>{{specification.edition}}</p>
                            </li>
                            <li>
                                <h4>传播名</h4>
                                <p>{{specification.name}}</p>
                            </li>
                            <li>
                                <h4>上市时间</h4>
                                <p>{{specification.marketTime}}</p>
                            </li>
                            <li>
                                <h4>软件名称</h4>
                                <p>{{specification.softwareName}}</p>
                            </li>
                            <li>
                                <h4>操作系统</h4>
                                <p>{{specification.softwareOS}}</p>
                            </li>
                            <li>
                                <h4>CPU型号</h4>
                                <p>{{specification.CPU}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- <button>确定</button> -->
            </van-popup>

            <!-- 优惠弹出框 -->
            <van-popup v-model="show_Popup_discount" round  position="bottom" :style="{ height: '70%' }" closeable close-icon="close">
                <div class="discount-popup-wrap">
                    <h3>优惠</h3>
                    <div class="discount-list">
                        <div v-for="(item,index) in discount_content_list" :key="index" class="discount-content-box">
                            <div class="discount-left-content">
                                <van-tag v-show="item.zfzj" color="red" text-color="red" plain type="primary">支付赠卷</van-tag>
                                <van-tag v-show="item.fqmx" color="red" text-color="red" plain type="primary">分期免息</van-tag>
                                <van-tag v-show="item.zsjf" color="red" text-color="red" plain type="primary">赠送积分</van-tag>
                                <van-tag v-show="item.xsth" color="red" text-color="red" plain type="primary">限时特惠</van-tag>
                            </div>
                            <div class="discount-right-content">
                                <p>{{item.content}}</p>
                                <em v-show="item.fqmx">免息活动适用于单款免息商品订单，含多款商品订单仅在免息活动一致时可享用</em>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <button>确定</button> -->
            </van-popup>

            <!-- 赠品弹出框 -->
            <van-popup v-model="show_Popup_gift" round  position="bottom" :style="{ height: '70%' }" closeable close-icon="close">
                <div class="gift-popup-wrap">
                    <h3>赠品</h3>
                    <div class="gift-list">
                        <div v-for="(item,index) in gift_img_list" :key="index" class="popup-content">
                            <div class="gift-img-box">
                                <span><img :src="item.src" alt=""></span>
                            </div>
                            <div class="gift-info-box">
                                <div class="gift-name">
                                    <p>{{item.title}}</p>
                                    <i>x{{item.nums}}</i>
                                </div>
                                <div class="gift-intro">
                                    <span>{{item.intro}} <i>></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <button>确定</button> -->
            </van-popup>

            <!-- 地址选择弹出框 -->
            <van-popup v-model="show_Popup_delivery" round  position="bottom" :style="{ height: '70%' }" >
                <div class="discount-popup-wrap">
                    <van-area title="标题" :area-list="areaList" />
                </div>
                <!-- <button>确定</button> -->
            </van-popup>       

        </section>

        <!-- 回到顶部按钮 -->
        <div v-if="goTopShow==1" class="goTop-wrap">
            <button @click="goTop"><van-icon name="arrow-up" /></button>
        </div>

        <footer>
            <van-goods-action>
            <van-goods-action-icon icon="wap-home-o" text="首页" @click="onClickIcon" />
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-goods-action-button type="warning" text="加入购物车" @click="addToShop"/>
            <van-goods-action-button type="danger" text="立即购买" @click="buy"
            />
            </van-goods-action>
        </footer>
    </div>
</template>

<style scoped src="../assets/css/xiangxi.css">

</style>

<script>
import { ImagePreview, Toast } from 'vant';
import { areaList } from '@vant/area-data';
import $ from 'jquery'

export default {
    mounted(){
        var _this = this
        $(window).scroll(function(){
            if($(window).scrollTop()>60){
                _this.topShow = 1;
            }else{
                _this.topShow = 0;
            }

            if($(window).scrollTop()>200){
                _this.goTopShow = 1;
            }else{
                _this.goTopShow = 0;
            }
        })
    },
    data(){
        return{
            value:5,
            goTopShow:0,
            commodity_index:0,
            commodity_edition:0,
            commodity_nums:1,
            show_Popup_gift : false,
            show_Popup_discount : false,
            show_Popup_delivery:false,
            show_Popup_specification:false,
            time: 48 * 60 * 60 * 1000,
            current: 0,
            topShow : 0,
            view_position : 0,
            nav_list:['商品','评价','参数','详细'],
            showPopover: false,
            areaList,
            actions: [
                { text: '首页', icon: 'wap-home-o' },
                { text: '搜索', icon: 'search' },
                { text: '分类', icon: 'apps-o' },
                { text: '购物车', icon: 'cart-o' },
                { text: '我的', icon: 'contact' }
            ],
            switch_img_list:[
                'img/xiangxi/switch-img1.png',
                'img/xiangxi/switch-img2.png',
                'img/xiangxi/switch-img3.png',
                'img/xiangxi/switch-img4.png',
                'img/xiangxi/switch-img5.png',
                'img/xiangxi/switch-img6.png',
                'img/xiangxi/switch-img7.png',
                'img/xiangxi/switch-img8.png',
                'img/xiangxi/switch-img9.png',
            ],
            gift_img_list:[
                {
                    src:'img/xiangxi/gift-img1.png',
                    title:'华为超级快充充电器（Max 66W） 白色',
                    nums:1,
                    intro:'白色·66W超级快充充电器'
                },
                {
                    src:'img/xiangxi/gift-img1.png',
                    title:'华为超级快充充电器（Max 66W） 白色',
                    nums:1,
                    intro:'白色·66W超级快充充电器'
                },
                {
                    src:'img/xiangxi/gift-img1.png',
                    title:'华为超级快充充电器（Max 66W） 白色',
                    nums:1,
                    intro:'白色·66W超级快充充电器'
                },
                {
                    src:'img/xiangxi/gift-img1.png',
                    title:'华为超级快充充电器（Max 66W） 白色',
                    nums:1,
                    intro:'白色·66W超级快充充电器'
                },
                {
                    src:'img/xiangxi/gift-img1.png',
                    title:'华为超级快充充电器（Max 66W） 白色',
                    nums:1,
                    intro:'白色·66W超级快充充电器'
                }
            ],
            discount_content_list:[
                {
                    content:'限时直降100元',
                    zfzj:false,
                    fqmx:false,
                    zsjf:false,
                    xsth:true,
                },
                {
                    content:'赠华为FreeBuds Pro 2 优惠券20元',
                    zfzj:true,
                    fqmx:false,
                    zsjf:false,
                    xsth:false,
                },
                {
                    content:'赠华为智选优惠券30元',
                    zfzj:true,
                    fqmx:false,
                    zsjf:false,
                    xsth:false,
                },
                {
                    content:'花呗、掌上生活、工行、农行、银联、工行融e购分期支付可享免息',
                    zfzj:false,
                    fqmx:true,
                    zsjf:false,
                    xsth:false,
                },
                {
                    content:'购买即赠商城积分，积分可抵现',
                    zfzj:false,
                    fqmx:false,
                    zsjf:true,
                    xsth:false,
                },
            ],
            commodity_type_list:[
                {
                    color:'拂晓粉',
                    hasColor:true,
                    editionState:[
                        {
                            hasEdition:true,
                            edition:'8GB+256GB',
                        },
                        {
                            hasEdition:true,
                            edition:'8GB+512GB',
                        },
                        {
                            hasEdition:false,
                            edition:'12GB+512GB',
                        },
                        {
                            hasEdition:false,
                            edition:'8GB+128GB',
                        },
                    ]
                },
                {
                    color:'雪域白',
                    hasColor:false,
                    editionState:[
                        {
                            hasEdition:true,
                            edition:'8GB+256GB',
                        },
                        {
                            hasEdition:true,
                            edition:'8GB+512GB',
                        },
                        {
                            hasEdition:false,
                            edition:'12GB+512GB',
                        },
                        {
                            hasEdition:true,
                            edition:'8GB+128GB',
                        },
                    ]
                },
                {
                    color:'可可茶金',
                    hasColor:true,
                    editionState:[
                        {
                            hasEdition:true,
                            edition:'8GB+256GB',
                        },
                        {
                            hasEdition:true,
                            edition:'8GB+512GB',
                        },
                        {
                            hasEdition:false,
                            edition:'12GB+512GB',
                        },
                        {
                            hasEdition:true,
                            edition:'8GB+128GB',
                        },
                    ]
                },
                {
                    color:'涟漪云波',
                    hasColor:true,
                    editionState:[
                        {
                            hasEdition:false,
                            edition:'8GB+256GB',
                        },
                        {
                            hasEdition:false,
                            edition:'8GB+512GB',
                        },
                        {
                            hasEdition:true,
                            edition:'12GB+512GB',
                        },
                        {
                            hasEdition:false,
                            edition:'8GB+128GB',
                        },
                    ]
                },
                {
                    color:'曜金黑',
                    hasColor:true,
                    editionState:[
                        {
                            hasEdition:true,
                            edition:'8GB+256GB',
                        },
                        {
                            hasEdition:true,
                            edition:'8GB+512GB',
                        },
                        {
                            hasEdition:true,
                            edition:'12GB+512GB',
                        },
                        {
                            hasEdition:true,
                            edition:'8GB+128GB',
                        },
                    ]
                },
                {
                    color:'微澜浩海',
                    hasColor:true,
                    editionState:[
                        {
                            hasEdition:false,
                            edition:'8GB+256GB',
                        },
                        {
                            hasEdition:false,
                            edition:'8GB+512GB',
                        },
                        {
                            hasEdition:true,
                            edition:'12GB+512GB',
                        },
                        {
                            hasEdition:false,
                            edition:'8GB+128GB',
                        },
                    ]
                },
                {
                    color:'丹霞橙',
                    hasColor:true,
                    editionState:[
                        {
                            hasEdition:true,
                            edition:'8GB+256GB',
                        },
                        {
                            hasEdition:true,
                            edition:'8GB+512GB',
                        },
                        {
                            hasEdition:false,
                            edition:'12GB+512GB',
                        },
                        {
                            hasEdition:false,
                            edition:'8GB+128GB',
                        },
                    ]
                },
                {
                    color:'云锦白',
                    hasColor:true,
                    editionState:[
                        {
                            hasEdition:true,
                            edition:'8GB+256GB',
                        },
                        {
                            hasEdition:true,
                            edition:'8GB+512GB',
                        },
                        {
                            hasEdition:false,
                            edition:'12GB+512GB',
                        },
                        {
                            hasEdition:false,
                            edition:'8GB+128GB',
                        },
                    ]
                },
                {
                    color:'星河蓝',
                    hasColor:true,
                    editionState:[
                        {
                            hasEdition:true,
                            edition:'8GB+256GB',
                        },
                        {
                            hasEdition:false,
                            edition:'8GB+512GB',
                        },
                        {
                            hasEdition:false,
                            edition:'12GB+512GB',
                        },
                        {
                            hasEdition:true,
                            edition:'8GB+128GB',
                        },
                    ]
                },
            ],
            // 搭配
            dp_img_list:[
                {
                    src:'img/xiangxi/dp-img1.png',
                    discount:true,
                    txt:'省100'
                },
                {
                    src:'img/xiangxi/dp-img2.png',
                    discount:true,
                    txt:'省50'
                },
                {
                    src:'img/xiangxi/dp-img3.png',
                    discount:false,
                    txt:''
                },
                {
                    src:'img/xiangxi/dp-img4.png',
                    discount:true,
                    txt:'省50'
                },
            ],
            // 商品评论标签
            evaluation_tags_list:[
                '外观不错',
                '物流不错',
                '拍照不错',
                '手感好',
                '电池不错',
                '性价比高',
                '包装不错',
            ],
            evaluation_list:[
                {
                    user_pic:'img/xiangxi/pic.png',
                    user_name:'135****6732',
                    score:5,
                    evaluation_content:'我们家那位收到我送他礼物，很开心！支持国产！',
                    evaluation_img:[
                        'img/xiangxi/evaluation-img1.png'
                    ]
                },
                {
                    user_pic:'img/xiangxi/pic2.png',
                    user_name:'雨大淋身',
                    score:5,
                    evaluation_content:'手机还不错，用着很顺手，系统流畅，机子不会很笨重。',
                    evaluation_img:[
                        'img/xiangxi/evaluation-img2.png',
                        'img/xiangxi/evaluation-img3.png'
                    ]
                },
                {
                    user_pic:'img/xiangxi/pic.png',
                    user_name:'135****6732',
                    score:5,
                    evaluation_content:'我们家那位收到我送他礼物，很开心！支持国产！',
                    evaluation_img:[
                        'img/xiangxi/evaluation-img1.png'
                    ]
                },
                {
                    user_pic:'img/xiangxi/pic2.png',
                    user_name:'雨大淋身',
                    score:5,
                    evaluation_content:'手机还不错，用着很顺手，系统流畅，机子不会很笨重。',
                    evaluation_img:[
                        'img/xiangxi/evaluation-img2.png',
                        'img/xiangxi/evaluation-img3.png'
                    ]
                },
                {
                    user_pic:'img/xiangxi/pic.png',
                    user_name:'135****6732',
                    score:5,
                    evaluation_content:'我们家那位收到我送他礼物，很开心！支持国产！',
                    evaluation_img:[
                        'img/xiangxi/evaluation-img1.png'
                    ]
                }
            ],
            experience_list:[
                {
                    src:'img/xiangxi/experience-img1.png',
                    title:'如何用手机拍出趣味人像？',
                    user_pic:'img/xiangxi/pic.png',
                    user_name:'玩机技巧',
                    views:82144
                },
                {
                    src:'img/xiangxi/experience-img2.png',
                    title:'华为P50系列丨开箱来了！',
                    user_pic:'img/xiangxi/vmall-img.png',
                    user_name:'华为商城头条',
                    views:43148
                },
                {
                    src:'img/xiangxi/experience-img1.png',
                    title:'如何用手机拍出趣味人像？',
                    user_pic:'img/xiangxi/pic.png',
                    user_name:'玩机技巧',
                    views:82144
                }
            ],
            specification:{
                main:'',
                brand:'华为',
                edition:'JAD-AL00',
                name:'HUAWEI P50 Pro',
                marketTime:'2022年3月',
                softwareName:'华为终端鸿蒙智能设备操作系统软件 V2.0',
                softwareOS:'HarmonyOS 2',
                CPU:'晓龙888 4G'
            },
            // 图文详细
            img_list:[
                'img/xiangxi/imgs/img1.png',
                'img/xiangxi/imgs/img2.png',
                'img/xiangxi/imgs/img3.png',
                'img/xiangxi/imgs/img4.png',
                'img/xiangxi/imgs/img5.png',
                'img/xiangxi/imgs/img6.png',
                'img/xiangxi/imgs/img7.png',
                'img/xiangxi/imgs/img8.png',
                'img/xiangxi/imgs/img9.png',
                'img/xiangxi/imgs/img10.png',
                'img/xiangxi/imgs/img11.png',
                'img/xiangxi/imgs/img12.png',
            ]
        }
    },
    methods: {
        onClickIcon() {
            Toast('点击图标');
        },
        buy() {
            Toast('立即购买');
        },
        addToShop(){
            Toast('添加到购物车');
        },
        // 导航栏
        fn(index){
            this.view_position = index
            var left = 4.5+index*25
            $('#hk').animate({'left':left+'%'})
            if(index==0){
                $(window).scrollTop(0);
            }else if(index==1){
                $('html,body').animate({'scrollTop':$('#evaluationWrap').offset().top-100});                
            }else if(index==2){
                $('html,body').animate({'scrollTop':$('#ggcs').offset().top-50});                
            }else{
                $('html,body').animate({'scrollTop':$('#twxx').offset().top-50});    
            }
        },
        // 轮播图
        switch_onChange(index) {
            this.current = index;
        },
        // popup弹出层
        showPopup_gift() {
            this.show_Popup_gift = true;
        },
        showPopup_discount() {
            this.show_Popup_discount = true;
        },
        delivery_showPopup(){
            this.show_Popup_delivery = true;
        },
        specification_showPopup(){
            this.show_Popup_specification = true;
        },
        // 查看大图
        openImg(item,index){
            ImagePreview({
                images: this.switch_img_list,
                startPosition: index,
                closeable: true,
            })
        },
        // 选择手机颜色
        selColor(item,index){
            this.commodity_index = index
            for(var i=0;i<item.editionState.length;i++){
                if(item.editionState[i].hasEdition == true){
                    this.commodity_edition = i;
                    break;
                }
            }
        },
        // 选择手机型号
        selEdition(index){
            this.commodity_edition = index;
            // $('.commodity-edition-box li').removeClass('act');
            // event.target.parentNode.setAttribute('class','act');
        },
        //回到顶部
        goTop(){
            $(window).scrollTop(0);
        },
        goWrap(action,index){
            if(index==0){
                this.$router.push('/');
            }else if(index==1){
                this.$router.push('/search');
            }else if(index==2){
                this.$router.push('/classify');
            }else if(index==3){
                this.$router.push('/shoppingCart');
            }else if(index==4){
                this.$router.push('/my');
            }
        }
    },
}
</script>