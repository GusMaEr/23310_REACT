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
     templateCardUpcoming += 
     `<div style="width: 30%; border: 4px solid;  padding: 8px" >
          <img src="${evento.image}" alt="imagen" width="40%" border="4px solid #0443"  >
          <div style=" width:45%; border:4px solid; padding:8px; margin-left:50%;" >
              <h5>Nombre: ${evento.name}</h5>
              <p>Condicion:  ${evento.status}</p>
              <p>Specie: ${evento.species}</p>
              <p>Genero: ${evento.gender}</p>
              <p>Origen: ${evento.origin.name}</p>
              <p>Ubicacion: ${evento.location.name}</p>
           </div>

      </div>`;
    });
  document.getElementById('Card').innerHTML = templateCardUpcoming
}
displayCardUpcoming()