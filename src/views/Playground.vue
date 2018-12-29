6<template>
  <div class="playground flexbox flexdir-col">
    <pg--display 
      :flexItemGroup="flexItemGroup"
      :flexGroupDirection="flexGroupDirection">
    </pg--display>
    <pg--control-panel 
      :flexItemGroup="flexItemGroup"
      :flexGroupDirection="flexGroupDirection">
    </pg--control-panel>
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
      ],
      flexGroupDirection: 'flexdir-row'
    }
  },
  components: {
    'pg--display': Display,
    'pg--control-panel': ControlPanel
  },
  mounted() {
    eventBus.$on('applyNewDirection', newFlexDirection => {
      this.flexGroupDirection = newFlexDirection
    })
    eventBus.$on('addItemToGroup', () => {
      this.addItemToGroup()
    });
    eventBus.$on('removeItemFromGroup', () => {
      this.removeItemFromGroup()
    });
    eventBus.$on('removeSelfFromGroup', (index) => {
      this.removeItemFromGroup(index)
    });
    eventBus.$on('changeFlexAmount', flexData => {
      this.flexItemGroup[flexData.index].flex = flexData.flexAmount
    })
  },
  methods: {
    addItemToGroup() {
      this.flexItemGroup.push({
        flex: 1, customWidth: ''
      })
    },
    removeItemFromGroup(index) {
      if(index){
        this.flexItemGroup.splice(index, 1)
      } else {
        this.flexItemGroup.splice(this.flexItemGroup.length - 1, 1)
      }
    }
  },
}
</script>

<style>
.playground {
  height: 100%;
}
</style>
