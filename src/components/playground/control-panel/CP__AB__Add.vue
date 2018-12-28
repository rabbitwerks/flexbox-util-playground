<template>
  <button @click="addItemToGroup">Add Flex Item</button>
</template>

<script>
import eventBus from '../../../eventbus.js';
export default {
  methods: {
    addItemToGroup() {
      eventBus.$emit('addItemToGroup')
    }
  }
}
</script>

<style scoped>
button {
  width: auto;
  background: linear-gradient(to bottom, rgb(175, 240, 184), rgb(117, 170, 159));
  border: 2px solid var(--backgroundGrey);
  border-radius: 5px;
  padding: .5rem;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
button:active {
  background: linear-gradient(to top, rgb(175, 240, 184), rgb(117, 170, 159));
}
</style>
