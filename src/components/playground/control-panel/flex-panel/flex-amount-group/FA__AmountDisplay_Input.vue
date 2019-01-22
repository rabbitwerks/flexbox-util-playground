<template>
  <input 
  @keypress="validateNumber($event)"
  
  v-model="newFlexAmount"
  class="amount-display-input"
  type="number" 
  name="flex-amount"
  >
</template>

<script>
export default {
  data () {
    return {
      newFlexAmount: '',
    }
  },
  methods: {
    validateNumber($event) {
      if($event.target.value >= 1 || $event.target.value <= 20) {
        return $event.target.value
      }
      console.log('number not within range, range: 1 - 10')
    }
  }
}
</script>

<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
.amount-display-input {
  width: 4rem;
  padding: .1rem .25rem;
  border-top: 2px solid var(--backgroundGrey);
  border-bottom: 2px solid var(--backgroundGrey);
  border-left: 1px solid var(--backgroundGrey);
  border-right: 1px solid var(--backgroundGrey);
  font-family: 'Dosis', sans-serif;
  text-align: center;
  font-size: .9rem;
  font-weight: 600;
}
</style>
