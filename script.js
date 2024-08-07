const alojamientos = [
    { id: 1, pais: "Espana", ciudad: "Barcelona", nombre: "Apartamento en el Eixample", comodidades: ["pileta", "cocina", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 120, rutaImagen: "img1.jpg" },
    { id: 2, pais: "Espana", ciudad: "Madrid", nombre: "Ático en el Centro", comodidades: ["cocina", "jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.5, precioPorNoche: 150, rutaImagen: "img2.jpg"  },
    { id: 3, pais: "Mexico", ciudad: "Ciudad de Mexico", nombre: "Casa Colonial en Coyoacán", comodidades: ["cocina", "jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 8, precioPorNoche: 80, rutaImagen: "img3.jpg"  },
    { id: 4, pais: "Mexico", ciudad: "Cancun", nombre: "Resort frente a la playa", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 0.2, precioPorNoche: 200, rutaImagen: "img4.jpg"  },
    { id: 5, pais: "Argentina", ciudad: "Buenos Aires", nombre: "Estudio Moderno en Palermo", comodidades: ["pileta", "cocina"], privada: "privada", capacidad: 2, distancia: 4, precioPorNoche: 70, rutaImagen: "img5.jpg"  },
    { id: 6, pais: "Argentina", ciudad: "Mendoza", nombre: "Cabaña en los Andes", comodidades: ["vista al paisaje", "cocina"], privada: "privada", capacidad: 4, distancia: 10, precioPorNoche: 90, rutaImagen: "img6.jpg"  },
    { id: 7, pais: "Italia", ciudad: "Roma", nombre: "Villa Romántica en el Centro", comodidades: ["jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 180, rutaImagen: "img7.jpg"  },
    { id: 8, pais: "Italia", ciudad: "Venecia", nombre: "Apartamento en el Gran Canal", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 160, rutaImagen: "img8.jpg"  },
    { id: 9, pais: "Brasil", ciudad: "Rio de Janeiro", nombre: "Departamento en Copacabana", comodidades: ["pileta", "cocina"], privada: "compartida", capacidad: 4, distancia: 0.3, precioPorNoche: 110, rutaImagen: "img9.jpg"  },
    { id: 10, pais: "Brasil", ciudad: "Sao Paulo", nombre: "Loft en el Centro", comodidades: ["cocina", "vista al paisaje"], privada: "compartida", capacidad: 2, distancia: 0.5, precioPorNoche: 90, rutaImagen: "img10.jpg"  },
    { id: 11, pais: "Japon", ciudad: "Tokio", nombre: "Apartamento Futurista en Shibuya", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 2, precioPorNoche: 140, rutaImagen: "img11.jpg"  },
    { id: 12, pais: "Japon", ciudad: "Kyoto", nombre: "Ryokan Tradicional", comodidades: ["jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 1, precioPorNoche: 130, rutaImagen: "img12.jpg"  },
    { id: 13, pais: "Australia", ciudad: "Sidney", nombre: "Penthouse con Vista al Puerto", comodidades: ["pileta", "cocina", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.5, precioPorNoche: 210, rutaImagen: "img13.jpg"  },
    { id: 14, pais: "Australia", ciudad: "Melbourne", nombre: "Apartamento en el Centro", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 0.3, precioPorNoche: 130, rutaImagen: "img14.jpg"  },
    { id: 15, pais: "Estados Unidos", ciudad: "Nueva York", nombre: "Estudio en Manhattan", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 250, rutaImagen: "img15.jpg"  },
    { id: 16, pais: "Estados Unidos", ciudad: "Los Ángeles", nombre: "Casa en Hollywood", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 5, precioPorNoche: 300, rutaImagen: "img16.jpg"  },
    { id: 17, pais: "Canada", ciudad: "Toronto", nombre: "Apartamento en el Centro", comodidades: ["cocina", "jacuzzi"], privada: "compartida", capacidad: 4, distancia: 1, precioPorNoche: 120, rutaImagen: "img17.jpg"  },
    { id: 18, pais: "Canada", ciudad: "Vancouver", nombre: "Casa en el Bosque", comodidades: ["jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 10, precioPorNoche: 100, rutaImagen: "img18.jpg"  },
    { id: 19, pais: "Chile", ciudad: "Santiago", nombre: "Departamento en Providencia", comodidades: ["pileta", "cocina"], privada: "privada", capacidad: 2, distancia: 3, precioPorNoche: 85, rutaImagen: "img19.jpg"  },
    { id: 20, pais: "Chile", ciudad: "Valparaiso", nombre: "Casa en los Cerros", comodidades: ["vista al paisaje", "cocina"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 95, rutaImagen: "img20.jpg"  },
    { id: 21, pais: "Espana", ciudad: "Barcelona", nombre: "Estudio en el Barrio Gótico", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1.5, precioPorNoche: 100, rutaImagen: "img21.jpg"  },
    { id: 22, pais: "Espana", ciudad: "Valencia", nombre: "Apartamento en la Playa", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.1, precioPorNoche: 140, rutaImagen: "img22.jpg"  },
    { id: 23, pais: "Mexico", ciudad: "Guadalajara", nombre: "Casa en el Centro Histórico", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 90, rutaImagen: "img23.jpg"  },
    { id: 24, pais: "Mexico", ciudad: "Playa del Carmen", nombre: "Villa Frente al Mar", comodidades: ["pileta", "jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.1, precioPorNoche: 220, rutaImagen: "img24.jpg"  },
    { id: 25, pais: "Argentina", ciudad: "Bariloche", nombre: "Cabaña en la Patagonia", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 5, precioPorNoche: 120, rutaImagen: "img25.jpg"  },
    { id: 26, pais: "Argentina", ciudad: "Cordoba", nombre: "Loft en el Centro Histórico", comodidades: ["cocina", "jacuzzi"], privada: "privada", capacidad: 2, distancia: 3, precioPorNoche: 80, rutaImagen: "img26.jpg"  },
    { id: 27, pais: "Italia", ciudad: "Florencia", nombre: "Apartamento en el Casco Histórico", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 150, rutaImagen: "img27.jpg"  },
    { id: 28, pais: "Italia", ciudad: "Napoles", nombre: "Casa con Vista al Vesubio", comodidades: ["pileta", "jacuzzi"], privada: "privada", capacidad: 4, distancia: 3, precioPorNoche: 170, rutaImagen: "img28.jpg"  },
    { id: 29, pais: "Brasil", ciudad: "Salvador", nombre: "Pousada en el Pelourinho", comodidades: ["pileta", "cocina"], privada: "compartida", capacidad: 2, distancia: 1, precioPorNoche: 85, rutaImagen: "img29.jpg"  },
    { id: 30, pais: "Brasil", ciudad: "Fortaleza", nombre: "Apartamento en la Playa", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 0.2, precioPorNoche: 120, rutaImagen: "img30.jpg"  },
    { id: 31, pais: "Australia", ciudad: "Sidney", nombre: "Apartamento en Bondi Beach", comodidades: ["pileta", "cocina"], privada: "privada", capacidad: 2, distancia: 0.1, precioPorNoche: 190, rutaImagen: "img31.jpg"  },
    { id: 32, pais: "Australia", ciudad: "Brisbane", nombre: "Apartamento en el Río", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 0.5, precioPorNoche: 150, rutaImagen: "img32.jpg"  },
    { id: 33, pais: "Estados Unidos", ciudad: "San Francisco", nombre: "Apartamento con Vista al Golden Gate", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 270, rutaImagen: "img33.jpg"  },
    { id: 34, pais: "Estados Unidos", ciudad: "Miami", nombre: "Casa en South Beach", comodidades: ["pileta", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 0.2, precioPorNoche: 320, rutaImagen: "img34.jpg"  },
    { id: 35, pais: "Canada", ciudad: "Montreal", nombre: "Apartamento en el Viejo Montreal", comodidades: ["cocina", "jacuzzi"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 130, rutaImagen: "img35.jpg"  },
    { id: 36, pais: "Canada", ciudad: "Quebec", nombre: "Casa en el Viejo Québec", comodidades: ["jacuzzi", "vista al paisaje"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 140, rutaImagen: "img36.jpg"  },
    { id: 37, pais: "Chile", ciudad: "Valdivia", nombre: "Cabaña en el Bosque", comodidades: ["pileta", "cocina"], privada: "privada", capacidad: 4, distancia: 5, precioPorNoche: 105, rutaImagen: "img37.jpg"  },
    { id: 38, pais: "Chile", ciudad: "Concepcion", nombre: "Departamento en el Centro", comodidades: ["cocina", "vista al paisaje"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 80, rutaImagen: "img5.jpg"  }
];

document.addEventListener("DOMContentLoaded", () => {
    // Cargar países en el select
    const paisesDisponibles = [...new Set(alojamientos.map(alojamiento => alojamiento.pais))];
    const selectPais = document.getElementById("pais");
    
    paisesDisponibles.forEach(pais => {
        const option = document.createElement("option");
        option.value = pais;
        option.textContent = pais;
        selectPais.appendChild(option);
    });

    document.getElementById("formularioBusqueda").addEventListener("submit", manejarBusqueda);
    document.getElementById("formularioPagoDatos").addEventListener("submit", manejarPago);
    document.getElementById("botonVolver").addEventListener("click", volverAResultados);
    document.getElementById("botonVolverPago").addEventListener("click", volverAResultados);

    document.querySelector("a[href=\"#inicio\"]").addEventListener("click", (event) => {
        event.preventDefault();
        mostrarSeccion("buscar");
    });

    mostrarSeccion("buscar");
});

function manejarBusqueda(event) {
    event.preventDefault();

    const pais = document.getElementById("pais").value;
    const personas = parseInt(document.getElementById("personas").value, 10);
    const checkin = new Date(document.getElementById("entrada").value);
    const checkout = new Date(document.getElementById("salida").value);

    if (checkout <= checkin) {
        alert("La fecha de salida debe ser después de la fecha de entrada. Por favor, ingrese fechas válidas.");
        return;
    }

    if (personas > 4) {
        alert("Maximo 4 personas");
        return;
    }

    const resultados = alojamientos.filter(alojamiento => {
        return alojamiento.pais === pais &&
               alojamiento.capacidad >= personas;
    });

    localStorage.setItem("resultadosBusqueda", JSON.stringify(resultados));
    localStorage.setItem("fechasBusqueda", JSON.stringify({ checkin: checkin.toISOString(), checkout: checkout.toISOString() }));

    mostrarResultados(resultados);
    mostrarSeccion("resultados");
}

function mostrarResultados(resultados) {
    const contenedorResultados = document.getElementById("contenedorResultados");
    contenedorResultados.innerHTML = "";

    if (resultados.length > 0) {
        resultados.forEach(resultado => {
            const tarjeta = crearTarjetaAlojamiento(resultado);
            contenedorResultados.appendChild(tarjeta);
        });
    } else {
        contenedorResultados.innerHTML = "<p>No se encontraron alojamientos que coincidan con los criterios de búsqueda.</p>";
    }
}

function crearTarjetaAlojamiento(alojamiento) {
    const div = document.createElement("div");
    div.className = "tarjetaResultado";
    div.innerHTML = `
        <img src=./img/${alojamiento.rutaImagen}>
        <div class=texto>
            <h3>${alojamiento.nombre}</h3>
            <p>${alojamiento.ciudad}</p>
            <p>Precio por noche: $${alojamiento.precioPorNoche}</p>
            <button onclick="verDetalles(${alojamiento.id})">Ver más</button>
        </div>
    `;
    return div;
}

function verDetalles(id) {
    const alojamientoSeleccionado = alojamientos.find(alojamiento => alojamiento.id === id);
    const fechasBusqueda = JSON.parse(localStorage.getItem("fechasBusqueda"));

    if (fechasBusqueda) {
        localStorage.setItem("alojamientoSeleccionado", JSON.stringify({
            alojamiento: alojamientoSeleccionado,
            fechas: fechasBusqueda
        }));
    }

    const contenedorDetalles = document.getElementById("contenedorDetalles");
    contenedorDetalles.innerHTML = `
        <h3>${alojamientoSeleccionado.nombre}</h3>
        <p>${alojamientoSeleccionado.ciudad}</p>
        <img src=./img/${alojamientoSeleccionado.rutaImagen}>
        <div class=texto>
        <p>Vive una experiencia exclusiva con el servicio de primera clase en ${alojamientoSeleccionado.nombre}</p>
    <p>Situado en ${alojamientoSeleccionado.ciudad}, ${alojamientoSeleccionado.pais}, ${alojamientoSeleccionado.nombre} ofrece una experiencia inolvidable.</p>
    <p>Las ${alojamientoSeleccionado.capacidad} habitaciones han sido diseñadas y estudiadas hasta el mínimo detalle para garantizar el máximo confort: minibar, máquina de café espresso, bebidas y snacks secos, línea de baño exclusiva, pantuflas de lujo, kit de bienestar con albornoces, chanclas y bolsa, conexión a internet WiFi de alta velocidad, menú de almohadas y servicio de limpieza dos veces al día.</p>
    <p>Cada alojamiento también se caracteriza por su propia identidad: en ${alojamientoSeleccionado.nombre} encontrarás habitaciones con camas colgantes, habitaciones con jacuzzi privado panorámico, habitaciones con bañera exenta en el centro de la habitación, pero todas con un punto en común: el paisaje.</p>
    <p>No te pierdas las experiencias exclusivas para unas vacaciones realmente únicas! Reserva un desayuno flotante, un desayuno con alpacas, o una cena romántica.</p>
    El servicio de conserjería te ayudará con la reserva de servicios adicionales como tours en helicóptero, traslados de lujo desde y hacia tu destino, actividades al aire libre.
    El personal estará a tu disposición para servicios románticos dedicados como el Set de Amor y el Planificador de Eventos para la organización de tus momentos especiales.
    Como huésped, disfrutarás de ${alojamientoSeleccionado.comodidades} todas las tardes.
    <p>Cada mañana te espera un desayuno a la carta, mientras que para el almuerzo podrás disfrutar de un menú junto a la piscina o de platos de bistró. Para la cena, encontrarás un restaurante contemporáneo o típico y una amplia variedad de platos para satisfacer todos los paladares.</p>
    <p>Las parejas aprecian mucho la ubicación: la han valorado con un 9,1 para un viaje en pareja.</p>
    <p>Este alojamiento se encuentra a solo ${alojamientoSeleccionado.distancia} kilómetros del centro de la ciudad y ofrece una vista impresionante del paisaje. Disfruta de las comodidades como ${alojamientoSeleccionado.comodidades.join(", ")} y relájate en este ambiente ${alojamientoSeleccionado.privada}. El precio por noche es de $${alojamientoSeleccionado.precioPorNoche}, lo que lo convierte en una opción excelente para tu próximo viaje.</p>
        <button onclick="seleccionarAlojamiento(${alojamientoSeleccionado.id})">Reservar</button>
        </div>
        `;

    mostrarSeccion("detalles");
}

function seleccionarAlojamiento(id) {
    mostrarSeccion("formularioPago");
}

function volverAResultados() {
    const resultadosGuardados = JSON.parse(localStorage.getItem("resultadosBusqueda"));
    if (resultadosGuardados) {
        mostrarResultados(resultadosGuardados);
    } else {
        const contenedorResultados = document.getElementById("contenedorResultados");
        contenedorResultados.innerHTML = "<p>No se encontraron alojamientos que coincidan con los criterios de búsqueda.</p>";
    }
    mostrarSeccion("resultados");
}

function manejarPago(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const numeroTarjeta = document.getElementById("numeroTarjeta").value;
    const fechaExpiracion = document.getElementById("fechaExpiracion").value;
    const cvv = document.getElementById("cvv").value;

    const alojamientoSeleccionado = JSON.parse(localStorage.getItem("alojamientoSeleccionado"));
    const fechas = alojamientoSeleccionado.fechas;
    const checkin = new Date(fechas.checkin);
    const checkout = new Date(fechas.checkout);

    const diferencia = (checkout - checkin) / (1000 * 60 * 60 * 24); // Días
    const precioTotal = diferencia * alojamientoSeleccionado.alojamiento.precioPorNoche;

    const confirmacion = document.getElementById("confirmacion");
    confirmacion.innerHTML = `
        <p>¡Reserva confirmada!</p>
        <p>Detalles:</p>
        <p>Alojamiento: ${alojamientoSeleccionado.alojamiento.nombre}</p>
        <p>Check-in: ${checkin.toDateString()}</p>
        <p>Check-out: ${checkout.toDateString()}</p>
        <p>Precio total: $${precioTotal}</p>
    `;

    mostrarSeccion("confirmacion");
}

function mostrarSeccion(seccion) {
    const secciones = ["buscar", "resultados", "detalles", "formularioPago", "confirmacion"];
    secciones.forEach(id => {
        if (id === "buscar") {
            // Mostrar 'buscar' y recuperar resultados si existen
            document.getElementById(id).style.display = "block";
            const resultadosGuardados = JSON.parse(localStorage.getItem("resultadosBusqueda"));
            if (resultadosGuardados) {
                mostrarResultados(resultadosGuardados);
            }
        } else {
            document.getElementById(id).style.display = id === seccion ? "block" : "none";
        }
    });
}









