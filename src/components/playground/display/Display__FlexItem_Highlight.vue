<template>
  <div class="highlight--outer">
    <highlight--parent-flex-info
      v-if="!hasNestedFlexbox"
      :parentIndex="parentIndex"
      :flexItem="flexItem">
    </highlight--parent-flex-info>
    <highlight--nested-flex-info
      v-else
      :nestedIndex="nestedIndex"
      :nestedFlexItem="nestedFlexItem">
    </highlight--nested-flex-info>
  </div>
</template>

<script>
import Highlight__ParentFlexInfo from './FlexItem_Highlight__ParentFlexInfo';
import Highlight__NestedFlexInfo from './FlexItem_Highlight__NestedFlexInfo';

export default {
  props: { 
    parentIndex: Number, 
    flexItem: Object, 
    nestedFlexItem: {
      default: null, type: Object
      }, 
    nestedIndex: {
      default: null, type: Number
      },
  },
  computed: {
    hasNestedFlexbox () {
      return this.flexItem.nested.hasNestedFlexbox;
    },
    nestedFlexDirection() {
      return this.flexItem.nested.nestedFlexDirection;
    }
  },
  components: {
    'highlight--parent-flex-info': Highlight__ParentFlexInfo,
    'highlight--nested-flex-info': Highlight__NestedFlexInfo,
  },
  
}
</script>

<style scoped>
.highlight--outer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 25;
  background-color: rgba(255, 255, 255, .4);
}
.highlight--outer * {
  width: 100%;
  height: 100%;
}
.highlight--inner {
  position: absolute;

  z-index: 25;
}
</style>



