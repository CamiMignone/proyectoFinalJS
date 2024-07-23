// Array de alojamientos
const alojamientos = [
    { id: 1, pais: "España", ciudad: "Barcelona", nombre: "Apartamento en el Eixample", comodidades: ["pileta", "cocina", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 120 },
    { id: 2, pais: "España", ciudad: "Madrid", nombre: "Ático en el Centro", comodidades: ["cocina", "jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.5, precioPorNoche: 150 },
    { id: 3, pais: "México", ciudad: "Ciudad de México", nombre: "Casa Colonial en Coyoacán", comodidades: ["cocina", "jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 8, precioPorNoche: 80 },
    { id: 4, pais: "México", ciudad: "Cancún", nombre: "Resort frente a la playa", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 0.2, precioPorNoche: 200 },
    { id: 5, pais: "Argentina", ciudad: "Buenos Aires", nombre: "Estudio Moderno en Palermo", comodidades: ["pileta", "cocina"], privada: "privada", capacidad: 2, distancia: 4, precioPorNoche: 70 },
    { id: 6, pais: "Argentina", ciudad: "Mendoza", nombre: "Cabaña en los Andes", comodidades: ["vista al paisaje", "cocina"], privada: "privada", capacidad: 4, distancia: 10, precioPorNoche: 90 },
    { id: 7, pais: "Italia", ciudad: "Roma", nombre: "Villa Romántica en el Centro", comodidades: ["jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 180 },
    { id: 8, pais: "Italia", ciudad: "Venecia", nombre: "Apartamento en el Gran Canal", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 160 },
    { id: 9, pais: "Brasil", ciudad: "Río de Janeiro", nombre: "Departamento en Copacabana", comodidades: ["pileta", "cocina"], privada: "compartida", capacidad: 4, distancia: 0.3, precioPorNoche: 110 },
    { id: 10, pais: "Brasil", ciudad: "Sao Paulo", nombre: "Loft en el Centro", comodidades: ["cocina", "vista al paisaje"], privada: "compartida", capacidad: 2, distancia: 0.5, precioPorNoche: 90 },
    { id: 11, pais: "Japón", ciudad: "Tokio", nombre: "Apartamento Futurista en Shibuya", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 2, precioPorNoche: 140 },
    { id: 12, pais: "Japón", ciudad: "Kyoto", nombre: "Ryokan Tradicional", comodidades: ["jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 1, precioPorNoche: 130 },
    { id: 13, pais: "Australia", ciudad: "Sídney", nombre: "Penthouse con Vista al Puerto", comodidades: ["pileta", "cocina", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.5, precioPorNoche: 210 },
    { id: 14, pais: "Australia", ciudad: "Melbourne", nombre: "Apartamento en el Centro", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 0.3, precioPorNoche: 130 },
    { id: 15, pais: "Estados Unidos", ciudad: "Nueva York", nombre: "Estudio en Manhattan", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 250 },
    { id: 16, pais: "Estados Unidos", ciudad: "Los Ángeles", nombre: "Casa en Hollywood", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 5, precioPorNoche: 300 },
    { id: 17, pais: "Canadá", ciudad: "Toronto", nombre: "Apartamento en el Centro", comodidades: ["cocina", "jacuzzi"], privada: "compartida", capacidad: 4, distancia: 1, precioPorNoche: 120 },
    { id: 18, pais: "Canadá", ciudad: "Vancouver", nombre: "Casa en el Bosque", comodidades: ["jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 10, precioPorNoche: 100 },
    { id: 19, pais: "Chile", ciudad: "Santiago", nombre: "Departamento en Providencia", comodidades: ["pileta", "cocina"], privada: "privada", capacidad: 2, distancia: 3, precioPorNoche: 85 },
    { id: 20, pais: "Chile", ciudad: "Valparaíso", nombre: "Casa en los Cerros", comodidades: ["vista al paisaje", "cocina"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 95 }
];

let salida = "Ingrese pais de destino\n Pais - Nombre - Precio por noche\n"

for (const alojamiento of alojamientos) {
    salida = salida + alojamiento.pais + " - " + alojamiento.nombre + " - " + alojamiento.precioPorNoche + "\n"
}


let paisIngresado = prompt(salida)

const paisesBuscados = alojamientos.filter(alojamiento => alojamiento.pais === paisIngresado)
console.log(paisesBuscados)
for (const paisBuscado of paisesBuscados) {
    console.log(paisBuscado)
}


