/* Решение от чата гопоты
Your job is to find the gravitational force between two spherical objects (obj1 , obj2).

input
Two arrays are given :

arr_val (value array), consists of 3 elements
1st element : mass of obj 1
2nd element : mass of obj 2
3rd element : distance between their centers
arr_unit (unit array), consists of 3 elements
1st element : unit for mass of obj 1
2nd element : unit for mass of obj 2
3rd element : unit for distance between their centers
mass units are :

kilogram (kg)
gram (g)
milligram (mg)
microgram (μg)
pound (lb)
distance units are :

meter (m)
centimeter (cm)
millimeter (mm)
micrometer (μm)
feet (ft)
Note
value of G = 6.67 × 10−11 N⋅kg−2⋅m2

1 ft = 0.3048 m

1 lb = 0.453592 kg

return value must be Newton for force (obviously)

μ copy this from here to use it in your solution
*/

solution = (arr_val, arr_unit) => {
    const G = 6.67e-11; // Гравитационная постоянная

  // Значения масс и расстояния
  let [m1, m2, r] = arr_val;
  let [unit1, unit2, unit3] = arr_unit;

  // Функция для преобразования массы в килограммы
  function convertMass(value, unit) {
    switch (unit) {
      case 'kg': return value;
      case 'g': return value * 0.001;
      case 'mg': return value * 1e-6;
      case 'μg': return value * 1e-9;
      case 'lb': return value * 0.453592;
      default: throw new Error('Unknown mass unit');
    }
  }

  // Функция для преобразования расстояния в метры
  function convertDistance(value, unit) {
    switch (unit) {
      case 'm': return value;
      case 'cm': return value * 0.01;
      case 'mm': return value * 0.001;
      case 'μm': return value * 1e-6;
      case 'ft': return value * 0.3048;
      default: throw new Error('Unknown distance unit');
    }
  }

  // Преобразуем массы и расстояние
  m1 = convertMass(m1, unit1);
  m2 = convertMass(m2, unit2);
  r = convertDistance(r, unit3);

  // Рассчитываем силу
  const force = G * (m1 * m2) / (r ** 2);

  return force; // Возвращаем силу в Ньютонах
};
