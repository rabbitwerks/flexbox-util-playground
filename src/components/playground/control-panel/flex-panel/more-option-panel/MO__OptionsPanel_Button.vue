<template>
  <div 
    @click="passedInFunction"
    class="button"
    >{{ text }}
  </div>
</template>

<script>
export default {
  props: ['text', 'passedInFunction']
}
</script>

<style>

</style>
