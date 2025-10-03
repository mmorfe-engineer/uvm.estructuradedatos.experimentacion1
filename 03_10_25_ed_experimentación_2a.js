// Pila para el historial de navegación
let historial = [];

// Función para agregar una página al historial
function visitarPagina() {
  const url = document.getElementById('url').value;
  if (url) {
    historial.push(url);
    document.getElementById('url').value = '';
    actualizarHistorial();
    alert(`Página "${url}" agregada al historial.`);
  } else {
    alert('Ingrese una URL válida.');
  }
}

// Función para retroceder (eliminar última página)
function retroceder() {
  if (historial.length > 0) {
    const pagina = historial.pop();
    alert(`Retrocediendo a: ${pagina}`);
    actualizarHistorial();
  } else {
    alert('No hay páginas en el historial.');
  }
}

// Función para ver la página actual (sin eliminar)
function verPaginaActual() {
  if (historial.length > 0) {
    alert(`Página actual: ${historial[historial.length - 1]}`);
  } else {
    alert('No hay páginas en el historial.');
  }
}

// Función para actualizar la visualización del historial
function actualizarHistorial() {
  const historialElement = document.getElementById('historial');
  historialElement.innerHTML = '<strong>Historial:</strong><br>' +
    historial.map((pagina, index) => `${index + 1}. ${pagina}`).join('<br>');
}

// Función para limpiar el historial
function limpiarHistorial() {
  historial = [];
  actualizarHistorial();
  alert('Historial limpiado.');
}
