<template>
  <div 
    :style="{ 'width': customWidthFull }"
    class="flex-item--basic">
    <div class="flex-item--basic--inner flexbox-space-center">
      <h3 v-if="customWidthValue > 100 && customWidthUnits === 'px'">
        Width: {{ customWidthFull }}
      </h3>
      <h3 v-else-if=" customWidthValue > 5 && customWidthUnits === 'rem' ">
        Width: {{ customWidthFull }}
      </h3>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ['parentIndex'],
  computed: {
    customWidthValue() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).customWidth;
    },
    customWidthUnits() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).measurementUnits;
    },
    customWidthFull() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).customWidth + this.$store.getters.getFlexGroupItem(this.parentIndex).measurementUnits
    },
  },
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
