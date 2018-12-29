6<template>
  <div class="playground flexbox flexdir-col">
    <pg--display></pg--display>
    <pg--control-panel></pg--control-panel>
  </div>
</template>

<script>
import Display from '../components/playground/display/Display';
import ControlPanel from '../components/playground/control-panel/ControlPanel'

export default {
  components: {
    'pg--display': Display,
    'pg--control-panel': ControlPanel
  },
}
</script>

<style scoped>
.playground {
  height: 100%;
}
</style>
