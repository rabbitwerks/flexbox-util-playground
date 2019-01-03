<template>
<div class="action-buttons flex-1 flexbox">
  <div class="flex-1"></div>
  <div class="flex-3-i flexbox-space-evenly flexdir-col">
    <ap--direction-selection>    </ap--direction-selection>
    <div class="add-remove-btns--outer">
      <div class="add-remove-btns--label--group flexbox-space-between">
        <span 
          class="add-remove-btns--label--label"
          >Flex Items: 
        </span>
        <span 
          class="add-remove-btns--label--value"
          >{{ flexItemGroupLength }}
        </span>
      </div>
      <div class="add-remove-btns-inner flexbox">
        <ap--remove></ap--remove>
        <ap--add></ap--add>
      </div>
    </div>
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
  },
  computed: {
    flexItemGroupLength() {
      return this.$store.getters.getFlexGroup.length;
    }
  }
}
</script>

<style scoped>
.text-right {
  text-align: right;
}
.action-buttons {
  border-right: 2px solid var(--backgroundGrey);
}
.add-remove-btns--label--label, .add-remove-btns--label--value {
  font-weight: 500;
}
</style>
