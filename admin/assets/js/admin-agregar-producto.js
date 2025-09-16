// ===============================
// Lista inicial de productos precargados
// ===============================
let productos = [
  { codigo: "GAM001", nombre: "Cyberpunk 2077 PS5", categoria: "Consola", stock: 15, precio: 59990 },
  { codigo: "GAM002", nombre: "Monopoly Edición Gamer", categoria: "Juegos de mesa", stock: 25, precio: 29990 },
  { codigo: "GAM003", nombre: "Auriculares RGB Gamer Pro", categoria: "Accesorios", stock: 40, precio: 89990 },
  { codigo: "GAM004", nombre: "FIFA 25 Xbox", categoria: "Consola", stock: 20, precio: 69990 },
  { codigo: "GAM005", nombre: "Catan Edición Gamer", categoria: "Juegos de mesa", stock: 30, precio: 34990 },
  { codigo: "GAM006", nombre: "Teclado Mecánico RGB", categoria: "Accesorios", stock: 50, precio: 79990 },
  { codigo: "GAM007", nombre: "Mario Kart 9 Switch", categoria: "Consola", stock: 12, precio: 59990 },
  { codigo: "GAM008", nombre: "Jenga Gamer Edition", categoria: "Juegos de mesa", stock: 22, precio: 19990 },
  { codigo: "GAM009", nombre: "Mouse Gamer RGB", categoria: "Accesorios", stock: 35, precio: 49990 },
  { codigo: "GAM010", nombre: "Resident Evil 9 PS5", categoria: "Consola", stock: 18, precio: 69990 }
];

// ===============================
// Seleccionar elementos del DOM
// ===============================
const tbody = document.getElementById("productTableBody");
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");

// ===============================
// Función para renderizar productos
// ===============================
function renderProductos(lista) {
  tbody.innerHTML = "";
  if (lista.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center"> No se encontraron productos</td></tr>`;
    return;
  }

  lista.forEach(prod => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${prod.codigo}</td>
      <td>${prod.nombre}</td>
      <td>${prod.categoria}</td>
      <td>${prod.stock}</td>
      <td>$${prod.precio.toLocaleString("es-CL")}</td>
      <td>
        <button class="btn btn-sm btn-neon">Editar</button>
        <button class="btn btn-sm btn-outline-danger">Eliminar</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// ===============================
// Render inicial
// ===============================
renderProductos(productos);

// ===============================
// Filtrado por búsqueda y categoría
// ===============================
function aplicarFiltros() {
  const texto = searchInput.value.toLowerCase();
  const categoria = filterCategory.value;

  const filtrados = productos.filter(prod => {
    const coincideTexto = prod.nombre.toLowerCase().includes(texto) || prod.codigo.toLowerCase().includes(texto);
    const coincideCategoria = categoria ? prod.categoria === categoria : true;
    return coincideTexto && coincideCategoria;
  });

  renderProductos(filtrados);
}

// Eventos de búsqueda y filtros
searchInput?.addEventListener("input", aplicarFiltros);
filterCategory?.addEventListener("change", aplicarFiltros);

// Reset filtros
function resetFilters() {
  searchInput.value = "";
  filterCategory.value = "";
  renderProductos(productos);
}

// ===============================
// Lógica del formulario para agregar productos
// ===============================
document.getElementById("addProductForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const codigo = prompt("Ingrese el código del producto (mínimo 3 caracteres):");
  if (!codigo || codigo.length < 3) {
    alert("El código del producto es obligatorio y debe tener al menos 3 caracteres.");
    return;
  }

  const nombre = document.getElementById("productName").value.trim();
  const descripcion = document.getElementById("productDescription").value.trim();
  const precio = parseFloat(document.getElementById("productPrice").value);
  const stock = parseInt(document.getElementById("productStock").value);
  const categoria = document.getElementById("productCategory").value;
  const stockCritico = prompt("Ingrese Stock Crítico (opcional):");

  let imagen = document.getElementById("productImage").files[0];
  let imagenUrl = imagen ? URL.createObjectURL(imagen) : "assets/images/default-product.png";

  // Validaciones
  if (!nombre || nombre.length > 100) {
    alert("El nombre es obligatorio y debe tener como máximo 100 caracteres.");
    return;
  }
  if (descripcion.length > 500) {
    alert("La descripción no puede superar los 500 caracteres.");
    return;
  }
  if (isNaN(precio) || precio < 0) {
    alert("El precio es obligatorio y no puede ser menor que 0.");
    return;
  }
  if (isNaN(stock) || stock < 0) {
    alert("El stock es obligatorio y debe ser un número válido.");
    return;
  }
  if (!categoria) {
    alert("Debe seleccionar una categoría.");
    return;
  }

  let stockCriticoNum = stockCritico ? parseInt(stockCritico) : null;
  if (stockCritico && (isNaN(stockCriticoNum) || stockCriticoNum < 0)) {
    alert("El stock crítico debe ser un número entero válido.");
    return;
  }

  // Crear objeto producto
  const nuevoProducto = {
    codigo,
    nombre,
    descripcion,
    precio,
    stock,
    stockCritico: stockCriticoNum,
    categoria,
    imagen: imagenUrl
  };

  // Agregar al array
  productos.push(nuevoProducto);

  // Renderizar con filtros aplicados (si los hay)
  aplicarFiltros();

  // Confirmación
  alert(`Producto agregado: ${nombre} (${categoria})`);

  if (stockCriticoNum !== null && stock <= stockCriticoNum) {
    alert(`⚠️ ALERTA: El stock (${stock}) está en o por debajo del nivel crítico (${stockCriticoNum}).`);
  }

  // Resetear formulario
  document.getElementById("addProductForm").reset();
});
