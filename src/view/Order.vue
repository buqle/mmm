<template>
<div class="order-cont">
  <el-container>
    <el-header><i class="el-icon-arrow-left" @click="$router.history.go(-1)"></i>Header</el-header>
  </el-container>
  <div flexcont>
    <label>商品名称：</label>
    <el-input v-model="goods.name" placeholder="请输入商品名称"></el-input>
    <label>数量</label>
    <el-input v-model="goods.score" placeholder="请输入数量"></el-input>
    <el-button type="primary" :plain="true" @click="addFun">确定</el-button>
  </div>
  <ul>
    <li v-for="item in arrs"><span>{{item.name}}</span>  <span>{{item.score}}</span></li>
  </ul>
  <p>{{totalFun()}}</p>
  <div class="search">
    <input type="text" class="el-input__inner" v-model="search">
    <p v-if="isSear" class="el-icon-loading">
    </p>
    <ul v-else>
      <li v-for="item in result">{{item}}</li>
    </ul>
  </div>
  <div class="wacth">
    <span class="el-icon-plus" @click="addtotal"></span>{{accout}}<span class="el-icon-minus" @click="instotal"></span>
  </div>
</div>
</template>

<script>
  import {until} from '../public/app'
    export default {
        data(){
          return{
            goods:{
              name:'',
              score:'',
              total:0,
              average:0
            },
            arrs:[
              {
                name:'酸奶',
                score:10
              },
              {
                name:'苹果',
                score:10.8
              }
            ],
            search:'',
            result:[],
            isSear:false,
            accout:0
          }
        },
      watch:{
        search(query){ //观察者为函数 函数名一定要和监控的属性名称一致
          this.isSear=true;
          console.log(query);
          setTimeout(()=>{
            this.isSear=false
            if(query){
              this.result=['金希澈','闵爱子','穷相敏','李寿根'];
            }else {
              this.result=[];
            }
            //console.log(this)
          },500)

        },

       /* accout(val){
          alert(val)
        }*/
      },
      //动态添加观察者

      methods:{
          go(){
            /*until()*/
            this.$router.go(-1)
          },
          addFun(){
            if(this.goods.name==''||this.goods.score==''){
              this.$alert('请填写商品名称', {
                confirmButtonText: '确定'
              });
              return false
            }else {
              this.arrs.push({
                name:this.goods.name,
                score:this.goods.score
              });
              this.goods.name='';
              this.goods.score=''
            }

          },
          totalFun(){
            let totalArr=[];
            for(let i=0;i<this.arrs.length;i++){
              totalArr.push(parseInt(this.arrs[i].score))
            }
            this.goods.total=totalArr.reduce((x,y)=>{
              //reduce 计算数组元素相加后的总和
              return x+y
            });
            return this.goods.total
          },
          instotal(){
            this.accout--
          },
        addtotal(){
            this.accout++
        }

      }
    }
</script>

<style scoped>
  .order-cont [flexcont]{
    flex-direction: column;align-items: center;justify-content:space-around;h:300px;
  }
  .search .el-input__inner{}
</style>
