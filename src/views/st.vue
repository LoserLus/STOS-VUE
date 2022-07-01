<template>
  <div id="app">
    <button @click="jump">toHome</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "st",
  data() {
    return {
      itemList: []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get('.../public/db.json').then(response => {
        console.log(response.data);
      }, response => {
        console.log("error");
      });
    },
    jump(event){
      this.$router.push('/');
    }
  }
}
</script>