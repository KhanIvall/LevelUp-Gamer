// Ejecutar cuando cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    const categoryFilter = document.getElementById("filterCategory");
    const priceFilter = document.getElementById("filterPrice");
    const stockFilter = document.getElementById("filterStock");
    const offersFilter = document.getElementById("filterOffers");

    // Checkboxes de plataforma
    const platformFilters = {
        ps5: document.getElementById("ps5"),
        xbox: document.getElementById("xbox"),
        switch: document.getElementById("switch"),
        pc: document.getElementById("pc"),
    };

    const products = document.querySelectorAll(".product-card");

    // Función para aplicar filtros
    window.applyFilters = function () {
        const selectedCategory = categoryFilter.value;
        const maxPrice = parseInt(priceFilter.value) || 200000;
        const inStock = stockFilter.checked;
        const onOffer = offersFilter.checked;

        // Obtener las plataformas seleccionadas
        const selectedPlatforms = Object.keys(platformFilters).filter(
            (key) => platformFilters[key].checked
        );

        products.forEach((product) => {
            const category = product.dataset.category;
            const price = parseInt(product.dataset.price);
            const stock = product.dataset.stock === "true";
            const offer = product.dataset.offer === "true";
            const platform = product.dataset.platform;

            let visible = true;

            // Filtro de categoría
            if (selectedCategory && category !== selectedCategory) {
                visible = false;
            }

            // Filtro de precio máximo
            if (price > maxPrice) {
                visible = false;
            }

            // Filtro de stock
            if (inStock && !stock) {
                visible = false;
            }

            // Filtro de ofertas
            if (onOffer && !offer) {
                visible = false;
            }

            // Filtro de plataforma
            if (selectedPlatforms.length > 0 && !selectedPlatforms.includes(platform)) {
                visible = false;
            }

            // Mostrar u ocultar
            product.style.display = visible ? "block" : "none";
        });
    };

    // ✅ Aplicar filtros automáticamente al mover el rango de precio
    priceFilter.addEventListener("input", () => {
        applyFilters();
    });
});