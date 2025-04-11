//alert("Ya es viernes");

let nombre = "Lucía";
let profesion = "Maestra";
let antiguedad = 35;
let sueldo = 2500;
let plusAntiguedad = 10;
let sueldoPlus;

//Mostrar por consola: (nombre) es (profesion) y lleva (antiguedad) años trabajando

console.log("Mensaje a mostrar")

console.log( nombre + " es " + profesion + " y lleva " + antiguedad + "años trabajando");

let salida = nombre + " es " + profesion + " y lleva " + antiguedad + " años trabajando";

document.getElementById("Mensaje").textContent = salida;

profesion= "Directora";
antiguedad= antiguedad + 1;

salida = nombre + " es " + profesion + " y lleva " + antiguedad + " años trabajando";

document.getElementById("Mensaje").textContent = salida;

//La empresa ha decidido dar un plus a los trabajadores de 10€ por año trabajado
//Mostrar por pantalla cuanto gana (nombre)

//Calculo del sueldo con el plus de antiguedad
sueldoPlus = antiguedad * plusAntiguedad + sueldo;

salida = (nombre + " es " + profesion + " y su sueldo es " + sueldoPlus + " con plus de antiguedad incluido"); 

document.getElementById("sueldo").textContent = salida;




