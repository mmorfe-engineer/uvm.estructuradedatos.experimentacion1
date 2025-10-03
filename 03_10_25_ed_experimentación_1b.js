// Datos globales
let usuarios = [];
let libros = [];
let prestamos = [];

// Función para registrar usuarios
function registrarUsuario() {
  const nombre = document.getElementById('nombre-usuario').value;
  const id = document.getElementById('id-usuario').value;
  const tipo = document.getElementById('tipo-usuario').value.toLowerCase();
  const estatus = document.getElementById('estatus-usuario').value.toLowerCase() === 'activo';
  usuarios.push({ nombre, id, tipo, estatus });
  alert('Usuario registrado con éxito.');
  limpiarFormulario('usuario-form');
}

// Función para registrar libros
function registrarLibro() {
  const titulo = document.getElementById('titulo-libro').value;
  const autor = document.getElementById('autor-libro').value;
  const isbn = document.getElementById('isbn').value;
  const cantidad = parseInt(document.getElementById('cantidad-libro').value);
  libros.push({ titulo, autor, isbn, cantidad });
  alert('Libro registrado con éxito.');
  limpiarFormulario('libro-form');
}

// Función para registrar préstamos
function registrarPrestamo() {
  const idUsuario = document.getElementById('id-usuario-prestamo').value;
  const isbnLibro = document.getElementById('isbn-prestamo').value;
  const fechaPrestamo = new Date().toLocaleDateString();
  const fechaDevolucion = document.getElementById('fecha-devolucion').value;
  prestamos.push({ idUsuario, isbnLibro, fechaPrestamo, fechaDevolucion });
  const libro = libros.find(l => l.isbn === isbnLibro);
  if (libro) libro.cantidad--;
  alert('Préstamo registrado con éxito.');
  limpiarFormulario('prestamo-form');
}

// Función para consultar préstamos
function consultarPrestamos() {
  const consulta = prompt("Consultar por:\n1. Usuario\n2. Libro\nSeleccione (1 o 2):");
  let resultados = "";
  if (consulta === "1") {
    const idUsuario = prompt("Ingrese ID del usuario:");
    const prestamosFiltrados = prestamos.filter(p => p.idUsuario === idUsuario);
    resultados = "Préstamos del usuario:\n" + JSON.stringify(prestamosFiltrados, null, 2);
  } else if (consulta === "2") {
    const isbn = prompt("Ingrese ISBN del libro:");
    const prestamosFiltrados = prestamos.filter(p => p.isbnLibro === isbn);
    resultados = "Préstamos del libro:\n" + JSON.stringify(prestamosFiltrados, null, 2);
  }
  document.getElementById('resultados').textContent = resultados;
}

// Función para limpiar formularios (igual que en Programa 1)
function limpiarFormulario(formId) {
  const form = document.getElementById(formId);
  form.querySelectorAll('input').forEach(input => { input.value = ''; });
  form.classList.remove('active');
}

// Función para mostrar formularios (igual que en Programa 1)
function showForm(type) {
  document.querySelectorAll('.form-container').forEach(form => {
    form.classList.remove('active');
  });
  document.getElementById(`${type}-form`).classList.add('active');
}
