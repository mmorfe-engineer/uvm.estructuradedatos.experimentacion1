// Cola para los pedidos del restaurante
let colaPedidos = [];

// Función para agregar un pedido a la cola
function agregarPedido() {
  const pedido = document.getElementById('pedido').value;
  if (pedido) {
    colaPedidos.push(pedido);
    document.getElementById('pedido').value = '';
    actualizarColaPedidos();
    alert(`Pedido "${pedido}" agregado a la cola.`);
  } else {
    alert('Ingrese un pedido válido.');
  }
}

// Función para atender el siguiente pedido (eliminar de la cola)
function atenderPedido() {
  if (colaPedidos.length > 0) {
    const pedido = colaPedidos.shift();
    alert(`Atendiendo pedido: ${pedido}`);
    actualizarColaPedidos();
  } else {
    alert('No hay pedidos en la cola.');
  }
}

// Función para ver el próximo pedido (sin eliminar)
function verProximoPedido() {
  if (colaPedidos.length > 0) {
    alert(`Próximo pedido: ${colaPedidos[0]}`);
  } else {
    alert('No hay pedidos en la cola.');
  }
}

// Función para actualizar la visualización de la cola de pedidos
function actualizarColaPedidos() {
  const colaElement = document.getElementById('cola-pedidos');
  colaElement.innerHTML = '<strong>Cola de Pedidos:</strong><br>' +
    colaPedidos.map((pedido, index) => `${index + 1}. ${pedido}`).join('<br>');
}

// Función para limpiar la cola de pedidos
function limpiarColaPedidos() {
  colaPedidos = [];
  actualizarColaPedidos();
  alert('Cola de pedidos limpiada.');
}
