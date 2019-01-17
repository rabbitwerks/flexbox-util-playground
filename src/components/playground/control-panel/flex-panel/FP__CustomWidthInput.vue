<template>
  <div class="custom-width-input-group">
    <label for="custom-width-input">Custom Width</label>
    <input 
      v-model="customWidth"
      type="number" 
      name="custom-width-amount" 
      class="custom-width-amount"
      placeholder="400">
    <select 
      v-model="measurementUnits"
      name="custom-width-unit-select"
      class="custom-width-unit-select">
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
    customWidth: {
      get() {
        return this.$store.state.flexItemGroup[this.parentIndex].customWidth;
      },
      set(value) {
        const payload = {
          value,
          parentIndex: this.parentIndex,
          isCustomWidth: true,
          measurementUnits: this.measurementUnits,
        };
        this.$store.dispatch('setCustomWidth_STORE', payload);
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
        }
        this.$store.dispatch('setCustomWidthUnits_STORE', payload)
      }
    }
  },

}
</script>

<style scoped>
.custom-width-input-group label {
  display: block;
}
.custom-width-amount {
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
.custom-width-unit-select {
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
