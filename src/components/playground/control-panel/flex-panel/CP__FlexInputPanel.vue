<template>
  <div 
    class="flex-input-panel flex-6 flexbox flex-wrap"
    :class="{ 'flexgap-2': flexItemGroup.length > 1 }">
    <div 
      class="flex-item-group flexbox" 
      v-for="(flexItem, parentIndex) in flexItemGroup" 
      :key="parentIndex">
      <div class="fig--main-panel flex-2">
        
          <div 
            v-if="!toggleMoreOptionsGroup[parentIndex].moreOptionsToggled"
            class="fig--main-panel--controller">
            <fp--flex-amount-input 
              :index="parentIndex">
            </fp--flex-amount-input>

            <fp--custom-width-input 
              :parentIndex="parentIndex">
            </fp--custom-width-input>

            <!-- nested flex item control panel -->
            <fp--nested-flex-panel 
              :parentIndex="parentIndex">
            </fp--nested-flex-panel>
          </div>
        

        <div v-else class="fig--main-panel--options">
          More Options
        </div>

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
import FP__FlexAmountInput from './FP__FlexAmountInput';
import FP__CustomWidthInput from './FP__CustomWidthInput';
import FP__NestedFlexPanel from './nested-flex-panel/FP__NestedFlexPanel';
import FP__MoreOptions_Button from './more-option-panel/FP__MoreOptions_Button';
import NFP__FlexAmountPanel from './nested-flex-panel/NFP__FlexAmountPanel';

export default {
  data () {
    return {
      toggleMoreOptionsGroup: [{ moreOptionsToggled: false }],
    }
  },
  components: {
    'fp--flex-amount-input': FP__FlexAmountInput,
    'fp--custom-width-input': FP__CustomWidthInput,
    'fp--nested-flex-panel': FP__NestedFlexPanel,
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
.more-options--outer {
  margin-top: .5rem;

}
.more-options--button {
  width: 2rem;
  background: linear-gradient(to bottom, var(--mainTurq), var(--darkTurq));
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  padding: .2rem;
}
.more-options--button:active {
  background: linear-gradient(to top, var(--mainTurq), var(--darkTurq));
}
.more-options--button img {
  width: 1.5rem;
}
</style>
