<template>
  <button
    @click="addNestedItemtoFlexItem_STORE(index)" 
    class="nfp--add-remove-group--add flex-1"
    >Add
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['index'],
  methods: {
    ...mapActions(['addNestedItemtoFlexItem_STORE'])
  }
}
</script>

<style scoped>
.nfp--add-remove-group--add {
  background: linear-gradient(to bottom, rgb(175, 240, 184), rgb(117, 170, 159));
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  border-left: 1px solid var(--backgroundGrey);
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: .1rem .5rem;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
.nfp--add-remove-group--add:active {
  background: linear-gradient(to top, rgb(175, 240, 184), rgb(117, 170, 159));
}
</style>
