<template>
  <div>
    <div>
      <div style="display: flex;" v-for="(el, IND) in filterArray">
        <label id="lble">
          <input type="checkbox" name="checkbox" id="chk" :value=el v-on:click="handleEvent($event)">
          {{ el }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    searchvalue: String
  },
  data: function () {
    return {
      dataArray: [],
      checkValues: [],
      valuees: "",
      x: 0
    }
  },
  computed: {
    ...mapState(['Certifications']),

    ProductFilterLength() {
      if (this.Certifications && this.Certifications.filters.product_certification) {
        this.dataArray = this.Certifications.filters.product_certification;
        return this.dataArray.length;
      }
      return 0;
    },

    filterArray() {
      return this.dataArray.filter((elemnt) => {
        return elemnt.match(this.searchvalue);
      });
    }
  },

  created() {
    this.$store.dispatch('fetchCertifications');
  },
  
  mounted() {
    setTimeout(() => {
      this.$emit('ProductFilterLength', this.ProductFilterLength)
    }, 1000);
  },

  methods: {
    handleEvent(event) {
      const value = event.target.value;
      const check = event.target.checked;
      if (check) {
        this.checkValues.push(value);
        if (this.x == 0) {
          this.valuees += value;
          console.log(this.valuees, "in if");
          this.x++;
        }
        else {
          this.valuees += "," + value;
          console.log(this.valuees, "in else");
        }
      }
      else {
        const index = this.checkValues.indexOf(value);
        const ind = this.valuees.indexOf(value);
        if (index !== -1) {
          this.checkValues.splice(index, 1);
          this.valuees = "";
          for (var i = 0; i < this.checkValues.length; i++) {
            if (i == 0) {
              this.valuees += this.checkValues[i];
            }
            else {
              this.valuees += "," + this.checkValues[i];
            }
          }
        }
      }
      this.$store.commit('getCertificatesValue', this.valuees);
      this.$store.dispatch('fetchData');
    }
  },
}
</script>

<style scoped>
#lble {
  font-size: 15px;
  line-height: 30px;
  cursor: pointer;
}
#chk{
 width: 15px;
}
</style>