<template>
  <div>
    <div style="display: flex;  margin-top: 30px; margin-bottom: 25px;" v-for="index in item">
      <div style="width: 100%; margin-right: 50px;height: 20vh;" id="card">
        <div style="display: flex;">
          <div>
            <img style="width: 150px;height: 150px; margin-top: 15px; margin-left: 25px; text-align: center;"
              :src=data.products[index-1].images[0].url>
          </div>
          <div>
            <p style="  padding-left: 15px; padding-top: 15px; ">
              {{ data.products[index-1].short_description }} </p>
            <p style="color:rgba(0, 0, 0, 0.4); padding-top: 10px; padding-left: 15px; font-size: 17px;">MOQ :
              {{ data.products[index-1].display_moq }}</p>
            <p style="font-weight: 800; padding-left: 15px; padding-top: 14px;font-size: 20px;">{{
              data.products[index-1].price }}
            </p>
            <button id="addToCart"
              style="margin-left: 15px; margin-top: 18px; box-sizing: border-box; border-radius: 10px; background-color: #00b2c9; border: none; color: white; padding:8px; width: 50%;">Add
              To Cart</button>
          </div>
        </div>
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
    }
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