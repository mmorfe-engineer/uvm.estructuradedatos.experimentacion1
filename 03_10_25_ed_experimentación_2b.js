// Pila para pasajeros (últimos en entrar, primeros en salir)
let pasajeros = [];
const capacidadMaxima = 10; // Simula asientos limitados

// Función para abordar (agregar pasajero al fondo)
function abordarPasajero() {
  const nombre = document.getElementById('nombre-pasajero').value;
  if (nombre && pasajeros.length < capacidadMaxima) {
    pasajeros.push(nombre);
    document.getElementById('nombre-pasajero').value = '';
    actualizarPasajeros();
    alert(`Pasajero "${nombre}" abordado. Asiento: ${pasajeros.length}`);
  } else if (pasajeros.length >= capacidadMaxima) {
    alert('Avión lleno. No se pueden abordar más pasajeros.');
  } else {
    alert('Ingrese un nombre válido.');
  }
}

// Función para evacuar (eliminar pasajero del fondo)
function evacuarPasajero() {
  if (pasajeros.length > 0) {
    const pasajero = pasajeros.pop();
    alert(`Evacuando a: ${pasajero} (asiento ${pasajeros.length + 1}).`);
    actualizarPasajeros();
  } else {
    alert('No hay pasajeros a bordo.');
  }
}

// Función para ver el próximo pasajero en evacuar (sin eliminar)
function verProximoEvacuado() {
  if (pasajeros.length > 0) {
    alert(`Próximo en evacuar: ${pasajeros[pasajeros.length - 1]} (asiento ${pasajeros.length}).`);
  } else {
    alert('No hay pasajeros a bordo.');
  }
}

// Función para actualizar la lista de pasajeros
function actualizarPasajeros() {
  const pasajerosElement = document.getElementById('pasajeros');
  pasajerosElement.innerHTML = '<strong>Pasajeros a bordo (orden de evacuación):</strong><br>' +
    pasajeros.map((pasajero, index) => `${index + 1}. ${pasajero}`).reverse().join('<br>');
}

// Función para limpiar la lista de pasajeros
function limpiarPasajeros() {
  pasajeros = [];
  actualizarPasajeros();
  alert('Lista de pasajeros limpiada.');
}
