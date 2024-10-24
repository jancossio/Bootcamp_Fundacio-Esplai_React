//1 
alert("Jan");

//2
const userName: String | null = prompt("Introduce aqui tu nombre:");
alert(userName);

//3
let numero;
numero = 24;
console.log(numero);
console.log(typeof numero);

let cadenaTexto; 
cadenaTexto = "Cadena de texto.";
console.log(cadenaTexto);
console.log(typeof cadenaTexto);

let booleano;
booleano = true;
console.log(booleano);
console.log(typeof booleano);

let simbolo;
simbolo = Symbol("Algo aqui");
console.log(simbolo);
console.log(typeof simbolo);

let array;
array = [0, "pantera", true, "algo mas"];
console.log(array);
console.log(typeof array);


//Ejemplos de Scopes
let variableConScopeGlobal = "Global";

function localScope(){
    let variableConScopeLocal = "Local";
    console.log(variableConScopeLocal);
}

localScope();
console.log(variableConScopeGlobal);