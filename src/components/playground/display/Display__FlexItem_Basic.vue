<template>
  <div
    v-if="!flexItem.isCustomWidth" 
    :style="{ 'flex': flexItem.flex }"
    class="flex-item--basic">
    <div 
      class="flex-item--basic--inner"
      :class="{ 'flexbox-space-center': !flexItem.nested.hasNestedFlexbox }">

      <!-- component for nested flexbox -->
      <flex-item--nested 
        v-if="flexItem.nested.hasNestedFlexbox" :index="index">
      </flex-item--nested>

      <!-- else display flex amount div -->
      <div v-else>
        <h3>Flex: {{ flexItem.flex }}</h3>
      </div>

    </div>
  </div>

  <!-- custom width div if not flex amount -->
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
