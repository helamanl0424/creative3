<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="pokemon in pokemons" :key="pokemon.id">
      <div :class="{'info':true, 'Ground':pokemon.type == 'Ground',
      'Grass':pokemon.type == 'Grass',
      'Fire':pokemon.type == 'Fire',
      'Water':pokemon.type == 'Water',
      'Bug':pokemon.type == 'Bug',
      'Flying':pokemon.type == 'Flying',
      'Normal':pokemon.type == 'Normal',
      'Poison':pokemon.type == 'Poison',
      'Fairy':pokemon.type == 'Fairy',
      'Fighting':pokemon.type == 'Fighting',
      'Rock':pokemon.type == 'Rock',
      'Electric':pokemon.type == 'Electric',
      'Ghost':pokemon.type == 'Ghost',
      'Psychic':pokemon.type == 'Psychic',
      'Ice':pokemon.type == 'Ice',
      'Dragon':pokemon.type == 'Dragon',} ">
        <div class="info-text">
          <h2>#{{pokemon.id}}</h2>
          <h1>{{pokemon.name}}</h1>
        </div>
        <div class="catch-button">
          <div v-if="!pokemon.gotcha">
            <button v-on:click="catchPokemon(pokemon)"><img class="catch" src="../../public/images/poke_ball_open.png"></button>
          </div>
          <div v-else>
            <img class="catch" src="../../public/images/poke_ball_close.png">
          </div>
        </div>
      </div>
      <div class="image">
        <img class="pokemon" :src="'/images/pokemon/'+pokemon.image">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PokemonList',
  props: {
    pokemons: Array
  },
  methods: {
    catchPokemon(pokemon) {
      console.log(this.$root.$data.pokemons);
      pokemon.gotcha = true;
      this.$root.$data.cart.push(pokemon);
    },

    changeColor(pokemon) {
      let value = "Green";
      if (pokemon.type == "Grass")
      {
        value = "#33FF96";
      }
      document.getElementById("info").style.backgroundColor = value;
    },
  },
  computed: {
    isGotcha() {
      return this.$root.$data.pokemons.gotcha;
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 300px;
}

.pokemon {
  border: 2px solid #333;
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 5px 15px;
  height: 80px;
  display: flex;
  flex-direction: row;
}

.info-text {
  display: flex;
  flex-direction: column;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.catch-button {
  display: flex;
  justify-content: flex-end;
  padding-left: 50px;
}

.catch {
  padding-top: 10px;
  max-width: 30%;
  height: auto;
}

.Ground {
  background-color: peru;
}

.Grass {
  background-color: lightgreen;
}

.Fire {
  background-color: #F2921D;
}

.Water {
  background-color: RoyalBlue;
}

.Bug {
  background-color: olive;
}

.Flying {
  background-color: Plum;
}

.Normal {
  background-color: WhiteSmoke;
}

.Poison {
  background-color: Purple;
}

.Fairy {
  background-color: LightPink;
}

.Fighting {
  background-color: Maroon;
}

.Rock {
  background-color: Grey;
}

.Electric {
  background-color: yellow;
}

.Ghost {
  background-color: RebeccaPurple;
}

.Psychic {
  background-color: HotPink;
}

.Ice {
  background-color: LightCyan;
}

.Dragon {
  background-color: #e3c41c;
}

</style>
