import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import { focus } from "vue-focus";

Vue.config.productionTip = false;

Vue.mixin({
  directives: { focus }
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
