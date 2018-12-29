<template>
  <div 
    id="display--wrapper" 
    class="flex-10">
      <div 
        id="display--content"
        class="flexbox"
        :class="flexGroupDirection">
          <disp--flex-item--basic 
            v-for="(flexItem, i) in flexItemGroup" 
            :key="i"
            :flexItem="flexItem"
            :index="i">
          </disp--flex-item--basic>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import Display__FlexItem_Basic from './Display__FlexItem_Basic';
export default {
  components: {
    'disp--flex-item--basic': Display__FlexItem_Basic,
  },
  computed: {
    flexItemGroup() {
      return this.$store.getters.getFlexGroup;
    },
    flexGroupDirection() {
      return this.$store.getters.getFlexDirection;
    }
  }
}
</script>

<style scoped>
#display--wrapper {
  border: 1rem solid var(--darkTurq)
}
#display--content {
  height: 100%;
}

</style>
