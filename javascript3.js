//Boleanos
//Es un tipo de dato que puede tener dos valores: true y false

//Condidionales

/*

Sintaxis:
if(condicion){
    instrucciones a ejecutar
}

*/

let nombre = "Andrés";
let tienePermiso = false;
let salida;

//mostrar por pantalla Andres tiene permiso si realmente tiene permiso

if(tienePermiso){
salida = nombre + " tiene permiso";
document.getElementById("mensaje").textContent = salida;
}

/*
if(condicion){
código que se ejecuta cuando la condición es verdadera
}else{
código que se ejecuta cuando la condicón es falsa
}
*/

if(tienePermiso){
    salida = nombre + " Tiene permiso";
    document.getElementById("mensaje").textContent = salida;
}else{
salida = nombre + " NO tiene permiso";
document.getElementById("mensaje").textContent = salida;
}


let alumno = "María";
let nota = 8;


//Mostar por pantalla si (alumno) está aprobado o suspenso

let estaprobado = nota >= 5;

if(estaprobado){
    salida = alumno + " está aprobada";
}else{
    salida = alumno + " está suspensa";
}

document.getElementById("mensaje").textContent = salida;


//Mostar por pantalla si la nota es igual a 5 el mensaje Está aprobada por los pelos

if(nota ==5){
    salida = alumno + " está aprobada por los pelos";
}else if(nota ==10){
    salida= alumno + " ¡Tiene matricula de honor! ¡Enhorabuena!";
}else if(nota > 5){
    salida = alumno + " está aprobada";
}else{
    salida = alumno + " está suspensa";
}

document.getElementById("mensaje").textContent = salida;
