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

<style>

</style>
