// Ejercicio: Manejo de objetos en JavaScript

// 1. Creamos un objeto que representa a un estudiante
let estudiante = {
    nombre: "Ana",
    edad: 22,
    carrera: "Informatica",
    asignaturas: ["Programación", "Bases de datos", "Redes"],
    activo: true,
}

// 2. Accedemos y mostramos propiedades del objeto
console.log("Nombre:", estudiante.nombre);
console.log("Edad: ", estudiante["edad"]);

// 3. Modificamos una propiedad
estudiante.edad = 23;
console.log(estudiante);

// 4. Añadimos una nueva propiedad
estudiante.semestre = 6;
console.log(estudiante);

// 5. Recorremos las propiedades del objeto con for...in

for (let propiedad in estudiante) {
    console.log(propiedad + ": " + estudiante[propiedad]);
    // console.log(`${propiedad}: ${estudiante[propiedad]}`);
}

// 6. Creamos un método en el objeto
estudiante.presentarse = function () {
    console.log(`Hola, soy ${this.nombre} tengo ${this.edad} años y estudio ${this.carrera}`);
}
// console.log("Presentación del estudiante:");
estudiante.presentarse();
estudiante.presentarse2 = function () {
    return `Hola, soy ${this.nombre} tengo ${this.edad} años y estudio ${this.carrera}`;
}
// 7. Llamamos al método
console.log(estudiante.presentarse2());

// 8. Creamos un array de objetos
let estudiantes = [
    {
        nombre: `Carlos`,
        edad: 20,
        carrera: "Medicina"
    },
    {
        nombre: `Laura`,
        edad: 21,
        carrera: "Derecho"
    },
    {
        nombre: `Pedro`,
        edad: 22,
        carrera: "Ingenieria"
    },
];
// 9. Recorremos el array de objetos
console.log("Lista de Estudiantes:");
estudiantes.forEach((estudiante, indice) => {
    console.log(`Estudiante ${indice + 1}: ${estudiante.nombre}, ${estudiante.edad} años ${estudiante.carrera}`);
});
// 10. Buscamos un estudiante por su nombre
let estudianteCarlos = estudiantes.find(estudiante => estudiante.edad === 22);
console.log("estudiante encontrado: ", estudianteCarlos);

// Hacer un funcion que busque un objeto en el array cuyo nombre coincida con el que le pasemos por el parametro

function buscarEstudiante(nombre){
    let estudianteEncontrado = estudiantes.find(estudiante => estudiante.nombre === nombre);
    return estudianteEncontrado;
};
let estudianteEncontrado = buscarEstudiante("Laura");
if (estudianteEncontrado != undefined) {
    console.log("Estudiante encontrado: ", estudianteEncontrado);
    
}else{
    console.log("El estudiante no exite");
}
// function buscarEstudiante2(nombre){
//     return estudiantes.find(estudiante => estudiante.nombre === nombre);
// };
// let estudianteBuscado2 = buscarEstudiante2("Pedro");
// console.log("Estudiante encontrado: ", estudianteBuscado2);
