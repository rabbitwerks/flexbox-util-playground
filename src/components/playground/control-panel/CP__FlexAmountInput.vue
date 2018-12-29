<template>
  <div class="flex-amount-input-group">
    <label for="flex-amount">Flex Item {{ index + 1 }}</label>
    <input 
      @input="setFlexAmount(index, $event)"
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
  props: ['index'],
  computed: {
    flexItem_FlexAmount() {
      return this.$store.getters.getFlexGroupItem(this.index).flex
    }
  },
  methods: {
    ...mapActions(['setFlexAmount_STORE']),
    setFlexAmount(index, $event) {
      const flexItemData = {
        index, 
        value: $event.target.value,
      };
      this.setFlexAmount_STORE(flexItemData);
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
