<template>
<div>
  <Slots2 v-for="sta in staus" :sta2=sta>
    <div>
      <h4>使用slot把</h4>
      <p>{{sta}}</p>
    </div>
  </Slots2>
  <Modal v-show="toggleModal">
    <div>
      <p @click="closeModal">&times;</p>
      <h5>Modal Header</h5>
    </div>
  </Modal>
  <button @click="showModal">点我</button>
  <h3>作用域插槽具有slot-scope的template模板是必须存在的，作用域插槽可以获取子组件传来的props</h3>
  <Scope>
    <template slot-scope="props">
      <span>{{props.text}}</span>
    </template>
  </Scope>
</div>
</template>

<script>
  import Slots2 from '@/view/Slots2';
  import Modal from '@/view/Modal';
  //作用域插槽
  import Scope from '@/view/Slotscope'
    export default {
       components:{Slots2,Modal,Scope},
      data(){
         return{
           staus:['info','success','danger','warning'],
           toggleModal:false
         }
      },
      methods:{
         showModal(){
           this.toggleModal=true
         },
        closeModal(){
           this.toggleModal=!this.toggleModal
        }
      }
    }
</script>

<style scoped>

</style>
