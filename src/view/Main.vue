<template>    <!--所有的标签必须只能放在一个根节点下面。即：template标签下面只能有一个根标签，所有的其他标签必须放在那个根标签里。否则报错-->
    <div>
      <h1>这是首页！</h1>
     <!-- <span>欢迎您，{{$route.params.user}}</span> --> <!--取出而是restful风格传递的值（路由里没有绑定props就得一步步取值）-->
      <span>欢迎您，{{user}}</span>  <!--在路由里绑定了props参数的值就可以直接使用该参数了-->
      <!--<span>{{user}}</span>-->  <!--也能用这种方法，直接取出绑定到组件props里的值，但前提是相应组件的路由必须有props：true-->
    </div>
</template>

<script>
    export default {
        name: "Main",
      props: ['user']   //数组里面也可以绑定多个参数，这样组件就能去多个值了
    }
</script>

<style scoped>

</style>
