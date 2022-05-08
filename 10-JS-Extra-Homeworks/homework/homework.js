// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var nuevoArreglo = []
  for (matriz in objeto) {
    nuevoArreglo.push([matriz, objeto[matriz]])
  }
  return nuevoArreglo
  //opcion 2
  //var nuevoArreglo = Object.entries(objeto);
  //return nuevoArreglo
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //opcion 1:
  //var obj = {};
  //for(let i = 0; i < string.length; i++){
  //  for(let j = 1; j < string.length; j++){
  //    if(string[i] == string[j]) {
  //    obj[string[i]] = obj[string[i]] + 1;
  //    } else{
  //      obj[string[i]] = 1;
  //    }
  //  }
 //  return obj;
  //opcion 2:
  var objeto = {};
  for (var i = 0; i < string.length; i++) {
   if(objeto.hasOwnProperty(string[i])){
      objeto[string[i]] = objeto[string[i]] + 1;
    }
    else{
      objeto[string[i]] = 1
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //Definimos un metodo para el tipo de datos "string", que lo unico que hace es devolver nuestra palabra en orden inverso.
  //String.prototype.reverse=function(){return this.split("").reverse().join("");}
  //var minusculas = "";
  //var mayusculas = "";
  //for (var i = 0; i < s.length; i++) {
  //  if(s[i] === s[i].toLowerCase()){
  //    minusculas = minusculas + s[i];
  //  }else{
  //    mayusculas = mayusculas + s[i];
  //  }
  // }
  // return mayusculas + minusculas;
//opcion 2:
   var may = "";
   var min = "";
   for (let i = 0; i < s.length; i++) {
     if (s[i] === s[i].toLowerCase()){
       min  += s[i]
     }
     else{
       may += s[i]
     }
   }
  return may.concat(min) 
  }


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
   // String.prototype.reverse=function(){return this.split(" ").reverse().join(" ");}
   var inverso = str.split(" ").map(function (elemento){
    return elemento.split("").reverse().join(""); 
   })
   return inverso.join(" ");
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if(numero.toString() === numero.toString().split("").reverse().join("")){
    return "Es capicua";
  }else{
    return "No es capicua";
  } 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  //var letra = ['a', 'b', 'c'];
  //var text = '';
   // for (let i = 0; i < letra.length; i++) {
      //text = cadena.split(letra[i]).join(' ');
      //console.log(text);
    //}
  //return text;
  return cadena.replace(/a/g, "").replace(/b/g, "").replace(/c/g, "")
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  nuevoArray = arr.sort((a,b) => a.length - b.length);
  return nuevoArray;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
  arrayInserteccion = arreglo1.filter(value => arreglo2.includes(value));
  return arrayInterseccion;


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

