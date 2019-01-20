<template>
  <div class="flex-item--nested--outer flexbox">
    <div 
      @click="activate_ColorPicker"
      :class="nestedFlexDirection"
      tabindex="-1"
      class="
        flex-item--nested--inner 
        flex-1 flexbox border
      ">
      <div 
        v-for="(nestedFlexItem, nestedIndex) in nestedFlexGroup"
        :key="nestedIndex"

        :style="[
          { 'flex': nestedFlexItem.flex, 'background-color': nestedFlexItem.customColor }
        ]"

        class="nested--flex-item flexbox-space-center">

        <input 
          @change="setNestedFlexColor($event, nestedIndex)"
          :class="{ 'active': colorPickerActive }"
          class="click-color-picker--nested"
          type="color"
        >
        
        <span class="nested--flex-item--text"
          >Flex {{ nestedFlexItem.flex }}
        </span>

        <flex-item-highlight 
          v-show="nestedFlexItem.highlightActive"
          :flexItem="flexItem"
          :parentIndex="parentIndex"
          :nestedFlexItem="nestedFlexItem"
          :nestedIndex="nestedIndex">
        </flex-item-highlight>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Display__FlexItem_Highlight from './Display__FlexItem_Highlight';

export default {
  data() {
    return {
      colorPickerActive: false
    }
  },
  props: ['parentIndex'],
  components: {
    'flex-item-highlight': Display__FlexItem_Highlight,
  },
  computed: {
    flexItem () {
      return this.$store.getters.getFlexGroupItem(this.parentIndex);
    },
    nestedFlexGroup () {
      return this.$store.getters.getNestedFlexGroup(this.parentIndex).nestedFlexGroup;
    },
    nestedFlexDirection () {
      return this.$store.getters.getNestedFlexDirection(this.parentIndex);
    }
  },
  methods: {
    ...mapActions(['setNestedFlexColor_STORE']),
    activate_ColorPicker() {
      this.colorPickerActive = true;
      setTimeout(() => {
        this.colorPickerActive = false
      }, 3000);
    },
    deactivate_ColorPicker() {
      this.colorPickerActive = false;
    },
    setNestedFlexColor($event, nestedIndex) {
      const payload = {
        parentIndex: this.parentIndex,
        nestedIndex,
        newValue: $event.target.value
      };
      this.setNestedFlexColor_STORE(payload);
    }
  },
}
</script>

<style scoped>
.flex-item--nested--outer {
  height: 100%;
}
.flex-item--nested--inner {
  position: relative;
  z-index: 50;
  margin: 1rem;
}
.nested--flex-item {
  position: relative;
  border: 1px solid #212121;
  transition: flex .1s ease-in-out;
  background-color: var(--mainTurq);
}
.click-color-picker--nested {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.click-color-picker--nested.active {
  z-index: 10;
}
.nested--flex-item--text {
  z-index: 15;
}
</style>
