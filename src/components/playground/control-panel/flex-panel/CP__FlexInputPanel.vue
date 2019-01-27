<template>
  <div 
    class="flex-input-panel flex-6 flexbox"
    :class="{ 'flexgap-2': flexItemGroup.length > 1 }">
    <div 
      class="flex-item-group flexbox" 
      v-for="(flexItem, parentIndex) in flexItemGroup" 
      :key="parentIndex">
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

        <fp--more-options--button
          :parentIndex="parentIndex"
          :toggleMoreOptions="toggleMoreOptionsGroup[parentIndex]">
        </fp--more-options--button>

      </div>

      <nfp--flex-amount-panel   
        v-if="flexItem.nested.hasNestedFlexbox" 
        :nestedFlexGroup="flexItem.nested.nestedFlexGroup"
        :parentIndex="parentIndex"
        class="fig--nested-panel ">
        
      </nfp--flex-amount-panel>

    </div>
  </div>
</template>

<script>
import FP__FlexAmountGroup from './FP__FlexAmountGroup';
import FP__CustomPixelSizeInput from './FP__CustomPixelSizeInput';
import FP__NestedFlexPanel from './nested-flex-panel/FP__NestedFlexPanel';
import FP__MoreOptions_Panel from './more-option-panel/FP__MoreOptions_Panel';
import FP__MoreOptions_Button from './more-option-panel/FP__MoreOptions_Button';
import NFP__FlexAmountPanel from './nested-flex-panel/NFP__FlexAmountPanel';

export default {
  data () {
    return {
      toggleMoreOptionsGroup: [{ moreOptionsToggled: false }],
    }
  },
  components: {
    'fp--flex-amount-group': FP__FlexAmountGroup,
    'fp--custom-pixel-size-input': FP__CustomPixelSizeInput,
    'fp--nested-flex-panel': FP__NestedFlexPanel,
    'fp--more-options--panel': FP__MoreOptions_Panel,
    'fp--more-options--button': FP__MoreOptions_Button,
    'nfp--flex-amount-panel': NFP__FlexAmountPanel,
  },
  computed: {
    flexItemGroup() {
      return this.$store.getters.getFlexGroup
    }
  },
  watch: {
    flexItemGroup: function(value) {
      this.toggleMoreOptionsGroup = [];
      value.forEach((item, index) => {
        this.toggleMoreOptionsGroup.push({ moreOptionsToggled: false })
      });
    }
  }

}
</script>

<style scoped>
.flex-input-panel {
  padding: .5rem 1rem;
}
.fig--main-panel {
  width: 7.5rem;
}
.more-options--outer {
  margin-top: .5rem;
}
</style>
