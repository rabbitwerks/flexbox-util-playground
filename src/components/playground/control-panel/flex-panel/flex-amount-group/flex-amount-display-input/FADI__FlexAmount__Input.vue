<template>
  
  <input 
  @blur="checkAndSetFlexAmount($event)"
  v-model="newFlexAmount"
  class="amount-display-input flex-4"
  type="number" 
  name="flex-amount"
  >
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      newFlexAmount: 1,
    }
  },
  methods: {
    ...mapActions(['setFlexAmount_STORE']),
    changeDisplay () {
      this.$emit('update:showDisplay', true)
    },
    checkAndSetFlexAmount ($event) {
      const payload = {
        //iscustomflexsize
      };
      this.setFlexAmount_STORE(this.newFlexAmount)
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
