<template>
  <div class="custom-width-input-group">
    <label for="custom-width-input">Custom Width | Units</label>
    <input 
      @input="applyCustomWidth(index)"
      v-model="customWidth"
      type="number" 
      name="custom-width-amount" 
      class="custom-width-amount"
      placeholder="400">
    <select 
      @change="applyUnitsChange(index)"
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
  data () {
    return {
      customWidth: '',
      measurementUnits: 'px'
    }
  },
  props: ['index'],
  methods: {
    ...mapActions(['setCustomWidth_STORE', 'setCustomWidthUnits_STORE']),
    applyCustomWidth(index) {
      const customWidthData = {
        index,
        isCustomWidth: true,
        customWidth: this.customWidth,
        measurementUnits: this.measurementUnits
      };
      this.setCustomWidth_STORE(customWidthData);
    },
    applyUnitsChange(index) {
      const customWidthData = {
        index: this.index,
        measurementUnits: this.measurementUnits,
      };
      this.setCustomWidthUnits_STORE(customWidthData)
    }
  }
}
</script>

<style scoped>
.custom-width-input-group label {
  display: block;
  font-weight: 500;
  font-size: .85rem;
}
.custom-width-amount {
  width: 3.5rem;
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
  width: 3rem;
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
