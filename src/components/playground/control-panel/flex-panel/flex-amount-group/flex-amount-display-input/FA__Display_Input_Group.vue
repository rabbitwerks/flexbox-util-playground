<template>
  <flex-amount--display
    v-if="showDisplay"
    :showDisplay="showDisplay"
    v-on:update:showDisplay="showDisplay = $event">
  </flex-amount--display>
  <flex-amount--input
    v-else
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
