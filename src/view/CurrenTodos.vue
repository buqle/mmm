<template>
  <div>
    <h2 v-if="todos.length>0">列表长度为{{todos.length}}</h2>
    <ul>
      <li v-for="todo in todos">
        {{todo.body}}
        <p>
          <button class="el-button el-button--success" @click="edit(todo)">
            修改
          </button>
          <button class="el-button el-button--success" @click="complete(todo)">
            修改状态
          </button>
          <button class="el-button el-button--success" @click="remove(todo)">
            删除本条
          </button>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        methods:{
          edit(todo){
            this.$store.dispatch('editTodo',todo)
          },
          complete(todo){
            this.$store.dispatch('completeTodo',todo)
          },
          remove(todo){
            //console.log(todo.body)
            this.$store.dispatch('removeTodo',todo);

          }
        },
      computed:{
          todos(){
            return this.$store.getters.todos
          }
      }
    }
</script>

<style scoped>

</style>
