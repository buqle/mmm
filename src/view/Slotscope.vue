<template>
    <div>
      <slot text="hello from  child"></slot>
      <h2 style="margin-top: 40px;">使用$refs来访问ref 这样可以DOM元素</h2>
     <div class="refs">
       <p>{{mess}}</p>
       <button ref="buttonme" @click="cbutton">点击</button>
     </div>
      <ul>
        <li v-for="n in 10" ref="num">{{n}}</li>
      </ul>
      <div class="buttons">
        <button @click="toggleModal('newitem')">添加列表</button>
        <button  @click="toggleModal('confirms')">删除列表</button>
      </div>
     <Modal2 ref="newitem">
       <p slot="act">这是新加的</p>
     </Modal2>
      <Modal2 ref="confirms"><p slot="act">来自xx的一条消息</p></Modal2>
    </div>
</template>

<script>
  import Modal2 from '@/view/Modal2'
    export default {
      components:{Modal2},
        name: "slotscope",
        data(){
          return{
            mess:'牙疼啊啊啊',
            shows:true
          }
        },
      methods:{
          cbutton(){
            console.log(this.$refs.num)
            this.$refs.buttonme.innerText=this.mess;
          },
        toggleModal(modal){
            this.$refs[modal].shows=!this.$refs[modal].shows
        }
      }
    }
</script>

<style scoped>

</style>
