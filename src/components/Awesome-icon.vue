<script lang="ts">
enum iconsType {
  solid = 'solid',
  regular = 'regular',
  light = 'light',
  duotone = 'duotone',
  brands = 'brands'
}

export default {
  name: 'AwesomeIcon',
  props: {
    type: {
      type: String,
      default: iconsType.solid,
    },
    name: {
      type: String,
      required: true,
    },
    Animation: {
      type: String,
      default: ''
    }
  },
}
</script>

<template>
  <i class="fa-solid fa-bars"></i>
</template>

<style lang="scss" scoped></style>
