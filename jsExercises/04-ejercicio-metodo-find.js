// Ejercicio: Uso del método find en JavaScript

// 1. Creamos un array de objetos que representan libros

const libros = [
    { id: 1, titulo: "El Quijote", autor: "Miguel de Cervantes", age: 1605, genero: "ficcion" },
    { id: 2, titulo: "Cien años de soledad", autor: "Gabriel Garcia Marquez", age: 1967 },
    { id: 3, titulo: "1984", autor: "George Orwell", age: 1949 },
    { id: 4, titulo: "Rayuela", autor: "Julio Cortazar", age: 1963 },
    { id: 5, titulo: "Ficciones", autor: "Jose Luis Borges", age: 1944 },
];

// 2. Función para encontrar un libro por su ID

const buscaLibros = libros.find(libro => libro.id === 5);
console.log("El libro es: ", buscaLibros);

function libroEncontrado(id) {
    return libros.find(libros => libros.id === id);

};
console.log("Libro con ID 3 :", libroEncontrado(3));
console.log("Libro con ID 5 :", libroEncontrado(5));

// 3. Función para encontrar un libro por su título (ignorando mayúsculas/minúsculas)

function libroTitulo(titulo) {
    return libros.find(libros => libros.titulo.toLocaleLowerCase() === titulo.toLocaleLowerCase());

};
console.log("Este libro se llama:", libroTitulo("rayuela"));

// 4. Función para encontrar el primer libro de un autor específico

// encuentra el primer libro de un autor especifico (ignorando mayusculas/minusculas)
function encontrarLibroPorAutor(autor) {
    return libros.find(libro => libro.autor.toLocaleLowerCase().includes(autor.toLocaleLowerCase()));
}
console.log("Libro de Borgues: ", encontrarLibroPorAutor(`borges`));

// 5. Función para encontrar el primer libro publicado después de un año específico

function buscarLibroDespuesAge(age) {
    return libros.find(libro => libro.age > age);
}
console.log("Primer libro publicado despues de 1950: ", buscarLibroDespuesAge(1600));

// 6. Función para encontrar un libro que cumpla múltiples criterios

function encontrarLibroCriterios(criterios2) {
    return libros.find(libro => {
        for (let propiedad in criterios2) {
            if (libro[propiedad] !== criterios2[propiedad]) {
                return false;
            }
        }
        return true;
    })
}
let criterios = { autor: "George Orwell", age: 1949 };
let criterios2 = { id: "George Orwell", age: 1949 };
let libroIn = encontrarLibroCriterios(criterios2);
console.log(libroIn);

// 7. Intentar encontrar un libro que no existe

