/*
Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0
Notes:
All inputs will be either be an integer or float.
Follow your dreams!
*/

function pointsPer48(ppg, mpg) {
  if (ppg === 0 && mpg === 0) {
    return 0;
  } else
  return +((ppg / mpg) * 48).toFixed(1);
}
