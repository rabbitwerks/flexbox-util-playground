<template>
  <div class="flex-amount-group--outer">
    <label 
      class="flex-amount-group--label"
      for="flex-amount"
      >Parent Flex Item {{ parentIndex + 1 }}
    </label>
    <div 
      @mouseenter="highlightParentItem(true)"
      @mouseleave="highlightParentItem(false)"
      class="flex-amount-group--inner flexbox">

        <decrease-button :parentIndex="parentIndex"
        :decreaseFlexAmount="decreaseFlexAmount_STORE">
        </decrease-button>

        <amount-display-input :parentIndex="parentIndex">
        </amount-display-input>

        <increase-button 
          :parentIndex="parentIndex"
          :increaseFlexAmount="increaseFlexAmount_STORE">
        </increase-button>
        
    </div>
    <!-- <input 
      @input="setFlexAmount($event)"
      
      v-model="newFlexAmount"
      type="number" 
      name="flex-amount"
      min="1"
      max="20"> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import FA__AmountDisplayInput from './flex-amount-group/FA__AmountDisplay_Input';
import FA__DecreaseButton from './flex-amount-group/FA__DecreaseButton';
import FA__IncreaseButton from './flex-amount-group/FA__IncreaseButton';

export default {
  data () {
    return {
      newFlexAmount: 1
    }
  },
  props: ['parentIndex'],
  components: {
    'amount-display-input': FA__AmountDisplayInput,
    'decrease-button': FA__DecreaseButton,
    'increase-button': FA__IncreaseButton
  },
  computed: {
    flexItem_FlexAmount() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).flex;
    }
  },
  methods: {
    ...mapActions(['decreaseFlexAmount_STORE','increaseFlexAmount_STORE', 'highlightParentItem_STORE']),
    setFlexAmount($event) {
      const payload = {
        parentIndex: this.parentIndex, 
        value: $event.target.value,
        isCustomWidth: false
      };
      this.setFlexAmount_STORE(payload);
    },
    highlightParentItem(setActive) {
      const payload = {
        parentIndex: this.parentIndex,
        setActive
      };
      this.highlightParentItem_STORE(payload);
    },

  }
}
</script>

<style>
.flex-amount-group--label {
  display: block;
  font-weight: 500;
}
.flex-amount-group input {
  width: 6.8rem;
  padding: .1rem .25rem;
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
</style>
