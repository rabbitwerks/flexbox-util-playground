<template>
  <div class="more-options--outer flexbox flex-justify-end">
    <div 
      class="more-options--button flexbox flex-center" @click="toggleMoreOptions.moreOptionsToggled = !toggleMoreOptions.moreOptionsToggled">
      <img src="../../../../../assets/svg/icon__more_dots.svg">
    </div>
  </div>
</template>

<script>
export default {
  props: ['toggleMoreOptions'],
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
.more-options--button img {
  width: 1.5rem;
}
</style>
