import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{ //初始状态
      todos:[],
      newTodo:''
  },
  mutations:{ //需要做的事件
    GET_TODO(state,todo){
      state.newTodo=todo
    },
    ADD_TODO(states){
      states.todos.push({
        body:states.newTodo,
        completed:false
      })
    },
    EDIT_TODO(state,todo){
      console.log(state.todos)
      var todos=state.todos;
      todos.splice(todos.indexOf(todo),1);
      state.todos=todos;
      state.newTodo=todo.body
    },
    REMOVE_TODO(state,todo){
      var todos=state.todos;
      todos.splice(todos.indexOf(todo),1)
    },
    COMPLETE_TODO(state,todo){
      todo.completed=!todo.completed
    },
    CLEAR_TODO(state){
      state.newTodo=''
    }
  },
  actions:{  //来触发分发mutations的事件
    getTodo({commit},todo){
      commit('GET_TODO',todo)
    },
    addTodo({commit},todo){
      commit('ADD_TODO',todo)
    },
    editTodo({commit},todo){
      commit('EDIT_TODO',todo)
    },
    removeTodo({commit},todo){
      commit('REMOVE_TODO',todo)
    },
    completeTodo({commit},todo){
      commit('COMPLETE_TODO',todo)
    },
    clearTodo({commit}){
      commit('CLEAR_TODO')
    }
  },
  getters:{
    newTodo:state=>state.newTodo,
    todos:state=>state.todos.filter((todo)=>{
      return !todo.completed
    }),
    completeTodos:state=>state.todos.filter((todo)=>{
      return todo.completed
    })
  }


})
