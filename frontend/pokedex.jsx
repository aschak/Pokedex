var React = require('react'),
    ReactDOM = require('react-dom'),
    apiUtil = require('./util/apiUtil.js'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    PokemonsIndex = require('./components/pokemons/pokemonsIndex.jsx');

var App = require('./components/app.jsx'),
    PokemonDetail = require('./components/pokemons/pokemonDetail.jsx');

    window.PokemonStore = require('./stores/pokemon.js');
    // Pokedex = require('./com');

var routes = (
  <Route path="/" component={App}>
    <Route path="pokemon/:pokemonId" component={PokemonDetail}>
    </Route>
  </Route>
)


document.addEventListener("DOMContentLoaded", function () {
  apiUtil.fetchAllPokemons(); //why do we need this?
  var root = document.querySelector('#root');
  ReactDOM.render(<Router>{routes}</Router>, root);
});
