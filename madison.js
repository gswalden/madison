var states = require('./states.json');
var stateAbbrevs = {};
var stateNames = {};

// build map
for (var i=0; i<states.length; i++) {
  stateAbbrevs[states[i].name.toLowerCase()] = states[i].abbr;
  stateNames[states[i].abbr.toLowerCase()] = states[i].name;
}

exports.states = states;

exports.getStateAbbrev = function (stateName) {
  var stateNameLower = typeof stateName === 'string' ? stateName.toLowerCase() : undefined;
  return stateAbbrevs[stateNameLower];
};

exports.getStateName = function (stateAbbrev) {
  var stateAbbr = typeof stateAbbrev === 'string' ? stateAbbrev.toLowerCase() : undefined;
  return stateNames[stateAbbr];
};
