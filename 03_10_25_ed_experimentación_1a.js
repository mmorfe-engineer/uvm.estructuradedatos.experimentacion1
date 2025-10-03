// Datos globales
let proveedores = [];
let productos = [];
let compras = [];

// Función para registrar proveedores
function registrarProveedor() {
  const razonSocial = document.getElementById('razon-social').value;
  const rif = document.getElementById('rif').value;
  const categorias = document.getElementById('categorias').value.split(',');
  const estatus = document.getElementById('estatus').value.toLowerCase() === 'activo';
  proveedores.push({ razonSocial, rif, categorias, estatus });
  alert('Proveedor registrado con éxito.');
  limpiarFormulario('proveedor-form');
}

// Función para registrar productos
function registrarProducto() {
  const nombre = document.getElementById('nombre-producto').value;
  const precio = parseFloat(document.getElementById('precio').value);
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const categoria = document.getElementById('categoria-producto').value;
  productos.push({ nombre, precio, cantidad, categoria });
  alert('Producto registrado con éxito.');
  limpiarFormulario('producto-form');
}

// Función para registrar compras
function registrarCompra() {
  const rifProveedor = document.getElementById('rif-proveedor').value;
  const nombreProducto = document.getElementById('nombre-producto-compra').value;
  const cantidadComprada = parseInt(document.getElementById('cantidad-compra').value);
  const fecha = new Date().toLocaleDateString();
  compras.push({ rifProveedor, nombreProducto, cantidadComprada, fecha });
  const producto = productos.find(p => p.nombre === nombreProducto);
  if (producto) producto.cantidad += cantidadComprada;
  alert('Compra registrada con éxito.');
  limpiarFormulario('compra-form');
}

// Función para consultar inventario
function consultarInventario() {
  const consulta = prompt("Consultar por:\n1. Categoría\n2. Proveedor\nSeleccione (1 o 2):");
  let resultados = "";
  if (consulta === "1") {
    const categoria = prompt("Ingrese categoría:");
    const productosFiltrados = productos.filter(p => p.categoria === categoria);
    resultados = "Productos en categoría:\n" + JSON.stringify(productosFiltrados, null, 2);
  } else if (consulta === "2") {
    const rif = prompt("Ingrese RIF del proveedor:");
    const comprasFiltradas = compras.filter(c => c.rifProveedor === rif);
    resultados = "Compras al proveedor:\n" + JSON.stringify(comprasFiltradas, null, 2);
  }
  document.getElementById('resultados').textContent = resultados;
}

// Función para limpiar formularios
function limpiarFormulario(formId) {
  const form = document.getElementById(formId);
  form.querySelectorAll('input').forEach(input => { input.value = ''; });
  form.classList.remove('active');
}

// Función para mostrar formularios
function showForm(type) {
  document.querySelectorAll('.form-container').forEach(form => {
    form.classList.remove('active');
  });
  document.getElementById(`${type}-form`).classList.add('active');
}
