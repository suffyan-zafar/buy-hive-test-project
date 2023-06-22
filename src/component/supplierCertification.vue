<template>
  <div>
    <p id="MOQ">Supplier Certification</p>
    <input type="number" placeholder="Supplier Certifications..." id="inputtt">
    <font-awesome-icon icon="search" id="search" />
  </div>
</template>

<script>
export default {
  data: function () {
    return {

    }
  }
}
</script>

<style scoped> #MOQ {
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
</style>