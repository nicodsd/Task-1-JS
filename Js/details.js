let urlParams = location.search;
let params = new URLSearchParams (urlParams);

//get
let id = params.get('id');

const eventoFiltrado = data.eventos.find(evento => evento.name === id);

//function print event
function pintarEvento(eventoFiltrado){
let detailEvent = ""
detailEvent = 
                `<div class="row d-flex align-items-center">
                    <div class="col-12 col-md-7 d-flex justify-content-center">
                        <img id="shadow2" src="${eventoFiltrado.image}" class="col-12 col-md-10 h-58 rounded-3 mb-4 mb-md-1" alt="${eventoFiltrado.name}">
                    </div>
                    <div class="card-bod col-12 col-md-5 p-4 rounded-3 bg-white" id="shadow">
                        <div class="card-body">
                            <h3 class="card-title text-start mb-3">${eventoFiltrado.name}</h3>
                            <p class="card-text"><strong>Date:</strong> ${eventoFiltrado.date}</p>
                            <p class="card-text"><strong>Description:</strong> ${eventoFiltrado.description}</p>
                            <p class="card-text"><strong>Category:</strong> ${eventoFiltrado.category}</p>
                            <p class="card-text"><strong>Place:</strong> ${eventoFiltrado.place}</p>
                            <p class="card-text"><strong>Capacity:</strong> ${eventoFiltrado.capacity}</p>
                            <p class="card-text"><strong>Assistance:</strong> ${eventoFiltrado.assistance}</p>
                            <p class="card-text"><strong>Price:</strong> ${eventoFiltrado.price}</p>
                        </div>
                    </div>
                </div>`
detailsContainer.innerHTML = detailEvent
}

pintarEvento(eventoFiltrado);







