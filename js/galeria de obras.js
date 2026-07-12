const obras = [
    { nombre: "Ruta 09", anio: 2001, img: "img/ruta 09 año 2001.jpg" },
    { nombre: "MicroImage A-05", anio: 2002, img: "img/MicroImage_A-05 año 2002.jpeg" },
    { nombre: "AYFABTU 2K", anio: 2015, img: "img/AYFABTU_2K- año 2015.jpeg" },
    { nombre: "IA Anarquia", anio: 2021, img: "img/ia anarquia2021.jpg" },
    { nombre: "Rie", anio: 2025, img: "img/rie-zumbido en los oidos2025.jpg" }
];

const contenedor = document.getElementById("contenedor-obras");
//capturo el contenedor de html


//Función para mostrar las obras - Estructura Repetitiva //
function cargarGaleria() {
    let contenido = "";
    for (let i = 0; i < obras.length; i++) {
        contenido += `
            <article class="obra">
                <img src="${obras[i].img}" alt="${obras[i].nombre}">
                <h3>${obras[i].nombre} - ${obras[i].anio}</h3>
            </article>
        `;
    }
    contenedor.innerHTML = contenido;
}

// Ejecuta la fincion
cargarGaleria();



// Capturamos el botón y el contenedor de las obras
const botonDiseno = document.getElementById("btn-diseno");
const contenedorGaleria = document.getElementById("contenedor-obras");

// Agrego el evento
botonDiseno.addEventListener("click", function() {
    
    // classList.toggle agrega la clase si no está, y la quita si ya está
    contenedorGaleria.classList.toggle("galeria-real");

    // Cambiamos el texto del botón para guiar al usuario usando if y else
    if (contenedorGaleria.classList.contains("galeria-real")) {
        botonDiseno.innerText = "Ver obras en Cuadrícula";
    } else {
        botonDiseno.innerText = "Ver obras en Tamaños Grandes";
    }
});