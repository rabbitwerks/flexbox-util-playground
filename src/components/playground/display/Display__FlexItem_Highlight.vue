<template>
  <div class="highlight--outer">
    <div class="highlight--inner flexbox flexdir-col">
      <div class="flex-center center-self">
        Flex Amount: {{ flexItem.flex }}
      </div>
      <div class="flex-center center-self">Group Flex Direction: {{ flexDirection }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['flexItem', 'parentIndex'],
  computed: {
    flexDirection () {
      return this.$store.getters.getFlexDirection;
    }
  }
}
</script>

<style scoped>
.highlight--outer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 25;
  background-color: rgba(255, 255, 255, .4);
}
.highlight--outer * {
  width: 100%;
  height: 100%;
}
.highlight--inner {
  position: absolute;

  z-index: 25;
}
</style>



