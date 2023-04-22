let data = [];

var EVENTS_API = "https://rickandmortyapi.com/api/character/";

async function getDataEvents() {
  const response = await fetch(`${EVENTS_API}`);
  
  const json = await response.json();
  
  const data = json.results;
  
  return data
}

async function displayCardUpcoming() {
 let datos= await getDataEvents();
 console.log(datos)
 var templateCardUpcoming = "";

 datos.forEach(evento => {
     templateCardUpcoming += `<div class=" card-index card card-body ">
      <img src="${evento.image}" class="card-img-top" alt="feriaComidas">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text">${evento.status}</p>
      <p class="card-text">Date: ${evento.species}</p>
    </div>`;
  });
  document.getElementById('Card').innerHTML = templateCardUpcoming
}
displayCardUpcoming()