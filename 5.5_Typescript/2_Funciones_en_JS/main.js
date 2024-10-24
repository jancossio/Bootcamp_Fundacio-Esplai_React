"use strict";
// function saludar(name ="desconocido"){
//     console.log("Hola "+name);
// }
// function sumar(num1, num2){
//     console.log(num1 + num2);
// }
// saludar("Jan");
// sumar(1, "6");
// const saludarII = function(name ="desconocido"){
//     console.log("Hola "+name);
// }
// const saludarIII = (name ="desconocido") => {
//     console.log("Hola "+name);
// }
// const saludarIV = function(...valores){
// }
// /*--------------------------------------------*/
// const array = ['😊','👌','❤️'];
// console.log(array.length);
// console.log(array[2]);
// array.forEach(item =>{
//     console.log(item);
// });
// for(let i=0; i<array.length; i++){
//     console.log(array[i]);
// }
// /*--------------------------------------------*/
// const reus = [
//     {postalCode: 43201, name:"Centro"},
//     {postalCode: 43202, name:"Alrededores"},
//     {postalCode: 43203, name:"La Florida"}
// ];
// function imprimirNombre(barrio){
//     switch(barrio.postalCode){
//         case 43201:
//             console.log(barrio.name);
//             break;
//         case 43202:
//             console.log(barrio.name);
//             break;
//         case 43203:
//             console.log(barrio.name);
//             break;
//     }
// }
/*(pg 64)---------------------4---------------------*/
//1
const nombreApellido = () => {
    const nombreCompleto = { nombre: "Jan", apellido1: "Campo-Cossio", apellido2: "Reche" };
    return nombreCompleto;
};
const nombreUsuario = nombreApellido();
console.log(`Hola ${nombreCompleto.nombre} ${nombreCompleto.apellido1} ${nombreCompleto.apellido2}`);
//2--------------------------------------
function printBoolean(booleanValue = false) {
    console.log(booleanValue);
}
const adultAge = true;
printBoolean(adultAge);
//3---------------------------------------
function infinitLog(...infinitValues) {
    infinitValues.forEach(value => {
        console.log(value);
    });
}
infinitLog(1, 2, 3, 4, 5);
/*-(pg 74)--------------------5-------------------------*/
function throwCoin() {
    return Math.round(Math.random());
}
const randomVal = throwCoin();
if (randomVal == 1) {
    console.log("Ha salido cara!");
}
else {
    console.log("Ha salido cruz!");
}
/*-(pg 75)--------------------6-------------------------*/
//1-------------------------
function addNumbers(num1 = 0, num2 = 0, num3 = 0) {
    return num1 + num2 + num3;
}
const resultAddNum = addNumbers(2, 5, 7);
console.log(resultAddNum);
//2-----------------------
function fullName(nombre = '', apellido1 = '', apellido2 = '') {
    return nombre.concat(" ", apellido1, " ", apellido2);
}
const userFullName = fullName("Jan", "Campo-Cossio", "Reche");
console.log(userFullName);
//3--------------------------
function compareNumbers(num1 = 0, num2 = 0) {
    if (num1 > num2) {
        return num1;
    }
    else {
        return num2;
    }
}
const biggerNumber = compareNumbers(2, 5);
const biggerNumber2 = compareNumbers(7, 3);
console.log(biggerNumber);
console.log(biggerNumber2);
/*-(pg 80)--------------------7-------------------------*/
//1-------------------------
const monthOfTheYear = 7;
switch (monthOfTheYear) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    default:
        console.error("El valor introducido no corresponde con un numero entre 1 y 12!!");
        break;
}
//2
let stringNumber = "3";
switch (stringNumber) {
    case "1":
        stringNumber = parseInt(stringNumber);
        console.log(stringNumber, typeof stringNumber);
        break;
    case "2":
        stringNumber = parseInt(stringNumber);
        console.log(stringNumber, typeof stringNumber);
        break;
    case "3":
        stringNumber = parseInt(stringNumber);
        console.log(stringNumber, typeof stringNumber);
        break;
    case "4":
        stringNumber = parseInt(stringNumber);
        console.log(stringNumber, typeof stringNumber);
        break;
    case "5":
        stringNumber = parseInt(stringNumber);
        console.log(stringNumber, typeof stringNumber);
        break;
    default:
        console.error("El valor introducido no corresponde con un numero entre 1 y 5!!");
        break;
}
/*-(pg 83)--------------------8-------------------------*/
//1-------------------------
function randomMethod() {
    return Math.round(Math.random());
}
console.log(randomMethod());
//2-----------------------
console.log(Math.PI.toFixed(3));
/*-(pg 86)--------------------9-------------------------*/
//1-------------------------
function replace_A_With_O(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a') {
            result += 'o';
        }
        else {
            result += word[i];
        }
    }
    return result;
}
text = "La palabra magica.";
text = replace_A_With_O(text);
console.log(text);
//2-----------------------
function startsWithAca(textToCheck = "") {
    textToCheck = textToCheck.toLowerCase();
    return textToCheck.startsWith('aca');
}
console.log(startsWithAca("academia"));
console.log(startsWithAca("escuela"));
//3-----------------------
function salutations() {
    console.log('hola '.repeat(3));
}
salutations();
/*-(pg 93)--------------------10------------------------*/
//FOR
for (let i = 0; i < 10; i++) {
    console.log("I ❤️ code!");
}
//WHILE
let j = 0;
while (j < 10) {
    console.log("I ❤️❤️ code!");
    j++;
}
/*-(pg 94)--------------------11------------------------*/
//1------------------
const letterArray = ['a', 'b', 'c', 'd', 'e'];
letterArray.forEach(element => {
    console.log(element);
});
//2-------------------
let number = 5;
do {
    console.log(number--);
} while (number >= 0);
/*-(pg 95)--------------------12------------------------*/
/*El programa presentado el ejercicio se compone de un único bucle do-while (controlado por la condicion de que numero debe ser menor a 5),
dentro del cual contiene un condicional, que revisa si el valor declarado 'i' es igual a 0. Esta condicion solo se cumple al principio, ya que
despues de entrar en el if, el valor de 'i' se incrementa en un numero y no se vuelve a modificar. En la misma clausula if, el valor de 'numero'
se decrementa en 1 y, a continuación, se muestra por consola. En las siguientes iteraciones del bucle se accede solo a la clausula 'else' (como ya
se ha explicado antes) en la que incrementa en 1 el valor 'numero' en cada iteracion hasta que numero alcanza el valor '5'.*/
/*-(pg 107)--------------------13------------------------*/
//1--------------------------------
let arrayFood1 = ['🍔', '🌯', '🍣', '🍕', '🍜', '🍱', '🍙', '🍘', '🥩'];
console.log(arrayFood1.fill('🍺', 4, arrayFood1.length));
//2--------------------------------
let arrayFood2 = ['🍕', '🍕', '🍍', '🍕', '🍕'];
console.log(arrayFood2.includes('🍍'));
//3--------------------------------
let arrayFood3 = ['🍕', '🍕', '🍍', '🍕', '🍕'];
arrayFood3 = arrayFood3.filter((food) => food === '🍕');
console.log(arrayFood3);
//4--------------------------------
let arrayFood4 = ['🍓', '🍋', '🍓', '🍋', '🍓'];
arrayFood4 = arrayFood4.map((food) => food === '🍓' ? '🍄‍🟫' : food);
console.log(arrayFood4);
//5--------------------------------
let arrayFood5 = ['🌶️', '🥛', '🌶️', '🥛', '🌶️', '🥛'];
arrayFood5 = arrayFood5.reduce((accumulator, food) => {
    accumulator.push(food);
    if (food === '🌶️') {
        accumulator.push('🥵');
    }
    return accumulator;
}, []);
console.log(arrayFood5);
//6--------------------------------
let arrayFood6 = ['🎴', '🎴', '🎴', '🃏', '🎴', '🎴', '🎴'];
for (let i = 0; i < arrayFood6.length; i++) {
    if (arrayFood6[i] === '🎴' && arrayFood6[i + 1] === '🎴') {
        arrayFood6.splice(i + 1, 0, '🃏');
        i++;
    }
}
console.log(arrayFood6);
