<template>
  <div class="flex-5 flexbox">
    <cp--action-buttons></cp--action-buttons>
    <cp--flex-input-panel></cp--flex-input-panel>
  </div>
</template>

<script>
import eventBus from '../../../eventbus.js';
import CP__ActionButtons from './CP__ActionButtons';
import CP__FlexInputPanel from './CP__FlexInputPanel';
export default {
  components: {
    'cp--action-buttons': CP__ActionButtons,
    'cp--flex-input-panel': CP__FlexInputPanel
  }
}
</script>

<style>

</style>
