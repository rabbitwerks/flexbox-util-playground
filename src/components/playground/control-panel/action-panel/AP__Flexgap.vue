<template>
  <div class="flexgap--outer">
    <div 
      class="flexgap--label">Flexgap: {{ currentFlexgap.name }}
    </div>
    <div class="flexgap--inner flexbox">
      <button 
        @click="increaseFlexgap"
        class="flexgap--increase flex-1"
        >Increase
      </button>
      <button   
        @click="decreaseFlexgap"
        class="flexgap--decrease flex-1"
        >Decrease
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      flexgapAmount: 0,
      flexgapClasses: [
        {
          name: 'None', class: 'flexgap-0',
        },
        {
          name: 'Flexgap 1', class: 'flexgap-1',
        },
        {
          name: 'Flexgap 2', class: 'flexgap-2',
        },
        {
          name: 'Flexgap 3', class: 'flexgap-3',
        },
        {
          name: 'Flexgap 4', class: 'flexgap-4',
        },
        {
          name: 'Flexgap 5', class: 'flexgap-5',
        },
      ],
    }
  },
  computed: {
    currentFlexgap() {
      return this.$store.getters.getFlexgap;
    }
  },
  methods: {
    ...mapActions(['setFlexgap_STORE']),
    increaseFlexgap() {
      if (this.flexgapAmount === 5) {
        return;
      }
      this.flexgapAmount++;
      this.setFlexgap_STORE(this.flexgapClasses[this.flexgapAmount]);
    },
    decreaseFlexgap() {
      if (this.flexgapAmount === 0) {
        return;
      }
      this.flexgapAmount--;
      this.setFlexgap_STORE(this.flexgapClasses[this.flexgapAmount]);
    }
  }
}
</script>

<style scoped>
.flexgap--label {
  font-weight: 500;
  margin: .2rem 0;
}
button {
  width: auto;
  background: linear-gradient(to bottom, rgb(175, 240, 184), rgb(117, 170, 159));
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  padding: .1rem .5rem;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
button:active {
  background: linear-gradient(to top, rgb(175, 240, 184), rgb(117, 170, 159));
}
</style>
