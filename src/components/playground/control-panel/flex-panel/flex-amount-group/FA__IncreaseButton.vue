<template>
  <div 
    @click="increaseFlexAmount(parentIndex)"
    class="increase-button flex-1 flexbox-space-center">
    <span class="increase-button--icon">+</span>
  </div>
</template>

<script>
export default {
  props: ['parentIndex', 'increaseFlexAmount']
}
</script>

<style>
.increase-button {
  width: auto;
  padding: .1rem .25rem;
  border: 2px solid var(--backgroundGrey);
  border-left: 1px solid var(--backgroundGrey);
  border-radius: 3px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
</style>
