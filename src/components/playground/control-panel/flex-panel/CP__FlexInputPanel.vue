<template>
  <div 
    class="flex-input-panel flex-6 flexbox flex-wrap"
    :class="{ 'flexgap-2': flexItemGroup.length > 1 }">
    <div 
      class="flex-item-group flexbox" 
      v-for="(flexItem, parentIndex) in flexItemGroup" 
      :key="parentIndex">
      <div class="fig--main-panel flex-2">
        <fp--flex-amount-input 
          :parentIndex="parentIndex">
        </fp--flex-amount-input>

        <fp--custom-width-input 
          :parentIndex="parentIndex">
        </fp--custom-width-input>

        <!-- nested flex item control panel -->
        <fp--nested-flex-panel 
          :parentIndex="parentIndex">
        </fp--nested-flex-panel>
      </div>
      <nfp--flex-amount-panel   
        v-if="flexItem.nested.hasNestedFlexbox" 
        :nestedFlexGroup="flexItem.nested.nestedFlexGroup"
        :parentIndex="parentIndex"
        class="fig--nested-panel flex-1">
        
      </nfp--flex-amount-panel>

    </div>
  </div>
</template>

<script>
import FP__FlexAmountInput from './FP__FlexAmountInput';
import FP__CustomWIdthInput from './FP__CustomWidthInput';
import FP__NestedFlexPanel from './nested-flex-panel/FP__NestedFlexPanel';
import NFP__FlexAmountPanel from './nested-flex-panel/NFP__FlexAmountPanel';

export default {
  components: {
    'fp--flex-amount-input': FP__FlexAmountInput,
    'fp--custom-width-input': FP__CustomWIdthInput,
    'fp--nested-flex-panel': FP__NestedFlexPanel,
    'nfp--flex-amount-panel': NFP__FlexAmountPanel,
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
