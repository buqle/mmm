<template>
    <div>
      <ul>
        <li v-for="(item,index) in meberlist" @click="meberDetail(index)">
          <span>{{item.name}}</span>
          <span>{{item.age}}</span>
          <span>{{item.joinTime}}</span>

        </li>
      </ul>
      <ul>
        <!--value表示键值 key表示键名 index表示索引值-->
        <li v-for="(vaule,key,index) in meberDetel">{{index}} {{key}}</li>
        <li v-for="(value,key,index) in meberDetel">{{value}}</li>
      </ul>

      <Getdatas v-for="itemlist in getdatas" :list="itemlist"></Getdatas>
      <ul>
        改变数组
        <li v-for="(item,index) in arr" v-text="`${item}----${index}`"></li>
        <li v-for="(item,index) in filter" v-text="`${item}---${index}`"></li>
        <li><button @click="randomlist">重置数组</button></li>
      </ul>

      <div>
        过滤器 反转字符
        <input type="text" v-model="messages">
        <p>{{messages|reverstring}}</p>
      </div>
      <textarea v-model="handlercont" maxlength="totalcont"></textarea>
      <h2>计算属性</h2>
      <p v-html="newtotal"></p>
      <!--计算属性不单单是只能返回 还可以设置-->
      <input type="text" class="el-input__inner" v-model="temName">
      <button  type="button" class="el-button el-button--success" @click="setName">保存</button>
      <p>Full Name:{{fullname}}</p>
      <p>First Name:{{firstname}}</p>
      <p>Last Nme:{{lastname}}</p>

      <div>
        <h1>比赛时间:{{times}}S</h1>
        <h2>直播实况:{{result}}</h2>
        <p>
          中国队进球数:{{team.china}}
          <button  type="button" class="el-button el-button--warning" @click="team.china++">中国队进球</button>
        </p>

        <p>
          韩国队进球数:{{team.korea}}
          <button  type="button" class="el-button el-button--warning" @click="team.korea++">韩国队进球</button>
        </p>
      </div>


      <div style="margin-top: 20px">
        <!--vue观察者-->
        <h1>比赛时间:{{times2}}</h1>
        <h1>直播播报:{{result2}}</h1>
        <p>
          <span>中国队进球数{{team2.china}}</span>
          <button @click="team2.china++"  type="button" class="el-button el-button--warning" >中国队进球</button>
        </p>
        <p>
          <span>韩国队进球数{{team2.korea}}</span>
          <button @click="team2.korea++"  type="button" class="el-button el-button--warning" >韩国队进球</button>
        </p>
      </div>

    </div>
</template>

<script>
  import Getdatas from '@/view/Getdatas'
    export default {
        name: "getdata",
      components:{Getdatas},
        created(){//实例被创建后执行的代码
          this.meberlist=[
            {name:'互助1',age:22,joinTime:2018-3-1,id:33},
            {name:'互助2',age:23,joinTime:2018-3-2,id:2}
          ];
          this.meberDetel={
            name:'mmm',
            adders:'滨湖欣园',
            tel:'1592243214'
          };
          this.getdatas=[
            {name : 'ziksang1' , startTime : '1小时前' , content:'aaaaaaaaa',good : 1},
            {name : 'ziksang2' , startTime : '2小时前' , content:'bbbbbbbbb',good : 2},
            {name : 'ziksang3' , startTime : '3小时前' , content:'ccccccccc',good : 3},
            {name : 'ziksang4' , startTime : '4小时前' , content:'ddddddddd',good : 4}
          ];
          let time=setInterval(()=>{
            this.times++
            if(this.times==30*60){
              clearInterval(time)
            }
          },1000);
          let times2=setInterval(()=>{
            this.times2++;
            if(this.times2==30*80){
              clearInterval(times2)
            }
          },1000)
        },
      data(){
          return{
            meberlist:[],
            meberDetel:{},
            getdatas:[],
            arr:['1','2','3','4'],
            messages:'',
            handlercont:'',
            totalcont:200,
            shows:true,
            temName:'',firstname:'',lastname:'',
            team:{
              china:0,korea:0
            },
            times:0,result2:'',
            team2:{
              china:0,korea:0
            },
            times2:0
          }
      },
      watch:{
        times2(val,oldval){
          if(val<90){
            if(this.team2.china>this.team2.korea){
              this.result2='中国队领先'
            }else if(this.team2.china<this.team2.korea){
              this.result2='韩国队领先'
            }else{
              this.result2='双方僵持'
            }
          }else {
            if(this.team2.china>this.team2.korea){
              this.result2='中国队胜出'
            }else if(this.team2.china<this.team2){
              this.result2='韩国队胜出'
            }else {
              this.result2='双方打平'
            }
          }
        },
        team2(val,oldval){
          if(this.times2<90){
            if(val.china>val.korea){
              this.result2='中国队领先';
             // console.log(oldval.china)
            }else if(val.china<val.korea){
              this.result2='韩国队领先'
            }else {
              this.result2='双方僵持'
            }
          }else {
            if(val.china>val.korea){
              this.result2='中国队胜出'
            }else if(val.china<val.korea){
              this.result2='韩国队胜出'
            }else {
              this.result2='双方打成平手'
            }
          }
        }
      },
      computed:{
        filter(){
          return this.arr.filter((i)=>{
            return i%2
          })
        },
        //计算字数
        newtotal(){
          if(this.handlercont.length>this.totalcont){
            return `不能输入了`
          }else {
            return '还能输入'+parseInt(this.totalcont-this.handlercont.length)+'字'
          }

        },
       //计算并设置名字
        fullname:{
          get(){
            return `${this.firstname} ${this.lastname}`
          },
          set(newVal){
            let names=newVal.split(' ');
            this.firstname=names[0];
            this.lastname=names[names.length-1]
          }
        },
        result(){
          if(this.times<90*60){
            if(this.team.china>this.team.korea){
              return '中国队领先'
            }else if(this.team.korea>this.team.china){
              return '韩国队领先'
            }else {
              return '双方僵持'
            }
          }else {
            if(this.team.china>this.team.korea){
              return '中国队成为赢家'
            }else if(this.team.korea>this.team.china){
              return '韩国队成为赢家'
            }else {
              return '双方打成平局'
            }
          }
        }

      },
      methods:{
          meberDetail(index){
            sessionStorage.id=this.meberlist[index].id;
            console.log(sessionStorage.id)
          },
        randomlist(){
          this.arr=this.arr.map(i=>{
            return i+Math.round(Math.random()*9+1)
          })
        },
        setName(){
          this.fullname=this.temName
        }
      },
      filters:{
          reverstring(val){
            if(!val){
              return '不能为空'
            };
            val=val.split('').reverse().join('');
            return val
          }
      }
    }
</script>

<style scoped>

</style>
