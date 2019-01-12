<template>
  <div class="nfp--add-remove-group--outer flexbox flexdir-col">
    <span class="nfp--add-remove-group--label"
    >Nested Flex
    </span>
    <div class="nfp--add-remove-group--inner flexbox">
    <!-- - - - - - - - -->
      <nfp--remove 
        :index="index">        
      </nfp--remove>

    <!-- - - - - - - - -->
      <nfp--add 
        :index="index">
      </nfp--add>

    </div>
  </div>
</template>

<script>
import NFP__Add from './NFP__Add';
import NFP__Remove from './NFP__Remove';
export default {
  props: ['index'],
  components: {
    'nfp--add': NFP__Add,
    'nfp--remove': NFP__Remove,
  }
}
</script>

<style scoped>
.nfp--add-remove-group--outer {
margin-top: .5rem;
}
.nfp--add-remove-group--label {
  display: block;
  font-weight: 500;
}
</style>
