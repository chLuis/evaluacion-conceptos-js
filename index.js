// Evaluación de conocimientos básicos en JS.

// 1) Guarda tu proyecto en tu github con el nombre evaluacion-conceptos-js
// 2) Por cada ejercicio harás un commit en donde reflejarás con la descripción el número de ejercicio.
// 3) Resolvé usando prompt, alert y condicionales:
// a) Pida al usuario su nombre y muestre un mensaje de bienvenida.
// b) Pida al usuario dos números y muestre su suma.
// c) Pida al usuario dos números y muestre el mayor.
// d) Pida al usuario tres números y muestre una leyenda que diga si los tres son iguales, sino lo son que también lo informe.
// e) Pida al usuario tres números y muéstrelos ordenados de mayor a menor.
// f) Pida al usuario su peso en kg y su altura en metros y muestre su índice de masa corporal (IMC): Peso (en Kg) / Altura (en metros) al cuadrado.
// (IMC): Peso (en Kg) / (Altura (en metros) al cuadrado).

// let peso, altura;
// peso = prompt("ingrese su peso en KG")
// altura = prompt("ingrese su peso en Metros")
// let imc = peso / Math.pow(altura, 2) 
// console.log(`Su IMC es de ${imc}`)
// console.log("su peso es de " + peso + " kgs.")
// console.log("Su altura es de " + altura + " metros.")

// Si el número esta por debajo de 18.5 mostrá la leyenda "Bajo peso"
// Si el número esta entre 18.6 y 24.9  mostrá la leyenda "Normal"
// Si el número esta entre 25 y 29.9  mostrá la leyenda "Sobrepeso"
// Si el número esmayor a 30 mostrá la leyenda "Obesidad"

// if (imc < 18.5) {
//     console.log("Bajo Peso")
// } else if (imc >= 18.6 && imc < 25) {
//     console.log("Peso Normal")
// } else if (imc >= 25 && imc < 30) {
//     console.log("Tiene Sobrepeso")
// } else {
//     console.log("Tiene Obesidad")
// }

// 4) Haremos un validador de números. 
// a) Pida al usuario que ingrese un número y almacenala en una variable.
// b) Mostrá el tipo de dato.
// c) Si el tipo de dato no es un NUMBER, entonces mostrá un console.error "Ingresá un valor numérico"
// d) Si el tipo de dato no es un NUMBER volvé a pedirlo tantas veces sea necesario hasta que se valide que el número ingresado es de tipo NUMBER



// 5)
// a) Ingresá un vector llamado dias, en donde se carguen los días lunes a domingo.
// b) Mostrá uno por uno los días de la semana. 
// c) Cuando sea Sabado o Domingo, deberá mostrarse la leyenda "Fin de semana!"
// let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
// for(let i = 0 ; i < dias.length ; i++) {
//     if (dias[i] === "sabado" || dias[i] === "domingo") {
//         console.log("Fin de semana!")
//     } else {
//     console.log(dias[i]);
// }
// }

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
// let carrito = []

// let articulo = prompt("ingrese un item")
// let costoUnitario = prompt("ingrese el costo")
// let cantidad = prompt("cantidad a comprar")
// carrito.push(articulo)
// let costoTotal = parseInt(costoUnitario) * parseInt(cantidad)

// while(articulo !== "0") {
//     articulo = prompt("ingrese un item");
//     if (articulo !== "0") {
//         carrito.push(articulo)
//         costoUnitario = prompt("ingrese el costo");
//         cantidad = prompt("cantidad a comprar")
//         costoTotal = costoTotal + (parseInt(costoUnitario) * parseInt(cantidad))
//     }
// }

// console.log("********")
// console.log("Items")
// for(let i = 0; i < carrito.length; i++){
//     console.log(" - " + carrito[i])
// }
// console.log("Total a facturar: $"+ costoTotal)
// console.log("**********")


// 7) Modifica el punto anterior para que, antes de finalizar la carga pregunte si queremos editar. Si responde "SI" entonces.
// a) Que indique con un número el ítem que quiere modificar. 
// b) Se reemplazara el nombre del artículo pero no la cantidad y el costo. 
// c) Una vez finalizado el reemplazo se preguntará si quiere seguir modificando. En caso afirmativo pasaremos al punto (a) y sino se mostrará el punto (6 - e)

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
    let modificar = prompt("modificar el item? Responda si o no")
    if (modificar === "si") {
        let modificar = prompt("Cual es el articulo que desea modificar?")
            for(let i = 0; i < carrito.length; i++) {
                if (carrito[i] === modificar) {
                    carrito[i] = prompt("ingrese en nombre del item corregido por favor")
                }
            }
    }
}

console.log("********")
console.log("Items")
for(let i = 0; i < carrito.length; i++){
    console.log(" - " + carrito[i])
}
console.log("Total a facturar: $"+ costoTotal)
console.log("**********")

// 8) Modificá el ejercicio anterior para que haya un vector que sea "ítems"; otro, "precio por unidad" y el tercero "cantidad comprada".
// a) Al señalar un campo a modificar (ingresado a partir del índice del mismo) debes pedir el nombre del ítem, la cantidad y el precio. Y modificarlos en cada vector.
// b) Cuando ya no se busque modificar alguno de los ítems, se mostrará el resultado final (punto 6 - e)

// 9) Crearemos un log.
// Los sistemas de logueo son sistemas que muestran todo el trackeo de los datos. Suelen usarse en sistemas de bases de datos que requieren auditoría para comprender quiénes hicieron determinados cambios.
// a) Al ejercicio anterior se agregará un vector nuevo que irá grabando cada movimiento que se genere. Si seguimos el ejercicio 6 quedaría:
// ****** INICIO LOG ********
// [AGREGO] Manteca - 1 unidad - $500
// [AGREGO] Cafe - 2 Unidades - $370
// [AGREGO] Limones - 10 unidades - $25
// Y luego modificamos (por el ejercicio 7) el cafe por Malta, su precio y la cantidad, entonces el registro continuaría:
// [MODIFICO] Cafe por Malta - 2 unidades por 3 unidades - $370 por $125
// ****** FIN LOG ********
// Nota: Lo importante en los sistemas de logueo es que no se pierde ningún valor de los ingresados.


