<template>
  <div class="user-list">
   <!-- <slot>111</slot>  此标签为vue中的模板插槽 作用为设置后会显示模板中分发的内容 不设置分发内容无效-->
    <ul class="user-list__con1"  flexcont>
      <li flexcont>
        <div aspectratio w-110-110 aspect-ratio="110/110">
          <div aspectratio-content>
            <!--<router-link to="/home/foo/order">子路由调用-->
            <router-link to="/order">
            <img src="../assets/card.png" alt="">
            </router-link>
          </div>
        </div>
        我的订单
      </li>
      <li flexcont>
        <div aspectratio w-110-110 aspect-ratio="110/110">
          <div aspectratio-content>
            <router-link to="/data">
            <img src="../assets/card.png" alt="">
            </router-link>
          </div>
        </div>
        我的互助
      </li>
      <li flexcont>
        <div aspectratio w-110-110 aspect-ratio="110/110">
          <div aspectratio-content>
            <router-link to="/slots">
              <img src="../assets/card.png" alt="">
            </router-link>
          </div>
        </div>
        插槽
      </li>
    </ul>
    <ul class="user-list__con1"  flexcont>
      <li flexcont>
        <div aspectratio w-110-110 aspect-ratio="110/110">
          <div aspectratio-content>
            <!--<router-link to="/home/foo/order">子路由调用-->
            <router-link to="/vshows">
              <img src="../assets/card.png" alt="">
            </router-link>
          </div>
        </div>
        列表
      </li>
      <li flexcont>
        <div aspectratio w-110-110 aspect-ratio="110/110">
          <div aspectratio-content>
            <!--<router-link to="/home/foo/order">子路由调用-->
            <router-link to="/todos">
              <img src="../assets/card.png" alt="">
            </router-link>
          </div>
        </div>
        VUEX的列表
      </li>
      <li flexcont>
        <div aspectratio w-110-110 aspect-ratio="110/110">
          <div aspectratio-content>
            <!--<router-link to="/home/foo/order">子路由调用-->
            <router-link to="/tives">
              <img src="../assets/card.png" alt="">
            </router-link>
          </div>
        </div>
        自定义组件
      </li>
      <li flexcont>
        <div aspectratio w-110-110 aspect-ratio="110/110">
          <div aspectratio-content>
            <!--<router-link to="/home/foo/order">子路由调用-->
            <router-link to="/tweet">
              <img src="../assets/card.png" alt="">
            </router-link>
          </div>
        </div>
        for循环
      </li>
      <li flexcont>
        <div aspectratio w-110-110 aspect-ratio="110/110">
          <div aspectratio-content>
            <!--<router-link to="/home/foo/order">子路由调用-->
            <router-link to="/actives">
              <img src="../assets/card.png" alt="">
            </router-link>
          </div>
        </div>
        活动
      </li>
    </ul>
  </div>
</template>

<script>
    import Slots from "./Slots";

    export default {
      components: {Slots},
      name: "user-list"
    }
</script>

<style lang="postcss">
  /*命名格式 生成search-form search-form__text-field*/
  @svg 1px-border {
    w: 1px;
    @rect {
      fill: var(--color, black);
      width: 100%;
      height: 100%;
    }
  }
  @c user-list{

    @d con1 {

    }

  }
  .user-list{
    bg:#fff;
    .user-list__con1{

        [w-110-110]{w:110px;img{size:100% 100%;}mb:18px;}
        [w-110-110]{aspect-ratio:'110:110'}
        li{
          flex-grow: 1;bdr:1px solid transparent;border-image: svg(1px-border param(--color #cacaca)) 2 2 stretch;p:52px 0 22px 0;
          flex-direction:column;justify-content: center;align-items: center;fz:24px;lh:62px;
        }
    }
  }
</style>
