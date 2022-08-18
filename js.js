/* traido de html */
const formulario = document.getElementById('formulario')
const imgholder = document.getElementById('img')
formulario.addEventListener('submit', crearQR)

function crearQR(e) {
    /* prevenir Reload */
    e.preventDefault()
    /* que siempre agarre denuevo el input  */
    const tamaño1 = document.getElementById('tamaño1').value
    const link = document.getElementById('link').value
    /* limpiar la imagen cada nuevo pedido */
    imgholder.innerHTML = ''
    /* crea la imagen cada nuevo pedido */
    let imagen = document.createElement('img')
    console.log(e.target)
    console.log(tamaño1)
    imgholder.appendChild(imagen)
    fetch( `https://api.qrserver.com/v1/create-qr-code/?size=${tamaño1}x${tamaño1}&data=${link}` )
    .then((resp)=>imagen.src = resp.url)
}


// imagen.src = resp.url