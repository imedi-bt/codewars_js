/* https://www.codewars.com/kata/5b7ea71db90cc0f17c000a5a/train/javascript */

solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  const temperatureKelvin = temp + 273.15;
  const R = 0.082;
  const pressure = ((givenMass1 / molarMass1) + (givenMass2 /molarMass2)) * (R * temperatureKelvin) / volume;
  return pressure;
}
