<template>
  <div>
    <div style="display: flex;" v-for="el in filterArray">
      <label id="lble">
        <input type="checkbox" style="width: 15px;" :value=el
          v-on:change="handleEvent($event)">
        {{ el }}</label>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props:{
    searchValue2:String,
  },
  data: function () {
    return {
      locationArray: [],
      valuees: "",
      x: 0,
      dataAarray:[],
    }
  },

  computed: {
    ...mapState(['Certifications']),
    ManufactureFilterLength() {
      if (this.Certifications && this.Certifications.filters.supplier_locations) {
          this.dataAarray=this.Certifications.filters.supplier_locations;
        return this.Certifications.filters.supplier_locations.length;
      }
      return 0;
    },
    filterArray() {
      return this.dataAarray.filter((elemnt) => {
        return elemnt.match(this.searchValue2);
      });
    }
  },

  created() {
    this.$store.dispatch('fetchCertifications');
  },

  mounted() {
    setTimeout(()=>{
      this.$emit('locationLength', this.ManufactureFilterLength);
    },1000)
   
  },
  methods: {
    handleEvent(event) {
      const value = event.target.value;
      const check = event.target.checked;
      if (check) {
        this.locationArray.push(value);
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
        const index = this.locationArray.indexOf(value);
        if (index !== -1) {
          this.locationArray.splice(index, 1);
          this.valuees = "";
          for (var i = 0; i < this.locationArray.length; i++) {
            if (i == 0) {
              this.valuees += this.locationArray[i];
            }
            else {
              this.valuees += "," + this.locationArray[i];
            }
          }
          console.log(this.valuees, "after Value");
        }
      }
      this.$store.commit('getLocationFilter', this.valuees);
      this.$store.dispatch('fetchData');
      console.log(this.locationArray, "final array");
    },
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