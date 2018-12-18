<template>
  <div id="home">
    <h1>This is home.vue title: {{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        title: 'the title of home'
      }
    }
  }
</script>
