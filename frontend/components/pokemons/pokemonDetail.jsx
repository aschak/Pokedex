var React = require('react'),
    PokemonStore = require('./../../stores/pokemon.js'),
    ApiActions = require('./../../actions/pokemonActions.js'),
    ApiUtil = require('./../../util/apiUtil.js');

var PokemonDetail = React.createClass({
  getInitialState: function () {
    return {pokemon: this.getStateFromStore()};
  },

  getStateFromStore: function () {
    var id = parseInt(this.props.params.pokemonId);
    PokemonStore.find(id);
  },

  componentWillReceiveProps: function (newProps) {
    var pokeId = parseInt(newProps.params.pokemonId);
    this.setState({pokemon: PokemonStore.find(pokeId)});
  },

  _updateDetail: function () {
    this.setState({pokemon: this.getStateFromStore()});
  },

  componentDidMount: function () {
    PokemonStore.addListener(this._updateDetail);
    ApiActions.receiveSinglePokemon(this.state.pokemon);
  },

  componentWillUnmount: function () {
    PokemonStore.removeListener(this._updateDetail);
  },

  render: function () {
    if (this.state.pokemon) {
      return (
        <div>
          <div className="pokemon-detail-pane">
            <div className="detail">
              <img src={this.state.pokemon.image_url}/>
                <br/>
              <div className="poke-name">{this.state.pokemon.name}</div>
                <br/>
              Attack: {this.state.pokemon.attack}
                <br/>
              Defense: {this.state.pokemon.defense}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>Pokemon not found</div>
      );
    }
  }
});

module.exports = PokemonDetail;
