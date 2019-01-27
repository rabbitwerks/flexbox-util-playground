<template>
  <div class="more-options-panel--outer flexbox flexdir-col">
    <h4 class="more-options-panel--label">More Options</h4>
    <div class="more-options-panel--inner flexdir-col flexbox-space-between">
      <mo--options-panel--button
        text="Copy Left"
        :passedInFunction="duplicateFlexItemLeft">
      </mo--options-panel--button>
      <div class="button">Copy Right</div>
      <div class="button">Randomize</div>
      <div class="button">Nested Margin</div>
    </div>

  </div>
</template>

<script>
import MO__OptionsPanel_Button from './MO__OptionsPanel_Button';

export default {
  components: {
    'mo--options-panel--button': MO__OptionsPanel_Button,
  },
  methods: {
    duplicateFlexItemLeft() {
      console.log('hello')
    }
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


.button {
  padding: .1rem .5rem;
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  font-size: .9rem;
  background: linear-gradient(to bottom, var(--mainTurq), var(--darkTurq));
  color: var(--fontColor);
}

.button:active {
  background: linear-gradient(to top, var(--mainTurq), var(--darkTurq));
  color: var(--fontColorActive);
}
</style>
