<template>
  <div class="searchBar">
    <div class="categories">
      <span class="icon"><font-awesome-icon icon="table" /></span>
      <p id="title">categories</p>
    </div>
    <div class="search">
      <div class="inp">
        <input type="text" id="field" placeholder="What are you looking for?" v-model="searchValue">
      </div>
      <div class="dropdown">
        <div class="rightboarder">
        </div>
        <div class="selector">
          <select name="opt" id="op" v-model="selectedOpt">
            <option value="" id="single">All Categories</option>
            <option :value=categories.categories[index-1].category_name id="opt2" v-for="index in count">{{
              categories.categories[index-1].category_name }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="buton">
      <button id="sub" v-on:click="handleCLickEvent">Search </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: function () {
    return {
      selectedOpt: "",
      searchValue: "",
    }
  },
  methods: {
    handleCLickEvent() {
      this.$store.commit('getSearchValuee', this.searchValue);
      this.$store.commit('getCategoryValue', this.selectedOpt);
      setTimeout(() => {
        this.$store.dispatch('fetchData');
      }, 1000)
    }
  },

  computed: {
    ...mapState(['categories']),
    count() {
      if (this.categories && this.categories.categories) {
        return this.categories.categories.length;
      }
      return 0;
    }
  },

  created() {
    this.$store.dispatch('fetchCategory');
  },
}
</script>

<style scoped>
.searchBar {
  height: 80px;
  background-color: rgba(242, 242, 242, 1);
  margin-left: 220px;
  margin-right: 210px;
  margin-bottom: 20px;
  border-radius: 10px;
  display: flex;
}

.categories {
  padding-top: 20px;
  width: 10%;
  display: flex;
  justify-content: space-evenly;
  padding-left: 10px;

}

.icon {
  font-size: 30px;
  color: #00b2c9;
}

#title {
  font-size: 17px;
  text-transform: capitalize;
  position: relative;
  top: 6px;
}
.search {
  background-color: white;
  margin: 12px;
  width: 80%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 50px;
}

.inp {
  width: 75%;
  position: relative;
  top: 7px;
  left: 20px;
}

#field {
  width: 97%;
  padding: 10px;
  font-size: 17px;
  border: none;
}

#field:focus {
  outline: none;
}
.dropdown {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
.rightboarder {
  position: relative;
  top: 5px;
  left: 5px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  height: 40px;
}
.selector {
  position: relative;
  top: 15px;
  left: 30px;
}

#op {
  font-size: 17px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

#op::-webkit-inner-spin-button,
#op::-webkit-outer-spin-button {
  font-size: 50px;
}

#single {
  color: rgba(0, 0, 0, 0.2);
}

#opt2 {
  color: black;
}

.buton {
  width: 15%;
  position: relative;
  justify-content: center;
  text-align: center;
}

#sub {
  font-size: 20px;
  width: 140px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 50px;
  background-color: #00b2c9;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

</style>