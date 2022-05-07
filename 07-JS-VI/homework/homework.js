// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  //var resultado =0;
  //for (numero of numeros){
  //suma += numero;
  // cb(suma);
  //}
  // sdo metodo  n .
  //var suma = numeros.reduce(function(acumular, numeroactual)){
  // return acumular + numeroactual  
  //})
  //cb(suma);
  var resultado = numeros.reduce(function(acumulador, elemento){
  return acumulador + elemento;
  })
  cb(resultado);
}

function forEach(array, cb) {
// Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  //array.foreach(elemento =>cb(elemento))
  array.foreach(function(elemento){
    return cb(elemento);
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
var arr = array.map(function(elemento){
  return cb(elemento);
})
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  //car array=[1,2,3,4,5,6]
  //return array.filter(function(elemento){
  // return elemento[0]==="a";
 //elemtnos mayores que 3
 // return elemento mayor 3;
  //});
  //}
  var letterA=[];
  array.map(function(elemento){
    if (elemento[0]== 'a'){
      letterA.push(elemento);
    }
  })  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
