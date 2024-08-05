// Ejercicio: Manejo básico de arrays en JavaScript

// 1. Crea un array llamado 'frutas' con 5 nombres de frutas
let frutas = ["manzana","pera","melon","sandia","melocoton"];

// 2. Imprime el array completo
console.log(frutas);

// 3. Imprime la longitud del array
console.log(frutas.length);

// 4. Accede e imprime el tercer elemento del array
console.log(frutas[2]);

// 5. Añade una fruta al final del array usando push()
frutas.push("mango");
console.log(frutas);
// 6. Elimina el último elemento del array usando pop()
frutas.pop();
console.log(frutas);

// 7. Añade una fruta al principio del array usando unshift()
frutas.unshift("platano");
console.log(frutas);

// 8. Elimina el primer elemento del array usando shift()
frutas.shift();
console.log(frutas);

