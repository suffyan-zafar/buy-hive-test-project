<template>
  <div>
    <p id="price">Price</p>
    <div style="display: flex;">
      <div>
        <input type="number" placeholder="from" id="inputt" v-model="from" v-on:keyup="handleKeyUp">
        <span id="dolar">$</span>
      </div>
      <div class="bottombar"></div>
      <div>
        <input type="number" placeholder="to" id="inputt" v-model="to" v-on:keyup="handleKeyUp">
        <span id="dolar2">$</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      from: 0,
      to: 6900
    }
  },
  methods: {
    handleKeyUp() {
      console.log(this.from, "keyup");
      this.$store.commit('setMinPrice', this.from);
      this.$store.commit('setMaxPrice', this.to);
      this.$store.dispatch('fetchData');
    }
  },
  created() {
    this.$store.commit('setMinPrice', this.from);
    this.$store.commit('setMaxPrice', this.to);
  }
}
</script>

<style scoped>
#price {
  margin-top: 50px;
  margin-left: 20px;
  font-size: 18px;
  font-weight: 300;

}

#inputt {
  margin-top: 15px;
  padding: 12px;
  width: 8rem;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(242, 242, 242, 1);
  text-align: center;
  margin-left: 20px;
  padding-right: 30px;
  position: relative;
}

#inputt:focus {
  outline: rgba(0, 0, 0, 0.2);
}

#inputt::-webkit-inner-spin-button,
#inputt::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

#dolar {
  position: relative;
  margin-top: 30px;
  left: 130px;
  bottom: 31px;
  font-size: 12px;
}

.bottombar {
  margin-top: 25px;
  height: 10px;
  width: 1rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  margin-left: 15px;
}

#dolar2 {
  font-size: 12px;
  position: relative;
  left: 130px;
  bottom: 30px;

}
</style>