<template>
  <div class="flexgap--outer">
    <div 
      class="flexgap--label--group flexbox">
        <span 
          class="flexgap--label--label"
          >Flexgap:
        </span>
        <transition :name="transitionDirection" type="transition" mode="out-in">
          <span v-if="flexgapAmount === 0" 
            key="0"
            class="flexgap--label--value flex-1 text-right"
            >None
          </span> 
          <span v-else-if="flexgapAmount === 1"
            key="1"
            class="flexgap--label--value flex-1 text-right"
            >Flexgap-1
          </span> 
          <span v-else-if="flexgapAmount === 2"
            key="2"
            class="flexgap--label--value flex-1 text-right"
            >Flexgap-2
          </span> 
          <span v-else-if="flexgapAmount === 3"
            key="3"
            class="flexgap--label--value flex-1 text-right"
            >Flexgap-3
          </span> 
          <span v-else-if="flexgapAmount === 4"
            key="4"
            class="flexgap--label--value flex-1 text-right"
            >Flexgap-4
          </span> 
          <span v-else-if="flexgapAmount === 5"
          key="5"
            class="flexgap--label--value flex-1 text-right"
            >Flexgap-5
          </span> 
        </transition>
    </div>
    <div class="flexgap--inner flexbox">
      <button   
        @click="decreaseFlexgap"
        class="flexgap--decrease flex-1"
        >Decrease
      </button>
      <button 
        @click="increaseFlexgap"
        class="flexgap--increase flex-1"
        >Increase
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      transitionDirection: 'fade-left',
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
    },
  },
  methods: {
    ...mapActions(['setFlexgap_STORE']),
    increaseFlexgap() {
      this.transitionDirection = 'fade-left';
      if (this.flexgapAmount === 5) {
        return;
      };
      this.flexgapAmount++;
      this.setFlexgap_STORE(this.flexgapClasses[this.flexgapAmount]);
    },
    decreaseFlexgap() {
      this.transitionDirection = 'fade-right';
      if (this.flexgapAmount === 0) {
        return;
      };
      this.flexgapAmount--;
      this.setFlexgap_STORE(this.flexgapClasses[this.flexgapAmount]);
    }
  }
}
</script>

<style scoped>
.text-center {
  text-align: center;
}
.flexgap--label--group {
  font-weight: 500;
  margin-bottom: 0.1rem;
}
.flexgap--label--value {
  transition: transform .2s ease-in-out;
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
.flexgap--increase {
  border-left: 1px solid var(--backgroundGrey);
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.flexgap--decrease {
  border-right: 1px solid var(--backgroundGrey);
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
button:active {
  background: linear-gradient(to top, rgb(175, 240, 184), rgb(117, 170, 159));
}

/* ANIMATION */
.fade-left-enter {
  opacity: 0;
  transform: translateX(1rem);
}
.fade-left-enter-active {
  transition: all .2s ease-in-out;
}
.fade-left-leave-active {
  transition: all .2s ease-in-out;
}
.fade-left-leave-to {
  opacity: 0;
  transform: translateX(-1rem);
}

.fade-right-enter {
  opacity: 0;
  transform: translateX(-1rem);
}
.fade-right-enter-active {
  transition: all .2s ease-in-out;
}
.fade-right-leave-active {
  transition: all .2s ease-in-out;
}
.fade-right-leave-to {
  opacity: 0;
  transform: translateX(1rem);
}

</style>
