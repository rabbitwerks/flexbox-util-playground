<template>
  <div 
    :style="[ isFlexDirectionRow ? { 'width': customFlexSize_Full } : { 'height': customFlexSize_Full }]"
    class="flex-item--basic">
    <div 
      v-if="isFlexDirectionRow"
      class="flex-item--basic--inner flexbox-space-center">
      <h3 v-if="customFlexSize_Value > 100 && customFlexSize_Units === 'px'">
        Width: {{ customFlexSize_Full }}
      </h3>
      <h3 v-else-if=" customFlexSize_Value > 5 && customFlexSize_Units === 'rem' ">
        Width: {{ customFlexSize_Full }}
      </h3>
      
    </div>
    <div 
      v-else
      class="flex-item--basic--inner flexbox-space-center">
      <h3 v-if="customFlexSize_Value > 50 && customFlexSize_Units === 'px'">
        Height: {{ customFlexSize_Full }}
      </h3>
      <h3 v-else-if=" customFlexSize_Value > 2 && customFlexSize_Units === 'rem' ">
        Height: {{ customFlexSize_Full }}
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
    customFlexSize_Value() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).customFlexSize;
    },
    customFlexSize_Units() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).measurementUnits;
    },
    customFlexSize_Full() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).customFlexSize + this.$store.getters.getFlexGroupItem(this.parentIndex).measurementUnits
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
