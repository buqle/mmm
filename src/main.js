// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//安装element步骤
//1.npm run dev项目后  npm i element-ui -S
//2.npm install style-loader --save-D npm install css-loader --save-D npm install file-loader --save-D
//3.按需要引入组件 npm install babel-plugin-component -D
//修改 .babelrc的plugins
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'

import router from './router';
import store from './store/store';
import axios from 'axios';//cnpm install axios -S
Vue.prototype.$http = axios;
import _ from 'lodash';
Vue.prototype._ = _;
Vue.config.productionTip = false


Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  render:h=>h(App)

})
