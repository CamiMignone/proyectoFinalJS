const alojamientos = [{
        "id": 1,
        "pais": "España",
        "ciudad": "Barcelona",
        "nombre/descripcion": "Apartamento en el Eixample",
        "comodidades": ["pileta", "cocina", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 4,
        "distancia": 2
    },
    {
        "id": 2,
        "pais": "España",
        "ciudad": "Madrid",
        "nombre/descripcion": "Ático en el Centro",
        "comodidades": ["cocina", "jacuzzi", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 4,
        "distancia": 0.5
    },
    {
        "id": 3,
        "pais": "México",
        "ciudad": "Ciudad de México",
        "nombre/descripcion": "Casa Colonial en Coyoacán",
        "comodidades": ["cocina", "jacuzzi", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 4,
        "distancia": 8
    },
    {
        "id": 4,
        "pais": "México",
        "ciudad": "Cancún",
        "nombre/descripcion": "Resort frente a la playa",
        "comodidades": ["pileta", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 2,
        "distancia": 0.2
    },
    {
        "id": 5,
        "pais": "Argentina",
        "ciudad": "Buenos Aires",
        "nombre/descripcion": "Estudio Moderno en Palermo",
        "comodidades": ["pileta", "cocina"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 2,
        "distancia": 4
    },
    {
        "id": 6,
        "pais": "Argentina",
        "ciudad": "Mendoza",
        "nombre/descripcion": "Cabaña en los Andes",
        "comodidades": ["vista al paisaje", "cocina"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 4,
        "distancia": 10
    },
    {
        "id": 7,
        "pais": "Italia",
        "ciudad": "Roma",
        "nombre/descripcion": "Villa Romántica en el Centro",
        "comodidades": ["jacuzzi", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 2,
        "distancia": 1
    },
    {
        "id": 8,
        "pais": "Italia",
        "ciudad": "Venecia",
        "nombre/descripcion": "Apartamento en el Gran Canal",
        "comodidades": ["cocina", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 2,
        "distancia": 1
    },
    {
        "id": 9,
        "pais": "Brasil",
        "ciudad": "Río de Janeiro",
        "nombre/descripcion": "Departamento en Copacabana",
        "comodidades": ["pileta", "cocina"],
        "privada/compartida": "compartida",
        "cantidad de personas aceptadas": 4,
        "distancia": 0.3
    },
    {
        "id": 10,
        "pais": "Brasil",
        "ciudad": "Sao Paulo",
        "nombre/descripcion": "Loft en el Centro",
        "comodidades": ["cocina", "vista al paisaje"],
        "privada/compartida": "compartida",
        "cantidad de personas aceptadas": 2,
        "distancia": 0.5
    },
    {
        "id": 11,
        "pais": "Japón",
        "ciudad": "Tokio",
        "nombre/descripcion": "Apartamento Futurista en Shibuya",
        "comodidades": ["cocina", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 2,
        "distancia": 2
    },
    {
        "id": 12,
        "pais": "Japón",
        "ciudad": "Kyoto",
        "nombre/descripcion": "Ryokan Tradicional",
        "comodidades": ["jacuzzi", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 4,
        "distancia": 1
    },
    {
        "id": 13,
        "pais": "Australia",
        "ciudad": "Sídney",
        "nombre/descripcion": "Penthouse con Vista al Puerto",
        "comodidades": ["pileta", "cocina", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 4,
        "distancia": 0.5
    },
    {
        "id": 14,
        "pais": "Australia",
        "ciudad": "Melbourne",
        "nombre/descripcion": "Apartamento en el Centro",
        "comodidades": ["cocina", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 2,
        "distancia": 0.3
    },
    {
        "id": 15,
        "pais": "Estados Unidos",
        "ciudad": "Nueva York",
        "nombre/descripcion": "Estudio en Manhattan",
        "comodidades": ["cocina", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 2,
        "distancia": 1
    },
    {
        "id": 16,
        "pais": "Estados Unidos",
        "ciudad": "Los Ángeles",
        "nombre/descripcion": "Casa en Hollywood",
        "comodidades": ["pileta", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 4,
        "distancia": 5
    },
    {
        "id": 17,
        "pais": "Canadá",
        "ciudad": "Toronto",
        "nombre/descripcion": "Apartamento en el Centro",
        "comodidades": ["cocina", "jacuzzi"],
        "privada/compartida": "compartida",
        "cantidad de personas aceptadas": 4,
        "distancia": 1
    },
    {
        "id": 18,
        "pais": "Canadá",
        "ciudad": "Vancouver",
        "nombre/descripcion": "Casa en el Bosque",
        "comodidades": ["jacuzzi", "vista al paisaje"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 2,
        "distancia": 10
    },
    {
        "id": 19,
        "pais": "Chile",
        "ciudad": "Santiago",
        "nombre/descripcion": "Departamento en Providencia",
        "comodidades": ["pileta", "cocina"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 2,
        "distancia": 3
    },
    {
        "id": 20,
        "pais": "Chile",
        "ciudad": "Valparaíso",
        "nombre/descripcion": "Casa en los Cerros",
        "comodidades": ["vista al paisaje", "cocina"],
        "privada/compartida": "privada",
        "cantidad de personas aceptadas": 4,
        "distancia": 2
    }]
