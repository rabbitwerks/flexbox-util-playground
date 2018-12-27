<template>
  <button @click="removeItemFromGroup">Remove Flex Item</button>
</template>

<script>
import eventBus from '../../../eventbus.js'
export default {
  methods: {
    removeItemFromGroup() {
      eventBus.$emit('removeItemFromGroup')
    }
  }
}
</script>

<style>

</style>
