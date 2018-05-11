<template>
    <div class="usert-body">
        <div class="usert-box1">
          <div flexcont class="flex-c1">
            <div aspectratio w-178-178 aspect-ratio="178/178">
              <div aspectratio-content>
                <img src="../assets/pics.png" alt="">
              </div>
            </div>
          </div>
          <p>用 户 名</p>
          汇  聚 爱 心&nbsp;&nbsp;分 担 风 险
        </div>
        <ul class="usert-box2" flexcont>
          <li>
            <router-link to="/recharge">充&nbsp;&nbsp;值</router-link>
          </li>
          <li>
            <router-link to="/help">互助申请</router-link>
          </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "usert"
    }
</script>

<style lang="postcss">
  .usert-body{
    width: 100vw;
  }
  .usert-box1{
    background: #1e7de7;padding-top: 56px;padding-bottom: 46px;font-size: 24px;color: #fff;text-align: center;
  }
  [w-178-178]{
    width: 180px;
  }
  [w-178-178]{aspect-ratio:'180:180'}
  [w-178-178] img{width: 100%;height: 100%;border: 3px solid #fff;border-radius: 50%;}
  .flex-c1{justify-content: center;}
  .usert-box1 p{margin-top:26px;}
  .usert-box2{background: #cacaca;pb:12px;
    li{width: 50vw;background:#ffc832;p:26px 0;ta:center;a{c:#fff;fz:39px;}}
    li:nth-child(2){bg:#2aa9f9}
  }


</style>
