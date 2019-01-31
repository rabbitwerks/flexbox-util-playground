<template>
  <div class="nfp--flex-amount-panel--outer flexdir-col">
    <div 
      v-for="(nestedItem, nestedIndex) in nestedFlexGroup" :key="nestedIndex"
      class="nfp--flex-amount-panel--input-wrapper"
      >
      <label>Nested {{ nestedIndex + 1 }}</label>
      <input 
        @input="setNestedFlexAmount(nestedIndex, $event)"
        @mouseenter="highlightNestedItem(nestedIndex, true)"
        @mouseleave="highlightNestedItem(nestedIndex, false)"
        type="number" 
        :value="nestedItem.flex"
        min="1"
        max="20"
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['nestedFlexGroup', 'parentIndex'],
  methods: {
    ...mapActions(['setNestedFlexAmount_STORE', 'highlightNestedItem_STORE']),
    setNestedFlexAmount(nestedIndex, $event) {
      const payload = {
        parentIndex: this.parentIndex,
        nestedIndex,
        newFlexAmount: $event.target.value,
      };
      this.setNestedFlexAmount_STORE(payload);
    },
    highlightNestedItem(nestedIndex, setActive) {
      const payload = {
        parentIndex: this.parentIndex,
        nestedIndex,
        setActive
      };
      this.highlightNestedItem_STORE(payload);
    }
  }
}
</script>

<style scoped>
.nfp--flex-amount-panel--outer {
  padding: 0 .5rem;
}
.nfp--flex-amount-panel--input-wrapper label {
  display: block;
  text-align: center;
}
.nfp--flex-amount-panel--input-wrapper input {
  width: 2.7rem;
  padding: .1rem .25rem;
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
</style>
