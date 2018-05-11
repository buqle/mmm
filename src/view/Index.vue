<template>
    <div>
      <ul flexcont>
      <li v-for="(item,index) in arr" :class="[item.act?actClass:'']" @click="add(arr,index)">
        <router-link :to="{path:item.paths}">
          {{item.text}}
        </router-link>

      </li>
      </ul>
    </div>
</template>

<script>
    export default {
      props:['shows'],
      created(){
        this.arr=[
          {
            text:'首页',
            act:true,
            paths:'/'
          },
          {
            text:'关于我们',
            act:false,
            paths:'/about'
          },
          {
            text:'用户中心',
            act:false,
            paths:'/home'
          }
        ]
      },
        data(){
          return{
            arr:[

            ],
            onClass:'onclass',
            actClass:'act'
          }
        },
      methods:{
          add(arr,index){
            arr.forEach(function (el) {
              el.act=false
            });//点击的时候把所有act都设置为false
            arr[index].act=true;
            //this.$emit('add',arr,index)
          }
      }
    }
</script>

<style scoped>
  ul{
    justify-content: space-around;
  }
</style>
