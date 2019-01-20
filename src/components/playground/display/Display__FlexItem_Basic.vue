<template>
  <div
    v-if="!flexItem.isCustomWidth" 
    @click="activate_ColorPicker"
    :style="{ 'flex': flexItem.flex }"
    class="flex-item--basic"
    tabindex="-1"
    >
    <div 
      class="flex-item--basic--inner"
      
      :style="{ 'background-color': flexItem.customColor }"

      :class="{ 'flexbox-space-center': !flexItem.nested.hasNestedFlexbox }">

      <!-- component for nested flexbox -->
      <flex-item--nested 
        v-if="flexItem.nested.hasNestedFlexbox" :parentIndex="parentIndex">
      </flex-item--nested>

      <!-- else display flex amount div -->
      <div v-else v-show="!flexItem.highlightActive">
        <h3>Flex: {{ flexItem.flex }}</h3>
      </div>

      <input 
        @input="setFlexParentColor($event)"
        :class="{ 'active': this.colorPickerActive }"
        class="click-color-picker--parent" 
        type="color"
      >

      <flex-item-highlight 
        v-show="flexItem.highlightActive"
        :flexItem="flexItem"
        :parentIndex="parentIndex"
        :nestedFlexItem="null"
        :nestedIndex="null">
      </flex-item-highlight>

    </div>
  </div>

  <!-- custom width div if not flex amount -->
  <custom-width-item v-else :parentIndex="parentIndex"></custom-width-item>

  

</template>

<script>
import { mapActions } from 'vuex';

import CustomWidthItem from './Display__Flextem_CustomWidth';
import Display__FlexItem_Nested from './Display__FlexItem_Nested';
import Display__FlexItem_Highlight from './Display__FlexItem_Highlight';

export default {
  data () {
    return {
      colorPickerActive: false
    }
  },
  props: ['parentIndex'],
  components: {
    'custom-width-item': CustomWidthItem,
    'flex-item--nested': Display__FlexItem_Nested,
    'flex-item-highlight': Display__FlexItem_Highlight,
  },
  computed: {
    flexItem() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex);
    }
  },
  methods: {
    ...mapActions(['setFlexParentColor_STORE']),
    activate_ColorPicker() {
      this.colorPickerActive = true;
      setTimeout(() => {
        this.colorPickerActive = false;
      }, 3000)
    },
    setFlexParentColor($event) {
      const payload = {
        parentIndex: this.parentIndex,
        newValue: $event.target.value,
      };
      this.setFlexParentColor_STORE(payload);
    }
  }
}
</script>

<style scoped>
.flex-item--basic {
  height: calc(100% - 4px);
  background-color: var(--mainTurq);
  border: 2px solid var(--backgroundGrey);
  transition: flex .2s ease-in-out, width .2s ease-in-out;
}
.flex-item--basic--inner {
  height: 100%;
  position: relative;
}
.click-color-picker--parent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1;
}
.click-color-picker--parent.active {
  z-index: 5;
}
</style>
