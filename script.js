const alojamientos = [
    { id: 1, pais: "Espana", ciudad: "Barcelona", nombre: "Apartamento en el Eixample", desayuno: ["incluido"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 120, rutaImagen: "img7.jpg" },
    { id: 2, pais: "Espana", ciudad: "Madrid", nombre: "Ático en el Centro", desayuno: ["excluido"], privada: "privada", capacidad: 4, distancia: 0.5, precioPorNoche: 150, rutaImagen: "img19.jpg"  },
    { id: 3, pais: "Mexico", ciudad: "Ciudad de Mexico", nombre: "Casa Colonial en Coyoacán", desayuno: ["incluido"], privada: "privada", capacidad: 4, distancia: 8, precioPorNoche: 80, rutaImagen: "img36.jpg"  },
    { id: 4, pais: "Mexico", ciudad: "Cancun", nombre: "Resort frente a la playa", desayuno: ["excluido"], privada: "privada", capacidad: 2, distancia: 0.2, precioPorNoche: 200, rutaImagen: "img13.jpg"  },
    { id: 5, pais: "Argentina", ciudad: "Buenos Aires", nombre: "Estudio Moderno en Palermo", desayuno: ["excluido"], privada: "privada", capacidad: 2, distancia: 4, precioPorNoche: 70, rutaImagen: "img25.jpg"  },
    { id: 6, pais: "Argentina", ciudad: "Mendoza", nombre: "Cabaña en los Andes", desayuno: ["incluido"], privada: "privada", capacidad: 4, distancia: 10, precioPorNoche: 90, rutaImagen: "img33.jpg"  },
    { id: 7, pais: "Italia", ciudad: "Roma", nombre: "Villa Romántica en el Centro", desayuno: ["incluido"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 180, rutaImagen: "img28.jpg"  },
    { id: 8, pais: "Italia", ciudad: "Venecia", nombre: "Apartamento en el Gran Canal", desayuno: ["excluido"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 160, rutaImagen: "img18.jpg"  },
    { id: 9, pais: "Brasil", ciudad: "Rio de Janeiro", nombre: "Departamento en Copacabana", desayuno: ["excluido"], privada: "compartida", capacidad: 4, distancia: 0.3, precioPorNoche: 110, rutaImagen: "img2.jpg"  },
    { id: 10, pais: "Brasil", ciudad: "Sao Paulo", nombre: "Loft en el Centro", desayuno: ["excluido"], privada: "compartida", capacidad: 2, distancia: 0.5, precioPorNoche: 90, rutaImagen: "img29.jpg"  },
    { id: 11, pais: "Japon", ciudad: "Tokio", nombre: "Apartamento Futurista en Shibuya", desayuno: ["excluido"], privada: "privada", capacidad: 2, distancia: 2, precioPorNoche: 140, rutaImagen: "img29.jpg"  },
    { id: 12, pais: "Japon", ciudad: "Kyoto", nombre: "Ryokan Tradicional", desayuno: ["incluido"], privada: "privada", capacidad: 4, distancia: 1, precioPorNoche: 130, rutaImagen: "img10.jpg"  },
    { id: 13, pais: "Australia", ciudad: "Sidney", nombre: "Penthouse con Vista al Puerto", desayuno: ["excluido"], privada: "privada", capacidad: 4, distancia: 0.5, precioPorNoche: 210, rutaImagen: "img17.jpg"  },
    { id: 14, pais: "Australia", ciudad: "Melbourne", nombre: "Apartamento en el Centro", desayuno: ["incluido"], privada: "privada", capacidad: 2, distancia: 0.3, precioPorNoche: 130, rutaImagen: "img15.jpg"  },
    { id: 15, pais: "Estados Unidos", ciudad: "Nueva York", nombre: "Estudio en Manhattan", desayuno: ["incluido"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 250, rutaImagen: "img3.jpg"  },
    { id: 16, pais: "Estados Unidos", ciudad: "Los Ángeles", nombre: "Casa en Hollywood", desayuno: ["excluido"], privada: "privada", capacidad: 4, distancia: 5, precioPorNoche: 300, rutaImagen: "img6.jpg"  },
    { id: 17, pais: "Canada", ciudad: "Toronto", nombre: "Apartamento en el Centro", desayuno: ["excluido"], privada: "compartida", capacidad: 4, distancia: 1, precioPorNoche: 120, rutaImagen: "img20.jpg"  },
    { id: 18, pais: "Canada", ciudad: "Vancouver", nombre: "Casa en el Bosque", desayuno: ["excluido"], privada: "privada", capacidad: 2, distancia: 10, precioPorNoche: 100, rutaImagen: "img21.jpg"  },
    { id: 19, pais: "Chile", ciudad: "Santiago", nombre: "Departamento en Providencia", desayuno: ["incluido"], privada: "privada", capacidad: 2, distancia: 3, precioPorNoche: 85, rutaImagen: "img19.jpg"  },
    { id: 20, pais: "Chile", ciudad: "Valparaiso", nombre: "Casa en los Cerros", desayuno: ["incluido"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 95, rutaImagen: "img37.jpg"  },
    { id: 21, pais: "Espana", ciudad: "Barcelona", nombre: "Estudio en el Barrio Gótico", desayuno: ["excluido"], privada: "privada", capacidad: 2, distancia: 1.5, precioPorNoche: 100, rutaImagen: "img15.jpg"  },
    { id: 22, pais: "Espana", ciudad: "Valencia", nombre: "Apartamento en la Playa", desayuno: ["excluido"], privada: "privada", capacidad: 4, distancia: 0.1, precioPorNoche: 140, rutaImagen: "img30.jpg"  },
    { id: 23, pais: "Mexico", ciudad: "Guadalajara", nombre: "Casa en el Centro Histórico", desayuno: ["incluido"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 90, rutaImagen: "img7.jpg"  },
    { id: 24, pais: "Mexico", ciudad: "Playa del Carmen", nombre: "Villa Frente al Mar", desayuno: ["excluido"], privada: "privada", capacidad: 4, distancia: 0.1, precioPorNoche: 220, rutaImagen: "img35.jpg"  },
    { id: 25, pais: "Argentina", ciudad: "Bariloche", nombre: "Cabaña en la Patagonia", desayuno: ["incluido"], privada: "privada", capacidad: 4, distancia: 5, precioPorNoche: 120, rutaImagen: "img10.jpg"  },
    { id: 26, pais: "Argentina", ciudad: "Cordoba", nombre: "Loft en el Centro Histórico", desayuno: ["excluido"], privada: "privada", capacidad: 2, distancia: 3, precioPorNoche: 80, rutaImagen: "img26.jpg"  },
    { id: 27, pais: "Italia", ciudad: "Florencia", nombre: "Apartamento en el Casco Histórico", desayuno: ["excluido"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 150, rutaImagen: "img11.jpg"  },
    { id: 28, pais: "Italia", ciudad: "Napoles", nombre: "Casa con Vista al Vesubio", desayuno: ["excluido"], privada: "privada", capacidad: 4, distancia: 3, precioPorNoche: 170, rutaImagen: "img24.jpg"  },
    { id: 29, pais: "Brasil", ciudad: "Salvador", nombre: "Pousada en el Pelourinho", desayuno: ["incluido"], privada: "compartida", capacidad: 2, distancia: 1, precioPorNoche: 85, rutaImagen: "img8.jpg"  },
    { id: 30, pais: "Brasil", ciudad: "Fortaleza", nombre: "Apartamento en la Playa", desayuno: ["incluido"], privada: "privada", capacidad: 2, distancia: 0.2, precioPorNoche: 120, rutaImagen: "img35.jpg"  },
    { id: 31, pais: "Australia", ciudad: "Sidney", nombre: "Apartamento en Bondi Beach", desayuno: ["excluido"], privada: "privada", capacidad: 2, distancia: 0.1, precioPorNoche: 190, rutaImagen: "img30.jpg"  },
    { id: 32, pais: "Australia", ciudad: "Brisbane", nombre: "Apartamento en el Río", desayuno: ["excluido"], privada: "privada", capacidad: 2, distancia: 0.5, precioPorNoche: 150, rutaImagen: "img32.jpg"  },
    { id: 33, pais: "Estados Unidos", ciudad: "San Francisco", nombre: "Apartamento con Vista al Golden Gate", desayuno: ["incluido"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 270, rutaImagen: "img31.jpg"  },
    { id: 34, pais: "Estados Unidos", ciudad: "Miami", nombre: "Casa en South Beach", desayuno: ["incluido"], privada: "privada", capacidad: 4, distancia: 0.2, precioPorNoche: 320, rutaImagen: "img13.jpg"  },
    { id: 35, pais: "Canada", ciudad: "Montreal", nombre: "Apartamento en el Viejo Montreal", desayuno: ["excluido"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 130, rutaImagen: "img3.jpg"  },
    { id: 36, pais: "Canada", ciudad: "Quebec", nombre: "Casa en el Viejo Québec", desayuno: ["incluido"], privada: "privada", capacidad: 4, distancia: 2, precioPorNoche: 140, rutaImagen: "img2.jpg"  },
    { id: 37, pais: "Chile", ciudad: "Valdivia", nombre: "Cabaña en el Bosque", desayuno: ["excluido"], privada: "privada", capacidad: 4, distancia: 5, precioPorNoche: 105, rutaImagen: "img10.jpg"  },
    { id: 38, pais: "Chile", ciudad: "Concepcion", nombre: "Departamento en el Centro", desayuno: ["incluido"], privada: "privada", capacidad: 2, distancia: 1, precioPorNoche: 80, rutaImagen: "img34.jpg"  }
];

fetch("./info.json")
    .then(response => response.json())
    .then(alojamientos => console.log(alojamientos))
    .catch(error => console.log(error))




document.addEventListener("DOMContentLoaded", () => {
    const paisesDisponibles = [...new Set(alojamientos.map(alojamiento => alojamiento.pais))];
    const selectPais = document.getElementById("pais");
    
    paisesDisponibles.forEach(pais => {
        const option = document.createElement("option");
        option.value = pais;
        option.textContent = pais;
        selectPais.appendChild(option);
    });

    const busquedaAlmacenada = JSON.parse(localStorage.getItem("resultadosBusqueda"));
    if (busquedaAlmacenada) {
        mostrarResultados(busquedaAlmacenada);
        mostrarSeccion("resultados");
    } else {
        mostrarSeccion("buscar");
    }

    document.getElementById("formularioBusqueda").addEventListener("submit", manejarBusqueda);
    document.getElementById("formularioPagoDatos").addEventListener("submit", manejarPago);
    document.getElementById("botonVolver").addEventListener("click", volverAResultados);
    document.getElementById("botonVolverPago").addEventListener("click", volverAResultados);

    document.querySelector("a[href=\"#inicio\"]").addEventListener("click", (event) => {
        event.preventDefault();
        mostrarSeccion("buscar");
        localStorage.clear(); 
    });

    const detallesAlmacenados = JSON.parse(localStorage.getItem("alojamientoSeleccionado"));
    if (detallesAlmacenados) {
        verDetalles(detallesAlmacenados.alojamiento.id);
    }
});

function manejarBusqueda(event) {
    event.preventDefault();

    const pais = document.getElementById("pais").value;
    const personas = parseInt(document.getElementById("personas").value, 10);
    const checkin = new Date(document.getElementById("entrada").value);
    const checkout = new Date(document.getElementById("salida").value);

    if (checkout <= checkin) {
        mostrarMensaje("error", "La fecha de salida debe ser después de la fecha de entrada. Por favor, ingrese fechas válidas.");
        return;
    }

    if (personas > 4) {
        mostrarMensaje("error", "Máximo 4 personas.");
        return;
    }

    const resultados = alojamientos.filter(alojamiento => {
        return alojamiento.pais === pais && alojamiento.capacidad >= personas;
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
            <p>Desayuno ${alojamiento.desayuno}</p>
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
        <p>${alojamientoSeleccionado.ciudad}, ${alojamientoSeleccionado.pais}</p>
        <img src=./img/${alojamientoSeleccionado.rutaImagen}>
        <div class=texto>
        <p>Vive una experiencia exclusiva con el servicio de primera clase en ${alojamientoSeleccionado.nombre}</p>
    <p>Situado en ${alojamientoSeleccionado.ciudad}, ${alojamientoSeleccionado.pais}, ${alojamientoSeleccionado.nombre} ofrece una experiencia inolvidable.</p>
    <p>Disponible para ${alojamientoSeleccionado.capacidad} personas, con habitaciones diseñadas y estudiadas hasta el mínimo detalle para garantizar el máximo confort: minibar, máquina de café espresso, bebidas y snacks secos, línea de baño exclusiva, pantuflas de lujo, kit de bienestar con albornoces, chanclas y bolsa, conexión a internet WiFi de alta velocidad, menú de almohadas y servicio de limpieza dos veces al día.</p>
    <p>Cada alojamiento también se caracteriza por su propia identidad: en ${alojamientoSeleccionado.nombre} encontrarás habitaciones con camas colgantes, habitaciones con jacuzzi privado panorámico, habitaciones con bañera exenta en el centro de la habitación, pero todas con un punto en común: el paisaje.</p>
    <p>No te pierdas las experiencias exclusivas para unas vacaciones realmente únicas! Reserva un desayuno flotante, un desayuno con alpacas, o una cena romántica.</p>
    <p>Las parejas aprecian mucho la ubicación: la han valorado con un 9,1 para un viaje en pareja.</p>
    <p>Este alojamiento se encuentra a solo ${alojamientoSeleccionado.distancia} kilómetros del centro de la ciudad y ofrece una vista impresionante del paisaje. Disfruta de las comodidades como ${alojamientoSeleccionado.desayuno.join(", ")} y relájate en este ambiente ${alojamientoSeleccionado.privada}. El precio por noche es de $${alojamientoSeleccionado.precioPorNoche}, lo que lo convierte en una opción excelente para tu próximo viaje.</p>
        <button onclick="seleccionarAlojamiento(${alojamientoSeleccionado.id})">Reservar</button>
        </div>
        `;

    mostrarSeccion("detalles");
}

function seleccionarAlojamiento(id) {
    const alojamientoSeleccionado = alojamientos.find(alojamiento => alojamiento.id === id);
    const fechasBusqueda = JSON.parse(localStorage.getItem("fechasBusqueda"));

    if (fechasBusqueda) {
        const checkin = new Date(fechasBusqueda.checkin);
        const checkout = new Date(fechasBusqueda.checkout);
        const diferencia = (checkout - checkin) / (1000 * 60 * 60 * 24);
        const precioTotal = diferencia * alojamientoSeleccionado.precioPorNoche;

        localStorage.setItem("alojamientoSeleccionado", JSON.stringify({
            alojamiento: alojamientoSeleccionado,
            fechas: fechasBusqueda
        }));

        document.getElementById("nombreAlojamiento").textContent = `${alojamientoSeleccionado.nombre}`;
        document.getElementById("fechasPago").textContent = `Check-in: ${checkin.toDateString()} - Check-out: ${checkout.toDateString()}`;
        document.getElementById("diferenciaDias").textContent = `Estadia de ${diferencia} dias`;
        document.getElementById("precioTotalPago").textContent = `Precio total: $${precioTotal}`;
        mostrarSeccion("formularioPago");
    }
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

    const diferencia = (checkout - checkin) / (1000 * 60 * 60 * 24);
    const precioTotal = diferencia * alojamientoSeleccionado.alojamiento.precioPorNoche;

    const confirmacion = document.getElementById("confirmacion");
    confirmacion.innerHTML = `
        <div class=textoConfirmacion>
        <p>¡Reserva confirmada!</p>
        <p>Detalles:</p>
        <p>Alojamiento: ${alojamientoSeleccionado.alojamiento.nombre}</p>
        <p>Check-in: ${checkin.toDateString()}</p>
        <p>Check-out: ${checkout.toDateString()}</p>
        <p>Precio total: $${precioTotal}</p>
        </div>
    `;

    localStorage.clear();
    mostrarSeccion("confirmacion");
}

function mostrarMensaje(tipo, mensaje) {
    const contenedorMensaje = document.getElementById("mensajeAlerta");

    if (!contenedorMensaje) {
        console.error("El elemento con id 'mensajeAlerta' no se encuentra en el HTML.");
        return;
    }

    contenedorMensaje.textContent = mensaje;

    if (tipo === "error") {
        contenedorMensaje.style.backgroundColor = "#f8d7da";
        contenedorMensaje.style.color = "#721c24";
        contenedorMensaje.style.borderColor = "#f5c6cb";
    } else {
        contenedorMensaje.style.backgroundColor = "#d4edda";
        contenedorMensaje.style.color = "#155724";
        contenedorMensaje.style.borderColor = "#c3e6cb";
    }

    contenedorMensaje.style.display = "block";
}

function mostrarSeccion(seccion) {
    document.getElementById("buscar").style.display = seccion === "buscar" ? "block" : "none";
    document.getElementById("resultados").style.display = seccion === "resultados" ? "block" : "none";
    document.getElementById("detalles").style.display = seccion === "detalles" ? "block" : "none";
    document.getElementById("formularioPago").style.display = seccion === "formularioPago" ? "block" : "none";
    document.getElementById("confirmacion").style.display = seccion === "confirmacion" ? "block" : "none";
}









