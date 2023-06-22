import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import { store } from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret,faUser , faShoppingBag, faShoppingBasket, faUsers,faUserPlus,faAngleDown,faBars ,faShoppingCart, faTable, faSearch,faBoxes, faBoxOpen,faAngleLeft, faAngleRight,faList, } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret,faUser,faShoppingBag,faShoppingBasket,faUsers,faUserPlus,faAngleDown,faBars,faShoppingCart, faTable,faSearch,faBoxes,faBoxOpen,faAngleLeft,faAngleRight,faList);
Vue.use(VueResource);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  store:store,
  el: '#app',
  render: h => h(App)
})
