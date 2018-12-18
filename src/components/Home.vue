<template>
  <div id="home">
    <h1>This is home title: {{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        title: ''
      }
    }
  }
</script>
