<template>
  <div 
    @click="increaseFlexAmount"
    class="increase-button flex-1 flexbox-space-center">
    <span class="increase-button--icon">+</span>
  </div>
</template>

<script>
export default {
  props: ['increaseFlexAmount']
}
</script>

<style>
.increase-button {
  width: auto;
  padding: .1rem .25rem;
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
</style>
