<template>
    <div :class="[arrSta]" v-show="shows">
      <el-container>
        <el-header><i class="el-icon-arrow-left" @click="$router.history.go(-1)"></i>Header</el-header>
      </el-container>

      <button @click="close">&times;</button>
      <slot></slot>
    </div>
</template>

<script>

    export default {

       data(){
         return{
            shows:true
         }
       },
      computed:{
         arrSta(){
           return this.sta2
         }
      },
      methods:{
         close(){
           this.shows=!this.shows
         }
      }
    }
</script>

<style scoped>

</style>
