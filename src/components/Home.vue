<template>
    <div class="grids">
      <Usert></Usert>
      <UserList><div>列表列表</div></UserList>
      <!--<router-link to="/list">list</router-link>
      <div aspectratio w-324-324 aspect-ratio="324/324">
        <div aspectratio-content>
          <img src="//gw.alicdn.com/imgextra/i1/642910327/TB26bQ_bb_0UKFjy1XaXXbKfXXa_!!642910327-0-beehive-scenes.jpg" alt="" width="100%" height="100%">
        </div>
      </div>-->

      <router-view></router-view>
    </div>
</template>

<script>
    import Usert from '@/view/Usert';
    import UserList from '@/view/UserList';
    export default {
       components:{
         Usert,UserList
       }
    }
</script>

<style scoped>
  [w-324-324]{
    width: 324px;
    background: #fff;
    overflow: hidden;
  }
  [w-324-324]{
    aspect-ratio:'324:324';/*容器的宽高比要单独写 不然会影响其他属性的解析*/
  }
</style>
