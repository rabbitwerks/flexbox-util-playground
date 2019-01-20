<template>
  <div class="flex-amount-input-group">
    <label for="flex-amount"
      >Parent Flex Item {{ parentIndex + 1 }}
    </label>
    <input 
      @input="setFlexAmount($event)"
      @mouseenter="highlightParentItem(true)"
      @mouseleave="highlightParentItem(false)"
      v-model="newFlexAmount"
      type="number" 
      name="flex-amount"
      min="1"
      max="20">
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data () {
    return {
      newFlexAmount: 1
    }
  },
  props: ['parentIndex'],
  computed: {
    flexItem_FlexAmount() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).flex;
    }
  },
  methods: {
    ...mapActions(['setFlexAmount_STORE', 'highlightParentItem_STORE']),
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
.flex-amount-input-group label {
  display: block;
  font-weight: 500;
}
.flex-amount-input-group input {
  width: 6.8rem;
  padding: .1rem .25rem;
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
</style>
