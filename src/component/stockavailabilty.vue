<template>
  <div>
    <p id="MOQ">Stock Availability</p>
    <div style="display: flex;margin-top: 15px;margin-left: 20px;">
      <input type="checkbox" id="ISO 9001"  style="width: 18px;" v-on:click="handleEvent($event)">
      <img src="https://thebuyhive.com/buy/img/usa.cbfe8d83.svg" style="width: 25px; margin-left: 20px;">
      <label for="ISO 9001" id="lble">In USA</label>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  methods:{
    handleEvent(event){
      console.log(event.target.checked, "dsa");
      this.$store.commit('setStockInUsa', event.target.checked)
      this.$store.dispatch('fetchData');
    }
  }
}
</script>

<style scoped>
#MOQ {
  margin-top: 30px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 300;
}

#lble {
  margin-left: 12px;
  font-size: 15px;
  line-height: 30px;
  cursor: pointer;
}
</style>