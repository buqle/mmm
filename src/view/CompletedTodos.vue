<template>
<div>
  <h4 v-if="completed.length>0">改了{{completed.length}}条状态</h4>
  <ul>
    <li v-for="todo in completed">
      {{todo}}
      {{todo.body}}
      <button class="el-button el-button--danger" @click="remove(todo)">删除</button>
    </li>
  </ul>
</div>
</template>

<script>
    export default {
       methods:{
         remove(todo){
           this.$store.dispatch('removeTodo',todo)
         }
       },
      computed:{
         completed(){
           return this.$store.getters.completeTodos
         }
      }
    }
</script>

<style scoped>

</style>
