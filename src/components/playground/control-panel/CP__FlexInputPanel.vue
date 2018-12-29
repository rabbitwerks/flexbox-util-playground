<template>
  <div 
    class="flex-input-panel flex-6 flexbox flex-align-center flex-wrap"
    :class="{ 'flexgap-2': flexItemGroup.length > 1 }">
    <cp--flex-amount-input 
      v-for="(flexItem, i) in flexItemGroup" 
      :key="i"
      :index="i"></cp--flex-amount-input>
  </div>
</template>

<script>
import CP__FlexAmountInput from './CP__FlexAmountInput';
export default {
  components: {
    'cp--flex-amount-input': CP__FlexAmountInput
  },
  computed: {
    flexItemGroup() {
      return this.$store.getters.getFlexGroup
    }
  }

}
</script>

<style scoped>
.flex-input-panel {
  padding: 0 1rem;
}
</style>
