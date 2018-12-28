<template>
  <div 
    :style="{ 'flex': flexItem.flex }"
    @dblclick="removeSelf"
    class="flex-item--basic">
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
  border-left: 1px solid var(--backgroundGrey)
}
</style>
