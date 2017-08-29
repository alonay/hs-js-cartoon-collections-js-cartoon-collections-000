function dwarfRollCall(dwarves) {
  var str = "";
  for (var i = 0; i < dwarves.length; i ++) {
    var dwarf = dwarves[i];
    str+= (i + 1) + ". "+ dwarf + " ";
  } return str;
}

function summonCaptainPlanet(planeteerCalls) {
  var caps = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    var currentCall = planeteerCalls[i];
    caps.push(currentCall.toUpperCase() + "!" );
  } return caps;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++){
    var current = words[i];
    if (current.length > 4){
      return true;
    }
  } return false;
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < foods.length; i++){
    var curFood = foods[i];
    if ( cheese.indexOf(curFood) !== -1){
      return curFood;
    }
  } return "no cheese!"
}
