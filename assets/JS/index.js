const selectPartida = document.getElementById("selectPartida")
const selectDestino = document.getElementById("selectDestino")
const fechaPartida = document.getElementById("fechaPartida")
const fechaDestino = document.getElementById("fechaDestino")
const origen = document.getElementById("origen")
const destino = document.getElementById("destino")
const mostrarFechaOrigen = document.getElementById("mostrarFechaOrigen")
const mostrarFechaDestino = document.getElementById("mostrarFechaDestino")
const cartelEscala = document.getElementById("cartelEscala")

// let condicionMostrarDatos = selectPartida.value != 0 && selectDestino.value != 0 && fechaPartida.value != "" && fechaDestino.value != ""
// let condicionMostrarCartel = selectPartida.value == 1 && selectDestino.value == 4 || selectPartida.value == 2 && selectDestino.value == 5


function plasmarData() {
    origen.innerHTML = selectPartida.value
    destino.innerHTML = selectDestino.value
    mostrarFechaOrigen.innerHTML = fechaPartida.value
    mostrarFechaDestino.innerHTML = fechaDestino.value
}

function limpiarData() {
    origen.innerHTML = "Origen"
    destino.innerHTML = "Destino"
    mostrarFechaOrigen.innerHTML = ""
    mostrarFechaDestino.innerHTML = ""
}

function mostrar() {
selectPartida.value != 0 && selectDestino.value != 0 && fechaPartida.value != "" && fechaDestino.value != "" ? plasmarData() : limpiarData() 
selectPartida.value == "Chicago, USA" && selectDestino.value == "Venecia, IT" || selectPartida.value == "Boston, USA" && selectDestino.value == "Paris, FR" ? cartelEscala.setAttribute("class", "fw-bold position-absolute bottom-0 start-50 translate-middle-x") : cartelEscala.setAttribute("class", "d-none fw-bold position-absolute bottom-0 start-50 translate-middle-x")
}



selectDestino.addEventListener("change", mostrar)
selectPartida.addEventListener("change", mostrar)
fechaDestino.addEventListener("change", mostrar)
fechaPartida.addEventListener("change", mostrar)