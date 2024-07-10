<script lang="ts">
export default {
  name: 'Banner'
}
</script>

<template>
  <section id="banner">
    <h5>Vous voulez rejoindre Wave? <span>Consultez nos postes ouverts ici</span></h5>
  </section>
</template>

<style scoped lang="scss">
@import '../sass/main.scss';

#banner {
  background: $orange;
  width: 100%;
  height: fit-content;
  color: white;
  text-align: center;
  padding: 1rem;
  & span {
    text-decoration: underline;
    text-decoration-color: $orange-3;
  }
}
</style>
