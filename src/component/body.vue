<template>
  <div>
    <!-- Search Bar  START -->
    <Search-Bar></Search-Bar>
    <!-- Start Second Section -->
    <Product-Count @total_results="total_results"></Product-Count>
    <!-- Start 3rd Section -->
    <div class="thirdSection">
      <div id="left2" :style="{ height: dynamicHeightForBorder + 'vh' }">
        <!-- from and two section -->
        <fromTo-Section></fromTo-Section>
        <!-- MOQ section -->
        <MOQ-Section></MOQ-Section>
        <!-- <Product-Certification></Product-Certification> -->
        <div>
          <p id="MOQ">Product Certification</p>
          <input type="text" placeholder="Product Certifications..." id="inputtt" v-model="searchvalue">
          <font-awesome-icon icon="search" id="search" />
        </div>
        <!-- Products Display  -->
        <div class="displayProduct" :style="{ height: dynamicHeight + 'vh' }">
          <div class="chkbox" :style="{ overflow: floww }">
            <!-- //Product FIlter Component -->
            <Product-Filter @ProductFilterLength="getProductLength" :searchvalue="searchvalue"></Product-Filter>
          </div>
        </div>
        <a href="#" v-on:click="clickHandle" id="btn"> {{ isTrue ? `Show All ( ${productCount} ) ` : "Show Less" }} </a>
        <!-- <Supplier-Certification></Supplier-Certification> -->
        <div>
          <p id="MOQ">Supplier Certification</p>
          <input type="text" placeholder="Supplier Certifications..." id="inputtt" v-model="searchValue3">
          <font-awesome-icon icon="search" id="search" />
        </div>
        <Suplier-Certification-Filter :searchValue3="searchValue3"></Suplier-Certification-Filter>
        <!-- Manufacture Certification -->
        <!-- <Manufacture-Certification></Manufacture-Certification> -->
        <div>
          <p id="MOQ">Manufacturer Location</p>
          <input type="text" placeholder="Country/Region" id="inputtt" v-model="searchValue2">
          <font-awesome-icon icon="search" id="search" />
        </div>
        <div class="displayProduct" :style="{ height: dynamicHeight2 + 'vh' }">
          <div class="chkbox" :style="{ overflow: floww1 }">
            <Manufacture-Location-Filter @locationLength="getLocationLength" :searchValue2="searchValue2"></Manufacture-Location-Filter>
          </div>
        </div>
        <a href="#" v-on:click="clickHandle2" id="btn"> {{ isTrue2 ? `Show All ( ${locationCount} )` : "Show Less" }} </a>
        <!-- Stock Availbilty -->
        <Stock-Availabilty></Stock-Availabilty>
      </div>
      <div class="right2">
        <Pagination-Section @customevent="handleCustomEvent"
          :total_Product_Results="total_Product_Results"></Pagination-Section>
        <!-- LIst of Products Horizontal Display-->
        <Product-List-Hoeizontal v-if="horizontalPagination"></Product-List-Hoeizontal>
        <!-- Product List Vertical Display  -->
        <Product-List-Vertical v-if="verticalPagination"></Product-List-Vertical>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue';
import productCount from './productCount.vue'
import fromTO from './from-to.vue';
import MOQ from './MOQ.vue';
import productCertification from './productCertification.vue';
import supplierCertification from './supplierCertification.vue';
import manufactureCertification from './manufactureCertification.vue';
import stockavailabilty from './stockavailabilty.vue';
import pagination from './pagination.vue';
import productlisthorizontal from './productlisthorizontal.vue';
import productlistvertical from './productlistvertical.vue';
import productfilter from './productfilter.vue';
import supliercertificationfilter from './supliercertificationfilter.vue';
import manufacturelocationfilter from './manufacturelocationfilter.vue';
export default {

  components: {
    'Search-Bar': SearchBar,
    'Product-Count': productCount,
    'fromTo-Section': fromTO,
    'MOQ-Section': MOQ,
    'Product-Certification': productCertification,
    'Supplier-Certification': supplierCertification,
    'Manufacture-Certification': manufactureCertification,
    'Stock-Availabilty': stockavailabilty,
    'Pagination-Section': pagination,
    'Product-List-Hoeizontal': productlisthorizontal,
    'Product-List-Vertical': productlistvertical,
    'Product-Filter': productfilter,
    'Suplier-Certification-Filter': supliercertificationfilter,
    'Manufacture-Location-Filter': manufacturelocationfilter
  },

  data: function () {
    return {
      productCount: null,
      locationCount: null,
      isTrue: true,
      isTrue2: true,
      i: 0,
      j: 0,
      floww1: "",
      floww: "",
      dynamicHeightForBorder: 155,
      dynamicHeight: 20,
      dynamicHeight2: 22,
      arr: [1, 2, 3, 4, 5, 6],
      horizontalPagination: true,
      verticalPagination: false,
      total_Product_Results: null,
      searchvalue: "",
      searchValue2:"",
      searchValue3:""
    }
  },
  methods: {
    clickHandle() {
      if (this.i % 2 == 0) {
        this.isTrue = false;
        this.dynamicHeight += 28;
        this.dynamicHeightForBorder += 28;
        this.floww = 'visible';
        this.i++;
        console.log(this.i, "i value");
      }
      else {
        this.isTrue = true;
        this.dynamicHeight -= 28;
        this.floww = 'auto';
        this.dynamicHeightForBorder -= 28;
        this.i++;
        console.log(this.i, "i value in else");
      }
    },

    clickHandle2() {
      if (this.j % 2 == 0) {
        this.isTrue2 = false;
        this.dynamicHeight2 += 9;
        this.dynamicHeightForBorder += 10;
        this.floww1 = 'visible';
        this.j++;
        console.log(this.j, "i value");
      }
      else {
        this.isTrue2 = true;
        this.dynamicHeight2 -= 9;
        this.dynamicHeightForBorder -= 10;
        this.floww1 = 'auto';
        this.j++;
        console.log(this.j, "i value in else");
      }
    },

    handleCustomEvent(value) {
      this.verticalPagination = value;
      if (value[1] == 1) {
        this.horizontalPagination = value[0];
        this.verticalPagination = false;

      }
      else {
        this.verticalPagination = value[0];
        this.horizontalPagination = false;
      }
      console.log("Parent VALUE when click on Vertical", value[0]);
      console.log("Parent VALUE when click on Vertical", value[1])
      console.log("Parent VALUE when click on Vertical", value[2])
    },

    getProductLength(value) {
      this.productCount = value;
      console.log(value, "Length in body component");
    },

    getLocationLength(value1) {
      this.locationCount = value1;
    },
    total_results(val) {
      this.total_Product_Results = val;
    }
  },

}

</script>

<style scoped>
.thirdSection {
  margin-left: 220px;
  margin-right: 210px;
  display: flex;
}

#left2 {
  width: 25%;
  border: 2px solid #e2e8f0;
  position: relative;
  margin-bottom: 20px;
}


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

#search {
  color: rgba(0, 0, 0, 0.4);
  position: relative;
  left: 300px;
  bottom: 30px;
  font-size: 14px;
}




.displayProduct {
  margin-top: 30px;
  margin-left: 20px;
  display: flex;
}

.chkbox {
  width: 300px;
  height: 170px;
  overflow: auto;
}

.chkbox::-webkit-scrollbar {
  width: 4px;
}

.chkbox::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.1);
}

.chkbox::-webkit-scrollbar-thumb {
  background-color: #27b373;
  border-radius: 20px;
}

#lble {
  margin-left: 12px;
  font-size: 15px;
  line-height: 30px;
  cursor: pointer;
}

#btn {
  color: #27b373;
  font-weight: 200;
  margin-left: 20px;
}

.right2 {
  width: 75%;
  margin-left: 50px;
  margin-top: 10px;
}
</style>