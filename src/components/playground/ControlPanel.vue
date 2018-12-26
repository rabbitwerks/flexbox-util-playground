<template>
  <div class="flex-5-i flexbox">
    <span @click="addBoxToGroup">Add</span>
    <span @click="removeBoxFromGroup">Remove</span>
  </div>
</template>

<script>
import eventBus from '../../eventbus.js'
export default {
  methods: {
    addBoxToGroup() {
      eventBus.$emit('addBoxToGroup')
    },
    removeBoxFromGroup() {
      eventBus.$emit('removeBoxFromGroup')
    }
  }
}
</script>

<style>

</style>
