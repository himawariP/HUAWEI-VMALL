<template>
    <div class="shop-car-wrap">
        <header>
            <h1>购物车</h1>
            <p v-if="isShopping==0" @click="edit">编辑</p>
            <p v-if="isShopping==1" @click="edit">完成</p>
        </header>
        <section>

            <!-- 如果购物车没有商品 -->
            <van-empty
            v-if="shop_name_list.length==0"
            class="custom-image"
            image="https://res.vmallres.com/bporder/20220715/staticvue/img/ic_shopping_cart_empty.28d238e.svg"
            image-size="25vw"
            description="您的购物车没有商品"
            >
            <router-link to="/index">
                <van-button round type="danger" class="bottom-button">去购物</van-button>
            </router-link>
            </van-empty>

            <!-- 购物车商品框 -->
            <div v-if="shop_name_list.length>0" class="shopping-cart-wrap">
                <div v-for="(shop,parent_index) in shop_name_list" :key="parent_index" class="cart-content-box">
                    <div class="top-content-box">
                        <div>
                            <input type="checkbox" :checked="shop.parent_select" @click="select_shop_all(parent_index)">
                        </div>
                        <div>
                            <img :src="shop.src" alt="">
                        </div>
                        <p>{{shop.title}}</p>
                    </div>
                    <div v-for="(item,children_index) in shop_name_list[parent_index].children" :key="children_index" class="bottom-content-box">
                        <div class="checkbox-box">
                            <input type="checkbox" :checked="item.selectCommodity" @click="selectCommodity(parent_index,children_index)">
                        </div>
                        <div class="commodity-info-box">
                            <div class="commodity-img">
                                <img :src="item.commodityImg" alt="">
                            </div>
                            <div class="commodity-info">
                                <p class="p-name">{{item.commodityName}}</p>
                                <p class="p-intro"><span>{{item.commodityIntro}}</span></p>
                                <div class="p-price">
                                    <span class="c-price">￥<b>{{item.commodityPrice}}</b><span v-if="item.specialOffer"><s>￥{{item.commodityOldPrice}}</s></span></span>
                                    <div class="p-num">
                                        <!-- <button id="minus_btn" class="minus_btn"  disabled="true">-</button>
                                        <i class="c-num">{{item.commodityNum}}</i>
                                        <button id="add_btn" class="add_btn" >+</button> -->
                                        <van-stepper v-model="item.commodityNum" input-width="5vw" theme="round" button-size="22" disable-input @plus="addNum(parent_index,children_index)" @minus="minusNum(parent_index,children_index)"/>
                                    </div>
                                </div>
                            </div>
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

            <div v-if="isShopping==0" class="footer_wrap">
                <div class="left-footer-box">
                    <p><input id="selectAll" type="checkbox" @click="select_all">全选</p>
                </div>
                <div class="mid-footer-box">
                    <p>总计：<span>￥{{total}}</span></p>
                </div>
                <div class="right-footer-box">
                    <button class="red_button">结算({{nums}})</button>
                </div>
            </div>

            <div v-if="isShopping==1" class="footer_wrap">
                <div class="left-footer-box">
                    <p><input id="selectAll" type="checkbox" @click="select_all"> 全选</p>
                </div>
                <div class="mid-footer-box">
                    
                </div>
                <div class="right-footer-box">
                    <button class="red_button" @click="delCommodity">删除({{nums}})</button>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped src="../assets/css/shoppingCart.css">

</style>

<script>
import $ from 'jquery';

export default {
    data(){
        return{
            total : 0,
            nums : 0,
            isShopping:0,
            shop_name_list: [
                {
                    src:'img/shopping_cart_img/dp-img.png',
                    title:'天津奇立软件技术有限公司',
                    parent_select : false,
                    children:[
                        {
                            commodityImg:'img/shopping_cart_img/commodity-img1.png',
                            commodityName:'【华为认证二手机-9成新】HUAWEI P40 Pro 5G 全网通 8GB+128GB（亮黑色）- 仅含主机',
                            commodityIntro:'亮黑色,5G全网通 8GB+128GB,二手-9成新',
                            commodityPrice:1799,
                            specialOffer:true,
                            commodityOldPrice:2099,
                            commodityNum:1,
                            selectCommodity:false
                        },
                        {
                            commodityImg:'img/shopping_cart_img/commodity-img1.png',
                            commodityName:'【华为认证二手机-9成新】HUAWEI P40 Pro 5G 全网通 8GB+128GB（亮黑色）- 仅含主机',
                            commodityIntro:'亮黑色,5G全网通 8GB+128GB,二手-9成新',
                            commodityPrice:1499,
                            specialOffer:false,
                            commodityOldPrice:0,
                            commodityNum:1, 
                            selectCommodity:false
                        }
                    ]
                },
                {
                    src:'img/shopping_cart_img/vmall-img.png',
                    title:'华为商城自营',
                    parent_select : false,
                    children:[
                        {
                            commodityImg:'img/shopping_cart_img/commodity-img2.png',
                            commodityName:'HUAWEI nova 8 SE 8GB+128GB（幻夜黑）鸿蒙手机',
                            commodityIntro:' 幻夜黑,8GB+128GB,4G 全网通,官方标配(不含快充套装及耳机)',
                            commodityPrice:1699,
                            specialOffer:true,
                            commodityOldPrice:2099,
                            commodityNum:1,
                            selectCommodity:false
                        },
                        {
                            commodityImg:'img/shopping_cart_img/commodity-img2.png',
                            commodityName:'HUAWEI nova 9 SE 8GB+256GB（冰晶蓝）鸿蒙手机',
                            commodityIntro:' 冰晶蓝,8GB+256GB,4G 全网通,官方标配（不含快充套装及耳机） ',
                            commodityPrice:2199,
                            specialOffer:true,
                            commodityOldPrice:2399,
                            commodityNum:1, 
                            selectCommodity:false
                        }
                    ]
                }
            ],
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
    methods: {
        // 单选商品
        selectCommodity(parent_index,children_index){
            var children = this.shop_name_list[parent_index].children[children_index];
            // 选中时取消，取消时确定
            if(children.selectCommodity == true){
                this.shop_name_list[parent_index].children[children_index].selectCommodity = false
                // 算钱
                this.total = parseInt(this.total) - children.commodityPrice * children.commodityNum;
                this.nums--;
            }else{
                this.shop_name_list[parent_index].children[children_index].selectCommodity = true
                // 算钱
                this.total = parseInt(this.total) + children.commodityPrice * children.commodityNum;
                this.nums++;
            }

            // 判断当前店铺是否全选
            this.shop_name_list[parent_index].parent_select = true;
            for(let i=0;i<this.shop_name_list[parent_index].children.length;i++){
                if(this.shop_name_list[parent_index].children[i].selectCommodity == false){
                    this.shop_name_list[parent_index].parent_select = false
                }
            }

            // 取消下方全选
            $('#selectAll')[0].checked = true
            for(let i=0;i<this.shop_name_list.length;i++){
                if(this.shop_name_list[i].parent_select == false){
                    $('#selectAll')[0].checked = false
                }
            }
        },
        // 全选店铺内的商品
        select_shop_all(parent_index){
            var parent = this.shop_name_list[parent_index]
            if(parent.parent_select == true){
                this.shop_name_list[parent_index].parent_select = false;
                for(let i=0;i<this.shop_name_list[parent_index].children.length;i++){
                    this.shop_name_list[parent_index].children[i].selectCommodity = false;
                    // 算钱
                    this.total = parseInt(this.total) - this.shop_name_list[parent_index].children[i].commodityPrice * this.shop_name_list[parent_index].children[i].commodityNum;
                    this.nums--;
                }
            }else{
                this.shop_name_list[parent_index].parent_select = true;
                for(let i=0;i<this.shop_name_list[parent_index].children.length;i++){
                    if(this.shop_name_list[parent_index].children[i].selectCommodity == false){
                        this.shop_name_list[parent_index].children[i].selectCommodity = true;
                        // 算钱
                        this.total = parseInt(this.total) + this.shop_name_list[parent_index].children[i].commodityPrice * this.shop_name_list[parent_index].children[i].commodityNum;
                        this.nums++;
                    }    
                }
            }

            // 取消下方全选
            $('#selectAll')[0].checked = true
            for(let i=0;i<this.shop_name_list.length;i++){
                if(this.shop_name_list[i].parent_select == false){
                    $('#selectAll')[0].checked = false
                }
            }
        },
        // 全选所有商品
        select_all(){
            if(event.target.checked == true){
                for(let i=0;i<this.shop_name_list.length;i++){
                    this.shop_name_list[i].parent_select = true;
                    for(let j=0;j<this.shop_name_list[i].children.length;j++){
                        if(this.shop_name_list[i].children[j].selectCommodity == false){
                            this.shop_name_list[i].children[j].selectCommodity = true
                            this.total = parseInt(this.total) + this.shop_name_list[i].children[j].commodityPrice * this.shop_name_list[i].children[j].commodityNum
                            this.nums++;
                        }    
                    }
                }
            }else{
                for(let i=0;i<this.shop_name_list.length;i++){
                    this.shop_name_list[i].parent_select = false;
                    for(let j=0;j<this.shop_name_list[i].children.length;j++){
                        this.shop_name_list[i].children[j].selectCommodity = false
                        this.total = parseInt(this.total) - this.shop_name_list[i].children[j].commodityPrice * this.shop_name_list[i].children[j].commodityNum
                        this.nums--;
                    }
                }
            }
        },
        // 改变数量时
        addNum(parent_index,children_index){
            if(this.shop_name_list[parent_index].children[children_index].selectCommodity == true){
                this.total = parseInt(this.total) + this.shop_name_list[parent_index].children[children_index].commodityPrice;
            }
        },
        minusNum(parent_index,children_index){
            if(this.shop_name_list[parent_index].children[children_index].selectCommodity == true){
                this.total = parseInt(this.total) - this.shop_name_list[parent_index].children[children_index].commodityPrice;
            }
        },
        edit(){
            if(this.isShopping == 0){
                this.isShopping = 1
            }else{
                this.isShopping = 0
            }
        },
        delCommodity(){
            for(let i=0;i<this.shop_name_list.length;i++){
                for(let j=0;j<this.shop_name_list[i].children.length;j++){
                    if(this.shop_name_list[i].children[j].selectCommodity == true){
                        this.shop_name_list[i].children.splice(j,1)
                        j--;
                        this.nums--;
                    } 
                }
                if(this.shop_name_list[i].children.length == 0){
                    this.shop_name_list.splice(i,1)
                    i--;
                } 
            }
        }
    }
}
</script>