//Guardamos los valores y la operación en una variable
var number1 = parseInt(prompt("Ingrese el primer numero:"));
var operador = prompt("Que operación va a realizar: \n Suma | + | Sumar \n Resta | - | Restar \n Multiplicacion | * | Multiplicar \n Dividir | / | Divide ");
var number2 = parseInt(prompt("Ingrese el segundo numero:"));
var numerosValidados = false;

/* Funcion para validar que los valores sean numeros */
function validar_numeros(number1, number2){
  if(!isNaN(number1) && !isNaN(number2)){
    numerosValidados = true;
  }
}

//Funcion sumar
function sumar(number1, number2){
  var result = number1 + number2;
  alert("El resultado de la suma es: " +result);
}
//Funcion restar
function restar(number1, number2) {
  var result = number1 - number2;
  alert("El resultado de la resta en: " +result);
}
//Funcion multiplicar
function multiplicacion(number1, number2){
  var result = number1 * number2;
  alert("El resultado de la Multiplicacion es: " +result);
}
//Funcion dividir
function division(number1, number2) {
  var result = number1 / number2;
  alert("El resultado de la división es: " +result);
}

//Llamamos la funcion para validar valores
validar_numeros(number1, number2);

//Validamos con in IF que los valores sean validamos
if(numerosValidados){
  //LLamamos las funciones según el Operador
  if(operador === "suma" || operador === "+" || operador === "sumar"){
    sumar(number1, number2);
  }else if (operador === "resta" || operador === "-" || operador === "suma") {
    restar(number1, number2);
  }else if (operador === "multiplicacion" || operador === "*" || operador === "multiplicar") {
    multiplicacion(number1, number2);
  }else if (operador === "division" || operador === "/" || operador === "dividir") {
    division(number1, number2);
  }else {//Si se ingresa un operador diferente
    alert("Operador no valido, intento de nuevo");
  }
}else { //Si los datos ingresador no son numeros
  alert("Los datos ingresados son invalidos");
}
