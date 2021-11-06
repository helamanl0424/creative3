<template>
<div>
  <CartList :pokemons="pokemons" />
  <a href="https://github.com/helamanl0424/creative3.git">
   <img id="github" alt="github" src="../../public/images/GitHub.png">
  </a>
</div>
</template>

<script>
import CartList from "../components/CartList.vue"
export default {
  name: 'Cart',
  components: {
    CartList
  },
  computed: {
    pokemons() {
      return this.$root.$data.cart;
    }
  }
}
</script>

<style scoped>
#github {
  display: block;
  margin: auto;
  max-width: 5%;
  height: auto;
  padding-top: 20px;
}
</style>
