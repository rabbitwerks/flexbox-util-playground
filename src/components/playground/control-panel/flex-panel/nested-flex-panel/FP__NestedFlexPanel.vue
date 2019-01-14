<template>
  <div class="nested-flex-panel--outer">
    <nfp--add-remove-group 
      :parentIndex="parentIndex">
    </nfp--add-remove-group>
    <nfp--flexdir-select
      :parentIndex="parentIndex">
    </nfp--flexdir-select>
  </div>
</template>

<script>
import NFP__AddRemoveGroup from './NFP__AddRemoveGroup';
import NFP__FlexdirSelect from './NFP__FlexdirSelect';

export default {
  props: ['parentIndex'],
  components: {
    'nfp--add-remove-group': NFP__AddRemoveGroup,
    'nfp--flexdir-select': NFP__FlexdirSelect,
  }

}
</script>

<style>

</style>
