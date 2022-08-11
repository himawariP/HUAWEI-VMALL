<template>
    <div class="classify-page">
        <header>
            <div class="top-search-box">
                <router-link to="/search">
                    <van-search placeholder="摄像头" shape="round" background="#f0f3f5"/>
                </router-link>
            </div>
            <div class="top-icon-box">
                <van-icon name="chat-o" size="7vw"/>
            </div>
        </header>
        <div class="classify-select-wrap">
            <van-tree-select height="calc(100vh - 31vw)" :items="items" :main-active-index.sync="active">
                <template #content>
                    <!-- 新品 -->
                    <div v-if="active===0" class="classify-main">
                        <div class="classify-swipe-wrap">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item v-for="(item,index) in classify_focus_list" :key="index">
                                    <img :src="item.src" alt="">
                                </van-swipe-item>
                            </van-swipe>
                        </div>
                        <div class="classify-main-box">
                            <h3 class="box-title">新品推荐</h3>
                            <ul>
                                <li v-for="(item,index) in classify_main_content1" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="classify-main-box">
                            <h3 class="box-title">车及周边</h3>
                            <ul>
                                <li v-for="(item,index) in classify_main_car" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 手机 -->
                    <div v-if="active===1" class="classify-main">
                        <div class="classify-swipe-wrap">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item v-for="(item,index) in classify_focus_list" :key="index">
                                    <img :src="item.src" alt="">
                                </van-swipe-item>
                            </van-swipe>
                        </div>
                        <div class="classify-main-box">
                            <h3 class="box-title">【政府补贴专区 满4000减200】</h3>
                            <ul>
                                <li v-for="(item,index) in classify_phone1" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="classify-main-box">
                            <h3 class="box-title">HUAWEI P系列</h3>
                            <ul>
                                <li v-for="(item,index) in classify_phone2" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="classify-main-box">
                            <h3 class="box-title">HUAWEI Mate系列</h3>
                            <ul>
                                <li v-for="(item,index) in classify_phone3" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="classify-main-box">
                            <h3 class="box-title">HUAWEI nova系列</h3>
                            <ul>
                                <li v-for="(item,index) in classify_phone4" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 笔记本 -->
                    <div v-if="active===2" class="classify-main">
                        <div class="classify-swipe-wrap">
                            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                                <van-swipe-item v-for="(item,index) in classify_focus_list" :key="index">
                                    <img :src="item.src" alt="">
                                </van-swipe-item>
                            </van-swipe>
                        </div>
                        <div class="classify-main-box">
                            <h3 class="box-title">【政府补贴专区 满4000减200】</h3>
                            <ul>
                                <li v-for="(item,index) in classify_notebook1" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="classify-main-box">
                            <h3 class="box-title">新品上市</h3>
                            <ul>
                                <li v-for="(item,index) in classify_notebook2" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="classify-main-box">
                            <h3 class="box-title">MateBook X 系列</h3>
                            <ul>
                                <li v-for="(item,index) in classify_notebook3" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                        <div class="classify-main-box">
                            <h3 class="box-title">MateBook 数字系列</h3>
                            <ul>
                                <li v-for="(item,index) in classify_notebook4" :key="index">
                                    <img :src="item.src" alt="">
                                    <p>{{item.title}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
            </van-tree-select>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return{
            active: 0,
            items: [
                { 
                    text: '新品' 
                }, 
                {
                    text: '手机' 
                }, 
                {
                    text: '笔记本' 
                }, 
                {
                    text: '台显打印' 
                }, 
                {
                    text: '平板' 
                }, 
                {
                    text: '穿戴' 
                }, 
                {
                    text: '耳机音箱' 
                }, 
                {
                    text: '智慧屏' 
                }, 
                {
                    text: '门锁路由' 
                }, 
                {
                    text: '数码配件' 
                }, 
                {
                    text: '华为智选' 
                }, 
                {
                    text: '出行车品' 
                }, 
                {
                    text: '甄选美酒' 
                }, 
                {
                    text: '家用电器' 
                }, 
                {
                    text: '智能家居' 
                }, 
                {
                    text: '个护健康' 
                }
            ],
            classify_focus_list:[
                {
                    src:'img/classify_img/classify-focus-img1.png'
                },
                {
                    src:'img/classify_img/classify-focus-img2.png'
                },
                {
                    src:'img/classify_img/classify-focus-img3.png'
                },
                {
                    src:'img/classify_img/classify-focus-img4.png'
                },
                {
                    src:'img/classify_img/classify-focus-img5.png'
                }
            ],
            classify_main_content1:[
                {
                    src:'img/classify_img/classify-main-img1.png',
                    title:'Mate Book X Pro 微绒典藏'
                },
                {
                    src:'img/classify_img/classify-main-img2.png',
                    title:'Mate Book X Pro 12代酷睿'
                },
                {
                    src:'img/classify_img/classify-main-img3.png',
                    title:'MatePad Pro 11英寸'
                },
                {
                    src:'img/classify_img/classify-main-img4.png',
                    title:'FreeBuds Pro 2'
                },
                {
                    src:'img/classify_img/classify-main-img1.png',
                    title:'Mate Book X Pro 微绒典藏'
                },
                {
                    src:'img/classify_img/classify-main-img2.png',
                    title:'Mate Book X Pro 12代酷睿'
                },
                {
                    src:'img/classify_img/classify-main-img3.png',
                    title:'MatePad Pro 11英寸'
                },
                {
                    src:'img/classify_img/classify-main-img4.png',
                    title:'FreeBuds Pro 2'
                },
                {
                    src:'img/classify_img/classify-main-img1.png',
                    title:'Mate Book X Pro 微绒典藏'
                },
                {
                    src:'img/classify_img/classify-main-img2.png',
                    title:'Mate Book X Pro 12代酷睿'
                },
                {
                    src:'img/classify_img/classify-main-img3.png',
                    title:'MatePad Pro 11英寸'
                }
            ],
            classify_main_car:[
                {
                    src:'img/classify_img/car1.png',
                    title:'问界M7'
                },
                {
                    src:'img/classify_img/car2.png',
                    title:'问界M5 EV'
                },
                {
                    src:'img/classify_img/car3.png',
                    title:'问界M5 四驱性能版'
                },
                {
                    src:'img/classify_img/car4.png',
                    title:'问界M5 后驱标准版'
                },
                {
                    src:'img/classify_img/car1.png',
                    title:'问界M7'
                },
                {
                    src:'img/classify_img/car2.png',
                    title:'问界M5 EV'
                },
                {
                    src:'img/classify_img/car3.png',
                    title:'问界M5 四驱性能版'
                },
                {
                    src:'img/classify_img/car4.png',
                    title:'问界M5 后驱标准版'
                },
                {
                    src:'img/classify_img/car1.png',
                    title:'问界M7'
                },
                {
                    src:'img/classify_img/car2.png',
                    title:'问界M5 EV'
                },
                {
                    src:'img/classify_img/car3.png',
                    title:'问界M5 四驱性能版'
                }
            ],
            classify_phone1:[
                {
                    src:'img/classify_img/phone-img1.png',
                    title:'P50系列'
                },
                {
                    src:'img/classify_img/phone-img2.png',
                    title:'nova系列'
                },
                {
                    src:'img/classify_img/phone-img3.png',
                    title:'畅享系列'
                }
            ],
            classify_phone2:[
                {
                    src:'img/classify_img/phone-img4.png',
                    title:'HUAWEI P50'
                },
                {
                    src:'img/classify_img/phone-img4.png',
                    title:'HUAWEI P50E'
                },
                {
                    src:'img/classify_img/phone-img4.png',
                    title:'HUAWEI P50 Pro'
                },
                {
                    src:'img/classify_img/phone-img4.png',
                    title:'HUAWEI P50 Prcket'
                }
            ],
            classify_phone3:[
                {
                    src:'img/classify_img/phone-img5.png',
                    title:'HUAWEI Mate Xs 2'
                },
                {
                    src:'img/classify_img/phone-img5.png',
                    title:'HUAWEI X2 5G'
                }
            ],
            classify_phone4:[
                {
                    src:'img/classify_img/phone-img6.png',
                    title:'nova 10'
                },
                {
                    src:'img/classify_img/phone-img7.png',
                    title:'nova 10 Pro'
                },
                {
                    src:'img/classify_img/phone-img6.png',
                    title:'nova 9'
                },
                {
                    src:'img/classify_img/phone-img7.png',
                    title:'nova 9 Pro'
                },
                {
                    src:'img/classify_img/phone-img6.png',
                    title:'nova 9 SE'
                },
                {
                    src:'img/classify_img/phone-img7.png',
                    title:'nova 8 SE'
                }
            ],
            classify_notebook1:[
                {
                    src:'img/classify_img/notebook-img1.png',
                    title:'MateBook X系列'
                },
                {
                    src:'img/classify_img/notebook-img2.png',
                    title:'MateBook 数字系列'
                },
                {
                    src:'img/classify_img/notebook-img3.png',
                    title:'MateBook D系列'
                }
            ],
            classify_notebook2:[
                {
                    src:'img/classify_img/notebook-img4.png',
                    title:'MateBook X Pro 微绒典藏'
                },
                {
                    src:'img/classify_img/notebook-img5.png',
                    title:'MateBook X Pro 12代酷睿'
                },
                {
                    src:'img/classify_img/printer-img1.png',
                    title:'MateBook 14s 12代酷睿'
                },
                {
                    src:'img/classify_img/mouse-img1.png',
                    title:'HUAWEI 无线鼠标'
                }
            ],
            classify_notebook3:[
                {
                    src:'img/classify_img/notebook-img4.png',
                    title:'MateBook X Pro 微绒典藏'
                },
                {
                    src:'img/classify_img/notebook-img1.png',
                    title:'MateBook X Pro'
                },
                {
                    src:'img/classify_img/notebook-img5.png',
                    title:'MateBook X'
                }
            ],
            classify_notebook4:[
                {
                    src:'img/classify_img/classify-main-img3.png',
                    title:'MateBook 14s 12代'
                },
                {
                    src:'img/classify_img/notebook-img3.png',
                    title:'MateBook 14 12代'
                },
                {
                    src:'img/classify_img/notebook-img3.png',
                    title:'MateBook 14 独显'
                },
                {
                    src:'img/classify_img/notebook-img2.png',
                    title:'MateBook 16s'
                }
            ]
        }
    }
}
</script>

<style scoped src='../assets/css/classify.css'>
    
</style>