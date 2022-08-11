<template>
    <div class="searchResult-wrap">
        <header>
            <div class="top-left-box">
                <router-link to="/search">
                    <svg width="24" height="24" viewBox="0 0 1024 1024"><path d="M237.261 586.665l256.14 256.243c11.037 12.569 10.557 31.722-1.44 43.719s-31.15 12.477-43.719 1.44l-1.536-1.44-299.963-299.962h90.517zM491.961 137.373c11.997 11.997 12.477 31.15 1.44 43.719l-1.44 1.536-297.379 297.373h712.085c17.042 0 30.972 13.322 31.946 30.12l0.054 1.88c0 17.042-13.322 30.972-30.12 31.946l-1.88 0.054h-789.333c-27.902 0-42.172-33.017-23.868-53.322l1.24-1.306 352-352c12.497-12.497 32.758-12.497 45.255 0z" fill="#000000" fill-opacity="1"></path></svg>
                </router-link>
            </div>
            <div class="top-search-box">
                <router-link to="/search">
                    <van-search v-model="value" placeholder="吹风机" shape="round" background="#f0f3f5"/>
                </router-link>
            </div>
            <div class="top-right-box">
                <svg v-if="view==0" @click="switch_view" width="7vw" height="7vw" viewBox="0 0 1024 1024"><path d="M256.845 544.020l57.485-0.020c50.729 0 74.25 6.29 96.336 18.102s39.42 29.145 51.232 51.232l2.217 4.3c10.38 20.935 15.885 44.581 15.885 92.037v52.66c0 50.729-6.29 74.25-18.102 96.336s-29.145 39.42-51.232 51.232l-4.3 2.217c-20.935 10.38-44.581 15.885-92.037 15.885h-52.66c-50.729 0-74.25-6.29-96.336-18.102s-39.42-29.145-51.232-51.232l-2.217-4.3c-10.022-20.213-15.5-42.953-15.866-87.212l-0.020-57.485c0-50.729 6.29-74.25 18.102-96.336s29.145-39.42 51.232-51.232l4.3-2.217c20.213-10.022 42.953-15.5 87.212-15.866zM704.845 544.020l57.485-0.020c50.729 0 74.25 6.29 96.336 18.102s39.42 29.145 51.232 51.232l2.217 4.3c10.38 20.935 15.885 44.581 15.885 92.037v52.66c0 50.729-6.29 74.25-18.102 96.336s-29.145 39.42-51.232 51.232l-4.3 2.217c-20.935 10.38-44.581 15.885-92.037 15.885h-52.66c-50.729 0-74.25-6.29-96.336-18.102s-39.42-29.145-51.232-51.232l-2.217-4.3c-10.022-20.213-15.5-42.953-15.866-87.212l-0.020-57.485c0-50.729 6.29-74.25 18.102-96.336s29.145-39.42 51.232-51.232l4.3-2.217c20.213-10.022 42.953-15.5 87.212-15.866zM314.352 608l-56.978 0.017-7.174 0.107c-26.334 0.586-39.558 3.189-49.902 8.003l-1.334 0.64-3.448 1.77c-10.933 5.847-19.131 14.045-24.978 24.978-6.727 12.578-9.849 25.747-10.435 55.016l-0.103 11.116 0.017 56.978 0.107 7.174c0.586 26.334 3.189 39.558 8.003 49.902l0.64 1.334 1.77 3.448c5.847 10.933 14.045 19.131 24.978 24.978 12.578 6.727 25.747 9.849 55.032 10.435l11.123 0.103 59.927-0.044c29.066-0.366 43.247-3.022 54.146-8.103l1.293-0.621 3.448-1.77c10.933-5.847 19.131-14.045 24.978-24.978 6.727-12.578 9.849-25.747 10.435-55.032l0.103-11.123v-52.66l-0.044-7.267c-0.366-29.066-3.022-43.247-8.103-54.146l-0.621-1.293-1.77-3.448c-5.847-10.933-14.045-19.131-24.978-24.978-12.578-6.727-25.747-9.849-55.032-10.435l-11.101-0.103zM762.352 608l-56.978 0.017-7.174 0.107c-26.334 0.586-39.558 3.189-49.902 8.003l-1.334 0.64-3.448 1.77c-10.933 5.847-19.131 14.045-24.978 24.978-6.727 12.578-9.849 25.747-10.435 55.016l-0.103 11.116 0.017 56.978 0.107 7.174c0.586 26.334 3.189 39.558 8.003 49.902l0.64 1.334 1.77 3.448c5.847 10.933 14.045 19.131 24.978 24.978 12.578 6.727 25.747 9.849 55.032 10.435l11.123 0.103 59.927-0.044c29.066-0.366 43.247-3.022 54.146-8.103l1.293-0.621 3.448-1.77c10.933-5.847 19.131-14.045 24.978-24.978 6.727-12.578 9.849-25.747 10.435-55.032l0.103-11.123v-52.66l-0.044-7.267c-0.366-29.066-3.022-43.247-8.103-54.146l-0.621-1.293-1.77-3.448c-5.847-10.933-14.045-19.131-24.978-24.978-12.578-6.727-25.747-9.849-55.032-10.435l-11.101-0.103zM256.845 96.020l57.485-0.020c50.729 0 74.25 6.29 96.336 18.102s39.42 29.145 51.232 51.232l2.217 4.3c10.38 20.935 15.885 44.581 15.885 92.037v52.66c0 50.729-6.29 74.25-18.102 96.336s-29.145 39.42-51.232 51.232l-4.3 2.217c-20.935 10.38-44.581 15.885-92.037 15.885h-52.66c-50.729 0-74.25-6.29-96.336-18.102s-39.42-29.145-51.232-51.232l-2.217-4.3c-10.022-20.213-15.5-42.953-15.866-87.212l-0.020-57.485c0-50.729 6.29-74.25 18.102-96.336s29.145-39.42 51.232-51.232l4.3-2.217c20.213-10.022 42.953-15.5 87.212-15.866zM704.845 96.020l57.485-0.020c50.729 0 74.25 6.29 96.336 18.102s39.42 29.145 51.232 51.232l2.217 4.3c10.38 20.935 15.885 44.581 15.885 92.037v52.66c0 50.729-6.29 74.25-18.102 96.336s-29.145 39.42-51.232 51.232l-4.3 2.217c-20.935 10.38-44.581 15.885-92.037 15.885h-52.66c-50.729 0-74.25-6.29-96.336-18.102s-39.42-29.145-51.232-51.232l-2.217-4.3c-10.022-20.213-15.5-42.953-15.866-87.212l-0.020-57.485c0-50.729 6.29-74.25 18.102-96.336s29.145-39.42 51.232-51.232l4.3-2.217c20.213-10.022 42.953-15.5 87.212-15.866zM314.352 160l-56.978 0.017-7.174 0.107c-26.334 0.586-39.558 3.189-49.902 8.003l-1.334 0.64-3.448 1.77c-10.933 5.847-19.131 14.045-24.978 24.978-6.727 12.578-9.849 25.747-10.435 55.016l-0.103 11.116 0.017 56.978 0.107 7.174c0.586 26.334 3.189 39.558 8.003 49.902l0.64 1.334 1.77 3.448c5.847 10.933 14.045 19.131 24.978 24.978 12.578 6.727 25.747 9.849 55.032 10.435l11.123 0.103 59.927-0.044c29.066-0.366 43.247-3.022 54.146-8.103l1.293-0.621 3.448-1.77c10.933-5.847 19.131-14.045 24.978-24.978 6.727-12.578 9.849-25.747 10.435-55.032l0.103-11.123v-52.66l-0.044-7.267c-0.366-29.066-3.022-43.247-8.103-54.146l-0.621-1.293-1.77-3.448c-5.847-10.933-14.045-19.131-24.978-24.978-12.578-6.727-25.747-9.849-55.032-10.435l-11.101-0.103zM762.352 160l-56.978 0.017-7.174 0.107c-26.334 0.586-39.558 3.189-49.902 8.003l-1.334 0.64-3.448 1.77c-10.933 5.847-19.131 14.045-24.978 24.978-6.727 12.578-9.849 25.747-10.435 55.016l-0.103 11.116 0.017 56.978 0.107 7.174c0.586 26.334 3.189 39.558 8.003 49.902l0.64 1.334 1.77 3.448c5.847 10.933 14.045 19.131 24.978 24.978 12.578 6.727 25.747 9.849 55.032 10.435l11.123 0.103 59.927-0.044c29.066-0.366 43.247-3.022 54.146-8.103l1.293-0.621 3.448-1.77c10.933-5.847 19.131-14.045 24.978-24.978 6.727-12.578 9.849-25.747 10.435-55.032l0.103-11.123v-52.66l-0.044-7.267c-0.366-29.066-3.022-43.247-8.103-54.146l-0.621-1.293-1.77-3.448c-5.847-10.933-14.045-19.131-24.978-24.978-12.578-6.727-25.747-9.849-55.032-10.435l-11.101-0.103z" fill="#000000"></path></svg>
                <svg v-if="view==1" @click="switch_view" width="7vw" height="7vw" viewBox="0 0 1024 1024"><path d="M149.333 746.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667zM906.667 757.333c17.673 0 32 14.327 32 32s-14.327 32-32 32h-576c-17.673 0-32-14.327-32-32s14.327-32 32-32h576zM149.333 469.333c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667zM906.667 480c17.673 0 32 14.327 32 32s-14.327 32-32 32h-576c-17.673 0-32-14.327-32-32s14.327-32 32-32h576zM149.333 192c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667zM906.667 202.667c17.673 0 32 14.327 32 32s-14.327 32-32 32h-576c-17.673 0-32-14.327-32-32s14.327-32 32-32h576z" fill="#000000"></path></svg>
            </div>
        </header>

        <section>
            <!-- 导航 -->
            <div class="nav-wrap">
                <ul>
                    <li v-for="(item,index) in nav_list" :key="index"  :class="{'act':index==result_view}" @click="change(index)">
                        <p>{{item}}</p>
                    </li>
                    <li>
                        <!-- 侧栏 -->
                        <p @click="showPopup">筛选</p>
                        <van-popup v-model="show" round  position="right" :style="{ width: '70%',height:'100%'}">
                            <div class="sidebar-wrap">
                                <div class="sidebar-txt-box">
                                    <p>价格区间</p>
                                    <div class="sidebar-price">
                                        <input type="text" placeholder="最低价">
                                        <i>-</i>
                                        <input type="text" placeholder="最高价">
                                    </div>
                                </div>
                                <div class="sidebar-txt-box">
                                    <p>服务优惠</p>
                                    <div class="sidebar-comments">
                                        <button>仅看有货</button>
                                        <button>分期免息</button>
                                        <button>优惠商品</button>
                                    </div>
                                </div>
                                <div class="sidebar-bottom">
                                    <button>重置</button>
                                    <button>确定</button>
                                </div>
                            </div>
                        </van-popup>
                    </li>
                </ul>
            </div>

            <div v-show="view==0" class="show-wrap">
                <!-- 商品列表:综合 -->
                <div v-show="result_view==0" class="search-Result-wrap">
                    <router-link to="/xiangxi">
                        <div v-for="(item,index) in result_list" :key="index" class="result-list-wrap">
                            <div class="result-img">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="result-info">
                                <p class="title">
                                    <span v-if="item.isNew">新品上市</span>
                                    <span v-if="item.discount">享政府补贴</span>
                                    {{item.title}}
                                </p>
                                <p class="intro">{{item.intro}}</p>
                                <div class="price">
                                    <p>￥{{item.newPrice}}<s v-if="item.hasOldPrice">￥{{item.oldPrice}}</s></p>
                                </div>
                                <div class="tags">
                                    <span v-if="item.xsth">限时特惠</span>
                                    <span v-if="item.fqmx">分期免息</span>
                                    <span v-if="item.zsjf">赠送积分</span>
                                    <span v-if="item.pt">拼团</span>
                                </div>
                                <div v-if="item.showComment" class="comments">
                                    <p>{{item.comments}}人评价</p>
                                    <p>{{item.favorableRate}}%好评</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <!-- 商品列表:最新 -->
                <div v-show="result_view==1" class="search-Result-wrap">
                    <router-link to="/xiangxi">
                        <div v-for="(item,index) in result_list" :key="index" class="result-list-wrap">
                            <div class="result-img">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="result-info">
                                <p class="title">
                                    <span v-if="item.isNew">xxx</span>
                                    <span v-if="item.discount">享政府补贴</span>
                                    {{item.title}}
                                </p>
                                <p class="intro">{{item.intro}}</p>
                                <div class="price">
                                    <p>￥{{item.newPrice}}<s v-if="item.hasOldPrice">￥{{item.oldPrice}}</s></p>
                                </div>
                                <div class="tags">
                                    <span v-if="item.xsth">限时特惠</span>
                                    <span v-if="item.fqmx">分期免息</span>
                                    <span v-if="item.zsjf">赠送积分</span>
                                    <span v-if="item.pt">拼团</span>
                                </div>
                                <div v-if="item.showComment" class="comments">
                                    <p>{{item.comments}}人评价</p>
                                    <p>{{item.favorableRate}}%好评</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <!-- 商品列表:评论数 -->
                <div v-show="result_view==2" class="search-Result-wrap">
                    <router-link to="/xiangxi">
                        <div v-for="(item,index) in result_list" :key="index" class="result-list-wrap">
                            <div class="result-img">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="result-info">
                                <p class="title">
                                    <span v-if="item.isNew">yyy</span>
                                    <span v-if="item.discount">享政府补贴</span>
                                    {{item.title}}
                                </p>
                                <p class="intro">{{item.intro}}</p>
                                <div class="price">
                                    <p>￥{{item.newPrice}}<s v-if="item.hasOldPrice">￥{{item.oldPrice}}</s></p>
                                </div>
                                <div class="tags">
                                    <span v-if="item.xsth">限时特惠</span>
                                    <span v-if="item.fqmx">分期免息</span>
                                    <span v-if="item.zsjf">赠送积分</span>
                                    <span v-if="item.pt">拼团</span>
                                </div>
                                <div v-if="item.showComment" class="comments">
                                    <p>{{item.comments}}人评价</p>
                                    <p>{{item.favorableRate}}%好评</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>

                <!-- 商品列表:价格 -->
                <div v-show="result_view==3" class="search-Result-wrap">
                    <router-link to="/xiangxi">
                        <div v-for="(item,index) in result_list" :key="index" class="result-list-wrap">
                            <div class="result-img">
                                <img :src="item.src" alt="">
                            </div>
                            <div class="result-info">
                                <p class="title">
                                    <span v-if="item.isNew">zzz</span>
                                    <span v-if="item.discount">享政府补贴</span>
                                    {{item.title}}
                                </p>
                                <p class="intro">{{item.intro}}</p>
                                <div class="price">
                                    <p>￥{{item.newPrice}}<s v-if="item.hasOldPrice">￥{{item.oldPrice}}</s></p>
                                </div>
                                <div class="tags">
                                    <span v-if="item.xsth">限时特惠</span>
                                    <span v-if="item.fqmx">分期免息</span>
                                    <span v-if="item.zsjf">赠送积分</span>
                                    <span v-if="item.pt">拼团</span>
                                </div>
                                <div v-if="item.showComment" class="comments">
                                    <p>{{item.comments}}人评价</p>
                                    <p>{{item.favorableRate}}%好评</p>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

            <div v-show="view==1" class="show-wrap">
                <!-- 商品列表:综合 -->
                <div v-show="result_view==0" class="search-Result-list-wrap">
                    <router-link to="/xiangxi">
                        <div v-for="(item,index) in result_list" :key="index" class="result-list-wrap">
                        <div class="result-img2">
                            <img :src="item.src" alt="">
                        </div>
                        <div class="result-info2">
                            <p class="title">
                                    <span v-if="item.isNew">新品上市</span>
                                    <span v-if="item.discount">享政府补贴</span>
                                    {{item.title}}
                                </p>
                                <p class="intro">{{item.intro}}</p>
                                <div class="price">
                                    <p>￥{{item.newPrice}}<s v-if="item.hasOldPrice">￥{{item.oldPrice}}</s></p>
                                </div>
                                <div class="tags">
                                    <span v-if="item.xsth">限时特惠</span>
                                    <span v-if="item.fqmx">分期免息</span>
                                    <span v-if="item.zsjf">赠送积分</span>
                                    <span v-if="item.pt">拼团</span>
                                </div>
                                <div v-if="item.showComment" class="comments">
                                    <p>{{item.comments}}人评价</p>
                                    <p>{{item.favorableRate}}%好评</p>
                                </div>
                        </div>
                    </div>
                    </router-link>
                </div>

                <!-- 商品列表:最新 -->
                <div v-show="result_view==1" class="search-Result-list-wrap">
                    <router-link to="/xiangxi">
                        <div v-for="(item,index) in result_list" :key="index" class="result-list-wrap">
                        <div class="result-img2">
                            <img :src="item.src" alt="">
                        </div>
                        <div class="result-info2">
                            <p class="title">
                                    <span v-if="item.isNew">xxx</span>
                                    <span v-if="item.discount">享政府补贴</span>
                                    {{item.title}}
                                </p>
                                <p class="intro">{{item.intro}}</p>
                                <div class="price">
                                    <p>￥{{item.newPrice}}<s v-if="item.hasOldPrice">￥{{item.oldPrice}}</s></p>
                                </div>
                                <div class="tags">
                                    <span v-if="item.xsth">限时特惠</span>
                                    <span v-if="item.fqmx">分期免息</span>
                                    <span v-if="item.zsjf">赠送积分</span>
                                    <span v-if="item.pt">拼团</span>
                                </div>
                                <div v-if="item.showComment" class="comments">
                                    <p>{{item.comments}}人评价</p>
                                    <p>{{item.favorableRate}}%好评</p>
                                </div>
                        </div>
                    </div>
                    </router-link>
                </div>

                <!-- 商品列表:评论数 -->
                <div v-show="result_view==2" class="search-Result-list-wrap">
                    <router-link to="/xiangxi">
                        <div v-for="(item,index) in result_list" :key="index" class="result-list-wrap">
                        <div class="result-img2">
                            <img :src="item.src" alt="">
                        </div>
                        <div class="result-info2">
                            <p class="title">
                                    <span v-if="item.isNew">yyy</span>
                                    <span v-if="item.discount">享政府补贴</span>
                                    {{item.title}}
                                </p>
                                <p class="intro">{{item.intro}}</p>
                                <div class="price">
                                    <p>￥{{item.newPrice}}<s v-if="item.hasOldPrice">￥{{item.oldPrice}}</s></p>
                                </div>
                                <div class="tags">
                                    <span v-if="item.xsth">限时特惠</span>
                                    <span v-if="item.fqmx">分期免息</span>
                                    <span v-if="item.zsjf">赠送积分</span>
                                    <span v-if="item.pt">拼团</span>
                                </div>
                                <div v-if="item.showComment" class="comments">
                                    <p>{{item.comments}}人评价</p>
                                    <p>{{item.favorableRate}}%好评</p>
                                </div>
                        </div>
                    </div>
                    </router-link>
                </div>

                <!-- 商品列表:价格 -->
                <div v-show="result_view==3" class="search-Result-list-wrap">
                    <router-link to="/xiangxi">
                        <div v-for="(item,index) in result_list" :key="index" class="result-list-wrap">
                        <div class="result-img2">
                            <img :src="item.src" alt="">
                        </div>
                        <div class="result-info2">
                            <p class="title">
                                    <span v-if="item.isNew">zzz</span>
                                    <span v-if="item.discount">享政府补贴</span>
                                    {{item.title}}
                                </p>
                                <p class="intro">{{item.intro}}</p>
                                <div class="price">
                                    <p>￥{{item.newPrice}}<s v-if="item.hasOldPrice">￥{{item.oldPrice}}</s></p>
                                </div>
                                <div class="tags">
                                    <span v-if="item.xsth">限时特惠</span>
                                    <span v-if="item.fqmx">分期免息</span>
                                    <span v-if="item.zsjf">赠送积分</span>
                                    <span v-if="item.pt">拼团</span>
                                </div>
                                <div v-if="item.showComment" class="comments">
                                    <p>{{item.comments}}人评价</p>
                                    <p>{{item.favorableRate}}%好评</p>
                                </div>
                        </div>
                    </div>
                    </router-link>
                </div>
            </div>

            <!-- 底部文字 -->
            <div class="footer-txt">
                <p>已经没有更多了</p>
            </div>
        </section>
    </div>
</template>

<style scoped src="../assets/css/searchResult.css">

</style>

<script>
import $ from 'jquery'

export default {
    data(){
        return{
            value:this.$route.query.value,
            result_view:0,
            view:0,
            show: false,
            result_list:[
                {
                    src:'img/searchResult/result-img5.png',
                    discount:false,
                    isNew:false,
                    title:'HUAWEI P50 Pro',
                    intro:'赠66元超级快充',
                    newPrice:5988,
                    hasOldPrice:false,
                    oldPrice:0,
                    showComment:true,
                    comments:11069,
                    favorableRate:96,
                    xsth:false,
                    fqmx:false,
                    zsjf:true,
                    pt:false,   
                },
                {
                    src:'img/searchResult/result-img1.png',
                    discount:false,
                    isNew:true,
                    title:'HUAWEI MatePad Pro 11英寸 2022',
                    intro:'预定立省200元',
                    newPrice:3499,
                    hasOldPrice:false,
                    oldPrice:0,
                    showComment:false,
                    comments:0,
                    favorableRate:0, 
                    xsth:false,
                    fqmx:true,
                    zsjf:true,
                    pt:false,
                    
                },
                {
                    src:'img/searchResult/result-img2.png',
                    discount:false,
                    isNew:true,
                    title:'智慧屏 S86 Pro',
                    intro:'新品上市|显示立省1000元',
                    newPrice:12999,
                    hasOldPrice:true,
                    oldPrice:13999,
                    showComment:false,
                    comments:0,
                    favorableRate:0,
                    xsth:true,
                    fqmx:true,
                    zsjf:true,
                    pt:false,
                    
                },
                {
                    src:'img/searchResult/result-img3.png',
                    discount:false,
                    isNew:true,
                    title:'HUAWEI WATCH 3 Pro new',
                    intro:'3期免息|晒单抽哈尔斯智能水杯',
                    newPrice:2999,
                    hasOldPrice:false,
                    oldPrice:0,
                    showComment:true,
                    comments:10456,
                    favorableRate:97,
                    xsth:false,
                    fqmx:true,
                    zsjf:true,
                    pt:false,
                    
                },
                {
                    src:'img/searchResult/result-img4.png',
                    discount:false,
                    isNew:true,
                    title:'HUAWEI PixLab V1 彩色喷墨打印机',
                    intro:'新品限时省100元',
                    newPrice:1399,
                    hasOldPrice:true,
                    oldPrice:1499,
                    showComment:true,
                    comments:174,
                    favorableRate:94,
                    xsth:true,
                    fqmx:true,
                    zsjf:true,
                    pt:false,   
                },
                {
                    src:'img/searchResult/result-img6.png',
                    discount:true,
                    isNew:false,
                    title:'【满4000减200】HUAWEI P50E',
                    intro:'直降400元|政府补贴满4000减200',
                    newPrice:3688,
                    hasOldPrice:true,
                    oldPrice:4088,
                    showComment:true,
                    comments:1148,
                    favorableRate:93,
                    xsth:true,
                    fqmx:false,
                    zsjf:true,
                    pt:false,   
                },
                {
                    src:'img/searchResult/result-img7.png',
                    discount:true,
                    isNew:false,
                    title:'【满3000减150】nova 9 系列',
                    intro:'',
                    newPrice:2599,
                    hasOldPrice:true,
                    oldPrice:2899,
                    showComment:true,
                    comments:1130,
                    favorableRate:91,
                    xsth:true,
                    fqmx:false,
                    zsjf:true,
                    pt:false,   
                }
            ],
            nav_list:['综合','最新','评论数','价格']
        }
    },
    methods: {
        showPopup() {
            this.show = true;
        },
        switch_view(){
            if(this.view==0){
                this.view=1
                // $('.result-list-wrap').css({});
            }else{
                this.view=0
            }
        }, 
        change(index){
            this.result_view = index
        } 
    },
    mounted(){
        
    },
}
</script>