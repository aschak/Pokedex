var Store = require('flux/utils').Store;
var AppDispatcher = require('./../dispatcher/dispatcher.js');

var _pokemons = {};

var PokemonStore = new Store(AppDispatcher);

PokemonStore.all = function () {
  return _pokemons;
};

PokemonStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "POKEMONS_RECEIVED":
      resetPokemons(payload.pokemons);
      break;
    case "POKEMON_RECEIVED":
      pokeReset(payload.pokemon);
      break;
  }
};

PokemonStore.find = function (id) {
  return PokemonStore.all()[id - 1];
}

var resetPokemons = function (pokemons) {
  _pokemons = pokemons;
  PokemonStore.__emitChange();
};

var pokeReset = function (pokemon) {
  if (pokemon) {
    PokemonStore.all().forEach(function (storedPokemon) {
      if (storedPokemon.id === pokemon.id) {
        PokemonStore.all()[pokemon.id - 1] = pokemon;
        PokemonStore.__emitChange();
      }
    });
  }
}

module.exports = PokemonStore;
