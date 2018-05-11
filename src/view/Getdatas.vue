<template>
    <div>
      <p>{{list.name}}</p>
      <p>{{list.startTime}}</p>
      <p>{{list.content}}</p>
      <p>{{list.good}}</p>

    </div>
</template>

<script>
    export default {
        props:['list'],
      data(){
          return{

          }
      }
    }
</script>

<style scoped>

</style>
