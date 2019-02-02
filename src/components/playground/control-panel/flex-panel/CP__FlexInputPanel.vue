<template>
  <div 
    class="flex-input-panel flex-6 flexbox"
    :class="{ 'flexgap-2': flexItemGroup.length > 1 }">
    <cp--flex-item-group 
      class="flex-item-group flexbox" 
      v-for="(flexItem, parentIndex) in flexItemGroup" 
      :key="parentIndex"
      :parentIndex="parentIndex"
      :flexItem="flexItem"
      :toggleMoreOptionsGroup="toggleMoreOptionsGroup">

      
    </cp--flex-item-group>
  </div>
</template>

<script>
import CP__FlexItemGroup from './CP__FlexItemGroup';

export default {
  data () {
    return {
      toggleMoreOptionsGroup: [{ moreOptionsToggled: false }],
    }
  },
  components: {
    'cp--flex-item-group': CP__FlexItemGroup
  },
  computed: {
    flexItemGroup() {
      return this.$store.getters.getFlexGroup
    }
  },
  watch: {
    flexItemGroup: function(value) {
      this.toggleMoreOptionsGroup = [];
      value.forEach((item, index) => {
        this.toggleMoreOptionsGroup.push({ moreOptionsToggled: false })
      });
    }
  }

}
</script>

<style scoped>
.flex-input-panel {
  padding: .5rem 1rem;
}

</style>
