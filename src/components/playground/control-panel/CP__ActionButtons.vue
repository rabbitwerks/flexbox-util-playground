<template>
<div class="flex-1 flexbox">
  <div class="flex-1"></div>
  <div class="flex-3-i flexbox-space-evenly flexdir-col">
    <cp--ab--add></cp--ab--add>
    <cp--ab--remove></cp--ab--remove>
  </div>
  <div class="flex-1"></div>
</div>
</template>

<script>
import CP__AB__Add from './CP__AB__Add';
import CP__AB__Remove from './CP__AB__Remove';
export default {
  components: {
    'cp--ab--add': CP__AB__Add,
    'cp--ab--remove': CP__AB__Remove,
  }
}
</script>

<style>

</style>
