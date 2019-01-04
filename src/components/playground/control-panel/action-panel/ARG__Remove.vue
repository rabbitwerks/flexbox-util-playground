<template>
  <button 
    @click="removeItemFromGroup_STORE"
    class="add-remove-btns--remove flex-1"
    >Remove
  </button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['removeItemFromGroup_STORE']),
  }
}
</script>

<style scoped>
.add-remove-btns--remove {
  width: auto;
  background: linear-gradient(to bottom, rgb(175, 240, 184), rgb(117, 170, 159));
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  border-right: 1px solid var(--backgroundGrey);
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: .1rem .5rem;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
.add-remove-btns--remove:active {
  background: linear-gradient(to top, rgb(175, 240, 184), rgb(117, 170, 159));
}
</style>
