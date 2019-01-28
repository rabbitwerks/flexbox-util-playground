<template>
  <div class="more-options-panel--outer flexbox flexdir-col">
    <h4 class="more-options-panel--label">More Options</h4>
    <div class="more-options-panel--inner flexdir-col flexbox-space-between">
      <mo--options-panel--button
        :text=" isFlexDirectionRow ? 'Copy Left' : 'Copy Before' "
        :toggledOff="null"
        @click.native="duplicateFlexItem_AtPrevIndex_STORE(parentIndex)">
      </mo--options-panel--button>
      <mo--options-panel--button
        :text=" isFlexDirectionRow ? 'Copy Right' : 'Copy After' "
        :toggledOff="null"
        @click.native="duplicateFlexItem_AtNextIndex_STORE(parentIndex)">
      </mo--options-panel--button>
      <mo--options-panel--button
        text="Nested Margin"
        :toggledOff="!hasNestedFlexMargin"
        @click.native="toggleNestedFlexMargin_STORE(parentIndex)">
      </mo--options-panel--button>
      <mo--options-panel--button
        text="Randomize"
        :toggledOff="null"
        @click.native="randomizeFlexItem_STORE(parentIndex)">
      </mo--options-panel--button>
      
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

import MO__OptionsPanel_Button from './MO__OptionsPanel_Button';

export default {
  props: ['parentIndex'],
  components: {
    'mo--options-panel--button': MO__OptionsPanel_Button,
  },
  computed: {
    isFlexDirectionRow() {
      if (this.$store.getters.getFlexDirection === 'flexdir-row' || this.$store.getters.getFlexDirection === 'flexdir-rowrev') {
        return true 
      }
      return false
    },
    hasNestedFlexMargin() {
      return this.$store.getters.getFlexGroupItem(this.parentIndex).nested.nestedFlexMargin;
    }
  },
  methods: {
    ...mapActions(['duplicateFlexItem_AtPrevIndex_STORE', 'duplicateFlexItem_AtNextIndex_STORE', 'toggleNestedFlexMargin_STORE']),
  }
}
</script>


<style scoped>
.more-options-panel--outer {
  background-color: #f7f7f7;
  height: calc(100% - 68px);
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  color: var(--backgroundGrey);
  padding: 0 .5rem .5rem .5rem;
  text-align: center;
}
.more-options-panel--label {
  font-weight: 500;
  margin: .2rem 0;
}

</style>
