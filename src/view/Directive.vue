<template>
  <div>
    <!--基本用法-->
    <!--<p v-tack="70">自定义</p>-->
    <p v-tack="{top:'100',left:'100'}">多个参数的传递使用</p>
    <p v-tacks:left="80">传参区分</p>
    <button type="button" class="el-button el-button--warning" @click="update" >更新</button>
    <button type="button" class="el-button el-button--warning" @click="uninstall" >卸载</button>
    <button type="button" class="el-button el-button--warning" @click="install" >安装</button>
    <hellos :mess="mess" v-if="mess"></hellos>
  </div>
</template>

<script>
  /*import Vue from 'vue' 全局指令*/
 /* Vue.directive('tack',{
    bind(el,binding,vnode){//使用bind固定的三个参数
      //binding是一个对象 有name,value,oldValue,expression,arg,modifiers这个几个属性
      //el指令所绑定的元素，可以用来直接操作DOM
      //vnode vue编译生成的虚拟节点
      //bingding和vnoded
      el.style.position='fixed';
      el.style.top=binding.value+'px';
      el.style.left=binding.value+'px'
    }
  });
  Vue.directive('tacks',{
    bind(el,binding,vnode){
      el.style.pos='fixed';
      const s=(binding.arg=='left'?'left':top);
      el.style[s]=binding.value+'px';
      el.style.position='fixed';

    }
  })*/
    import Hellos from "./Hellos";

  export default {
      //局部指令
    components: {Hellos},
    directives:{
        tack:{
          bind(el,binding,vnode){
            el.style.position='fixed';
            el.style.top=binding.value.top+'px';
            el.style.left=binding.value.left+'px'
          }
        },
        tacks:{
          bind(el,binding,vnode){
            el.style.position='fixed';
            const s=(binding.arg=='left'?'left':top);
            el.style[s]=binding.value+'px'
          }
        }

      },
      data(){
        return{
          shows:false,
          mess:'hello vue'
        }
      },
    methods:{
      update(){
        this.mess='进行了更新'
      },
      uninstall(){
        this.mess=''
      },
      install(){
        this.mess='进行了安装'
      }
    }
    }
</script>

<style scoped>

</style>
