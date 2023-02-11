// Evaluación de conocimientos básicos en JS.

// 1) Guarda tu proyecto en tu github con el nombre evaluacion-conceptos-js
// 2) Por cada ejercicio harás un commit en donde reflejarás con la descripción el número de ejercicio.
// 3) Resolvé usando prompt, alert y condicionales:
// a) Pida al usuario su nombre y muestre un mensaje de bienvenida.
//let nombre = prompt("Como se llama?")
//alert("Hola " + nombre + ", como estás?")

// b) Pida al usuario dos números y muestre su suma.
//let num1, num2;
//num1 = parseInt(prompt("Ingrese un numero"))
//num2 = parseInt(prompt("Ingrese otro numero"))
//alert("La suma de los números es " + (num1 + num2 ) + ".")

// c) Pida al usuario dos números y muestre el mayor.
/*
let num1, num2;
num1 = parseInt(prompt("Ingrese un numero"))
num2 = parseInt(prompt("Ingrese otro numero"))
if(num1 > num2) {
    alert("El mayor es " + num1)
} else {
    alert("El mayor es " + num2)
}
*/

// d) Pida al usuario tres números y muestre una leyenda que diga si los tres son iguales, sino lo son que también lo informe.
/*
let num1, num2, num3;
num1 = parseInt(prompt("Ingrese un numero"))
num2 = parseInt(prompt("Ingrese otro numero"))
num3 = parseInt(prompt("Ingrese un tercer numero"))

if(num1 === num2 && num2 === num3) {
    alert("Los numeros ingresados son iguales")
} else {
    alert("Los numeros ingresados son diferentes")
}
*/

// e) Pida al usuario tres números y muéstrelos ordenados de mayor a menor.
/*

let numeros = []
numeros.push(parseInt(prompt("ingrese un numero")))
numeros.push(parseInt(prompt("ingrese un segundo numero")))
numeros.push(parseInt(prompt("ingrese un tercer numero")))

numeros.sort((a,b) => b - a)
alert("Los numeros que ingresaste ordenados de mayor a menor son: " + numeros)

*/

// f) Pida al usuario su peso en kg y su altura en metros y muestre su índice de masa corporal (IMC): Peso (en Kg) / Altura (en metros) al cuadrado.
// (IMC): Peso (en Kg) / (Altura (en metros) al cuadrado).
// Si el número esta por debajo de 18.5 mostrá la leyenda "Bajo peso"
// Si el número esta entre 18.6 y 24.9  mostrá la leyenda "Normal"
// Si el número esta entre 25 y 29.9  mostrá la leyenda "Sobrepeso"
// Si el número esmayor a 30 mostrá la leyenda "Obesidad"

/*

let peso, altura;
peso = parseFloat(prompt("ingrese su peso en KG"))
altura = parseFloat(prompt("ingrese su altura en Mts"))
let imc = (peso / Math.pow(altura, 2)).toFixed(2)
console.log(`Su IMC es de ${imc}`)
console.log("su peso es de " + peso + " kgs.")
console.log("Su altura es de " + altura + " metros.")


if (imc < 18.5) {
    alert("Bajo Peso")
} else if (imc >= 18.6 && imc < 25) {
    alert("Peso Normal")
} else if (imc >= 25 && imc < 30) {
    alert("Tiene Sobrepeso")
} else {
    alert("Tiene Obesidad")
}
*/

// 4) Haremos un validador de números. 
// a) Pida al usuario que ingrese un número y almacenala en una variable.
// b) Mostrá el tipo de dato.
// c) Si el tipo de dato no es un NUMBER, entonces mostrá un console.error "Ingresá un valor numérico"
// d) Si el tipo de dato no es un NUMBER volvé a pedirlo tantas veces sea necesario hasta que se valide que el número ingresado es de tipo NUMBER
/*
let numero, numeroParseado
do {
    numero = prompt("ingrese un numero")
    numeroParseado = parseInt(numero)
    if (numero != numeroParseado) {
        console.error(numero + " no es un número, ingresá un valor numérico.")
    }
}
while(numero != numeroParseado)
console.log("Ingresaste el número " + numero + ".")

// numero           es un string 123
// numeroParseado   es un number 123

// numero           es un string ASD
// numeroParseado   es un NaN
*/

// 5)
// a) Ingresá un vector llamado dias, en donde se carguen los días lunes a domingo.
// b) Mostrá uno por uno los días de la semana. 
// c) Cuando sea Sabado o Domingo, deberá mostrarse la leyenda "Fin de semana!"
/*
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
for(let i = 0 ; i < dias.length ; i++) {
    if (dias[i] === "sabado" || dias[i] === "domingo") {
        console.log("Fin de semana!")
    } else {
    console.log(dias[i]);
    }
}
*/

// 6) Vamos al supermercado. Crea un vector llamado carrito.
// a) Con un prompt ingresá un artículo, Con un segundo prompt el costo unitario y con un tercer prompt el monto por unidad.
// b) En el carrito solo ingresarás los artículos.
// c) En una variable irás sumando el valor de cada artículo que irás acumulando (monto por unidad * cantidad de unidades).
// d) La carga finalizará con un articulo con nombre 0 (cero).
// e) Finalmente mostrarás una factura con el siguiente formato:
// ************************************
// FACTURA A - Número XXXXXXX-XXXXXXX-X
// Ítems:
// - Manteca
// - Cafe
// - Limones

// Total a facturar: $3500.00
// ************************************

/*
let carrito = []

let articulo = prompt("ingrese un item")
let costoUnitario = prompt("ingrese el costo")
let cantidad = prompt("cantidad a comprar")
carrito.push(articulo)
let costoTotal = parseInt(costoUnitario) * parseInt(cantidad)

while(articulo !== "0") {
    articulo = prompt("ingrese un item");
    if (articulo !== "0") {
        carrito.push(articulo)
        costoUnitario = prompt("ingrese el costo");
        cantidad = prompt("cantidad a comprar")
        costoTotal = costoTotal + (parseInt(costoUnitario) * parseInt(cantidad))
    }
}

console.log("************")
console.log("Items")
for(let i = 0; i < carrito.length; i++){
    console.log(" - " + carrito[i])
}
console.log("Total a facturar: $"+ costoTotal)
console.log("************")
*/


// 7) Modifica el punto anterior para que, antes de finalizar la carga pregunte si queremos editar. Si responde "SI" entonces.
// a) Que indique con un número el ítem que quiere modificar. 
// b) Se reemplazara el nombre del artículo pero no la cantidad y el costo. 
// c) Una vez finalizado el reemplazo se preguntará si quiere seguir modificando. En caso afirmativo pasaremos al punto (a) y sino se mostrará el punto (6 - e)
/*
let carrito = []
let costoUnitario, cantidad, costoTotal
let articulo = prompt("ingrese un item")
 if(articulo !== "0") {
    carrito.push(articulo)
    costoUnitario = prompt("ingrese el costo")
    cantidad = prompt("cantidad a comprar")
 }
costoTotal = parseInt(costoUnitario) * parseInt(cantidad)

while(articulo !== "0") {
    articulo = prompt("ingrese un item");
    if (articulo !== "0") {
        carrito.push(articulo)
        costoUnitario = prompt("ingrese el costo");
        cantidad = prompt("cantidad a comprar")
        costoTotal = costoTotal + (parseInt(costoUnitario) * parseInt(cantidad))
    } else {
        let modificar = prompt("Desea modificar algún item? Responda si o no")
        if (modificar === "si") {
            articulo = prompt("Cual es el articulo que desea modificar?")
            for(let i = 0; i < carrito.length; i++) {
                if (carrito[i] === articulo) {
                    carrito[i] = prompt("ingrese el nombre del item corregido por favor")
                }
            }
        }
    }
}

console.log("************")
console.log("Items")
for(let i = 0; i < carrito.length; i++){
    console.log(" - " + carrito[i])
}
console.log("Total a facturar: $"+ costoTotal)
console.log("************")
*/

// 8) Modificá el ejercicio anterior para que haya un vector que sea "ítems"; otro, "precio por unidad" y el tercero "cantidad comprada".
// a) Al señalar un campo a modificar (ingresado a partir del índice del mismo) debes pedir el nombre del ítem, la cantidad y el precio. Y modificarlos en cada vector.
// b) Cuando ya no se busque modificar alguno de los ítems, se mostrará el resultado final (punto 6 - e)
/*
let carrito = []
let item = []
let precioxUnidad = []
let cantidadComprada = []
let costoUnitario, cantidad, costoTotal
let articulo = prompt("ingrese un item")

if(articulo !== "0") {
    item.push(articulo)
    carrito.push(articulo)
    costoUnitario = prompt("ingrese el costo")
    precioxUnidad.push(costoUnitario)
    cantidad = prompt("cantidad a comprar")
    cantidadComprada.push(cantidad)
} else {
    alert("Ingrese articulos para poder continuar")
}

costoTotal = 0

while(articulo !== "0") {
    articulo = prompt("ingrese un item");
    if (articulo !== "0") {
        carrito.push(articulo)
        item.push(articulo)
        costoUnitario = prompt("Costo por unidad");
        precioxUnidad.push(costoUnitario)
        cantidad = prompt("cantidad a comprar")
        cantidadComprada.push(cantidad)
    } else {
        let modificar = prompt("Desea modificar algún item? Responda si o no")
        if (modificar === "si") {
            articulo = prompt("Cual es el articulo que desea modificar?")
            for(let i = 0; i < item.length; i++) {
                if (item[i] === articulo) {
                    item[i] = prompt("ingrese el nombre del item corregido por favor")
                    precioxUnidad[i] = prompt("Costo por unidad")
                    cantidadComprada[i] = prompt("Cuantas desea comprar")
                }
            }
        }
    }
}

console.log("************")
console.log("Items")
for(let i = 0; i < carrito.length; i++){
    console.log(" - " + item[i])
    costoTotal = costoTotal + (precioxUnidad[i] * cantidadComprada[i])
}
console.log("Total a facturar: $"+ costoTotal)
console.log("************")

console.log(item)
console.log(precioxUnidad)
console.log(cantidadComprada)
*/

// 9) Crearemos un log.
// Los sistemas de logueo son sistemas que muestran todo el trackeo de los datos. Suelen usarse en sistemas de bases de datos que
// requieren auditoría para comprender quiénes hicieron determinados cambios.
// a) Al ejercicio anterior se agregará un vector nuevo que irá grabando cada movimiento que se genere. Si seguimos el ejercicio 6 quedaría:
// ****** INICIO LOG ********
// [AGREGO] Manteca - 1 unidad - $500
// [AGREGO] Cafe - 2 Unidades - $370
// [AGREGO] Limones - 10 unidades - $25
// Y luego modificamos (por el ejercicio 7) el cafe por Malta, su precio y la cantidad, entonces el registro continuaría:
// [MODIFICO] Cafe por Malta - 2 unidades por 3 unidades - $370 por $125
// ****** FIN LOG ********
// Nota: Lo importante en los sistemas de logueo es que no se pierde ningún valor de los ingresados.


let carrito = []
let item = []
let precioxUnidad = []
let cantidadComprada = []
let log = []
let costoUnitario, cantidad
let articulo = ""
let costoTotal = 0


while(articulo !== "0") {
    articulo = prompt("Ingrese el nombre del producto. Para salir o modificar un articulo ingrese 0");
    if (articulo === "") {
        alert("Debe ingresar un articulo para continuar")
    } else if (articulo !== "0") {
        carrito.push(articulo)
        item.push(articulo)
        costoUnitario = prompt("Ingrese el PRECIO del producto");
        precioxUnidad.push(costoUnitario)
        cantidad = prompt("Ingrese la CANTIDAD a comprar")
        cantidadComprada.push(cantidad)
        log.push(`[Agrego] ${articulo} - ${cantidad} ${parseInt(cantidad) > 1 ? "unidades" : "unidad" } - $${costoUnitario} c/u. --> ${cantidad * costoUnitario}`)
    } else {
        let modificar = prompt("¿Desea modificar algún item? Responda si o no")
        if (modificar === "si") {
            articuloABorrar = prompt("¿Cual es el articulo que desea modificar?")

            let itemABorrar = item.indexOf(articuloABorrar)
            let costoABorrar = precioxUnidad[itemABorrar]
            let cantidadABorrar = cantidadComprada[itemABorrar]

            item[itemABorrar] = prompt("Ingrese el NUEVO item por favor")
            precioxUnidad[itemABorrar] = prompt("PRECIO por unidad del nuevo producto")
            cantidadComprada[itemABorrar] = prompt("¿CUANTAS unidades desea comprar?")

            log.push(`[Modifico] ${articuloABorrar} por ${item[itemABorrar]} - ${cantidadABorrar} ${parseInt(cantidadABorrar) > 1 ? "unidades" : "unidad" } por ${cantidadComprada[itemABorrar]} ${parseInt(cantidadComprada[itemABorrar]) > 1 ? "unidades" : "unidad" } - $${costoABorrar} por $${precioxUnidad[itemABorrar]} c/u.`)
            articulo = ""
        }
    }
}


console.log("#######################")
console.log("Items:")
for(let i = 0; i < item.length; i++){
    console.log(" - " + item[i])
    costoTotal = costoTotal + (precioxUnidad[i] * cantidadComprada[i])
}
console.log("Total a facturar: $"+ costoTotal)
console.log("#######################")

//console.log(item)
//console.log(precioxUnidad)
//console.log(cantidadComprada)



console.log("********** Inicio del LOG **********")
for(let i = 0; i < log.length; i++) {
    console.log(log[i])
}
console.log("********** Final del LOG **********")