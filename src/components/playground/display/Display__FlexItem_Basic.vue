<template>
  <div 
    :style="{ 'flex': flexItem.flex }"
    @dblclick="removeSelf"
    class="flex-item--basic flexbox-space-center">
    <span>Flex: {{ flexItem.flex }}</span>
  </div>
</template>

<script>
import eventBus from '../../../eventbus.js'
export default {
  props: ['flexItem', 'index'],
  methods: {
    removeSelf() {
      eventBus.$emit('removeSelfFromGroup', this.index)
    }
  }
}
</script>

<style>
.flex-item--basic {
  height: 100%;
  background-color: var(--mainTurq);
  border: 2px solid var(--backgroundGrey)
}
</style>
