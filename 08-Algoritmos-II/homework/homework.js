'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array;

  let pivot = array[0];
  let min = [];
  let max = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) min.push(array[i]);
    else max.push(array[i]);
  }

  return quickSort(min).concat(pivot).concat(quickSort(max));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array;

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);
  let result = [];

  left = mergeSort(left);
  right = mergeSort(right);

  while (left.length && right.length) {
    if (left[0] > right[0]) result.push(right.shift());
    else result.push(left.shift());
  }
  
  return result.concat(left).concat(right);
  //okey probemos ahora
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
