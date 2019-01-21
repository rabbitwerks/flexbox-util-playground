<template>
  <div class="custom-flex-size-input-group">
    <label v-if="isFlexDirectionRow" for="custom-flex-size-input">Custom Width</label>
    <label v-else for="custom-flex-size-input">Custom Height</label>
    <input 
      v-model="customFlexSize"
      type="number" 
      name="custom-flex-size-amount" 
      class="custom-flex-size-amount"
      placeholder="400">
    <select 
      v-model="measurementUnits"
      name="custom-flex-size-unit-select"
      class="custom-flex-size-unit-select">
      <option value="px">px</option>
      <option value="rem">rem</option>
    </select>
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
    customFlexSize: {
      get() {
        return this.$store.state.flexItemGroup[this.parentIndex].customWidth;
      },
      set(value) {
        const payload = {
          value,
          parentIndex: this.parentIndex,
          isCustomFlexSize: true,
          measurementUnits: this.measurementUnits,
        };
        this.$store.dispatch('setCustomFlexSize_STORE', payload);
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
        this.$store.dispatch('setCustomFlexSizeUnits_STORE', payload);
      }
    }
  },

}
</script>

<style scoped>
.custom-flex-size-input-group label {
  display: block;
}
.custom-flex-size-amount {
  width: 4rem;
  padding: .1rem .25rem;
  border: 2px solid var(--backgroundGrey);
  border-right: 1px solid var(--backgroundGrey);
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
.custom-flex-size-unit-select {
  width: auto;
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
