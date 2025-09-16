<script>
  const productsBody = document.getElementById("productsBody");
  const addProductForm = document.getElementById("addProductForm");

  addProductForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Capturamos valores
    const name = document.getElementById("productName").value.trim();
    const description = document.getElementById("productDescription").value.trim();
    const price = parseFloat(document.getElementById("productPrice").value);
    const stock = parseInt(document.getElementById("productStock").value);
    const stockCriticalInput = document.getElementById("productStockCritical").value;
    const stockCritical = stockCriticalInput ? parseInt(stockCriticalInput) : null;
    const category = document.getElementById("productCategory").value;
    const sku = "GAM" + String(products.length + 1).padStart(3, "0"); // Genera un SKU automático

    // Validación simple
    if (!name || !category || price < 0 || stock < 0) {
      alert("Por favor completa todos los campos obligatorios correctamente.");
      return;
    }

    // Crear objeto producto
    const newProduct = { sku, name, category, stock, price, description };
    products.push(newProduct);
    filteredProducts = [...products]; // Actualizar tabla filtrada

    // Stock crítico
    if (stockCritical !== null && stock <= stockCritical) {
      alert(`¡Alerta! El stock (${stock}) está igual o por debajo del stock crítico (${stockCritical}).`);
    }

    // Limpiar formulario
    addProductForm.reset();

    // Renderizar tabla
    renderTable(currentPage);
  });
</script>
