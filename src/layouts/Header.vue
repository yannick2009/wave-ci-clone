<script lang="ts">
import Banner from '../components/Banner.vue'
import Navbar from '../components/Nav-bar.vue'

export default {
  name: 'Header',
  components: {
    Banner,
    Navbar
  }
}
</script>
<template>
  <header>
    <Banner />
    <Navbar />
  </header>
</template>

<style lang="scss" scoped>
@import '../sass/main.scss';

header {
  //   background: $blue;
  width: 100%;
}
</style>
