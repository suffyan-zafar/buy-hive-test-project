<template>
  <div style="margin-top: 30px;margin-left: 20px;">
    <div style="display: flex;" v-for="index in SupplierFilterLength ">
      <label id="lble">
        <input type="checkbox" style="width: 15px;" :value=index
          v-on:change="handleEvent($event)">
        {{index }}</label>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props:{
    searchValue3:String,
  },
  data: function () {
    return {
      dataArray: [],
      supplierCheckValues: [],

      valuees: "",
      x: 0,
    }
  },

  computed: {
    ...mapState(['Certifications']),
    SupplierFilterLength() {
      if (this.Certifications && this.Certifications.filters.supplier_certification) {
      
        return this.Certifications.filters.supplier_certification.filter((element)=>{
          return element.match(this.searchValue3);
        });
      }
      return 0;
    },
  },

  created() {
    this.$store.dispatch('fetchCertifications');
  },

  methods: {
    handleEvent(event) {
      console.log(event, "event");
      const value = event.target.value;
      const check = event.target.checked;
      if (check) {
        this.supplierCheckValues.push(value);
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
        const index = this.supplierCheckValues.indexOf(value);
        if (index !== -1) {
          this.supplierCheckValues.splice(index, 1);
          this.valuees = "";
          for (var i = 0; i < this.supplierCheckValues.length; i++) {
            if (i == 0) {
              this.valuees += this.supplierCheckValues[i];
            }
            else {

              this.valuees += "," + this.supplierCheckValues[i];
            }
          }
        }
      }
      this.$store.commit('getSupplierCertificatesValue', this.valuees);
      this.$store.dispatch('fetchData');
    }
  }
}
</script>

<style scoped>
#lble {
  font-size: 15px;
  line-height: 30px;
  cursor: pointer;
}
</style>