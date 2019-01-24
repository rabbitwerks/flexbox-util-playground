<template>
  <div 
    @click="changeDisplay"
    class="amount-display--outer flex-4 pointer">
    <span 
      class="amount-display--inner"
      >{{ currentFlexAmount }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['showDisplay', 'parentIndex'],
  computed: {
    currentFlexAmount () {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).flex;
    }
  },
  methods: {
    changeDisplay () {
      this.$emit('update:showDisplay', false)
    }
  }
}
</script>

<style scoped>
.amount-display--outer {
  background-color: #fff;
  padding: .1rem .25rem;
  border-top: 2px solid var(--backgroundGrey);
  border-bottom: 2px solid var(--backgroundGrey);
  border-left: 1px solid var(--backgroundGrey);
  border-right: 1px solid var(--backgroundGrey);
  font-family: 'Dosis', sans-serif;
  text-align: center;
  font-size: .9rem;
  font-weight: 600;
  color: #000;
}

</style>
