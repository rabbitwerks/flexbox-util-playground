<template>
  <div
    v-if="!flexItem.isCustomWidth" 
    @keydown.16="activate_ColorPicker"
    @keyup.16="deactivate_ColorPicker"
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
      <div v-else>
        <h3>Flex: {{ flexItem.flex }}</h3>
      </div>

      <input 
        @input="setFlexParentColor($event)"
        :class="{ 'active': this.colorPickerActive }"
        class="click-color-picker--parent" 
        type="color"
      >

    </div>
  </div>

  <!-- custom width div if not flex amount -->
  <custom-width-item v-else :parentIndex="parentIndex"></custom-width-item>

  

</template>

<script>
import { mapActions } from 'vuex';

import CustomWidthItem from './Display__Flextem_CustomWidth';
import Display__FlexItem_Nested from './Display__FlexItem_Nested';
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
      }, 2000)
    },
    deactivate_ColorPicker() {
      this.colorPickerActive = false;
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
  height: 100%;
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
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: -1;
}
.click-color-picker--parent.active {
  z-index: 5;
}
</style>
