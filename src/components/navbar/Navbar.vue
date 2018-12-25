<template>
  <div class="navbar flexbox">
    <navbar--nav-brand text="Flexbox Playground"></navbar--nav-brand>
    <navbar--nav-item
      router-link-to="/"
      text="Home">
    </navbar--nav-item>
    <navbar--nav-item
      router-link-to="/getting-started"
      text="Getting Started">
    </navbar--nav-item>
    <navbar--nav-item
      router-link-to="/playground"
      text="Playground">
    </navbar--nav-item>

  </div>
</template>

<script>
import NavBrand from './NavBrand'
import NavItem from './NavItem';

export default {
  components: {
    'navbar--nav-brand': NavBrand,
    'navbar--nav-item': NavItem
  }
}
</script>

<style scoped>
.navbar {
  height: 4rem;
  background-color: var(--navbarBlack);
}
</style>
