<template>
  <div class="custom-pixel-size-input-group">
    <label v-if="isFlexDirectionRow" for="custom-pixel-size-input">Custom Width</label>
    <label v-else for="custom-pixel-size-input">Custom Height</label>
    <div class="flexbox">
      <input 
        v-model="customPixelSize"
        type="number" 
        name="custom-pixel-size-amount" 
        class="custom-pixel-size-amount"
        placeholder="0">
      <select 
        v-model="measurementUnits"
        name="custom-pixel-size-unit-select"
        class="custom-pixel-size-unit-select">
        <option value="px">px</option>
        <option value="rem">rem</option>
      </select>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['parentIndex'],
  computed: {
    isFlexDirectionRow() {
      if (this.$store.getters.getFlexDirection === 'flexdir-row' || this.$store.getters.getFlexDirection === 'flexdir-rowrev') {
        return true 
      }
      return false
    },
    customPixelSize: {
      get() {
        return this.$store.state.flexItemGroup[this.parentIndex].customWidth;
      },
      set(value) {
        const payload = {
          value,
          parentIndex: this.parentIndex,
          isCustomPixelSize: true,
          measurementUnits: this.measurementUnits,
        };
        this.$store.dispatch('setCustomPixelSize_STORE', payload);
      },
    },
    measurementUnits: {
      get() {
        return this.$store.state.flexItemGroup[this.parentIndex].measurementUnits;
      },
      set(value) {
        const payload = {
          measurementUnits: value,
          parentIndex: this.parentIndex,
        };
        this.$store.dispatch('setCustomPixelSizeUnits_STORE', payload);
      }
    }
  },

}
</script>

<style scoped>
.custom-pixel-size-input-group label {
  display: block;
}
.custom-pixel-size-amount {
  width: 4.5rem;
  box-sizing: border-box;
  padding: .1rem .25rem;
  border: 2px solid var(--backgroundGrey);
  border-right: 1px solid var(--backgroundGrey);
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
.custom-pixel-size-unit-select {
  width: 100%;
  padding: .05rem;
  border: 2px solid var(--backgroundGrey);
  border-left: 1px solid var(--backgroundGrey);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
</style>
