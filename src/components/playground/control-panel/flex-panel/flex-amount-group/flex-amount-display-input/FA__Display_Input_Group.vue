<template>
  <flex-amount--display
    v-if="showDisplay"
    :parentIndex="parentIndex"
    :showDisplay="showDisplay"
    v-on:update:showDisplay="showDisplay = $event">
  </flex-amount--display>
  <flex-amount--input
    v-else
    :parentIndex="parentIndex"
    :showDisplay="showDisplay"
    v-on:update:showDisplay="showDisplay = $event">
  </flex-amount--input>
</template>

<script>
import FADI__FlexAmount__Display from './FADI__FlexAmount__Display';
import FADI__FlexAmount__Input from './FADI__FlexAmount__Input';

export default {
  data () {
    return {
      showDisplay: true,
    }
  },
  props: ['parentIndex'],
  components: {
    'flex-amount--display': FADI__FlexAmount__Display,
    'flex-amount--input': FADI__FlexAmount__Input,
  },
  mounted () {

  }
}
</script>

<style>

</style>
