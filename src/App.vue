<template>
  <div id="app" class="flexbox flexdir-col">
    <app--navbar></app--navbar>
    <app--container></app--container>
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar';
import Container from './components/main/Container';

export default {
  name: 'app',
  components: {
    'app--navbar': Navbar,
    'app--container': Container
  },
};
</script>

<style>
@import './assets/css/flexbox-util.css';
@import './assets/css/main.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}


</style>
