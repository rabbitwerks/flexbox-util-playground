<template>
  <div class="highlight--outer">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.highlight--outer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 25;
  background-color: rgba(255, 255, 255, .4);
}
.highlight--outer * {
  width: 100%;
  height: 100%;
}
.highlight--inner {
  position: absolute;
  z-index: 25;
}
</style>



