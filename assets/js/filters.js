// filters.js
function applyFilters() {
    const category = document.getElementById("filterCategory").value;
    const maxPrice = document.getElementById("filterPrice").value;
    const inStock = document.getElementById("filterStock").checked;
    const offers = document.getElementById("filterOffers").checked;
    const selectedPlatforms = Array.from(document.querySelectorAll("#collapsePlatform input:checked"))
                                   .map(cb => cb.id);

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        const cardPrice = parseInt(card.dataset.price);
        const cardStock = card.dataset.stock === "true";
        const cardOffer = card.dataset.offer === "true";
        const cardPlatform = card.dataset.platform;

        let show = true;

        if (category && cardCategory !== category) show = false;
        if (cardPrice > maxPrice) show = false;
        if (inStock && !cardStock) show = false;
        if (offers && !cardOffer) show = false;
        if (selectedPlatforms.length > 0 && !selectedPlatforms.includes(cardPlatform)) show = false;

        card.style.display = show ? "block" : "none";
    });
}
