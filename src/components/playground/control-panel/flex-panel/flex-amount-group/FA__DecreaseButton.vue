<template>
  <div 
    @click="decreaseFlexAmount({parentIndex, isCustomFlexSize: false})"
    class="decrease-button flex-1 flexbox-space-center pointer">
    <span class="decrease-button--icon">-</span>
  </div>
</template>

<script>
export default {
  props: ['parentIndex', 'decreaseFlexAmount'],
}
</script>

<style>
.decrease-button {
  width: auto;
  padding: .1rem .25rem;
  background: linear-gradient(to bottom, var(--mainTurq), var(--darkTurq));
  border: 2px solid var(--backgroundGrey);
  border-right: 1px solid var(--backgroundGrey);
  border-radius: 3px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
.decrease-button:active {
  background: linear-gradient(to top, var(--mainTurq), var(--darkTurq));
}
</style>
