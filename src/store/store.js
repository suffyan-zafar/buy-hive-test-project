import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data: null,
    categories: null,
    Certifications: null,
    getSearchValue: "",
    getCategoryValue: "",
    page: "",
    sort_by: "",
    certificates: "",
    country: "",
    supplier_certificates: "",
    sideBarSearchValue: "",
    minPrice: "",
    maxPrice: "",
    moq: "",
    stock_in_use:"",
  },

  mutations: {
    setData(state, payload) {
      state.data = payload;
    },

    setCategories(state, payload) {
      state.categories = payload;
    },

    setCertifications(state, payload) {
      state.Certifications = payload;
    },

    // Get Values 
    getSearchValuee(state, payload) {
      state.getSearchValue = payload;
    },

    getCategoryValue(state, payload) {
      state.getCategoryValue = payload;
    },
    
    getCertificatesValue(state, payload) {
      state.certificates = payload;
    },

    getSupplierCertificatesValue(state, payload) {
      state.supplier_certificates = payload;
    },

    getLocationFilter(state, payload) {
      state.country = payload;
    },

    getsideBarSearchValue(state, payload) {
      state.sideBarSearchValue = payload;
    },

    setPageValue(state, payload) {
      state.page = payload;
    },

    setMinPrice(state, payload) {
      state.minPrice = payload;
    },

    setMaxPrice(state, payload) {
      state.maxPrice = payload;
    },

    setMoq(state, payload) {
      state.moq = payload;
    },

    setSortedBy(state, payload) {
      state.sort_by = payload;
    },

    setStockInUsa(state,payload){
      state.stock_in_use=payload
    }
  },

  actions: {

    fetchData({ commit, state }) {
      let baseUrl22='https://portal.thebuyhive.com/api/ecom/v2/search';
      let baseURL11='https://portal.thebuyhive.com/api/ecom/v2/search-filter';
      let baseURL33=`https://portal.thebuyhive.com/api/ecom/v2/categories`;
       let sort_by="default" 
       console.log(state.getCategoryValue , "gagagag");
      const params = {
        keyword: state.getSearchValue,
        category: state.getCategoryValue,
        page: state.page,
        sort_by: sort_by
      };
      if (state.certificates != "") {
        params.certificates = state.certificates
      }
      if (state.supplier_certificates != "") {
        params.supplier_certificates = state.supplier_certificates;
      }
      if (state.country != "") {
        params.country = state.country;
      }
      if (state.minPrice != "") {
        params.min_price = state.minPrice;
      }
      if (state.maxPrice != "") {
        params.max_price = state.maxPrice;
      }
      if (state.moq != "") {
        params.moq = state.moq;
      }
      if(state.stock_in_use!=""){
        params.stock_in_use=state.stock_in_use;
      }

      console.log(params, "paraaaa");
      var baseUrl1 = axios.get('https://portal.thebuyhive.com/api/ecom/v2/search-filter', {   
        params
      });
      var baseUrl2 = axios.get('http://localhost:8080/api/ecom/v2/search', {
        params: params
      });
      console.log(state.getSearchValue, "in fetch data");
      axios.all([baseUrl1, baseUrl2]).then(axios.spread((resp1, resp2) => {
        const data = resp2.data;
        console.log(resp2.data, "Data from APi");
        commit('setData', data);
      })).catch(err => {
        console.error(err, "from api");
      });
    },

    fetchCategory({ commit }) {
      axios.get('http://localhost:8080/api/ecom/v2/categories')
        .then(res => {
          const category = res.data;
          console.log(category, "from API categoty");
          commit('setCategories', category);
        }).catch(err => {
          console.error(err, "Error from Api");
        })
    },

    fetchCertifications({ commit }) {
      axios.get('http://localhost:8080/api/ecom/v2/search-filter')
        .then(res => {
          const Filter = res.data;
          console.log(Filter, "from APi product FIlter");
          commit('setCertifications', Filter);
        }).catch(err => {
          console.error(err, "Error from product FIlter");
        })
    },
  }
})