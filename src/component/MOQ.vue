<template>
  <div>
    <p id="MOQ">MOQ</p>
    <input type="number" placeholder="Less Than" id="inputtt" v-model="moq_value" v-on:keyup="handleKeyUp">
  </div>
</template>

<script>
export default {

  data: function () {
    return {
      moq_value: "",
    }
  },

  methods: {
    handleKeyUp() {
      console.log(this.moq_value, "moqvalue");
      this.$store.commit('setMoq', this.moq_value);
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

#inputtt {
  margin-top: 15px;
  padding: 12px;
  width: 19rem;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(242, 242, 242, 1);
  text-align: center;
  margin-left: 20px;
  padding-right: 30px;
}
#inputtt:focus {
  outline: rgba(0, 0, 0, 0.4);
}
#inputtt::-webkit-inner-spin-button,
#inputtt::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

@media (max-width: 550px) {
  #inputtt {
      width: 90%;

}
#MOQ{
  width: 90%;
    }

}
@media (max-width: 968px) {
  #inputtt {
      width: 90%;

}
}
</style>