
app.controller('pokeController', function($scope, pokemon) {
  $scope.pokemon = pokemon;
});

app.controller('moveController', function($scope, moves) {
  $scope.moves = moves;
});
