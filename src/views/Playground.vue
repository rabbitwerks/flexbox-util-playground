<template>
  <div class="playground flexbox flexdir-col">
    <pg--display :boxGroup="boxGroup"></pg--display>
    <pg--control-panel></pg--control-panel>
  </div>
</template>

<script>
import eventBus from '../eventbus.js';
import Display from '../components/playground/Display';
import ControlPanel from '../components/playground/ControlPanel'
export default {
  data () {
    return {
      boxGroup: [
        {
          name: 'Box',
          flex: 1,
        }
      ]
    }
  },
  components: {
    'pg--display': Display,
    'pg--control-panel': ControlPanel
  },
  methods: {
    addBoxToGroup() {
      this.boxGroup.push({ name: 'Box', flex: 1 })
    },
    removeBoxFromGroup() {
      this.boxGroup.splice(0, 1)
    }
  },
  mounted() {
    eventBus.$on('addBoxToGroup', () => {
      this.addBoxToGroup()
    });
    eventBus.$on('removeBoxFromGroup', () => {
      this.removeBoxFromGroup()
    });
  }
}
</script>

<style>
.playground {
  height: 100%;
}
</style>
