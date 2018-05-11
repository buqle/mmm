<template>
<div>
  <input type="text" class="el-input__inner" :value="newTodo" @change="getTodo" id="input1">
  <button class="el-button el-button--primary" @click="addTodo">添加</button>
</div>

</template>

<script>
    export default {
      data(){
        return{
          totext:''
        }
      },
      methods:{
        getTodo(e){
          this.$store.dispatch('getTodo',e.target.value)
        },
        addTodo(){
          var input=document.getElementById('input1').value
          if(input==''){
            this.$alert('请填写添加内容', '标题名称', {
              confirmButtonText: '确定'/*,
              callback: action => {
                this.$message({
                  type: 'info'
                });
              }*/
            });
            return false;
          }

          this.$store.dispatch('addTodo');
          this.$store.dispatch('clearTodo')
        }
      },
      computed:{
         newTodo(){
           return this.$store.getters.newTodo
        }
      }
    }
</script>

<style scoped>

</style>
