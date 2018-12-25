<template>
  <router-link :to="routerLinkTo" class="nav-item flexbox flex-center">
    <span class="nav-item--text">{{ text }}</span>
  </router-link>
</template>

<script>
export default {
  props: ['routerLinkTo', 'text']
}
</script>

<style scoped>
.nav-item {
  width: 10rem;
  border-left: 1px solid #fff;
  text-decoration: none;
}
.nav-item--text {
  color: var(--mainTurq);
}
.nav-item--text:active {
  color: var(--brightGreen);
  font-weight: 400;
}
</style>
