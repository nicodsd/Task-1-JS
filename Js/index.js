
const contenedor = document.getElementById("eventos")
const eventos = data.eventos
const evento = eventos
let card = `` 

function agregarEventoAlHtml(evento) {
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

for (let eventoHTML of eventos) {
    card += agregarEventoAlHtml(eventoHTML)
}
contenedor.innerHTML = card;

console.log(agregarEventoAlHtml())

// image
// name
// description
// price
 