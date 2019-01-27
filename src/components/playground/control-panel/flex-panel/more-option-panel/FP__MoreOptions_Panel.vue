<template>
  <div class="more-options-panel--outer flexbox flexdir-col">
    <h4 class="more-options-panel--label">More Options</h4>
    <div class="more-options-panel--inner flexdir-col flexbox-space-between">
      <mo--options-panel--button
        :text=" isFlexDirectionRow ? 'Copy Left' : 'Copy Before' "
        @click.native="duplicateFlexItem_AtPrevIndex_STORE(parentIndex)">
      </mo--options-panel--button>
      <mo--options-panel--button
        :text=" isFlexDirectionRow ? 'Copy Right' : 'Copy After' "
        @click.native="duplicateFlexItem_AtNextIndex_STORE(parentIndex)">
      </mo--options-panel--button>
      <div class="button">Randomize</div>
      <div class="button">Nested Margin</div>
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
  },
  methods: {
    ...mapActions(['duplicateFlexItem_AtPrevIndex_STORE', 'duplicateFlexItem_AtNextIndex_STORE']),
  }
}
</script>


<style scoped>
.more-options-panel--outer {
  background-color: #f7f7f7;
  height: calc(100% - 64px);
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
