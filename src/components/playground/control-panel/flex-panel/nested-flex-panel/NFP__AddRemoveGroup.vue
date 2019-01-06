<template>
  <div class="nfp--add-remove-group--outer flexbox">
    <nfp--remove></nfp--remove>
    <nfp--add></nfp--add>
  </div>
</template>

<script>
import NFP__Add from './NFP__Add';
import NFP__Remove from './NFP__Remove';
export default {
  components: {
    'nfp--add': NFP__Add,
    'nfp--remove': NFP__Remove,
  }
}
</script>

<style>

</style>
