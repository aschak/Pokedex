var Store = require('flux/utils').Store;
var AppDispatcher = require('./../dispatcher/dispatcher.js');

var _toys = {};

var ToyStore = new Store(AppDispatcher);

ToyStore.all = function () {
  return _toys;
};

ToyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "TOYS_RECEIVED":
      resetToys(payload.toys);
      break;
    case "TOY_RECEIVED":
      toyReset(payload.toy);
      break;
  }
};

ToyStore.find = function (id) {
  return ToyStore.all()[id - 1];
}

var resetToys = function (toys) {
  _toys = toys;
  ToyStore.__emitChange();
};

var toyReset = function (toy) {
  if (toy) {
    ToyStore.all().forEach(function (storedToy) {
      if (storedToy.id === toy.id) {
        ToyStore.all()[toy.id - 1] = toy;
        ToyStore.__emitChange();
      }
    });
  }
}

module.exports = ToyStore;
