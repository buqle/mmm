<template>
<div>
  <!--v-show不支持template语法-->
  <div v-for="(item,index) in list">
    <template v-if="nowtime<item.endtime">
      <p>{{item.codes}}</p>
      <p>{{item.name}}</p>
      <p>{{item.tel}}</p>
    </template>
    <template v-else-if="nowtime>item.endtime">
      <button @click="item.arrow=!item.arrow">按钮</button>
      <p>{{item.codes}}</p>
      <div v-show="item.arrow">

        <p>{{item.name}}</p>
        <p>{{item.tel}}</p>
      </div>
    </template>
  </div>
  <p>{{mess}}</p>
  <div @click="change" :class="result?'on':'off'">
    {{result?'开':'关'}}
  </div>


  <Dmeos @alert="Alerts" :mess="mess" :result="result" >{{mess}}</Dmeos>
</div>
</template>

<script>
  import Dmeos from '@/view/Dmeos'
    export default {
      components:{Dmeos},
        created(){
          let myDate=new Date();
          let year=myDate.getFullYear();
          let month=myDate.getMonth();
          let day=myDate.getDate();//获取当前日 1-31
          if(day<10){
            day='0'+day
          };
          if(month<10){
            month='0'+month
          }
          this.nowtime=`${year}-${month}-${day}`
          var list=[
            {endtime:'2018-01-20',codes:'123321456',tel:'15922403210',arrow:false,name:'Susan'},
            {endtime:'2018-05-31',codes:'110110110',tel:'15922403211',arrow:false,name:'Bob'},
            {endtime:'2018-04-9',codes:'1191191191',tel:'15922403213',arrow:false,name:'Ari'}
          ]
          this.list=list

        },
        data(){
          return{
            nowtime:'',
            list:[],
            mess:0,
            result:true,
            names:'mmmm'
          }
        },
      methods:{
          Alerts(val){
            this.mess=val
          },
        change(){
            this.result=!this.result
        }
      }
    }
</script>

<style scoped>
  div{margin-top: 10px;}
</style>
