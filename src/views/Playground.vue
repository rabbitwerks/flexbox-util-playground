<template>
  <div class="flexbox flexdir-col">
    <pg--display class="flex-10"></pg--display>
    <pg--control-panel class="flex-5"></pg--control-panel>
  </div>
</template>

<script>
import Display from '../components/playground/Display';
import ControlPanel from '../components/playground/ControlPanel'
export default {
  data () {
    return {

    }
  },
  components: {
    'pg--display': Display,
    'pg--control-panel': ControlPanel
  }
}
</script>

<style>

</style>
