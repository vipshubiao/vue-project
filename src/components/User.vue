<template>
  <div id="one">
    <ul>
      <li v-for="item in items">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
        items: ''
      }
    },
    created () {
      this.$http.get('http://47.106.127.28:8888/api/users/123')
      // this.$http.get('http://localhost:12001/users/123')
        .then((data) => {
          console.log(data);
          this.items = data.data;
        })
    }
  }
</script>

<style>

</style>
