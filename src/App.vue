<template>
  <div id="app">
    <h1>Flexbox</h1>
    <div class="container flexbox">
      <div class="box flex-1"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
};
</script>

<style>
@import './assets/css/flexbox-util.css';

* {
  margin: 0;
}

html, body {
  width: 100vw;
  height: 100vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container {
  width: 100%;
  height: 100%;
}

.box {
  height: 30vh;
}
</style>
