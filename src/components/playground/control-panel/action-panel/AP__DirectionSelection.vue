<template>
  <div class="direction-selection--outer">
    <span class="direction-selection--label">
      Flex Direction:
    </span>
    <select 
      :placeholder="currentDirection"
      @change="setFlexDirection_STORE($event.target.value)"
      class="flex-direction-selection" 
      name="flexdir-select">
      <option value="flexdir-row" selected>Row (Default)</option>
      <option value="flexdir-col">Column</option>
      <option value="flexdir-rowrev">Row Reverse</option>
      <option value="flexdir-colrev">Column Reverse</option>
    </select>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data () {
    return {
      newFlexDirection: this.currentDirection
    }
  },
  computed: {
    currentDirection() {
      return this.$store.getters.getFlexDirection;
    }
  },
  methods: {
    ...mapActions(['setFlexDirection_STORE']),
  }
}
</script>

<style scoped>
.direction-selection--label {
  display: block;
  font-weight: 500;
}
.flex-direction-selection {
  display: block;
  width: 100%;
  padding: .1rem .25rem;
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 500;
}
</style>
