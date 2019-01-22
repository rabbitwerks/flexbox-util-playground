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

        <display-input-group
          :parentIndex="parentIndex">
        </display-input-group>

        <increase-button 
          :parentIndex="parentIndex"
          :increaseFlexAmount="increaseFlexAmount_STORE">
        </increase-button>
        
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import FA__DisplayInputGroup from './flex-amount-group/flex-amount-display-input/FA__Display_Input_Group';
import FA__DecreaseButton from './flex-amount-group/FA__DecreaseButton';
import FA__IncreaseButton from './flex-amount-group/FA__IncreaseButton';

export default {
  data () {
    return {
    }
  },
  props: ['parentIndex'],
  components: {
    'display-input-group': FA__DisplayInputGroup,
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
    // setFlexAmount($event) {
    //   const payload = {
    //     parentIndex: this.parentIndex, 
    //     value: $event.target.value,
    //     isCustomWidth: false
    //   };
    //   this.setFlexAmount_STORE(payload);
    // },
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
.flex-amount-group--inner {
  width: 100%;
}

</style>
