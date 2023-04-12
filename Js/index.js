const contenedor = document.getElementById("eventos");
const eventos = data.eventos;
const evento = eventos;
let impresionPlantilla = eventos.map(agregarEventoAlHtml).join(' ');

function agregarEventoAlHtml(evento) {
  let alt = evento.name.replace(/\s/g, `-`);
  return `<article id="article-card" class="card col-6 col-sm-4 col-md-4 col-lg-2">
                <div id="container-img-card">
                    <img src="${evento.image}" class="card-img-top object-fit-cover" id="image-cards" alt="${alt}">
                </div>
                <div class="container py-3">
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text">${evento.description}</p>
                </div>
                <div class="card-body d-flex flex-column justify-content-end">
                    <div class="d-flex flex-column fw-bolder text-start fs-4">
                        <p>$${evento.price}</p>
                        <a href="../paginas/details.html?id=${evento.name}" class="btn btn-danger col-12">More Details!</a>
                    </div>
                </div>
            </article>`;
}

contenedor.innerHTML = impresionPlantilla;

// variables filtro por categoria
const contenedorCategorias = document.getElementById("categorys");
const categorias = data.eventos;
let plantillaCategoria = "";
let idCategoria = 1; 
const categoriasNoRepetidas = new Set();
categorias.forEach((evento) => {
  if (!categoriasNoRepetidas.has(evento.category)) {
    // si la categoría no está en el Set, agregarla y añadir su plantilla
    categoriasNoRepetidas.add(evento.category);
    plantillaCategoria += `<div class="form">
                                <input class="checkbox-category" onChange="filtrarPorCategorias()" id="${idCategoria}" checked: "" name="${evento.name}" type="checkbox" value="${evento.category}">
                                <label class="form-check-label px-2" for="categoria-${idCategoria}">${evento.category}</label>
                            </div>`;
    idCategoria++; // aumenta el valor de idCategoria
  }
});


// función filtro por categoria
function filtrarPorCategorias() {
  const checkboxesCategorys = document.getElementsByClassName("checkbox-category");
  const categoriasSeleccionadas = [];
  for (let checkbox of checkboxesCategorys) {
    if (checkbox.checked) {
      categoriasSeleccionadas.push(checkbox.value);
    }
  }
  const textoBuscado = search.value.toLowerCase(); // se agrega el valor del search
  if (categoriasSeleccionadas.length === 0 && textoBuscado === "") {
    // si no hay categorías seleccionadas y el search está vacío, mostrar todos los eventos
    contenedor.innerHTML = impresionPlantilla;
  } else {
    const eventosFiltradosPorCategoria = categoriasSeleccionadas.length === 0 ? eventos : eventos.filter((evento) =>
            categoriasSeleccionadas.includes(evento.category));
    // si no hay categorías seleccionadas muestra todos los eventos de lo contrario filtrar los eventos por categoría seleccionada.
    const eventosFiltradosPorTexto = eventosFiltradosPorCategoria.filter((evento) =>
        evento.name.toLowerCase().includes(textoBuscado) ||
        evento.description.toLowerCase().includes(textoBuscado));
    // filtrar los eventos filtrados por categoría por el texto buscado
    const plantillaFiltrada = eventosFiltradosPorTexto.map(agregarEventoAlHtml).join(" ");
    contenedor.innerHTML = plantillaFiltrada;
    if (eventosFiltradosPorTexto.length === 0){contenedor.innerHTML = "<p>You can't find what you're looking for.</p>";
    }
  }
}

// mostrar en la pantalla
contenedorCategorias.innerHTML = plantillaCategoria;


// variable filtro por search
const search = document.getElementById("search");
search.addEventListener("input", filtrarPorTexto);

// funcion filtrar por search
function filtrarPorTexto() {
  const textoBuscado = search.value.toLowerCase();
  const checkboxesCategorias = document.getElementsByClassName("checkbox-category");
  const categoriasSeleccionadas = [];
  for (let checkbox of checkboxesCategorias) {
    if (checkbox.checked) {
      categoriasSeleccionadas.push(checkbox.value);
    }
  }
  const eventosFiltrados = evento.filter(
    (evento) =>
      (evento.name.toLowerCase().includes(textoBuscado) ||
        evento.description.toLowerCase().includes(textoBuscado)) &&
      (categoriasSeleccionadas.length === 0 ||
        categoriasSeleccionadas.includes(evento.category))
  );
  const plantillaFiltrada = eventosFiltrados.map(agregarEventoAlHtml).join(" ");
  contenedor.innerHTML = plantillaFiltrada;
  if (eventosFiltrados.length === 0) {
    contenedor.innerHTML =
      "<p>You can't find what you're looking for.</p>";
  }
}
