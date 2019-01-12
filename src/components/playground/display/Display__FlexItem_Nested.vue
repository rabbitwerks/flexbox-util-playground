<template>
  <div class="flex-item--nested--outer flexbox">
    <div 
      :class="nestedFlexDirection"
      class="
        flex-item--nested--inner 
        flex-1 flexbox border
      ">
      <div 
        v-for="(nestedFlexItem, nestedIndex) in nestedFlexGroup"
        :key="nestedIndex"
        @click.shift="setNestedCustomColor"
        :style="{ 'flex': nestedFlexItem.flex }"

        style="background-color: #aaaaaa;"


        class="nested--flex-item flexbox-space-center">
        <span>Flex {{nestedFlexItem.flex}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['parentIndex'],
  computed: {
    nestedFlexGroup() {
      return this.$store.getters.getNestedFlexGroup(this.parentIndex).nestedFlexGroup;
    },
    nestedFlexDirection() {
      return this.$store.getters.getNestedFlexDirection(this.parentIndex);
    }
  },
  methods: {
    setNestedCustomColor() {
      console.log('hello')
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
  transition: flex .1s ease-in-out;
}
</style>
