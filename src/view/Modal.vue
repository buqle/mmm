<template>
  <div class="modal">
    <div @click.stop>511
      <slot>4155</slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "modal",
        methods:{
          close(e){
            this.$emit('close')
          }
        }
    }
</script>

<style scoped>

</style>
