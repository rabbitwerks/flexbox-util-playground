<template>
  <button @click="removeItemFromGroup_STORE">Remove Flex Item</button>
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
button {
  width: auto;
  background: linear-gradient(to bottom, rgb(175, 240, 184), rgb(117, 170, 159));
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  padding: .5rem;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
button:active {
  background: linear-gradient(to top, rgb(175, 240, 184), rgb(117, 170, 159));
}
</style>
