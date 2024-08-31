document.addEventListener("DOMContentLoaded", () => {
    fetch("./info.json")
        .then(response => response.json())
        .then(alojamientos => {
            inicializarAplicacion(alojamientos);
        })
        .catch(error => console.log("Error al cargar los datos:", error));
});

function inicializarAplicacion(alojamientos) {
    inicializarFormulario(alojamientos);
    manejarEventos(alojamientos);
}

function inicializarFormulario(alojamientos) {
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

    const detallesAlmacenados = JSON.parse(localStorage.getItem("alojamientoSeleccionado"));
    if (detallesAlmacenados) {
        verDetalles(detallesAlmacenados.alojamiento.id, alojamientos);
    }
}

function manejarEventos(alojamientos) {
    document.getElementById("formularioBusqueda").addEventListener("submit", (event) => manejarBusqueda(event, alojamientos));
    document.getElementById("formularioPagoDatos").addEventListener("submit", manejarPago);
    document.getElementById("botonVolver").addEventListener("click", volverAResultados);
    document.getElementById("botonVolverPago").addEventListener("click", volverAResultados);

    document.querySelector("a[href=\"#inicio\"]").addEventListener("click", (event) => {
        event.preventDefault();
        mostrarSeccion("buscar");
        localStorage.clear();
    });

    document.getElementById("contenedorResultados").addEventListener("click", (event) => {
        if (event.target && event.target.matches("button.verMas")) {
            const id = parseInt(event.target.getAttribute("data-id"), 10);
            verDetalles(id, alojamientos);
        }
    });
}

function manejarBusqueda(event, alojamientos) {
    event.preventDefault();

    const pais = document.getElementById("pais").value;
    const personas = parseInt(document.getElementById("personas").value, 10);
    const checkin = luxon.DateTime.fromISO(document.getElementById("entrada").value);
    const checkout = luxon.DateTime.fromISO(document.getElementById("salida").value);

    if (checkout <= checkin) {
        mostrarMensaje("error", "La fecha de salida debe ser después de la fecha de entrada. Por favor, ingrese fechas válidas.");
        return;
    }

    if (personas > 4) {
        mostrarMensaje("error", "Máximo 4 personas.");
        return;
    }

    const resultados = alojamientos.filter(alojamiento => alojamiento.pais === pais && alojamiento.capacidad >= personas);

    localStorage.setItem("resultadosBusqueda", JSON.stringify(resultados));
    localStorage.setItem("fechasBusqueda", JSON.stringify({ checkin: checkin.toISO(), checkout: checkout.toISO() }));

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
        <img src="./img/${alojamiento.rutaImagen}" alt="${alojamiento.nombre}">
        <div class="texto">
            <h3>${alojamiento.nombre}</h3>
            <p>${alojamiento.ciudad}</p>
            <p>Desayuno ${alojamiento.desayuno}</p>
            <p>Precio por noche: $${alojamiento.precioPorNoche}</p>
            <button class="verMas" data-id="${alojamiento.id}">Ver más</button>
        </div>
    `;
    return div;
}

function verDetalles(id, alojamientos) {
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
        <img src="./img/${alojamientoSeleccionado.rutaImagen}" alt="${alojamientoSeleccionado.nombre}">
        <div class="texto">
            <p>Vive una experiencia exclusiva con el servicio de primera clase en ${alojamientoSeleccionado.nombre}</p>
            <button onclick="seleccionarAlojamiento(${alojamientoSeleccionado.id})">Reservar</button>
        </div>
    `;

    mostrarSeccion("detalles");
}

function seleccionarAlojamiento(id) {
    const alojamientoSeleccionado = JSON.parse(localStorage.getItem("alojamientoSeleccionado")).alojamiento;
    const fechasBusqueda = JSON.parse(localStorage.getItem("fechasBusqueda"));

    if (fechasBusqueda) {
        const checkin = luxon.DateTime.fromISO(fechasBusqueda.checkin);
        const checkout = luxon.DateTime.fromISO(fechasBusqueda.checkout);
        const diferencia = checkout.diff(checkin, 'days').days;
        const precioTotal = diferencia * alojamientoSeleccionado.precioPorNoche;

        document.getElementById("nombreAlojamiento").textContent = `${alojamientoSeleccionado.nombre}`;
        document.getElementById("fechasPago").textContent = `Check-in: ${checkin.toLocaleString(luxon.DateTime.DATE_MED)} - Check-out: ${checkout.toLocaleString(luxon.DateTime.DATE_MED)}`;
        document.getElementById("diferenciaDias").textContent = `Estadia de ${diferencia} días`;
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
    const checkin = luxon.DateTime.fromISO(fechas.checkin);
    const checkout = luxon.DateTime.fromISO(fechas.checkout);

    const diferencia = checkout.diff(checkin, 'days').days;
    const precioTotal = diferencia * alojamientoSeleccionado.alojamiento.precioPorNoche;

    Swal.fire({
        title: '¡Reserva Confirmada!',
        text: `Detalles de la reserva:\nAlojamiento: ${alojamientoSeleccionado.alojamiento.nombre}\nCheck-in: ${checkin.toLocaleString(luxon.DateTime.DATE_MED)}\nCheck-out: ${checkout.toLocaleString(luxon.DateTime.DATE_MED)}\nPrecio total: $${precioTotal}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    }).then(() => {
        localStorage.clear();
        mostrarSeccion("confirmacion");
    });
}

function mostrarMensaje(tipo, mensaje) {
    Swal.fire({
        title: tipo === "error" ? 'Error' : 'Éxito',
        text: mensaje,
        icon: tipo === "error" ? 'error' : 'success',
        confirmButtonText: 'Aceptar'
    });
}

function mostrarSeccion(seccion) {
    document.getElementById("buscar").style.display = seccion === "buscar" ? "block" : "none";
    document.getElementById("resultados").style.display = seccion === "resultados" ? "block" : "none";
    document.getElementById("detalles").style.display = seccion === "detalles" ? "block" : "none";
    document.getElementById("formularioPago").style.display = seccion === "formularioPago" ? "block" : "none";
    document.getElementById("confirmacion").style.display = seccion === "confirmacion" ? "block" : "none";
}









