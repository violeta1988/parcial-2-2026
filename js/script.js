//cambiar de color a rojo cuando hacemos click sobre cada uno de los titutlos parrafos etc

let elementos = document.querySelectorAll("h1, h2, p, li");

for (let i = 0; i < elementos.length; i++) {

    elementos[i].addEventListener("click", function() {

        this.style.color = "red";

    });

}
