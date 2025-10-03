// Cola para la lista de reproducción
let colaReproduccion = [];

// Función para agregar una canción a la cola
function agregarCancion() {
  const cancion = document.getElementById('cancion').value;
  if (cancion) {
    colaReproduccion.push(cancion);
    document.getElementById('cancion').value = '';
    actualizarColaReproduccion();
    alert(`Canción "${cancion}" agregada a la cola.`);
  } else {
    alert('Ingrese un nombre de canción válido.');
  }
}

// Función para reproducir la siguiente canción (eliminar de la cola)
function reproducirSiguiente() {
  if (colaReproduccion.length > 0) {
    const cancion = colaReproduccion.shift();
    alert(`Reproduciendo: ${cancion}`);
    actualizarColaReproduccion();
  } else {
    alert('No hay canciones en la cola.');
  }
}

// Función para ver la próxima canción (sin eliminar)
function verProximaCancion() {
  if (colaReproduccion.length > 0) {
    alert(`Próxima canción: ${colaReproduccion[0]}`);
  } else {
    alert('No hay canciones en la cola.');
  }
}

// Función para actualizar la visualización de la cola
function actualizarColaReproduccion() {
  const colaElement = document.getElementById('cola-reproduccion');
  colaElement.innerHTML = '<strong>Cola de Reproducción:</strong><br>' +
    colaReproduccion.map((cancion, index) => `${index + 1}. ${cancion}`).join('<br>');
}

// Función para limpiar la cola de reproducción
function limpiarColaReproduccion() {
  colaReproduccion = [];
  actualizarColaReproduccion();
  alert('Cola de reproducción limpiada.');
}
