<template>
  <div
    v-if="!flexItem.isCustomWidth" 
    :style="{ 'flex': flexItem.flex }"
    class="flex-item--basic">
    <div class="flex-item--basic--inner">
      <flex-item--nested></flex-item--nested>
    </div>
  </div>
  <custom-width-item v-else :index="index"></custom-width-item>

  

</template>

<script>
import CustomWidthItem from './Display__Flextem_CustomWidth';
import Display__FlexItem_Nested from './Display__FlexItem_Nested';
export default {
  props: ['index'],
  components: {
    'custom-width-item': CustomWidthItem,
    'flex-item--nested': Display__FlexItem_Nested,
  },
  computed: {
    flexItem() {
      return this.$store.getters.getFlexGroupItem(this.index);
    }
  },
  methods: {

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
