<template>
  <div>


  <div class="searchBar">
      <div class="categories" v-on:click="handleClick">
        <span class="icon"><font-awesome-icon icon="table" /></span>
        <p id="title">categories</p>
     
      </div>
    <div class="search">
      <div class="inp">
        <input type="text" id="field" placeholder="What are you looking for?" v-model="searchValue">
      </div>
      <div class="dropdown">
        <div class="rightboarder">
        </div>
        <div class="selector">
          <select name="opt" id="op" v-model="selectedOpt">
            <option value="" id="single">All Categories</option>
            <option :value=categories.categories[index-1].category_slug id="opt2" v-for="index in count">{{
              categories.categories[index-1].category_name }}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="buton">
      <button id="sub" v-on:click="handleCLickEvent">Search </button>
    </div>

  </div>
  <!-- sub categories -->
  <div>
    <div id="list-main" v-if="isTrue">
          <div id="list">
            <div id="side1" v-for="index in count">
              <ul>
                <li  id="main-Li" >{{categories.categories[index-1].category_name  }}</li>
                <li id="inner-Li"  v-for="el in categories.categories[index-1].sub_categories.length">{{ getSubCategory(index,el-1)}}</li>  
              </ul>
            </div>
          
          </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: function () {
    return {
      selectedOpt: "",
      searchValue: "",
      isTrue:false,
      x:0,
      arr1:[],
      arr2:[2,3,4,5]
    }
  },
  methods: {
    handleCLickEvent() {
      this.$store.commit('getSearchValuee', this.searchValue);
      this.$store.commit('getCategoryValue', this.selectedOpt);
      setTimeout(() => {
        this.$store.dispatch('fetchData');
      }, 1000)
    },
    handleClick(){
      if(this.x%2==0){
        this.isTrue=true;
        this.x++
      }
      else{
        this.isTrue=false;
        this.x++;
      }
      
    },
    getSubCategory(ind,el){
   
      if (
          this.categories &&
          this.categories.categories &&
          this.categories.categories[ind-1] &&
          this.categories.categories[ind-1].sub_categories[el]
        ){
          // console.log(this.categories.categories[ind-1].sub_categories[el], "sub");
      return this.categories.categories[ind-1].sub_categories[el];
        }else{return ""}
  }
  },

  computed: {
    ...mapState(['categories']),
    count() {
      if (this.categories && this.categories.categories) {
        for(var i=0; i<this.categories.categories.length; i++){
          for(var j=1; j<=this.categories.categories[i].sub_categories.length; j++){
                this.arr1.push({[this.categories.categories[i].category_name] : this.categories.categories[i].sub_categories[j]})
          }
          // console.log(this.arr1, "Length" );
        }
        // console.log(this.categories.categories.length,"count");

        return this.categories.categories.length;
      }
      return 0;
    }
  },

  created() {
    this.$store.dispatch('fetchCategory');
  },

}
</script>

<style scoped>
.searchBar {
  height: 80px;
  background-color: rgba(242, 242, 242, 1);
  margin-left: 220px;
  margin-right: 210px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
}

.categories {
  padding-top: 20px;
  width: 10%;
  display: flex;
  justify-content: space-evenly;
  padding-left: 10px;
  cursor: pointer;
}

.icon {
  font-size: 30px;
  color: #00b2c9;
}

#title {
  font-size: 17px;
  text-transform: capitalize;
  position: relative;
  top: 6px;
}

.search {
  background-color: white;
  margin: 12px;
  width: 80%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  border-radius: 50px;
}

.inp {
  width: 75%;
  position: relative;
  top: 7px;
  left: 20px;
}

#field {
  width: 97%;
  padding: 10px;
  font-size: 17px;
  border: none;
}

#field:focus {
  outline: none;
}

.dropdown {
  width: 20%;
  display: flex;
  justify-content: space-between;
}

.rightboarder {
  position: relative;
  top: 5px;
  left: 5px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  height: 40px;
}

.selector {
  position: relative;
  top: 15px;
  left: 30px;
}

#op {
  font-size: 17px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

#op::-webkit-inner-spin-button,
#op::-webkit-outer-spin-button {
  font-size: 50px;
}

#single {
  color: rgba(0, 0, 0, 0.2);
}

#opt2 {
  color: black;
}

.buton {
  width: 15%;
  position: relative;
  justify-content: center;
  text-align: center;
}

#sub {
  font-size: 20px;
  width: 140px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 50px;
  background-color: #00b2c9;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

#list-main {
  height: 400px;
  width: 75%;
  overflow-x: auto;
  background-color: rgba(242, 242, 242, 2);

  transition: all .5s;
  position: absolute;
  z-index: 9999;
  left: 13%;
  top: 20%;
}
#main-Li{
    font-weight: 800;
     width: 200px;
     margin: 10px;
 
  }
  #inner-Li{
    margin: 10px;
    line-height: 20px;
  }
#list {
  display: flex;
}

#side1 {
  margin-top: 20px;
  width: 25%;

}

#side1 ul li {
  padding-left: 20px;

  list-style: none;
}

#side2 {
  margin-top: 20px;
  width: 25%;

}

#side2 ul li {
  list-style: none;
}

#side3 {
  margin-top: 20px;
  width: 25%;

}

#side3 ul li {

  list-style: none;
}

#side4 {
  margin-top: 20px;
  width: 25%;

}

#side4 ul li {
  list-style: none;
}

/* #list-main {
  display: none;
} */


@media (max-width: 1350px) {
  .searchBar {
    position: relative;
    left: -135px;
    width: 85%;
  }
  .categories {
    width: 20%;
    display: flex;
    justify-content: space-evenly;
  }

  .icon {
    padding-top: 12px;
    font-size: 20px;
  }

  #title {
    font-size: 15px;
    padding-top: 10px;
  }

  .search {
    position: relative;
    left: -10px;
    top: 5px;
    width: 120%;
    height: 50px;
  }

  .inp {
    width: 60%;
  }

  #sub {
    font-size: 15px;
    position: relative;
    top: 5px;
    right: 10px;
    width: 100px;
  }
}


@media (max-width: 968px) {
  .searchBar {
    position: relative;
    left: -135px;
    width: 85%;
    box-sizing: border-box;
  }

  .categories {
    position: absolute;
    top: 100px;
    background-color: rgba(242, 242, 242, 1);
  
    left: 30px;
    width: 80vw;
    border-radius: 40px;
    height: 40px;
    display: flex;
  }

  .icon {
    position: absolute;
    cursor: pointer;
    top: 10px;
    margin-left: -120px;
    text-align: center;
    font-size: 20px;
  }

  #title {
    position: absolute;
    top: 10px;
    margin-left: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  .search {
    position: relative;
    left: 10px;
    top: 5px;
    width: 80%;
    height: 50px;
  }

  .dropdown {
    display: none;
  }

  #sub {
    font-size: 15px;
    position: relative;
    top: 5px;
    right: -5px;
    width: 120px;
  }

  .inp {
    width: 80%;
  }
  #main-Li{
    font-weight: 800;
     width: 200px;
     margin: 10px;
 
  }
  #inner-Li{
    width: 200px;
  }

}
@media (max-width: 550px) {
  .search {
    position: relative;

    width: 80%;
    height: 50px;
  }
  .inp {
    font-size: 5px;
    width: 70%;
  }
  .searchBar {
    margin-left: 180px;
    box-sizing: border-box;
  }
  #sub {
    font-size: 10px;
    position: relative;
    top: 5px;
      right: 1px;
    width: 60px;
  }
  #title {
    position: absolute;
    top: 2px;
    margin-left: 10px;
    font-size: 20px;
    cursor: pointer;
  }
  .icon {
    position: absolute;
    cursor: pointer;
    top: -1px;
    margin-left: -120px;
    text-align: center;
    font-size: 20px;
  }
  .categories {
    position: absolute;
    top: 100px;
    background-color: rgba(242, 242, 242, 1);
   
    left: 10px;
    width: 80vw;
    border-radius: 40px;
    height: 40px;
    display: flex;
  }
  #main-Li{
 
    font-weight: 800;
     width: 100px;
     margin: 5px;
     overflow: auto;
  }
  #inner-Li{
    width: 100px;
  
    margin-right: 120px;
  }
  #list-main {
  height: 600px;
  width: 800px;
  overflow-x: auto;
  background-color: rgba(242, 242, 242, 2);
  z-index: 300;
  transition: all .5s;
}
}

</style>