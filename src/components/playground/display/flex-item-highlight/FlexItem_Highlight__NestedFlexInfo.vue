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
    <span class="flex-center center-self">Pixel Width: {{ nestedFlexItem.pixelWidth }}</span>
    <span class="flex-center center-self">Pixel Height: {{ nestedFlexItem.pixelHeight }}</span>
  </div>
</template>

<script>
export default {
  props: ['nestedFlexItem', 'nestedIndex', 'nestedFlexDirection'],
}
</script>

<style>

</style>
