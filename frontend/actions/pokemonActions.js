var Dispatcher = require('./../dispatcher/dispatcher.js'),
    PokemonConstants = require('./../constants/pokemonConstants.js');

var PokemonActions = {
  receiveAllPokemons: function (pokemons) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: pokemons
    });
  },

  receiveSinglePokemon: function (pokemon) {
    Dispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: pokemon
    });
  }
};

module.exports = PokemonActions;
