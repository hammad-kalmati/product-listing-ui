let allProducts = [];

async function getProductData() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();

    allProducts = data.products;
    console.log(allProducts)
    renderCards(allProducts);
}


function renderCards(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';

    products.map((element) => {
        const { id, title, description, category, price, availabilityStatus,
            brand, discountPercentage, images, minimumOrderQuantity, rating,
            returnPolicy, reviews, shippingInformation, sku, stock, tags,
            thumbnail, warrantyInformation } = element;

        productsContainer.innerHTML += `
            <div class="card">
                <img src="${thumbnail}" alt="Thumbnail">

                <div class="card-content">
                   <div class="title">${title}</div>
                   <div class="brand">${brand}</div>
                   <div class="desc">${description}</div>
                   <div class="price">$${price}</div>
                   <div class="rating">⭐ ${rating}</div>
                </div>

                <button class="details-btn" onclick = "getSingleProduct(${id})">Details</button>
            </div>
      `;
    })
}

function getSingleProduct(id) {
    window.location.href = `./productDetails.html?id=${id}`;
}


// LOGIN & SIGN UP POP UP JAVASCRIPT
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function showSignup() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

function showLogin() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
}

// ASCENDING SORTING
function lowToHigh() {
    allProducts.sort((a, b) => a.price - b.price);
    renderCards(allProducts);
}

// DESCENDING SORTING
function highToLow() {
    allProducts.sort((a, b) => b.price - a.price);
    renderCards(allProducts);
}

getProductData();



