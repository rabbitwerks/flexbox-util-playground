<template>
  <div 
    :style="[ isFlexDirectionRow ? { 'width': customPixelSize_Full } : { 'height': customPixelSize_Full }]"
    class="flex-item--basic">
    <div 
      v-if="isFlexDirectionRow"
      class="flex-item--basic--inner flexbox-space-center">
      <h3 v-if="customPixelSize_Value > 100 && customPixelSize_Units === 'px'">
        Width: {{ customPixelSize_Full }}
      </h3>
      <h3 v-else-if=" customPixelSize_Value > 5 && customPixelSize_Units === 'rem' ">
        Width: {{ customPixelSize_Full }}
      </h3>
      
    </div>
    <div 
      v-else
      class="flex-item--basic--inner flexbox-space-center">
      <h3 v-if="customPixelSize_Value > 50 && customPixelSize_Units === 'px'">
        Height: {{ customPixelSize_Full }}
      </h3>
      <h3 v-else-if=" customPixelSize_Value > 2 && customPixelSize_Units === 'rem' ">
        Height: {{ customPixelSize_Full }}
      </h3>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ['parentIndex'],
  computed: {
    isFlexDirectionRow() {
      if (this.$store.getters.getFlexDirection === 'flexdir-row' || this.$store.getters.getFlexDirection === 'flexdir-rowrev') {
        return true 
      }
      return false
    },
    customPixelSize_Value() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).customPixelSize;
    },
    customPixelSize_Units() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).measurementUnits;
    },
    customPixelSize_Full() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).customPixelSize + this.$store.getters.getFlexGroupItem(this.parentIndex).measurementUnits
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
