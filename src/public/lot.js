import Vue from 'vue'
import router from '../router'
Vue.use(router)

export default new router.top({
  goback(){
    this.$router.go(-1)
  }
})
