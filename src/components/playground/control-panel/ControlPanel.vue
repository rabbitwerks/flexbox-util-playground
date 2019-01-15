<template>
  <div class="control-panel--outer flexbox">
    <cp--action-panel></cp--action-panel>
    <cp--flex-input-panel></cp--flex-input-panel>
  </div>
</template>

<script>
import CP__ActionPanel from './action-panel/CP__ActionPanel';
import CP__FlexInputPanel from './flex-panel/CP__FlexInputPanel';
export default {
  components: {
    'cp--action-panel': CP__ActionPanel,
    'cp--flex-input-panel': CP__FlexInputPanel
  }
}
</script>

<style scoped>
.control-panel--outer {
  height: 15rem;
}
</style>
