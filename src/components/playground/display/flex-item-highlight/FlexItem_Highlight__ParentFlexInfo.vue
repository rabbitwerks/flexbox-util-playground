<template>
  <div class="highlight--inner flexbox flexdir-col">
    <h3 class="flex-center center-self">Parent Flex Item Info</h3>
    <span class="flex-center center-self">
      Flex Item: {{ parentIndex + 1 }}
    </span>
    <span class="flex-center center-self">
      Flex Amount: {{ flexItem.flex }}
    </span>
    <span class="flex-center center-self">Flex Direction: {{ flexDirection }}</span>
  </div>
</template>

<script>
export default {
  props: ['parentIndex', 'flexItem'],
  computed: {
    flexDirection () {
      return this.$store.getters.getFlexDirection
    },
  }
  
}
</script>

<style scoped>
.highlight--inner {
  padding: .5rem 1rem;
}
</style>
