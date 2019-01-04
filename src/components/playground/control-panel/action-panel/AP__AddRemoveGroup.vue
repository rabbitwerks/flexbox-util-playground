<template>
  <div class="add-remove-btns--outer">
    <div 
      class="
        add-remove-btns--label--group flexbox-space-between
      ">
      <span 
        class="add-remove-btns--label--label"
        >Flex Items: 
      </span>
      <span 
        class="add-remove-btns--label--value"
        >{{ flexItemGroupLength }} of 5
      </span>
    </div>
    <div class="add-remove-btns-inner flexbox">
      <arg--remove></arg--remove>
      <arg--add></arg--add>
    </div>
  </div>
</template>

<script>
import ARG__Add from './ARG__Add';
import ARG__Remove from './ARG__Remove';
export default {
  components: {
    'arg--add': ARG__Add,
    'arg--remove': ARG__Remove,
  },
  computed: {
    flexItemGroupLength() {
      return this.$store.getters.getFlexGroup.length;
    }
  }
}
</script>

<style scoped>
.add-remove-btns--label--label, .add-remove-btns--label--value {
  font-weight: 500;
}
</style>
