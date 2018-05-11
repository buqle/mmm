<template>
  <div v-show="shows">
    <h2>modal</h2>
    <div>
      <slot name="act"></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "modal2",
      data(){
        return{
          shows:false
        }
      }
    }
</script>

<style scoped>

</style>
