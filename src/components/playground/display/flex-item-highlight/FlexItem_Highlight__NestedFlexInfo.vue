<template>
  <div class="highlight--inner flexbox flexdir-col">
    <h3 class="flex-center center-self">Nested Flex Item Info</h3>
    <span class="flex-center center-self">
      Flex Item: {{ nestedIndex + 1 }}
    </span>
    <span class="flex-center center-self">
      Flex Amount: {{ nestedFlexItem.flex }}
    </span>
    <span class="flex-center center-self">Flex Direction: {{ nestedFlexDirection }}</span>
  </div>
</template>

<script>
export default {
  props: ['nestedFlexItem', 'nestedIndex', 'nestedFlexDirection'],
}
</script>

<style>

</style>
