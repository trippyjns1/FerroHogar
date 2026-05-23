// Selecciona todos los elementos que quieres animar
const elementosAnimar = document.querySelectorAll(
    '.tarjeta-producto, .tarjeta-razon, .tarjeta-marca, .mv-card, .valor, .tarjeta-cliente, .tarjeta-proyecto, .paso, .item'
)

elementosAnimar.forEach(function(elemento) {
    elemento.style.opacity = '0'
    elemento.style.transform = 'translateY(30px)'
    elemento.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
})

function estaEnPantalla(elemento) {
    const posicion = elemento.getBoundingClientRect()
    return posicion.top < window.innerHeight - 100
}


function animarElementos() {
    elementosAnimar.forEach(function(elemento) {
        if (estaEnPantalla(elemento)) {
            elemento.style.opacity = '1'
            elemento.style.transform = 'translateY(0)'
        }
    })
}


animarElementos()


window.addEventListener('scroll', animarElementos)