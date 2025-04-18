/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
  let bmi_real = weight / Math.pow(height, 2);
  if (bmi_real <= 18.5) {
    return "Underweight";
  } if (bmi_real <= 25) {
    return "Normal";
  } if (bmi_real <= 30) {
    return  "Overweight";
  } if (bmi_real > 30) {
    return "Obese";
  }
}
