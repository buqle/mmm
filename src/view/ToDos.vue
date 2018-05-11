<template>
    <div>
      <gettodos></gettodos>
      <curren-todos></curren-todos>
      <completed></completed>
      <ul class="uli">
        <li v-for="(item,index) in arr" @click="set(index)" :class="{'red':item.red,'red2':index==0}">
          <p>
            {{index}}
            <span>{{item.goodsName}}</span>
            <span>{{item.nowPoint}}</span>
          </p>
        </li>
      </ul>
      <ul>
        <li @click="all" cc="123" ref="classed">1</li>
        <li>2</li>
      </ul>
    </div>
</template>

<script>
    import Gettodos from '@/view/GetTodo';
    import CurrenTodos from '@/view/CurrenTodos';
    import Completed from '@/view/CompletedTodos'
    import index from "../router";
    export default {
      components:{Gettodos,CurrenTodos,Completed},
      created(){
        this.$http({
          url: `api/wap/index/WapgoodsAjax?pageNum=1&pageSize=15&showPage=1`,   //ES6语法，引入组件内的 route object（路由信息对象）
          method: 'get',
          params:{
            mdrender:'mmm'//参数
          },
        })
          .then( (response) => {
            //data格式下访问
            if(response.data.optResult=='true'){
              for(let i of response.data.list){
                this.$set(i,'red',false);
                console.log(i)
              }
                this.arr=response.data.list;

            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      data(){
        return{
          arr:[],
          pp:''
        }
      },
      computed:{

      },
      methods:{
        set(index,e){
          this.arr.map(function (v,i) {
            i==index?v.red=true:v.red=false
          })
        },
        all(){
          alert(this.$refs.classed.getAttribute('cc'))//获取dom绑定的属性

        }

      }
    }
</script>

<style scoped>
  .uli span{mr:20px;}
</style>
