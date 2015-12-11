var React = require('react'),
    ToyStore = require('./../../stores/toy.js'),
    ToyIndexItem = require('./toyIndexItem.jsx');

var ToysIndex = React.createClass({
  getInitialState: function () {
    return {toys: ToyStore.all()};
  },

  _onChange: function () {
    this.setState({toys: ToyStore.all()});
  },

  componentDidMount: function () {
    ToyStore.addListener(this._onChange);
    
  },

  render: function () {
    var toys = this.state.toys;


  }
});

module.exports = ToysIndex;
