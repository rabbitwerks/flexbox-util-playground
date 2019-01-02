<template>
  <div
    v-if="!flexItem.isCustomWidth" 
    :style="{ 'flex': flexItem.flex }"
    @dblclick="removeSelf"
    class="flex-item--basic">
    <div class="flex-item--basic--inner flexbox-space-center">
      <span>
        Flex Amount: {{ flexItem.flex }}
      </span>
    </div>
  </div>
  <custom-width-item v-else :index="index"></custom-width-item>

  

</template>

<script>
import eventBus from '../../../eventbus.js'
import CustomWidthItem from './Display__Flextem_CustomWidth';
export default {
  props: ['flexItem', 'index'],
  components: {
    'custom-width-item': CustomWidthItem
  },
  methods: {
    removeSelf() {
      eventBus.$emit('removeSelfFromGroup', this.index)
    }
  }
}
</script>

<style scoped>
.flex-item--basic {
  height: 100%;
  background-color: var(--mainTurq);
  border: 2px solid var(--backgroundGrey);
  transition: flex .2s ease-in-out, width .2s ease-in-out;
}
.flex-item--basic--inner {
  height: 100%;
}
</style>
