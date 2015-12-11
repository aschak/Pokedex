var React = require('react'),
    PokemonStore = require('./../../stores/pokemon.js'),
    ApiActions = require('../../actions/pokemonActions.js'),
    PokemonIndexItem = require('./pokemonIndexItem.jsx');


var PokemonsIndex = React.createClass({
  getInitialState: function () {
    return {pokemons: PokemonStore.all()};
  },

  _onChange: function () {
    this.setState({pokemons: PokemonStore.all()});
  },

  componentDidMount: function () {
    PokemonStore.addListener(this._onChange);
    ApiActions.receiveAllPokemons(PokemonStore.all());
  },

  componentWillUnmount: function () {
    PokemonStore.removeListener(this._onChange);
  },

  render: function () {
    var pokemons = this.state.pokemons;
    var pokeidx = Object.keys(this.state.pokemons);
    return (
      <ul>
        {
          pokeidx.map(function (idx, i) {
            return <PokemonIndexItem pokemon={pokemons[idx]} key={i}/>
          })
        }
      </ul>
    );

  }



});


module.exports = PokemonsIndex;
