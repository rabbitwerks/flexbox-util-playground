<template>
  <div class="nav-item--brand flex-1 flex-align-center align-self">
    <span class="nav-item--brand-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style scoped>
.nav-item--brand {
  padding-left: 1rem;
}
.nav-item--brand-text {
  font-size: 1.7rem;
  font-weight: 700;
}
</style>
