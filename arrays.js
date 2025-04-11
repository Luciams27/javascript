//declaración de un array
let notas = [3, 6, 8, 6, 2, 10, 1];
let alumnos = ["David", "Inma", "Jesús", "Reich", "Lucía", "MariSol", "Antonia"];

document.getElementById("resultado").textContent = notas;

//para acceder a un elemento del array:
//notas[1]

document.getElementById("resultado").textContent = notas[1];

//Mostar el nombre y la nota del tercer alumno

salida = alumnos[2] + " ha sacado un " + notas[2];
document.getElementById("resultado").textContent = salida;

//Mostar un mensaje diciendo si está aprobado o suspenso

if(notas [2]>=5){
    salida = "Aprobado";
}else{
    salida = "Suspenso";
}

document.getElementById("resultado2").textContent = salida;

//como saber cuantos elementos tiene un array
let numAlumnos = alumnos.length;
console.log(numAlumnos);

//conseguir un numero aleatorio
//Math.random() devuelve un número aleatorio [0, 1) -puede devolver 0 pero 1 no-
//Si multiplico Math.random() por 7 me devuelve un número aleatorio entre 0 y 6
let numAleatorio= Math.random() * numAlumnos;

numAleatorio = parseInt(numAleatorio);

document.getElementById("resultado3").textContent = alumnos[numAleatorio];
