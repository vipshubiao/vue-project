<template>
  <div id="json">
    <ol>
      <li v-for="item in items">{{item}}</li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'json',
    data() {
      return {
        items: ''
      }
    },
    created() {
      this.$http.get('http://47.106.127.28:8888/json/posts')
        .then((data) => {
          console.log(data);
          this.items = data.data;
        })
    }
  }

</script>

<style>

</style>
