
const contadores = document.querySelectorAll('.contador')


contadores.forEach(function(contador) {

    const btnMenos = contador.querySelector('.btn-menos')
    const btnMas = contador.querySelector('.btn-mas')
    const cantidad = contador.querySelector('.cantidad')


    btnMas.addEventListener('click', function() {
        let numero = parseInt(cantidad.textContent)
        numero++
        cantidad.textContent = numero
    })


    btnMenos.addEventListener('click', function() {
        let numero = parseInt(cantidad.textContent)
        if (numero > 1) { 
            numero--
            cantidad.textContent = numero
        }
    })
})