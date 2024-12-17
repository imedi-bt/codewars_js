function points(games) {
  let result = 0;
  
  games.forEach(function(item) {
    let game = item.split(':');
    if (game[0] > game[1]) {
      result += 3;
    } else if (game[0] == game[1]) {
      result += 1;
    }
  });
  
  return result;
}