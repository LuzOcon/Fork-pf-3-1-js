const suma = (a,b) => { return a+b;}
const resta = (a,b) => { return a-b;}
const multiplicacion = (a,b) => { return a*b;}
const division = (a,b) => { return a/b;}

const option = +prompt("Selecciona una opcion\n 1. Sumar \n 2. Restar \n 3. Multiplicar \n 4. Dividir");

const a= +prompt("Ingresa un numero")
const b= +prompt("Ingresa el segundo numero")

switch(option){
  case 1: console.log("Suma = "+ suma(a,b));
  break;
  case 2: console.log("Resta = "+ resta(a,b));
  break;
  case 3: console.log("Multiplicación = "+ multiplicacion(a,b));
  break;
  case 4: console.log("División = "+ division(a,b));
  break;
  default: console.log("Por favor, selecciona una opción valida (1-4)")
}