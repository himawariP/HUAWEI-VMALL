import VueRouter from "vue-router";

import index from '../../components/index';
import first from '../../components/first';
import classify from '../../components/classify';
import login from '../../components/login';
import my from '../../components/my';
import xiangxi from '../../components/xiangxi';
import search from '../../components/search';
import shoppingCart from '../../components/shoppingCart';
import searchResult from '../../components/searchResult';



export default new VueRouter({
    routes:[
        {
            path:'/',
            component:first,
            redirect:'/index',
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/classify',
                    component:classify
                },
                {
                    path:'/shoppingCart',
                    component:shoppingCart
                },
                {
                    path:'/my',
                    component:my
                }
            ]
        },
        {
            path:'/login',
            component:login
        },
        {
            path:'/xiangxi',
            component:xiangxi
        },
        {
            path:'/search',
            component:search
        },
        {
            path:'/searchResult',
            component:searchResult
        },
        {
            path:'/*',
            redirect:'/'
        }
    ]
})