<template>
  <div>
    <div style="display: flex; flex-wrap: wrap ; margin-top: 30px; margin-bottom: 30px;">
      <div style="width: 28%; margin-right: 54px;height: 40vh;box-sizing: border-box; " id="card" v-for="el in item">
        <img style="width: 250px;height: 200px; margin: 20px; text-align: center;" :src=data.products[el-1].images[0].url>
        <p
          style="text-overflow: ellipsis; width: 300px; white-space: nowrap;overflow: hidden; padding-left: 15px;padding-right: 15px;">
          {{ data.products[el-1].short_description }} </p>
        <p style="color:rgba(0, 0, 0, 0.4); padding-top: 10px; padding-left: 15px; font-size: 12px;">MOQ :
          {{ data.products[el-1].display_moq }} </p>
        <p style="font-weight: 800; padding-left: 15px; padding-top: 10px;font-size: 20px;">{{ data.products[el-1].price
        }}
        </p>
        <button id="addToCart"
          style="margin-left: 15px; margin-top: 18px; border-radius: 10px; background-color: #00b2c9; border: none; color: white; padding:6px; width: 90%;">Add
          To Cart</button>
      </div>
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
        return this.data.products.length;
      }
      return 0;
    },
  },
  created() {
    this.$store.dispatch('fetchData');
  }
}
</script>

<style scoped>
#addToCart {
  display: none;
}

#card:hover {
  border-radius: 8px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2), -1px -1px 10px rgba(0, 0, 0, 0.2);
}

#card:hover #addToCart {
  display: block;
  cursor: pointer;

}
</style>