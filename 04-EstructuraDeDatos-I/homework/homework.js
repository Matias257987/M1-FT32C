'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if (n > -1 && n < 2) return 1;
   else if (n < 0) return 0;

   return n * nFactorial(n - 1);
}

// EJERCICIO 2
function nFibonacci(n) {
   if (n === 0 || n === 1) return n;
   else if (n < 0) return "ERROR";

   return nFibonacci(n - 1) + nFibonacci(n - 2);
}

// EJERCICIO 3
class Queue {
   constructor() {
      this.array = [];
   }
   enqueue(value) {
      this.array.push(value);
   }
   dequeue() {
      return this.array.shift();
   }
   size() {
      return this.array.length;
   }
}




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
