const alojamientos = [
    { id: 1, pais: "Espana", ciudad: "Barcelona", nombre: "Apartamento en el Eixample", comodidades: ["pileta", "cocina", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 120 },
    { id: 2, pais: "Espana", ciudad: "Madrid", nombre: "Ático en el Centro", comodidades: ["cocina", "jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.5, precioPorNoche: 150 },
    { id: 3, pais: "Mexico", ciudad: "Ciudad de Mexico", nombre: "Casa Colonial en Coyoacán", comodidades: ["cocina", "jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 8, precioPorNoche: 80 },
    { id: 4, pais: "Mexico", ciudad: "Cancun", nombre: "Resort frente a la playa", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 0.2, precioPorNoche: 200 },
    { id: 5, pais: "Argentina", ciudad: "Buenos Aires", nombre: "Estudio Moderno en Palermo", comodidades: ["pileta", "cocina"], privada: "privada", capacidad: 2, distancia: 4, precioPorNoche: 70 },
    { id: 6, pais: "Argentina", ciudad: "Mendoza", nombre: "Cabaña en los Andes", comodidades: ["vista al paisaje", "cocina"], privada: "privada", capacidad: 4, distancia: 10, precioPorNoche: 90 },
    { id: 7, pais: "Italia", ciudad: "Roma", nombre: "Villa Romántica en el Centro", comodidades: ["jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 180 },
    { id: 8, pais: "Italia", ciudad: "Venecia", nombre: "Apartamento en el Gran Canal", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 160 },
    { id: 9, pais: "Brasil", ciudad: "Rio de Janeiro", nombre: "Departamento en Copacabana", comodidades: ["pileta", "cocina"], privada: "compartida", capacidad: 4, distancia: 0.3, precioPorNoche: 110 },
    { id: 10, pais: "Brasil", ciudad: "São Paulo", nombre: "Loft en el Centro", comodidades: ["cocina", "vista al paisaje"], privada: "compartida", capacidad: 2, distancia: 0.5, precioPorNoche: 90 },
    { id: 11, pais: "Japon", ciudad: "Tokio", nombre: "Apartamento Futurista en Shibuya", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 2, precioPorNoche: 140 },
    { id: 12, pais: "Japon", ciudad: "Kyoto", nombre: "Ryokan Tradicional", comodidades: ["jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 1, precioPorNoche: 130 },
    { id: 13, pais: "Australia", ciudad: "Sidney", nombre: "Penthouse con Vista al Puerto", comodidades: ["pileta", "cocina", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.5, precioPorNoche: 210 },
    { id: 14, pais: "Australia", ciudad: "Melbourne", nombre: "Apartamento en el Centro", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 0.3, precioPorNoche: 130 },
    { id: 15, pais: "Estados Unidos", ciudad: "Nueva York", nombre: "Estudio en Manhattan", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 250 },
    { id: 16, pais: "Estados Unidos", ciudad: "Los Ángeles", nombre: "Casa en Hollywood", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 5, precioPorNoche: 300 },
    { id: 17, pais: "Canada", ciudad: "Toronto", nombre: "Apartamento en el Centro", comodidades: ["cocina", "jacuzzi"], privada: "compartida", capacidad: 4, distancia: 1, precioPorNoche: 120 },
    { id: 18, pais: "Canada", ciudad: "Vancouver", nombre: "Casa en el Bosque", comodidades: ["jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 10, precioPorNoche: 100 },
    { id: 19, pais: "Chile", ciudad: "Santiago", nombre: "Departamento en Providencia", comodidades: ["pileta", "cocina"], privada: "privada", capacidad: 2, distancia: 3, precioPorNoche: 85 },
    { id: 20, pais: "Chile", ciudad: "Valparaiso", nombre: "Casa en los Cerros", comodidades: ["vista al paisaje", "cocina"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 95 },
    { id: 21, pais: "Espana", ciudad: "Barcelona", nombre: "Estudio en el Barrio Gótico", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1.5, precioPorNoche: 100 },
    { id: 22, pais: "Espana", ciudad: "Valencia", nombre: "Apartamento en la Playa", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.1, precioPorNoche: 140 },
    { id: 23, pais: "Mexico", ciudad: "Guadalajara", nombre: "Casa en el Centro Histórico", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 90 },
    { id: 24, pais: "Mexico", ciudad: "Playa del Carmen", nombre: "Villa Frente al Mar", comodidades: ["pileta", "jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.1, precioPorNoche: 220 },
    { id: 25, pais: "Argentina", ciudad: "Bariloche", nombre: "Cabaña en la Patagonia", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 5, precioPorNoche: 120 },
    { id: 26, pais: "Argentina", ciudad: "Cordoba", nombre: "Loft en el Centro Histórico", comodidades: ["cocina", "jacuzzi"], privada: "privada", capacidad: 2, distancia: 3, precioPorNoche: 80 },
    { id: 27, pais: "Italia", ciudad: "Florencia", nombre: "Apartamento en el Casco Histórico", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 150 },
    { id: 28, pais: "Italia", ciudad: "Nápoles", nombre: "Casa con Vista al Vesubio", comodidades: ["pileta", "jacuzzi"], privada: "privada", capacidad: 4, distancia: 3, precioPorNoche: 170 },
    { id: 29, pais: "Brasil", ciudad: "Salvador", nombre: "Pousada en el Pelourinho", comodidades: ["pileta", "cocina"], privada: "compartida", capacidad: 2, distancia: 1, precioPorNoche: 85 },
    { id: 30, pais: "Brasil", ciudad: "Fortaleza", nombre: "Apartamento en la Playa", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 0.2, precioPorNoche: 120 },
    { id: 31, pais: "Australia", ciudad: "Sidney", nombre: "Apartamento en Bondi Beach", comodidades: ["pileta", "cocina"], privada: "privada", capacidad: 2, distancia: 0.1, precioPorNoche: 190 },
    { id: 32, pais: "Australia", ciudad: "Brisbane", nombre: "Apartamento en el Río", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 0.5, precioPorNoche: 150 },
    { id: 33, pais: "Estados Unidos", ciudad: "San Francisco", nombre: "Apartamento con Vista al Golden Gate", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 270 },
    { id: 34, pais: "Estados Unidos", ciudad: "Miami", nombre: "Casa en South Beach", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.2, precioPorNoche: 320 },
    { id: 35, pais: "Canada", ciudad: "Montreal", nombre: "Apartamento en el Viejo Montreal", comodidades: ["cocina", "jacuzzi"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 130 },
    { id: 36, pais: "Canada", ciudad: "Quebec", nombre: "Casa en el Viejo Québec", comodidades: ["jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 140 },
    { id: 37, pais: "Chile", ciudad: "Valdivia", nombre: "Cabaña en el Bosque", comodidades: ["pileta", "cocina"], privada: "privada", capacidad: 4, distancia: 5, precioPorNoche: 105 },
    { id: 38, pais: "Chile", ciudad: "Concepcion", nombre: "Departamento en el Centro", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 80 }
];

const paisesDisponibles = [...new Set(alojamientos.map(alojamiento => alojamiento.pais.toLowerCase()))];

let salidaPaises = "Paises disponibles, escribe tu proximo destino\n";
for (const pais of paisesDisponibles) {
    salidaPaises = salidaPaises + pais + "\n";
}

let paisIngresado;
let paisValido = false;

while (!paisValido) {
    paisIngresado = prompt(salidaPaises).toLowerCase();
    if (paisesDisponibles.includes(paisIngresado)) {
        paisValido = true;
    } else {
        alert("El país ingresado no está en la lista. Por favor, ingrese un país válido.");
    }
}

let cantPersonas = parseInt(prompt("Ingrese la cantidad de personas"));

const paisesBuscados = alojamientos.filter(alojamiento => alojamiento.pais.toLowerCase() === paisIngresado && alojamiento.capacidad >= cantPersonas);
console.log(paisesBuscados);

let mensaje = "Alojamientos disponibles en " + paisIngresado + ". Seleccione un ID\n";
for (const alojamiento of paisesBuscados) {
    mensaje = mensaje + alojamiento.id + " - " + alojamiento.ciudad + " - " + alojamiento.nombre + " - " + alojamiento.precioPorNoche + "\n";
}

let idIngresado;
let idValido = false;

while (!idValido) {
    idIngresado = parseInt(prompt(mensaje));
    if (paisesBuscados.some(alojamiento => alojamiento.id === idIngresado)) {
        idValido = true;
    } else {
        alert("El ID ingresado no es válido. Por favor, ingrese un ID correcto.");
    }
}

const alojamientoBuscado = paisesBuscados.find(alojamiento => alojamiento.id === idIngresado);
console.log(alojamientoBuscado);

let diaInicio = parseInt(prompt("Ingrese el día de entrada"));
let diaFin = parseInt(prompt("Ingrese el día de salida"));
let mes = prompt("Ingrese el mes");

function calcularNoches(diaInicio, diaFin) {
    return diaFin - diaInicio;
}

let diferencia = calcularNoches(diaInicio, diaFin);

let precioTotal = diferencia * alojamientoBuscado.precioPorNoche;

console.log("Confirmaste tu reserva para " + alojamientoBuscado.nombre + " en " + alojamientoBuscado.pais + " para la fecha " + diaInicio + " de " + mes + " hasta el " + diaFin + " de " + mes + ", " + cantPersonas + " personas, al precio total de " + precioTotal + "$ por " + diferencia + " noches");










