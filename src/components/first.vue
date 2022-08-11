<template>
    <main class="main-wrap">
        <router-view></router-view>
        <footer>
            <ul>
                <li>
                    <router-link to="/index">
                        <div class="footer-img-box">
                            <img src="../assets/img/home.png" alt="">
                            <img class="act" src="../assets/img/home-act.png" alt="">
                        </div>
                        <p>首页</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="classify">
                        <div class="footer-img-box">
                            <img src="../assets/img/classify.png" alt="">
                            <img class="act" src="../assets/img/classify-act.png" alt="">
                        </div>
                        <p>分类</p>
                    </router-link>
                </li>
                <!-- <li>
                    <router-link to="/find">
                        <div class="footer-img-box">
                            <img src="../assets/img/find.png" alt="">
                        </div>
                        <p>发现</p>
                    </router-link>
                </li> -->
                <li>
                    <router-link to="/shoppingCart">
                        <div class="footer-img-box">
                            <img src="../assets/img/shopping.png" alt="">
                            <img class="act" src="../assets/img/shopping-act.png" alt="">
                        </div>
                        <p>购物车</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/my">
                        <div class="footer-img-box">
                            <img src="../assets/img/my.png" alt="">
                            <img class="act" src="../assets/img/my-act.png" alt="">
                        </div>
                        <p>我的</p>
                    </router-link>
                </li>
            </ul>
        </footer>
    </main>
</template>



<style>
*{
    margin:0px;
    padding: 0px;
    list-style: none;
}
em,b,i{
    font-style: normal;
}

p{
    font-family: Arial, Helvetica, sans-serif, 'Lucida Grande', Verdana !important;
    font-size: 3.2vw;
}

::-webkit-scrollbar { 
  display: none;
}
</style>

<style scoped>
    .main-wrap footer{
        width: 100vw;
        position: fixed;
        left: 0px;
        bottom: 0px;
        z-index: 99999;
        background-color: #f0f3f5;
        height: 15vw;
        box-sizing: border-box;
        border-top: 0.1px solid #e6e6e6;
    }

    footer ul{
        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        padding: 2vw 3vw;
        box-sizing: border-box;
    }

    footer li{
        width: 25%;
        text-align: center;
        /* display: flex;
        flex-direction: row;
        flex-wrap: wrap; */
    }

    .footer-img-box{
        width: 100%;
    }

    .footer-img-box img{
        width: 5.0vw;
        /* height: 24px; */
        display: inline-block;
    }

    .footer-img-box img.act{
        display: none;
    }

    .router-link-active .footer-img-box img{
        display: none;
    }

    .router-link-active .footer-img-box img.act{
        display: inline-block;
    }

    footer p{
        width: 100%;
        color: rgb(0, 0, 0);
        opacity: 0.4;
        font-size: 3.6vw;
    }

    .router-link-active p{
        color: rgb(207, 10, 44);
        font-weight: 600;
        opacity: 1;
    }
</style>