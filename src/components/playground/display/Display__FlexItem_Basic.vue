<template>
  <div 
    :style="{ 'flex': flexItem.flex }"
    @dblclick="removeSelf"
    class="flex-item--basic">
    <div class="flex-item--basic--inner flexbox-space-center">
      <span>
        Flex Amount: {{ flexItem.flex }}
      </span>
    </div>
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

<style scoped>
.flex-item--basic {
  height: 100%;
  background-color: var(--mainTurq);
  border: 2px solid var(--backgroundGrey);
  transition: flex .2s ease-in-out, width .2s ease-in-out;
}
.flex-item--basic--inner {
  height: 100%;
}
</style>
