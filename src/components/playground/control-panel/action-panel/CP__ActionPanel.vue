<template>
<div class="action-buttons flex-1 flexbox">
  <div class="flex-1"></div>
  <div class="flex-3-i flexbox-space-evenly flexdir-col">
    <ap--direction-selection>    </ap--direction-selection>
    <ap--add></ap--add>
    <ap--remove></ap--remove>
    <ap--flexgap></ap--flexgap>
  </div>
  <div class="flex-1"></div>
</div>
</template>

<script>
import AP__Add from './AP__Add';
import AP__Remove from './AP__Remove';
import AP__DirectionSelection from './AP__DirectionSelection';
import AP__Flexgap from './AP__Flexgap';

export default {
  components: {
    'ap--add': AP__Add,
    'ap--remove': AP__Remove,
    'ap--direction-selection': AP__DirectionSelection,
    'ap--flexgap': AP__Flexgap,
  }
}
</script>

<style scoped>
.action-buttons {
  border-right: 2px solid var(--backgroundGrey);
}
</style>
