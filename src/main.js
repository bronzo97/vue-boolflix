import Vue from 'vue'
import App from './App.vue'

// import Bootstrap
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./assets/scss/main.scss"

// Import Flags
import LangFlag from 'vue-lang-code-flags';
Vue.component('lang-flag', LangFlag);



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
