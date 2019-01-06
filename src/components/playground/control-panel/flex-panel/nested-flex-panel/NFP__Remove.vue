<template>
  <button 
    class="nfp--add-remove-group--remove"
    >Remove
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.nfp--add-remove-group--remove {
  width: auto;
  background: linear-gradient(to bottom, rgb(175, 240, 184), rgb(117, 170, 159));
  border: 2px solid var(--backgroundGrey);
  border-radius: 3px;
  border-right: 1px solid var(--backgroundGrey);
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: .1rem .5rem;
  font-family: 'Dosis', sans-serif;
  font-size: .9rem;
  font-weight: 600;
}
.nfp--add-remove-group--remove:active {
  background: linear-gradient(to top, rgb(175, 240, 184), rgb(117, 170, 159));
}
</style>
