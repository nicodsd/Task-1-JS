const contenedor = document.getElementById("eventos")
const eventos = seleccionPorFecha(data.eventos);
let card = ``
// Funcion para crear los articles en el html
function agregarEventoHTML(evento) {
    // variable para crear nombres a las alts
    let alt = evento.name.replace(/\s/g,`-`)
    return `<article class="card card col-12 col-sm-2 col-md-4 col-lg-4 my-4" style="width: 15rem;">
                <img src="${evento.image}" class="card-img-top" alt="${alt}">
                <div class="card-body">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">${evento.description}</p>
                    <div class="d-flex flex-column fw-bolder">
                        <p>$${evento.price}</p>
                        <a href="../paginas/details.html" class="btn btn-danger">More Details!</a>
                    </div>
                </div>
            </article>` 
}
// Seleccion de las tarjetas por fechas
function seleccionPorFecha(arrayEventos) {
    const fechaFiltro = data.fechaActual
    const eventosFiltrados = []
    for (let evento of arrayEventos) {
        if (evento.date > fechaFiltro) { 
            eventosFiltrados.push(evento)
        }
    }
    return eventosFiltrados
}
// Loop para mostrar en pantalla
for (let eventoHTML of eventos) {
    card += agregarEventoHTML(eventoHTML)
}
contenedor.innerHTML = card; 