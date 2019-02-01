<template>
  <div
    @click="removeSelf_STORE(parentIndex)" 
    class="remove-self-button--outer flex-1 flexbox-space-center pointer">
    <span class="remove-self-button--inner">
      Remove
    </span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['parentIndex'],
  methods: {
    ...mapActions(['removeSelf_STORE']),
  }
}
</script>

<style scoped>
.remove-self-button--outer {
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  font-size: .9rem;
  background: linear-gradient(to bottom, var(--mainTurq), var(--darkTurq));
}
.remove-self-button--outer:active {
  background: linear-gradient(to top, var(--mainTurq), var(--darkTurq));
}
</style>
