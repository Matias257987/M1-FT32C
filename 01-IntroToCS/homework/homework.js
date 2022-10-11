'use strict';

function BinarioADecimal(num) {
   let numDec = 0;

   for (let i = 0; i < num.length; i++) {
      numDec += num[i] * (2 ** (num.length - 1 - i));
   }

   return numDec;
}

function DecimalABinario(num) {
   let arr = [];

   while (num !== 0) {
      arr.unshift(num % 2);
      num = Math.floor(num / 2);
   }

   return arr.join('');
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
