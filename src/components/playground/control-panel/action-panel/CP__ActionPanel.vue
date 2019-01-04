<template>
<div class="action-buttons flex-1 flexbox">
  <div class="flex-1"></div>
  <div class="flex-3-i flexbox-space-evenly flexdir-col">
    <ap--direction-selection>    </ap--direction-selection>
    <ap--add-remove-group></ap--add-remove-group>
    <ap--flexgap></ap--flexgap>
  </div>
  <div class="flex-1"></div>
</div>
</template>

<script>
import AP__AddRemoveGroup from './AP__AddRemoveGroup'
import AP__DirectionSelection from './AP__DirectionSelection';
import AP__Flexgap from './AP__Flexgap';

export default {
  components: {
    'ap--add-remove-group': AP__AddRemoveGroup,
    'ap--direction-selection': AP__DirectionSelection,
    'ap--flexgap': AP__Flexgap,
  },
}
</script>

<style scoped>
.action-buttons {
  border-right: 2px solid var(--backgroundGrey);
}
</style>
