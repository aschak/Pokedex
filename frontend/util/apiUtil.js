var ApiActions = require('./../actions/pokemonActions.js')

module.exports = {
  fetchAllPokemons: function () {
    $.ajax({
      url: "api/pokemon",
      method: "GET",
      success: function (pokemons) {
        ApiActions.receiveAllPokemons(pokemons);
      }
    });
  },

  pokeFetch: function (id) {
    $.ajax({
      url:"api/pokemon/" + id,
      method: "GET",
      success: function (pokemon) {
        ApiActions.receiveSinglePokemon(pokemon);
      }
    });
  }
};
