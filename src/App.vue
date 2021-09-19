<template>
  <div id="app">
    <!--<router-link :to="{name:'main',params:{user: '黄海'}}">去主页</router-link>  --> <!--使用名字取跳转时需要进行数据绑定，否则数据不能像get一样直接放在地址后面-->
    <router-link to="/Main/黄海">发请求</router-link>      <!--to 属性里可以写path的路径值，也可以写给路由起的名字，
    该标签可以有多个属性，默认为路径。也可以携带参数的值，类似于springMVC里的restful风格-->
    <router-view></router-view>    <!--路由跳转必备标签，否则要跳转的组件不会显示-->
   <Login></Login>    <!--在主组件里显示登录组件，或者使用<Login/>单标签也可以显示-->

  </div>
</template>
<script>


  import Login from "./view/Login";

  export default {    //定义组件并且导出，相当于Vue.component={}；且导出
    name: 'App',
    components:{
      Login
    }
  }
</script>
