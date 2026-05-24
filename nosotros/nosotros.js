const clientes = document.getElementById('clientes')
const productos = document.getElementById('productos')
const trabajadores = document.getElementById('trabajadores')

function animarContador(elemento, numeroFinal, duracion) {
    let numeroActual = 0
    let incremento = numeroFinal / (duracion / 10)

    let intervalo = setInterval(function() {
        
        numeroActual += incremento

        if (numeroActual >= numeroFinal) {
            numeroActual = numeroFinal
            clearInterval(intervalo)
        }

        elemento.textContent = Math.round(numeroActual)

    }, 10)
}

animarContador(clientes, 100, 2000)
animarContador(productos, 5000, 2000)
animarContador(trabajadores, 5, 2000)
