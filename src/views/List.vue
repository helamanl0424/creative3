<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <PokemonList :pokemons="pokemons" />
  <a href="https://github.com/helamanl0424/creative3.git">
   <img id="github" alt="github" src="../../public/images/GitHub.png">
  </a>
</div>
</template>

<script>
import PokemonList from "../components/PokemonList.vue"
export default {
  name: 'List',
  components: {
    PokemonList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    pokemons() {
      return this.$root.$data.pokemons.filter(pokemon => pokemon.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

#github {
  display: block;
  margin: auto;
  max-width: 5%;
  height: auto;
  padding-top: 20px;
}

</style>
