<template>
  <div 
    class="display--wrapper">
      <div 
        class="display--content flexbox"
        :class="[ flexGroupDirection, currentFlexgap.class ]">
          <disp--flex-item--basic 
            v-for="(flexItem, parentIndex) in flexItemGroup" 
            :key="parentIndex"
            :flexItem="flexItem"
            :parentIndex="parentIndex">
          </disp--flex-item--basic>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

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
    },
    currentFlexgap() {
      return this.$store.getters.getFlexgap;
    },
  },
  watch: {
    flexItemGroup: {
      deep: true,
      handler() {
        setTimeout(() => {
          this.calculateFlexWidths()
        }, 50)
      }
    }
  },
  methods: {
    ...mapActions(['setPixelValue_STORE']),
    calculateFlexWidths() {
      const flexGroupHTML = this.$el.children[0].children;
      const tempflexarr = Array.from(flexGroupHTML)
      tempflexarr.forEach((flexItem, parentIndex) => {
        console.log(flexItem.style)
        const item = window.getComputedStyle(flexItem)
        const itemWidth = item.getPropertyValue('width');
        const payload = {
          parentIndex,
          itemWidth
        };
        this.setPixelValue_STORE(payload)
      })
    }
  },
  mounted() {
    this.calculateFlexWidths()
  }
}
</script>

<style scoped>
.display--wrapper {
  height: calc(100% - 17rem);
  border: 1rem solid var(--darkTurq)
}
.display--content {
  height: 100%;
}

</style>
