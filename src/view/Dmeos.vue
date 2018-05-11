<template>
    <div>
      <slot>0</slot>
      <button @click="butt">++</button>
      <div @click="changes" :class="result?'on':'off'">
          {{result?'开':'关'}}
      </div>
    </div>
</template>

<script>
  export default {
     data(){
       return{
        mess2:''
       }
     },
      props:['mess','result'],
      watch:{
       mess(val){
         console.log(val)
         this.mess2=val;

       }
      },
        methods:{
          butt(){
            this.mess2++;
            this.$emit('alert',this.mess2)
          },
          changes(){
            this.result=!this.result
          }
        }
    }
</script>

<style scoped>

</style>
