<template>
  <div class="nav-item--brand flex-1 flex-align-center align-self">
    <span>{{ text }}</span>
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
</style>
