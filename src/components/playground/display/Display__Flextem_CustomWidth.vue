<template>
  <div 
    :style="{ 'width': customWidthFull }"
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
export default {
  computed: {
    customWidthFull() {
      return this.$store.getters.getFlexGroupItem(this.index).customWidth + this.$store.getters.getFlexGroupItem(this.index).measurementUnits
    },
  },
}
</script>

<style>

</style>
