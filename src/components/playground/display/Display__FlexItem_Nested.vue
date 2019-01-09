<template>
  <div class="flex-item--nested--outer flexbox">
    <div 
      :class="nestedFlexDirection"
      class="
        flex-item--nested--inner 
        flex-1 flexbox border
      ">
      <div 
        v-for="(nestedFlexItem, index) in nestedFlexGroup"
        :key="index"
        class="nested--flex-item flexbox-space-center">
        <span>Flex</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['index'],
  computed: {
    nestedFlexGroup() {
      return this.$store.getters.getNestedFlexGroup(this.index).nestedFlexGroup;
    },
    nestedFlexDirection() {
      return this.$store.getters.getNestedFlexDirection(this.index);
    }
  }
}
</script>

<style>
.flex-item--nested--outer {
  height: 100%;
}
.flex-item--nested--inner {
  margin: 1rem;
}
.nested--flex-item {
  border: 1px solid #212121;
}
</style>
