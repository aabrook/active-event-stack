'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var idCounter = 0;

function uid(prefix) {
  ++idCounter;
  return String(prefix) + idCounter;
}

function last(array) {
  return array[array.length - 1];
}

// ---

if (typeof document != 'undefined') {
  document.addEventListener('click', onEvent.bind(null, 'click'), true);
  document.addEventListener('keydown', onEvent.bind(null, 'keydown'));
  document.addEventListener('keyup', onEvent.bind(null, 'keyup'));
}

var listenables = [];

function onEvent(type, event) {
  var listenable = last(listenables);
  if (listenable) {
    var handler = listenable.events[type];
    if (typeof handler == 'function') {
      handler(event);
    }
  }
}

var EventStack = {
  addListenable: function addListenable(listenArray) {
    /* ex: [['click', clickHandler], ['keydown', keydownHandler]] */
    var id = uid('active_event_');
    listenables.push({
      id: id,
      events: listenArray.reduce(function (memo, _ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var type = _ref2[0];
        var fn = _ref2[1];

        memo[type] = fn;
        return memo;
      }, {})
    });
    return id;
  },
  removeListenable: function removeListenable(id) {
    var idx = listenables.findIndex(function (x) {
      return x.id === id;
    });
    listenables.splice(idx, 1);
  }
};

exports['default'] = EventStack;
module.exports = exports['default'];