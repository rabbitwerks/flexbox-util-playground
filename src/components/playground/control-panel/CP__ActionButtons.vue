<template>
<div class="action-buttons flex-1 flexbox">
  <div class="flex-1"></div>
  <div class="flex-3-i flexbox-space-evenly flexdir-col">
    <cp--ab--direction-selection 
      :flexGroupDirection="flexGroupDirection">
    </cp--ab--direction-selection>
    <cp--ab--add></cp--ab--add>
    <cp--ab--remove></cp--ab--remove>
  </div>
  <div class="flex-1"></div>
</div>
</template>

<script>
import CP__AB__Add from './CP__AB__Add';
import CP__AB__Remove from './CP__AB__Remove';
import CP__AB__DirectionSelection from './CP__AB__DirectionSelection'
export default {
  props: ['flexGroupDirection'],
  components: {
    'cp--ab--add': CP__AB__Add,
    'cp--ab--remove': CP__AB__Remove,
    'cp--ab--direction-selection': CP__AB__DirectionSelection
  }
}
</script>

<style scoped>
.action-buttons {
  border-right: 2px solid var(--backgroundGrey);
}
</style>
