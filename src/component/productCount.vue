<template>
  <div class="secodsection">
    <div class="left">
      <p id="product">Products <span id="totalProduct"> ({{ item }} Products)</span></p>
      <p id="buy">Buy</p>
    </div>
    <div class="right">
      <p id="p1">Placing bulk orders on BuyHive is safe & easy.</p>
      <strong id="p2">Click to learn how it works!</strong>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['data']),

    item() {
      if (this.data && this.data.products) {
          this.$emit('total_results',  this.data.total_results);
        return this.data.total_results;
      }
      return 0;
    }
  },

  created() {
    this.$store.dispatch('fetchData');
  }
}
</script>

<style scoped>
.secodsection {
  height: 65px;
  margin-bottom: 20px;
  margin-left: 220px;
  margin-right: 210px;
  display: flex;
}

.left {
  width: 70%;
  display: flex;
}

#product {
  font-size: 20px;
  font-weight: 500;
  position: relative;
  top: 25px;
  width: 50%;
}

#totalProduct {
  color: rgba(0, 0, 0, 0.4);
  margin-left: 10px;
}

#buy {
  color: rgba(0, 0, 0, 0.4);
  position: relative;
  top: 25px;
  font-size: 20px;
}

.right {
  width: 30%;
  background-image: url('https://thebuyhive.com/buy/img/widgetBackground.27e78f0c.png');
  background-position: cover;
  background-repeat: no-repeat;
  border-radius: 10px;
  text-align: center;
  color: white;
}

#p1 {
  font-size: 16px;
  line-height: 35px;
}

#p2 {
  font-size: 17px;
  font-weight: 700;
}</style>