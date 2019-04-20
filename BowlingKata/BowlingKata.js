exports.ScoreCalculator = scoreboard => {
  var splitScoreBoard = scoreboard.split("|");

  if (splitScoreBoard.every(frame => (frame === "--" || frame === ""))) {
      return 0;
  }

  return +splitScoreBoard[0].charAt(0);

};