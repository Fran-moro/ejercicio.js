// Funciones útiles para cadenas de texto
// length → devuelve la cantidad de caracteres.
// toUpperCase() → convierte a mayúsculas.
// toLowerCase() → convierte a minúsculas.
// charAt() → devuelve el carácter en una posición.
// includes() → verifica si contiene una subcadena.
// indexOf() → devuelve la posición de la primera coincidencia.
// lastIndexOf() → devuelve la posición de la última coincidencia.
// slice() → extrae una parte de la cadena.
// substring() → extrae parte de la cadena (sin índices negativos).
// substr() → extrae una cantidad de caracteres desde una posición.
// replace() → reemplaza texto por otro.
// trim() → quita espacios al inicio y al final.
// trimStart() → quita espacios al inicio.
// trimEnd() → quita espacios al final.
// split() → divide la cadena en un arreglo.
// concat() → une dos o más cadenas.
// startsWith() → verifica si comienza con una subcadena.
// endsWith() → verifica si termina con una subcadena.
// toString() → convierte el valor a cadena.

// Funciones útiles para arrays
// length → devuelve la cantidad de elementos del array.
// push() → agrega un elemento al final.
// pop() → elimina el último elemento.
// unshift() → agrega un elemento al inicio.
// shift() → elimina el primer elemento.
// concat() → une dos o más arrays.
// join() → une los elementos en una cadena.
// slice() → devuelve una parte del array sin modificarlo.
// splice() → agrega, elimina o reemplaza elementos (modifica el array).
// indexOf() → devuelve la posición de un elemento.
// lastIndexOf() → devuelve la última posición de un elemento.
// includes() → verifica si contiene un valor.
// forEach() → ejecuta una función por cada elemento.
// map() → crea un nuevo array aplicando una función a cada elemento.
// filter() → devuelve un nuevo array con los elementos que cumplan una condición.
// find() → devuelve el primer elemento que cumpla una condición.
// findIndex() → devuelve el índice del primer elemento que cumpla una condición.
// every() → verifica si todos los elementos cumplen una condición.
// some() → verifica si algún elemento cumple una condición.
// sort() → ordena los elementos del array.
// reverse() → invierte el orden de los elementos.
// toString() → convierte el array a una cadena.
// Array.isArray() → verifica si una variable es un array


const calculo=()=>
    {
    let numero=prompt("ingrese su numero: ")
    let res=numero*numero
    alert("su resultado es: "+res)
}

let texto=()    =>
{
    let cadena=prompt("ingrese su cadena: ")
    let resultado=cadena.toUpperCase()
    alert("su cadena en mayusculas es: "+resultado)
}

let filtrar=()=>
{
    let array=prompt("ingrese varios numeros separados por comas: ")
    let arrayNumeros=array.split(",").map(Number)
    let resultado=arrayNumeros.filter(num => num > 10)
    alert("los numeros mayores a 10 son: "+resultado)
}

let verificarCadena=()=>
{
    let cadena=prompt("ingrese una cadena: ")
    let contieneHola=cadena.includes("hola")
    if (contieneHola) {
        alert("La cadena contiene 'hola'")
    } else {
        alert("La cadena no contiene 'hola'")
    }
}

let mezclarcadenas=()=>
{
    let cadena1=prompt("ingrese la primera cadena: ")
    let cadena2=prompt("ingrese la segunda cadena: ")
   concatena=cadena1.concat(" ",cadena2)
   alert("la cadena resultante es: "+concatena.toUpperCase())
}

let sumararray=()=>
{
    let array=prompt("ingrese varios numeros separados por comas: ")
    let arrayNumeros=array.split(",").map(Number)
    let suma=arrayNumeros.reduce((acum, num) => acum + num, 0)
    alert("la suma de los numeros es: "+suma)
   
}

// Dado un array de palabras, crea una función flecha que filtre las palabras que tengan más de 4 letras y
// devuelva un nuevo array con esas palabras en mayúsculas.

let palabras=()=>
{
    let arrayPalabras=prompt("ingrese varias palabras separadas por comas: ")
    let arrayFiltrado=arrayPalabras.split(",").filter(palabra => palabra.length > 4).map(palabra => palabra.toUpperCase())
    alert("las palabras con mas de 4 letras en mayusculas son: "+arrayFiltrado)
}

let vocales=()=>
{
    let cadena=prompt("ingrese una vocal: ")
    let esVocal=cadena.toLowerCase().includes("a") || cadena.toLowerCase().includes("e") || cadena.toLowerCase().includes("i") || cadena.toLowerCase().includes("o") || cadena.toLowerCase().includes("u")
    if (esVocal) {
        alert("Es una vocal")
    } else {
        alert("No es una vocal")
    }
}

let reemplazarpalabras=()=>
{
    let cadena=prompt("ingrese una palabra: ")
    let nuevaCadena=cadena.replace(/a/gi, "@").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0").replace(/u/gi, "ü")
    alert("la nueva cadena es: "+nuevaCadena)
}   

let ordenararray=()=>
{
    let array=prompt("ingrese varios numeros separados por comas: ")
    let arrayNumeros=array.split(",").map(Number)
    let arrayOrdenado=arrayNumeros.sort((a, b) => a - b)
    alert("el array ordenado es: "+arrayOrdenado)
}


