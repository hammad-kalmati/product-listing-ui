function getId() {
    const URL = new URLSearchParams(window.location.search);
    return URL.get('id');
}

async function getSingleProduct() {
    const id = getId();

    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();

    console.log(product);
    showSingleProductDetails(product);
}



function showSingleProductDetails(product) {
    const pdContainer = document.getElementById('pd-container');

    const { id, title, description, category, price, availabilityStatus,
        brand, discountPercentage, images, minimumOrderQuantity, rating,
        returnPolicy, reviews, shippingInformation, sku, stock, tags,
        thumbnail, warrantyInformation } = product;

    pdContainer.innerHTML += `
                
        <div class="pd-left">

            <div class="pd-slider">
                <img id="pd-main-img" src="${thumbnail}" alt="product">

                <div class="pd-thumbnails">
                    <img src="${images}" onclick="changeImg(this)">
                    <img src="${images}" onclick="changeImg(this)">
                    <img src="${images}" onclick="changeImg(this)">
                </div>
            </div>

            <h1 class="pd-price">Rs ${price}</h1>

            <h2 class="pd-title">${title}</h2>

            <p class="pd-location">ðŸ“ Main Boulevard Gulberg, Lahore</p>

            <h3 class="pd-heading">Details</h3>

            <div class="pd-details-grid">
                <div><span>Brand : </span> <b>${brand}</b></div>
                <div><span>Categoury : </span> <b>${category}</b></div>
                <div><span>Availability Status : </span> <b>${availabilityStatus}</b></div>
                <div><span>Stock : </span> <b>${stock}</b></div>
                <div><span>Minimum Order Quantity : </span> <b>${minimumOrderQuantity}</b></div> 
                <div><span>Warranty Information : </span> <b>${warrantyInformation}</b></div>
            </div>

            <h3 class="pd-heading">Description</h3>

            <p class="pd-description">${description}</p>

        </div>

        <div class="pd-right">
            <div class="seller-card">
                <div class="seller-card-box">
                    <div class="seller-card-top">
                        <div class="seller-brand">
                            <div class="seller-logo">
                                <img src="${thumbnail}" alt="${brand}">
                                <p>${brand}</p>
                            </div>

                            <div class="seller-posted">
                                <span>Posted by</span>
                                <h4>${brand}</h4>
                            </div>
                        </div>

                        <button class="seller-next-btn" type="button">&#8250;</button>
                    </div>

                    <div class="seller-divider"></div>

                    <div class="seller-stats">
                        <div class="seller-stat">
                            <div class="seller-stat-icon calendar-icon">
                                <span></span>
                            </div>

                            <div class="seller-stat-text">
                                <p>Member Since</p>
                                <h5>2023</h5>
                            </div>
                        </div>
                        
                        <div class="seller-stat">
                            <div class="seller-stat-icon ad-icon">
                                <span>AD</span>
                            </div>

                            <div class="seller-stat-text">
                                <p>Active Ads</p>
                                <h5>4</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="seller-add-to-cart-btn" type="button">Add To Cart</button>

                <button class="seller-buy-btn" type="button">Buy</button>

                <div class="seller-footer">
                    <p><b>Sku : </b>${sku}</p>
                    <p><b>Ad ID : </b>${id}</p>
                </div>
            </div>
        </div>
            `;
}

getSingleProduct();
