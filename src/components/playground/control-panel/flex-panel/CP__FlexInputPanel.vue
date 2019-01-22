<template>
  <div 
    class="flex-input-panel flex-6 flexbox flex-wrap"
    :class="{ 'flexgap-2': flexItemGroup.length > 1 }">
    <div 
      class="flex-item-group flexbox" 
      v-for="(flexItem, parentIndex) in flexItemGroup" 
      :key="parentIndex">
      <div class="fig--main-panel flex-2">
        <fp--flex-amount-group 
          :parentIndex="parentIndex">
        </fp--flex-amount-group>

        <fp--custom-flex-size-input 
          :parentIndex="parentIndex">
        </fp--custom-flex-size-input>

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
import FP__FlexAmountGroup from './FP__FlexAmountGroup';
import FP__CustomFlexSizeInput from './FP__CustomFlexSizeInput';
import FP__NestedFlexPanel from './nested-flex-panel/FP__NestedFlexPanel';
import NFP__FlexAmountPanel from './nested-flex-panel/NFP__FlexAmountPanel';

export default {
  components: {
    'fp--flex-amount-group': FP__FlexAmountGroup,
    'fp--custom-flex-size-input': FP__CustomFlexSizeInput,
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
