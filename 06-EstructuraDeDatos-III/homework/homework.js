'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
   let newNode = new BinarySearchTree(value);

   if (value < this.value) {
      if (!this.left) this.left = newNode;
      else this.left.insert(value);
   } else {
      if (!this.right) this.right = newNode;
      else this.right.insert(value);
   }
}


BinarySearchTree.prototype.contains = function(value) {
   if (value === this.value) return true;
   
   if (this.left) {
      if (this.left.contains(value)) return true;
   } 
   if (this.right) {
      if (this.right.contains(value)) return true;
   }
   
   return false;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, type) {
   switch (type) {
      case "pre-order":
         cb (this.value);
         this.left && this.left.depthFirstForEach(cb, type);
         this.right && this.right.depthFirstForEach(cb, type);
         break;
      case "post-order":
         this.left && this.left.depthFirstForEach(cb, type);
         this.right && this.right.depthFirstForEach(cb, type);
         cb (this.value);
         break;
      default:
         this.left && this.left.depthFirstForEach(cb, type);
         cb (this.value);
         this.right && this.right.depthFirstForEach(cb, type);
         break;
      }
   }

BinarySearchTree.prototype.breadthFirstForEach = function(cb, pend) {
   if (!pend) var pend = [];

   cb (this.value);
   if (this.left) pend.push(this.left);
   if (this.right) pend.push(this.right);
   if (pend.length) pend.shift().breadthFirstForEach(cb, pend);
}

BinarySearchTree.prototype.size = function() {
   let count = 0;
   count ++;

   if (this.left) count += this.left.size();
   if (this.right) count += this.right.size();

   return count;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
