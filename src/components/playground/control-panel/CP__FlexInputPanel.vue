<template>
  <div class="flex-6 flexbox flex-align-center flexgap-2 flex-wrap">
    <cp--flex-amount-input 
      v-for="(flexItem, i) in flexItemGroup" 
      :key="i"
      :flexItem="flexItem"
      :index="i"></cp--flex-amount-input>
  </div>
</template>

<script>
import CP__FlexAmountInput from './CP__FlexAmountInput';
export default {
  props: ['flexItemGroup'],
  components: {
    'cp--flex-amount-input': CP__FlexAmountInput
  }

}
</script>

<style>

</style>
