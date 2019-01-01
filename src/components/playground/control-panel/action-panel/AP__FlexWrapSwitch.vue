<template>
  <div class="flexwrap-switch--outer flexbox">
    <div 
      @click="switchFlexWrapON_STORE"
      class="flexwrap-switch--on flex-1 flexbox-space-center"
      :class="{ 'not-selected': flexWrapActivated }">
      <span>ON</span>
    </div>
    <div
      @click="switchFlexWrapOFF_STORE" 
      class="flexwrap-switch--off flex-1 flexbox-space-center"
      :class="{ 'not-selected': !flexWrapActivated }">
      <span>OFF</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    flexWrapActivated() {
      return this.$store.getters.getFlexWrapState;
    }
  },
  methods: {
    ...mapActions(['switchFlexWrapON_STORE', 'switchFlexWrapOFF_STORE']),
  }
}
</script>

<style scoped>
.flexwrap-switch--outer {
  height: 1.5rem;
}
.flexwrap-switch--on {
  padding: .1rem .25rem;
  color: var(--backgroundGrey);
  background: linear-gradient(to bottom, rgb(175, 240, 184), rgb(117, 170, 159));
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  border-right: 1px solid var(--backgroundGrey);
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
.flexwrap-switch--on:active {
  background: linear-gradient(to top, rgb(175, 240, 184), rgb(117, 170, 159));
}
.flexwrap-switch--on.not-selected {
  background: linear-gradient(to bottom, rgb(208, 236, 212), rgb(97, 116, 112));
  color: rgb(42, 42, 42);
}
.flexwrap-switch--on.not-selected:active {
  background: linear-gradient(to top, rgb(208, 236, 212), rgb(97, 116, 112));
  color: rgb(42, 42, 42);
}

.flexwrap-switch--off {
  padding: .1rem .25rem;
  color: var(--backgroundGrey);
  background: linear-gradient(to bottom, rgb(175, 240, 184), rgb(117, 170, 159));
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  border-left: 1px solid var(--backgroundGrey);
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
.flexwrap-switch--off:active {
  background: linear-gradient(to top, rgb(175, 240, 184), rgb(117, 170, 159));
}
.flexwrap-switch--off.not-selected {
  background: linear-gradient(to bottom, rgb(208, 236, 212), rgb(97, 116, 112));
  color: rgb(42, 42, 42);
}
.flexwrap-switch--off.not-selected:active {
  background: linear-gradient(to top, rgb(208, 236, 212), rgb(97, 116, 112));
}
</style>
