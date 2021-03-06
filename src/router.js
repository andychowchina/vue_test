import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import wg from "./components/wg.vue";
import zg from "./components/zg.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/zg",
        component: zg
    },
    {
        path: "/wg",
        component: wg
    }
]

var router =  new VueRouter({
    routes
})
export default router;