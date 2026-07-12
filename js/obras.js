



// Declaramos la lista de datos curiosos (Array)
const listaCuriosidades = [
    "Casey Reas es co-creador de Processing, un lenguaje de programación visual.",
    "Junto a Ben Fry desarrolló Processing en el MIT Media Lab en 2001.",
    "Su obra se basa en algoritmos que generan imágenes en constante cambio.",
    "Está influenciado por las instrucciones visuales de Sol LeWitt.",
    "Ha expuesto en museos como el MoMA y el Centre Pompidou.",
    "Sus obras en tiempo real nunca se ven exactamente igual dos veces.",
    "Publicó el libro fundamental 'Processing: A Programming Handbook'.",
    "Es profesor en la Universidad de California (UCLA).",
    "Usa reglas simples para producir resultados complejos y emergentes.",
    "Ha realizado impresiones generativas de gran formato únicas."
];

// Utilice estrutura como si fuera un dado
// Creamos una variable global
let posicionActual = 0;

// Capturamos los elementos del DOM
const botonDato = document.getElementById("btn-nuevo-dato");
const visorTexto = document.getElementById("texto-dato");

// Evento para mostrar el siguiente dato 
botonDato.addEventListener("click", function() {
    
// Mostrar el dato que corresponde a la posición actual
visorTexto.innerText = listaCuriosidades[posicionActual];

// Incrementamos la posición para el próximo clic - Utilizo let +1 para llevar la cuenta del "giro" de los datos
posicionActual = posicionActual + 1;

// Estructura Condicional para reiniciar el ciclo 
// Si la posición llega al final del array (10), vuelve a 0
if (posicionActual == 10) {
posicionActual = 0;
}

});
