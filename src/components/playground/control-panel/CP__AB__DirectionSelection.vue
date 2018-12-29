<template>
  <select 
    :placeholder="flexGroupDirection"
    v-model="newFlexDirection"
    @change="applyNewDirection"
    class="flex-direction-selection" 
    name="flexdir-select">
    <option value="flexdir-row" selected>Row (Default)</option>
    <option value="flexdir-col">Column</option>
    <option value="flexdir-rowrev">Row Reverse</option>
    <option value="flexdir-colrev">Column Reverse</option>
  </select>
</template>

<script>
import eventBus from '../../../eventbus.js'
export default {
  data () {
    return {
      newFlexDirection: this.flexGroupDirection
    }
  },
  props: ['flexGroupDirection'],
  methods: {
    applyNewDirection() {
      eventBus.$emit('applyNewDirection', this.newFlexDirection)
    }
  }
}
</script>

<style scoped>
.flex-direction-selection {
  width: auto;
  padding: .1rem .25rem;
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 500;
}
</style>
