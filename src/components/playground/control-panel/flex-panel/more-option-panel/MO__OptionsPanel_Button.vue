<template>
  <div 
    :class="{ 'toggled-off': toggledOff }"
    class="more-options-panel--button pointer"
    >{{ text }}
  </div>
</template>

<script>
export default {
  props: ['text', 'toggledOff']
}
</script>

<style scoped>
.more-options-panel--button {
  padding: .1rem .5rem;
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  font-size: .9rem;
  background: linear-gradient(to bottom, var(--mainTurq), var(--darkTurq));
  color: var(--fontColor);
}

.more-options-panel--button:active {
  background: linear-gradient(to top, var(--mainTurq), var(--darkTurq));
  color: var(--fontColorActive);
}

.more-options-panel--button.toggled-off {
  background: #666;
  color: #ccc;
}
.more-options-panel--button.toggled-off:active {
  background: #555;
}
</style>
