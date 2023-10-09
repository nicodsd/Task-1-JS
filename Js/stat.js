const $tableOne = document.getElementById("table-1");
const $tableTwo = document.getElementById("table-2");
const $tableTree = document.getElementById("table-3");
let eventS;
let _date;

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((res) => {
    eventS = res.events;
    _date = res.currentDate;
    //    tableStatistics(eventS, $tableOne, _date)
    tableOne(eventS, $tableTwo, _date);
    tableTwo(eventS, $tableTree, _date);
    console.log();
  })
  .catch((err) => console.log(err));

// ☰☰☰☰☰☰☰☰☰ funciones ☰☰☰☰☰☰☰☰☰☰ //
// funcion tabla 1
// funcion evento de mayor % asistencia

// funcion evento de menor % asistencia

// funcion evento de mayor capacidad

// funcion tabla upcoming
function tableOne(arrayEvents, container, date) {
  let e1 = eventS;
  const postDate = new Date(eventS.date);
  const eventsUpcoming = e1.filter((event) => event.date > date);
  const categorys1 = new Set(eventsUpcoming.map((event) => event.category));
  categorys1.forEach((category) => {
    const revenues = revenuesUpcoming(category, eventsUpcoming);
    container.innerHTML += `
      <tr>
        <td>${category}</td>
        <td>${revenues}</td>
        <td>$</td>
      </tr>`;
  });

}

function revenuesUpcoming(categories, events) {
  // agarrar de los upcoming quedarme solo con las categorias que llegan
  // llegan los eventos de las categorias y se calculan los revenues, sumo todos los eventos
  const fn2 = (events) => events.price;
  let cat = categories
  let eves = events.filter(fn2).map(fn2);
  let res = eves.reduce( (acc, item) => {
    return acc 
  })
  console.log(eves)
  if (cat === events.category){ 
   
  }
  return ;
}
function percentageUpcoming() {}

// funcion tabla past events
function tableTwo(eventS, container, date) {
  const postDate = new Date(eventS.date);
  const categoryS = new Set(
    eventS.filter((event) => event.date < date).map((event) => event.category)
  );
  categoryS.forEach((category) => {
    container.innerHTML += `
      <tr>
        <td>${category}</td>
        <td>$</td>
        <td>$</td>
      </tr>`;
  });
}

// Template tabla

/*
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
*/
