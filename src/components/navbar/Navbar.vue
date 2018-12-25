<template>
  <div class="navbar flexbox">
    <div class="nav-item--brand flex-1">
      Flexbox Playground
    </div>
    <div class="nav-item flexbox flex-center">
      <span>Home</span>
    </div>
    <div class="nav-item flexbox flex-center">
      <span>Playground</span>
    </div>
    <div class="nav-item flexbox flex-center">
      <span>Getting Started</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
  height: 4rem;
  background-color: var(--navbarBlack);
}
.nav-item {
  width: 10rem;
  border-left: 1px solid #fff;
}
</style>
