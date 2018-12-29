<template>
  <div class="flex-amount-input-group">
    <label for="flex-amount">Flex Item {{ index + 1 }}</label>
    <input 
      @input="changeFlexAmount"
      v-model="newFlexAmount"
      type="number" 
      name="flex-amount"
      min="1"
      max="20">
  </div>
</template>

<script>
import eventBus from '../../../eventbus.js'
export default {
  data () {
    return {
      newFlexAmount: 1
    }
  },
  props: ['flexItem', 'index'],
  methods: {
    changeFlexAmount() {
      const flexData = {
        index: this.index,
        flexAmount: this.newFlexAmount
      }
      eventBus.$emit('changeFlexAmount', flexData)
    }
  }
}
</script>

<style>
.flex-amount-input-group label {
  display: block;
  font-weight: 500;
}
.flex-amount-input-group input {
  width: 6rem;
  padding: .1rem .25rem;
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 500;
}
</style>
