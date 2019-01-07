<template>
  <div 
    class="flex-input-panel flex-6 flexbox flex-wrap"
    :class="{ 'flexgap-2': flexItemGroup.length > 1 }">
    <div 
      class="flex-item-group" 
      v-for="(flexItem, i) in flexItemGroup" 
      :key="i">
      
      <fp--flex-amount-input 
        :index="i">
      </fp--flex-amount-input>

      <fp--custom-width-input 
        :index="i">
      </fp--custom-width-input>

      <!-- nested flex item control panel -->
      <fp--nested-flex-panel 
        :index="i">
      </fp--nested-flex-panel>


    </div>
  </div>
</template>

<script>
import FP__FlexAmountInput from './FP__FlexAmountInput';
import FP__CustomWIdthInput from './FP__CustomWidthInput';
import FP__NestedFlexPanel from './nested-flex-panel/FP__NestedFlexPanel';

export default {
  components: {
    'fp--flex-amount-input': FP__FlexAmountInput,
    'fp--custom-width-input': FP__CustomWIdthInput,
    'fp--nested-flex-panel': FP__NestedFlexPanel,
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
  padding: .5rem 1rem;
}
</style>
