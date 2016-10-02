//Captura de los valores y la operación a realiar
var number1 = parseInt(prompt("Ingrese el primer numero"));
var operator = prompt("Que operación va a realizar: \n Suma | + | Sumar \n Resta | - | Restar \n Multiplicacion | * | Multiplicar \n Dividir | / | Divide ");
var number2 = parseInt(prompt("Ingrese el segundo numero"));

function ValidarNumeros(number1, number2) {
  if(isNaN(number1) && isNaN(number2)){
    alert("Datos invalidos");
  }else {
    ValidadorDeNumeros = true;
    alert("Datos validos");
  }
}

/*
  switch (operator) { //Con un switch enrutamos a la operació que el usuario ingreso
    //SUMAR
    case "suma":
    case "+":
    case "sumar":
      var plus = function (num1, num2) {
        var result = num1 + num2;
        alert("El resultado de la suma es: " +result);
      };
      plus(number1, number2);
      break;
    //RESTAR
    case "resta":
    case "-":
    case "restar":
      var subtract = function (num1, num2){
        var result = num1 - num2;
        alert("El resultado de la resta en: " +result);
      };
      subtract(number1, number2);
      break;
    //MULTIPLICACIÓN
    case "multiplicar":
    case "*":
    case "multiplica":
      var multiply = function (num1, num2){
        var result = num1 * num2;
        alert("El resultado de la Multiplicacion es: " +result);
      };
      multiply(number1, number2);
      break;
    //DIVISIÓN
    case "dividir":
    case "/":
    case "divide":
      var dividir = function(num1, num2){
        var result = num1 / num2;
        alert("El resultado de la división es: " +result);
      };
    //División
      dividir(number1, number2);
      break;
    default:
      alert("Operador no valido, intente nuevamente");
  }
*/
