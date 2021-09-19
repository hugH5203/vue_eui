import Vue from "vue";
import router from "vue-router"
import Login from "../view/Login";
import Main from "../view/Main";
import notFound from "../view/404"

Vue.use(router);

export default new router({
  mode: "history",          //一般来讲，router有两种模式，hash与history模式，默认为hash模式，特点就是地址栏会自带#号且删除报错，把模式改为history就可以解决这个问题
  routes: [
    {
              name: 'main',   //一旦以这种形式写了路径就意味着以后的请求都得带参数，否则报404错误
              path: '/Main/:user',//明确指定了接收user参数，这个冒号必不可少，冒号后面代表就是携带的参数。要加多个参数可以这样 地址/:xx/:xx
              props:true,     //设置了这个，就将里面的数据如user与Main组件绑定起来了，在组件里就能直接调用了
              component: Main
  },
    {
              name: 'Login',
              path: '/Login',
              component: Login
    } ,
    //重定向到别处去
    {
              name: 'GoHome',
              path: '/',
              redirect: '/Login'           //重定向到登录页面
    },
    //编写404页面
    {
      name: '404',
      path: '*',              //只需要写*就可以了，根据优先级，*会在最后面在绝对匹配找不到后才会来这里,但是8080的默认页面也被404了
      component: notFound
    }
  ]
});
