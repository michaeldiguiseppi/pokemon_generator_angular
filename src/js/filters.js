app.filter('capitalizeName', function() {
  return function(input) {
    if (input) {
      var total = [];
      var string = input.split('-');
      var first = string[0].split('')[0].toUpperCase();
      var capital = string[0].replace(string[0].split('')[0], first);
      total.push(capital);
      if (string[1]) {
        var second = string[1].split('')[0].toUpperCase();
        var secondCap = string[1].replace(string[1].split('')[0], second);
        total.push(secondCap);
      }
      return total.join(' ');
    }
  };
});
