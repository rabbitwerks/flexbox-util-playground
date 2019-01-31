<template>
  <div class="hero--outer flexbox flexdir-col">
    <div class="hero--inner flex-1 flexbox flexdir-col">
      <div class="flex-3 empty"></div>
      <h1 class="hero--title flex-3 flex-center center-self">Flexbox Utility Playground</h1>
      <h3 class="hero--subtitle flex-1">a better way to use flexbox</h3>
        <div class="empty flex-2"></div>
      <div class="hero--action-btn-group flex-2 flexbox-space-evenly">
        <div class="empty"></div>
        <router-link to="/playground" class="cta--outer flexbox flex-center">
          <span class="cta--text">Start Flexin'</span>
        </router-link>
        <router-link to="/getting-started" class="cta--outer flexbox flex-center">
          <span class="cta--text">Learn More</span>
        </router-link>
        <div class="empty"></div>
      </div>
      <div class="flex-3 empty"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {
  }
}
</script>

<style scoped>
.hero--outer {
  height: 100%;
  text-align: center
}

h1 {
  font-size: 700%;
}
h3 {
  font-size: 230%;
  color: rgb(0, 92, 93);
}

.cta--outer {
  padding: 1rem 3rem;
  background-color: var(--backgroundGrey);
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  text-decoration: none;
}
.cta--text {
  font-size: 1.5rem;
  color: var(--fontColor)
}
</style>
