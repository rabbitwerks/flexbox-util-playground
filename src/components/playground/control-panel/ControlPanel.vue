<template>
  <div class="flex-5 flexbox">
    <cp--action-buttons></cp--action-buttons>
    <fp--flex-input-panel></fp--flex-input-panel>
  </div>
</template>

<script>
import CP__ActionButtons from './CP__ActionButtons';
import FP__FlexInputPanel from './flex-panel/FP__FlexInputPanel';
export default {
  components: {
    'cp--action-buttons': CP__ActionButtons,
    'fp--flex-input-panel': FP__FlexInputPanel
  }
}
</script>

<style>

</style>
