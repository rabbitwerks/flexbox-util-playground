<template>
  <div class="flex-item-group--outer">
    <div class="fig--main-panel flex-2">
      <div 
        v-if="!toggleMoreOptionsGroup[parentIndex].moreOptionsToggled"
        class="fig--main-panel--controller">
        <fp--flex-amount-group 
          :parentIndex="parentIndex">
        </fp--flex-amount-group>

        <fp--custom-pixel-size-input 
          :parentIndex="parentIndex">
        </fp--custom-pixel-size-input>

        <!-- nested flex item control panel -->
        <fp--nested-flex-panel 
          :parentIndex="parentIndex">
        </fp--nested-flex-panel>
      </div>
      
      <fp--more-options--panel v-else
      :parentIndex="parentIndex">
      </fp--more-options--panel>

      <div class="fp--options-group flexbox flexgap-1">
        
        <fp--remove-self-button
          :parentIndex="parentIndex">
        </fp--remove-self-button>

        <fp--more-options--button
          :parentIndex="parentIndex"
          :toggleMoreOptions="toggleMoreOptionsGroup[parentIndex]">
        </fp--more-options--button>
      </div>

    </div>

    <nfp--flex-amount-panel   
      v-if="flexItem.nested.hasNestedFlexbox" 
      :nestedFlexGroup="flexItem.nested.nestedFlexGroup"
      :parentIndex="parentIndex"
      class="fig--nested-panel ">
      
    </nfp--flex-amount-panel>
  </div>
</template>

<script>
import FP__FlexAmountGroup from './FP__FlexAmountGroup';
import FP__CustomPixelSizeInput from './FP__CustomPixelSizeInput';
import FP__NestedFlexPanel from './nested-flex-panel/FP__NestedFlexPanel';
import NFP__FlexAmountPanel from './nested-flex-panel/NFP__FlexAmountPanel';
import FP__MoreOptions_Panel from './more-option-panel/FP__MoreOptions_Panel';
import FP__MoreOptions_Button from './more-option-panel/FP__MoreOptions_Button';
import FP__RemoveSelfButton from './FP__RemoveSelfButton';

export default {
  props: ['parentIndex', 'flexItem', 'toggleMoreOptionsGroup'],
  components: {
    'fp--flex-amount-group': FP__FlexAmountGroup,
    'fp--custom-pixel-size-input': FP__CustomPixelSizeInput,
    'fp--nested-flex-panel': FP__NestedFlexPanel,
    'nfp--flex-amount-panel': NFP__FlexAmountPanel,
    'fp--more-options--panel': FP__MoreOptions_Panel,
    'fp--more-options--button': FP__MoreOptions_Button,
    'fp--remove-self-button': FP__RemoveSelfButton,
  },
}
</script>

<style scoped>
.fp--main-panel {
  width: 7.5rem;
}
.fp--options-group {
  margin-top: .5rem;
}
</style>
