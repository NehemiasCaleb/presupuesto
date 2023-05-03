let presupuesto
class Presupuesto {
    constructor(presupuesto) {
        this.gastos = []
    }
}


function preguntarPresupuesto() {
    const presupuestoUsuario = prompt("Ingrese el presupuesto")



    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {

        window.location.reload()

    }
    presupuesto = new Presupuesto(presupuestoUsuario)

    const gastosInput = document.querySelector('#gastos')
const cantidadInput = document.querySelector('#cantidad')

const totalInput = document.querySelector('#total')
const restanteInput = document.querySelector('#restante')


const formulario = document.querySelector('#agregar-cantidad')
formulario.addEventListener('submit', agregar-cantidad)

    eventListener()

function eventListener(){
    gastosInput.addEventListener('change', datos)
    cantidadInput.addEventListener('change', datos)
    totalInput.addEventListener('change', datos)
    restanteInput.addEventListener('change', datos)
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto)
}

const cantidadObject = {
    gastos: '',
    cantidad: '',
}

function datos(e){
    cantidadObject[e.target.name] = e.target.value;
}


class cantidad{
    constructor(){
        this.cantidad = []
    }
    agregarCantidad(cantidad){
        this.cantidad = [...this.cantidad, cantidad]
    }
    eliminarCantidad(id){
        this.cantidad = this.cantidad.filter(cantidad => cantidad.id !== id)
    }
}

class UI {
    imprimirTodo(mensje, tipo){
        const divAlert = document.createElement('div')
        divAlert.classList.add('text-center', 'alert', 'd.block', 'col-12')
    
        if (tipo === 'error'){
            divAlert.classList.add('lert-danger')
        } else {
            divAlert.classList.add('alert.success')
        }

        divAlert.textContent = mensje
        document.querySelector('#contenido').insertBefore(divAlert, document.querySelector('.agregar-cantidad'))
    
    }


imprimirCantidades({ cantidad }){
    this.limpiarHTML()

    cantidad.forEach(cantidad => {


        const divCantidad = document.createElement('div')
        divCantidad.classList.add('cantidad')
        divCantidad.dataset.id = id

        const gastosParrafo = document.createElement(div)
        gastosParrafo.classList.add('card-title', 'font-weight-bolder')
        gastosParrafo.innerHTML = `${gastos}`

        const cantidadParrafo = document.createElement('h2')
        cantidadParrafo.innerHTML = `<span class='' font-weight-bolder>Cantidad</span> ${cantidad}`

        const btnEliminar = document.createElement('button')
        btnEliminar.onclick = () => eliminarCita(id) //darle funcion al boton de EliminarCita
        btnEliminar.classList.add('btn', 'btn-danger', 'mr-2')
        btnEliminar.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/> </svg> '
    });
}
limpiarHTML(){
    while(contenedoCantidades.firstChild){
        contenedoCantidades.removeChild(contenedoCantidades)
    }
}
}

}





