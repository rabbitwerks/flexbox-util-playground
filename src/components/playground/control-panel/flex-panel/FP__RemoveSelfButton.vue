<template>
  <div
    @click="removeSelf_STORE(parentIndex)" 
    class="remove-self-button--outer flex-1">
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

</style>
