<template>
  <div>
    <Load-more tip="正在加载" v-if="shows"></Load-more>
    <div>

    </div>
  </div>
</template>

<script>
  import {LoadMore} from 'vux'
    export default {
      components:{LoadMore},
      methods:{
        getData(){
          this.$http({
            url: `api/trade/loan/loanList/${this.$route.params.id}`,   //ES6语法，引入组件内的 route object（路由信息对象）
            method: 'get'
          })
            .then( (response) => {
              //data格式下访问
              this.arr=response.data.list;
              this.shows=false
              //console.log(response.data.list.activeName)
            })
            .catch(function (error) {
              console.log(error);
            });
        }

      },
      data(){
        return{
          shows:false,
          arrs:[]
        }
      },
      beforeMount(){
        this.shows=true;
        this.getData();
      },
      watch:{
        $route(){
          this.getData()
        }
      }
    }
</script>

<style scoped>

</style>
