<template>
  <div id="display" class="flex-10">
    <disp--box v-for="(box, i) in boxGroup" :key="i"></disp--box>


  </div>
</template>

<script>
import Display__Box from './Display__Box'
export default {
  props: ['boxGroup'],
  components: {
    'disp--box': Display__Box,
  }
}
</script>

<style>

</style>
