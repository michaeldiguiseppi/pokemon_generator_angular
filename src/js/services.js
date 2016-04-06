
app.factory('pokemon', function($http) {
  var pokemon = {};
  pokemon.random = 0;
  pokemon.loading = false;
  pokemon.generateRandomPokemon = function() {
    var random = Math.floor(Math.random() * 721)+1;
    pokemon.random = random;
    pokemon.loading = true;
    pokemon.showPic = false;
    pokemon.pokemonInfo = {};
    PokemonService.generatePokemon.then(function(response) {
      pokemon.loading = false;
      pokemon.showPic = true;
      pokemon.pokemonInfo = response;
    });
  };

  return pokemon;
});

app.factory('moves', function($http) {
  var moves = {};
  moves.random = 0;
  moves.loading = false;
  moves.generateRandomMove = function() {
    var random = Math.floor(Math.random() * 639)+1;
    moves.random = random;
    moves.loading = true;
    moves.moveInfo = {};
    $http({
      method: 'GET',
      url: 'http://pokeapi.co/api/v2/move/'+moves.random,
    }).then(function(response) {
      moves.loading = false;
      moves.moveInfo = response;
    });
  };


  return moves;
});
