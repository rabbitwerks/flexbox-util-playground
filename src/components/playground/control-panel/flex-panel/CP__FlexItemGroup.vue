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
export default {

}
</script>

<style>

</style>
