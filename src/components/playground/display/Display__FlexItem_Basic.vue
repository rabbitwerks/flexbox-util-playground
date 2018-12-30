<template>
  <div 
    :style="setStyle"
    @dblclick="removeSelf"
    class="flex-item--basic">
    <div class="flex-item--basic--inner flexbox-space-center">
      <span v-if="!flexItem.isCustomWidth">
        Flex Amount: {{ flexItem.flex }}
      </span>
      <span 
        v-else-if="flexItem.measurementUnits === 'px' 
        && flexItem.customWidth >= 100"> 
        Width: {{ getCustomWidth }}
      </span>
      <span 
        v-else-if="flexItem.measurementUnits === 'rem' 
        && flexItem.customWidth >= 5"> 
        Width: {{ getCustomWidth }}
      </span>
    </div>
  </div>

</template>

<script>
import eventBus from '../../../eventbus.js'
export default {
  props: ['flexItem', 'index'],
  computed: {
    getCustomWidth() {
      return this.$store.getters.getFlexGroupItem(this.index).customWidth + this.$store.getters.getFlexGroupItem(this.index).measurementUnits
    },
    setStyle() {
      if (this.flexItem.isCustomWidth) {
        return { 'width': this.getCustomWidth }
      }
      return { 'flex': this.flexItem.flex }
    }
  },
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
