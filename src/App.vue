<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>
  import Header from '@/view/Index'
export default {
  components:{Header},
  data(){
    return{
      shows:true
    }
  }
}
</script>

<style>
  .fff{c:#fff;}
  ul, li {
    list-style: none outside none;
  }
  .clear{zoom:1;}
  .clear:after {
    content: "";
    display: block;
    clear: both;}
  a{td:none}
  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  textarea,
  p,
  blockquote,
  th,
  td,
  header,
  nav,
  section,
  article,
  aside,
  footer,
  figure,
  figcaption,
  menu,
  button {
    margin: 0;
    padding: 0;
  }
  html {
    margin: 0;
    padding: 0;
    height: 100vh;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: #f4f4f4;  font-family: "Helvetica Neue", "Microsoft Yahei", sans-serif;
    w:100vw;overflow-x: hidden;
  }
  * {
    box-sizing: inherit;

  &:before,
  &:after {
     box-sizing: inherit;
   }
  }
  img{content: normal!important;}
  [aspectratio]{
    position: relative;
  }
  [aspectratio]::before{
    content:'';display: block;width: 1px;margin-left: -1px;height: 0;
  }
  [aspectratio-content]{
    position: absolute;top:0;left: 0;
    right: 0;bottom: 0;width: 100%;height: 100%;
  }
  [flexcont]{display: flex;}

</style>
