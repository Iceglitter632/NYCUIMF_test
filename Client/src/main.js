import Vue from "vue";
import App from "./App.vue";
import router from "./Router";
import Argon from "./plugins/argon-kit";
import Transitions from "vue2-transitions";
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(Transitions);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
