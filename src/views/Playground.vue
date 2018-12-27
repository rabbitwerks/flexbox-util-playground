<template>
  <div class="playground flexbox flexdir-col">
    <pg--display :flexItemGroup="flexItemGroup"></pg--display>
    <pg--control-panel></pg--control-panel>
  </div>
</template>

<script>
import eventBus from '../eventbus.js';
import Display from '../components/playground/display/Display';
import ControlPanel from '../components/playground/control-panel/ControlPanel'
export default {
  data () {
    return {
      flexItemGroup: [
        {
          flex: 1,
          customWidth: '',
        }
      ]
    }
  },
  components: {
    'pg--display': Display,
    'pg--control-panel': ControlPanel
  },
  mounted() {
    eventBus.$on('addItemToGroup', () => {
      this.addItemToGroup()
    });
    eventBus.$on('removeItemFromGroup', () => {
      this.removeItemFromGroup()
    });
  },
  methods: {
    addItemToGroup() {
      this.flexItemGroup.push({
        flex: 1, customWidth: ''
      })
    },
    removeItemFromGroup() {
      this.flexItemGroup.splice(0, 1)
    }
  },
}
</script>

<style>
.playground {
  height: 100%;
}
</style>
