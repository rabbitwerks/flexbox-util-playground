<template>
  <input 
    @blur="validateNumber($event)"
    @keypress.enter="validateNumber($event)"
    class="amount-display-input flex-4"
    type="number" 
    name="flex-amount"
    min="1"
    max="20"
    :value="currentFlexAmount"
  >
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['parentIndex'],
  computed: {
    currentFlexAmount () {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).flex;
    }
  },
  methods: {
    ...mapActions(['setFlexAmount_STORE']),
    changeDisplay () {
      this.$emit('update:showDisplay', true)
    },
    // checks if entered number is within range, 1-20
    // if higher than 20, default to 20
    // if lower than 1, default to 1
    // setFlexAmount with valid number
    validateNumber ($event) {
      const enteredNumber = Math.floor($event.target.value);
      if (enteredNumber > 20) {
        console.log(`number entered is over max range: 20, enteredNumber: ${enteredNumber}, number defaulted to 20`);
        const validNumber = 20;
        this.setFlexAmount(validNumber);
      } else if (enteredNumber < 1) {
        console.log(`number entered is under min range: 1, enteredNumber: ${enteredNumber}, number defaulted to 1`);
        const validNumber = 1;
        this.setFlexAmount(validNumber);
      } else if (enteredNumber > 0 && enteredNumber < 21) {
        console.log(`number within range: 1-20, enteredNumber: ${enteredNumber}`);
        this.setFlexAmount(enteredNumber);
      }
    },
    setFlexAmount (validNumber) {
      const payload = {
        parentIndex: this.parentIndex,
        isCustomFlexSize: false,
        newFlexAmount: validNumber,
      };
      this.setFlexAmount_STORE(payload)
      this.changeDisplay()
    }
  },
  mounted() {
    this.$el.focus();
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
  width: inherit;
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
