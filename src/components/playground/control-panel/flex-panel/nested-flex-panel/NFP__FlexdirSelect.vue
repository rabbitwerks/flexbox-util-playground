<template>
  <div class="nfp--flexdir-select--outer">
    <div class="nfp--flexdir-select--label">Flex Direction</div>
    <div class="nfp--flexdir-select--inner flexbox">

      <select 
        @input="setNestedFlexDirection($event)"
        class="nfp--flexdir-select--input flex-1"
        :value="currentNestedFlexDirection">
          <option 
            value="flexdir-row">Row (Default)
          </option>
          <option 
            value="flexdir-col">Column
          </option>
          <option 
            value="flexdir-rowrev">Row Reverse
          </option>
          <option 
            value="flexdir-colrev">Column Reverse
          </option>
      </select>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['parentIndex'],
  computed: {
    currentNestedFlexDirection() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).nested.nestedFlexDirection;
    }
  },
  methods: {
    ...mapActions(['setNestedFlexDirection_STORE']),
    setNestedFlexDirection($event) {
      const payload = {
        parentIndex: this.parentIndex,
        newDirection: $event.target.value,
      };
      this.setNestedFlexDirection_STORE(payload);
    }
  }
}
</script>

<style scoped>
.nfp--flexdir-select--input {
  width: auto;
  padding: .1rem .25rem;
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 500;
}
</style>
