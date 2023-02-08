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
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
// b) Mostrá uno por uno los días de la semana. 
// c) Cuando sea Sabado o Domingo, deberá mostrarse la leyenda "Fin de semana!"
for(let i = 0 ; i < dias.length ; i++) {
    if (dias[i] === "sabado" || dias[i] === "domingo") {
        console.log("Fin de semana!")
    } else {
    console.log(dias[i]);
}
}

// 6) Vamos al supermercado. Crea un vector llamado carrito.
let carrito = []
// a) Con un prompt ingresá un artículo, Con un segundo prompt el costo unitario y con un tercer prompt el monto por unidad.

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

console.log("********")
console.log("Items")
for(let i = 0; i < carrito.length; i++){
    console.log(" - " + carrito[i])
}
console.log("Total a facturar: $"+ costoTotal)
console.log("**********")
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


// 7) Modifica el punto anterior para que, antes de finalizar la carga pregunte si queremos editar. Si responde "SI" entonces.
// a) Que indique con un número el ítem que quiere modificar. 
// b) Se reemplazara el nombre del artículo pero no la cantidad y el costo. 
// c) Una vez finalizado el reemplazo se preguntará si quiere seguir modificando. En caso afirmativo pasaremos al punto (a) y sino se mostrará el punto (6 - e)





























// 3) Haremos un facturador de un corralón. Teniendo en cuenta estos valores:
// a) Ladrillos:
// - común
// - - si son más de 5000 unidades: 250 por cada 100.
// - - si son menos de 5000 unidades: 440 por cada 100.
// - Plásticos: Por cada 100, 455.

// b) Cal:
// - Hasta 25 unidades: 2500
// - A partir de las 25 unidades: 2200

// c) Cemento:
// - Loma Negra:
// - - Hasta 25 unidades: 2500
// - - A partir de las 25 unidades: 2200
// - De contacto:
// - - Medio kilo: 1300
// - - 5 kilos: 6000



// 2) 

// a) Ingresá por prompt un sueldo bruto y guardalo en una variable.
// b) Verificá con un console.log el tipo de dato del sueldo.
// c) Con un condicional, si el tipo de dato es diferente a number mostrá con una alerta la leyenda "El tipo debe ser number"
// d) Con un ciclo validá que, mientras el tipo de dato no sea número, pida el ingreso del sueldo.
// e) Ingresá 



