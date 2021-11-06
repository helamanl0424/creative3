<template>
<div class="wrapper">
  <div class="wrapper2">
    <h1>Your Pokemon List</h1>
    <p style="font-size:20px;"><em>{{isEmptyList()}}</em></p>
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
          <h2>#{{pokemon.id}}</h2>
          <h1>{{pokemon.name}}</h1>
        </div>
        <div class="image">
          <img :src="'/images/pokemon/'+pokemon.image">
        </div>
        <div class="go">
          <button class="auto" v-on:click="removePokemon(pokemon)">Let Go</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    pokemons: Array
  },
  methods: {
    removePokemon(pokemon) {
      var index = this.$root.$data.cart.indexOf(pokemon);
      if (index !== -1) {
        this.$root.$data.cart.splice(index, 1);
        pokemon.gotcha = false;
      }
    },
    isEmptyList() {
      let result = "";
      if (this.$root.$data.cart.length === 0) {
        result += "Go catch pokemon now!"
        return result;
      }
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

.wrapper2 {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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

.product img {
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
  padding: 10px 30px;
  height: 80px;
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


.go {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
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
