<script lang="ts">
import imgLogo from '../assets/images/nav-logo.png'
export default {
  name: 'Navbar',
  data() {
    return {
      imgLogo
    }
  }
}
</script>

<template>
  <nav>
    <img :src="imgLogo" alt="logo de Wave" />
    <div class="menu">
      <div class="menu__left">
        <a href="#">
          <button>personal</button>
        </a>
        <a href="#">
          <button>business</button>
        </a>
      </div>
      <div class="menu__right">
        <a href="#">
          <button>à propos</button>
        </a>
        <a href="#">
          <button>carrières</button>
        </a>
        <a href="#">
          <button>blog</button>
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  & img {
    height: 3rem;
    width: auto;
  }
  & .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & button {
      margin: 0 1rem;
      text-transform: uppercase;
      background: none;
      color: black;
      border: none;
      font-weight: 900;
      font-size: 0.9rem;
      cursor: pointer;
    }
  }
}
</style>
