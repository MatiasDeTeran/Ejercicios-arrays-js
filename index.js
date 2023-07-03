//EJERCICIOS DE PUSH Y POP

let fruts= []

fruts.push("manzana", "banana", "naranja");

console.log(fruts);

fruts.pop();

console.log(fruts);


//EJERCICIOS JOIN Y SPLIT

let nombres = ["juan", "maria", "pedro"]

nombresCompletos= nombres.join( ", ");

console.log(nombresCompletos);

nombres= nombresCompletos.split(",");


console.log(nombres);

// EJERCICIO CON SLICE Y SPLICE

// a. Crea un array llamado "numeros" con los números del 1 al 5.
// b. Utiliza el método slice para crear un nuevo array llamado "subArray" que
// contenga los elementos desde el índice 2 hasta el final.
// c. Utiliza el método splice para eliminar los dos últimos elementos del array
// "numeros".
// d. Imprime tanto el array "subArray" como el array "numeros" resultantes.

let numeros=[1, 2, 3, 4, 5];

let subArray= numeros.slice(2, numeros.length);
numeros.splice((numeros.length-2), 2);

console.log("numeros= " + numeros);
console.log("subArray= " + subArray);


// EJERCICIO CON MAP

// Crea un array llamado "numeros" con los números del 1 al 5.
// Utiliza el método map para multiplicar cada número por 2.
// Guarda el resultado en un nuevo array llamado "dobles".
// Imprime el array "dobles".


let num=[1, 2, 3, 4, 5];

let dobles= num.map(function (x){
    return x * 2
})

console.log(dobles);

// EJERCICIO CON FILTER

// e. Crea un array llamado "edades" con los siguientes elementos: 18, 25, 12, 30,
// 15.
// f. Utiliza el método filter para obtener un nuevo array llamado
// "mayoresDeEdad" que contenga solo las edades mayores o iguales a 18.
// g. Imprime el array "mayoresDeEdad".

let edades= [18, 25, 12, 30, 15];

mayoresDeEdad= edades.filter(function (edad){
    return edad >= 18;
})
console.log(mayoresDeEdad)

// EJERCICIO DE LENGTH

// a. Crea un array llamado "colores" con los siguientes elementos: "rojo", "verde",
// "azul".
// b. Imprime la longitud del array utilizando la propiedad length.

let colores= ["rojo", "verde", "azul"];

console.log(colores.length);


// EJERCICIO CON INDEoF Y LastindexOf

// a. Crea un array llamado "numeros" con los siguientes elementos: 1, 3, 5, 3, 7,
// 3.
// b. Utiliza el método indexOf para encontrar la primera aparición del número 3 en
// el array.
// c. Utiliza el método lastIndexOf para encontrar la última aparición del número 3
// en el array.
// d. Imprime ambos resultados.

let numeros2= [1, 3, 5, 3, 7, 3];

console.log(numeros2.indexOf(3));
console.log(numeros2.lastIndexOf(3));

// EJERCICIO DE INCLUDES

// a. Crea un array llamado "frutas" con los siguientes elementos: "manzana",
// "banana", "naranja".
// b. Utiliza el método includes para verificar si el array contiene la fruta "pera".
// c. Imprime el resultado.

let frutas= ["manzana", "banana", "naranja"];

console.log(frutas.includes("pera"));

// EJERCICIO DE REVERSE

// a. Crea un array llamado "letras" con los siguientes elementos: "a", "b", "c", "d".
// b. Utiliza el método reverse para invertir el orden de los elementos en el array.
// c. Imprime el array resultante.

let letras= ["a", "b", "c", "d"];

let reversa= letras.reverse();

console.log(reversa);

// EJERCICIO DE SORT

// a. Crea un array llamado "numeros" con los siguientes elementos: 5, 2, 9, 1, 7.
// b. Utiliza el método sort para ordenar los números de forma ascendente.
// c. Imprime el array resultante.

let numeros3= [5, 2, 9, 1, 7];

console.log(numeros3.sort());

// EJERCICIO DE CONCAT

// a. Crea dos arrays: "nombres1" con los elementos "Juan", "María" y "nombres2"
// con los elementos "Pedro", "Laura".
// b. Utiliza el método concat para unir los dos arrays en uno nuevo llamado
// "nombresCompletos".
// c. Imprime el array "nombresCompletos".

let nombres_1= ["juan", "maria"];

let nombres_2= ["pedro", "laura"];

nombresCompletos= nombres_1.concat(nombres_2);

console.log(nombresCompletos);

// EJERCICIO DE EVERY

// a. Crea un array llamado "edades" con los siguientes elementos: 22, 35, 28, 42.
// b. Utiliza el método every para verificar si todas las edades son mayores de 18.

let edades2= [18, 35, 28, 42];

let edadMayor= edades2.every(function (x){
                    if (x>=18){
                        return true;
                    }
                })

console.log(edadMayor);

// EJERCICIO DE SOME

// a. Crea un array llamado "notas" con los siguientes elementos: 7, 5, 9, 3.
// b. Utiliza el método some para verificar si alguna nota es mayor o igual a 8.
// c. Imprime el resultado.

let notas= [7, 5, 9, 3];

notas2= notas.some(function (x){
    return x >= 8;  
})

console.log(notas2);

// EJERCICIO DE REDUCE

// a. Crea un array llamado "numeros" con los siguientes elementos: 1, 2, 3, 4, 5.
// b. Utiliza el método reduce para obtener la suma de todos los números en el
// array.
// c. Imprime el resultado.

let numeros4= [1, 2, 3, 4, 5];
let valorInicial= 0
let sumaa= numeros4.reduce(function(acumulador, valorActual){
    acumulador= acumulador + valorActual;
    return acumulador;
}, 
valorInicial);

console.log(sumaa);

// ==================EJERCICIOS APLICADOS A FUNCIONES====================


// PROBLEMA DE SUMA DE ELEMENTOS

// a. Crea una función llamada sumarElementos que reciba un array de números
// como parámetro.
// b. La función debe sumar todos los elementos del array y devolver el resultado.
// c. Prueba la función con diferentes arrays y verifica que la suma sea correcta.

function sumarElementos(array){
    let valorInicial= 0
    let sumaa= array.reduce(function(acumulador, valorActual){
        acumulador= acumulador + valorActual;
        return acumulador;
    }, 
    valorInicial);
    console.log(sumaa);
}

let array1= [2, 6, 4, 8, 1];
sumarElementos(array1);

// PROBLEMA DE PROMEDIO DE CLALIFICACIONES

// a. Crea una función llamada calcularPromedio que reciba un array de
// calificaciones (números) como parámetro.
// b. La función debe calcular y devolver el promedio de las calificaciones.
// c. Prueba la función con diferentes arrays de calificaciones y verifica que el
// promedio sea correcto.

function calcularPromedio(array){
    let valorInicial= 0
    let sumaa= array.reduce(function(acumulador, valorActual){
        acumulador= acumulador + valorActual;
        return acumulador;
    }, 
    valorInicial);
    return sumaa / array.length
};

let notass= [1, 5, 5, 5];

console.log(calcularPromedio(notass));

// PROBLEMA DE BBUSQUEDA DE PALABRA

// a. Crea una función llamada buscarPalabra que reciba un array de palabras y
// una palabra como parámetros.
// b. La función debe buscar la palabra en el array y devolver true si la encuentra,
// o false si no la encuentra.
// c. Prueba la función con diferentes arrays y palabras para verificar su
// funcionamiento.

function buscarPalabras (array, palabra){
    console.log(array.includes(palabra));
};

let palabras= ["pelota", "queso","dambo", "cheddar"];

buscarPalabras(palabras, "pelota");

// PROBLEMA DEELIMINACION DE DUPLICADOS

// a. Crea una función llamada eliminarDuplicados que reciba un array de
// elementos como parámetro.
// b. La función debe eliminar los elementos duplicados del array y devolver un
// nuevo array sin duplicados.
// c. Prueba la función con diferentes arrays y verifica que los duplicados sean
// eliminados correctamente.

function eliminarDuplicados(array){

}

// PROBLEMA ORDENACION DE NUMEROS

// a. Crea una función llamada ordenarNumeros que reciba un array de números
// como parámetro.
// b. La función debe ordenar los números de forma ascendente y devolver el
// array ordenado.
// c. Prueba la función con diferentes arrays de números y verifica que se ordenen
// correctamente.

function ordenarNumeros(array){
    console.log(array.sort());    
}

let numeros5=[5, 7, 2, 9, 3, 4, 7];
ordenarNumeros(numeros5);

// PROBLEMA DE CONTEO DE ELEMENTOS

// a. Crea una función llamada contarElementos que reciba un array y un
// elemento como parámetros.
// b. La función debe contar cuántas veces aparece el elemento en el array y
// devolver el resultado.
// c. Prueba la función con diferentes arrays y elementos para verificar su
// funcionamiento.

function contarElementos(array, numeros){
    let contador=0;
    array.filter(function (x){
        if(x===numeros){
            contador = contador + 1
        };
    return contador;
    })
}

let numeros6=[1, 2, 3, 2, 4, 2, 5, 2];
console.log(contarElementos(numeros6, 2));


// PROBLEMA DE MEZCLA DE ARRAYS

// a. Crea una función llamada mezclarArrays que reciba dos arrays como
// parámetros.
// b. La función debe combinar los elementos de ambos arrays en uno nuevo y
// devolverlo.
// c. Prueba la función con diferentes arrays y verifica los elementos

function mezclarArrays(array1, array2){
    array3=array1.concat(array2);
    return array3;
}

let array_1= [1, 2, 3, 4];
let array_2= [5, 6, 7, 8];

console.log(mezclarArrays(array_1,array_2));
