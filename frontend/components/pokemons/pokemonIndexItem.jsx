var React = require('react');
var History = require('react-router').History;

var PokemonIndexItem = React.createClass({
  mixins: [History],
  
  showDetail: function () {
    var pokeUrl = "pokemon/" + this.props.pokemon.id;
    this.history.push(pokeUrl);
  },

  render: function () {
    return (
      <div className="poke-list-item">
        <li onClick={this.showDetail}>
          {this.props.pokemon.name}
          <br/>
          {this.props.pokemon.poke_type}
        </li>
      </div>
    );
  }
});

module.exports = PokemonIndexItem;
