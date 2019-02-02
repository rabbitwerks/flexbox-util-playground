<template>
  <div class="more-options--outer flexbox flex-justify-end">
    <div 
      class="more-options--button flexbox flex-center" @click="toggleMoreOptions.moreOptionsToggled = !toggleMoreOptions.moreOptionsToggled">
      <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="50px" height="20px" viewBox="0 0 500 300" enable-background="new 0 0 500 300" xml:space="preserve" :fill="setAsActiveColor()">
      <g>
        <circle cx="61.167" cy="150" r="60"/>
      </g>
      <g>
        <circle cx="249.833" cy="150" r="60"/>
      </g>
      <g>
        <circle cx="440.834" cy="150" r="60"/>
      </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['toggleMoreOptions'],
  methods: {
    setAsActiveColor () {
      const activeColor = '#eeeeee';
      const inactiveColor = '#0a0a0a';
      if (this.toggleMoreOptions.moreOptionsToggled) return activeColor;
      return inactiveColor;
    }
  }
}
</script>

<style scoped>
.more-options--button {
  width: 2rem;
  background: linear-gradient(to bottom, var(--mainTurq), var(--darkTurq));
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  padding: .2rem;
}
.more-options--button:active {
  background: linear-gradient(to top, var(--mainTurq), var(--darkTurq));
}
</style>
