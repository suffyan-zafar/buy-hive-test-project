<template>
  <div style="display: flex;">
    <div class="icons">
      <a href="#" id="aTag" v-on:click="handleEvnt(true, 1)"><font-awesome-icon icon="boxes" id="firstIcon" /></a>
      <a href="#" id="aTag" v-on:click="handleEvnt(true, 2)"> <font-awesome-icon icon="list" id="secondIcon" /></a>
    </div>
    <div style="width: 15%; height: 5vh;  position: relative;">
      <ul>
        <li> <a href="#" style="text-decoration: none; position: relative;">Relevance <font-awesome-icon icon="angle-down"
              id="angle" /></a>
          <div id="sub-menu">
            <ul>
              <li id="li1" v-on:click="handleCLick('relevance')">Relevance</li>
              <li id="li2" v-on:click="handleCLick('latest')"> Latest </li>
              <li id="li3" v-on:click="handleCLick('price_low_to_high')">Price Low TO High</li>
              <li id="li4" v-on:click="handleCLick('price_high_to_low')">Price High To Low</li>
              <li id="li5" v-on:click="handleCLick('MOQ_low_to_high')">Moq Low to High </li>
              <li id="li6" v-on:click="handleCLick('ratings_high_to_low')">Rattings High to Low</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div style="margin-left: 65px; text-align: center; margin-top: 5px;">
      <button style="border: none;  border-radius: 50px;" @click="handleLeft">
        <font-awesome-icon icon="angle-left" id="angle1" /></button>
    </div>

    <div style="margin-left: 12px; text-align: center; margin-top: 6px;">
      <p
        style="background-color: rgba(0, 0, 0, 0.1); color: black; text-align: center; width: 50px; font-size: 25px; font-weight: 500; border-radius: 20px;">
        {{ incrementedValue }}
      </p>
    </div>
    <div style="margin-left: 5px; text-align: center; margin-top: 12px;">
      <p style="color: black; text-align: center;font-size: 16px; font-weight: 500; "> of {{ Math.floor(parseInt(total_Product_Results)/24) }} </p>
    </div>
    <div style="margin-left: 10px; text-align: center; margin-top: 5px;">
      <button style="border: none; border-radius: 50px;" @click="handleRight">
        <font-awesome-icon icon="angle-right" id="angle2" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props:{
    total_Product_Results:Number,
  },
  data: function () {
    return {
      incrementedValue: 1,
      pageValue:"",
    }
  },

  methods: {
    handleEvnt(value, value2) {
      console.log(value, "WHen click on button");
      console.log(value2, "WHen click on button");
      this.$emit("customevent", [value, value2]);
    },
    handleLeft() {
      if (this.incrementedValue >= 1) {
        if(this.incrementedValue==1){
          this.incrementedValue=1;
        }
        else{
          this.incrementedValue--;
        }
        console.log(this.left, "left value");
        this.$store.commit('setPageValue', this.incrementedValue);
        this.$store.dispatch('fetchData');
      }
    },
    handleRight() {
      this.incrementedValue++;
      console.log(this.incrementedValue, "left value");
      this.$store.commit('setPageValue', this.incrementedValue);
      this.$store.dispatch('fetchData');
    },
    handleCLick(event) {
      console.log(event, "me call howa");
      this.$store.commit('setSortedBy', event);
      this.$store.dispatch('fetchData');
    }
  },

}
</script>

<style scoped>
.icons {
  width: 59%;
  height: 5vh;
  font-size: 20px;
}

.icons #aTag {
  text-decoration: none;
  color: black;
}

#firstIcon {
  margin: 5px;
}

#secondIcon {
  margin: 5px;
}

#angle {
  margin-left: 60px;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

ul {
  list-style: none;
}

ul li {
  text-decoration: none;
  color: black;
  position: absolute;
  padding-left: 20px;
  padding-top: 5px;
  width: 11vw;
  border-radius: 18px;
  font-size: 17px;
  height: 40px;
  cursor: pointer;
}

ul li a {
  background-color: rgba(0, 0, 0, 0.1);
  color: black;
  width: 11vw;
  border-radius: 18px;
  font-size: 17px;
  height: 40px;
  padding: 10px;
}

ul li #sub-menu {
  display: none;
}

ul li:hover #sub-menu {
  margin-top: 12px;
  display: block;
  padding: 10px;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
  z-index: 101;
  padding: 0px;
  box-shadow: 2px 2px 1px 1px rgba(0, 0, 0, 0.2);
  height: 160px;
  width: 200px;
}

ul li:hover #sub-menu ul #li2 {
  margin-top: 25px;
}

ul li:hover #sub-menu ul #li3 {
  margin-top: 50px;
}

ul li:hover #sub-menu ul #li4 {
  margin-top: 75px;
}

ul li:hover #sub-menu ul #li5 {
  margin-top: 100px;
}

ul li:hover #sub-menu ul #li6 {
  margin-top: 125px;
}

#li1:hover {
  color: #27b373;
}

#li2:hover {
  color: #27b373;
}

#li3:hover {
  color: #27b373;
}

#li4:hover {
  color: #27b373;
}

#li5:hover {
  color: #27b373;
}

#li6:hover {
  color: #27b373;
}

#angle1 {
  font-size: 30px;
  color: black;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  width: 30px;
  height: 30px;
  border-radius: 50px;
}

#angle2 {
  font-size: 30px;
  color: black;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  width: 30px;
  height: 30px;
  border-radius: 50px;
}</style>