// Selecting DOM elements
const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const burgerMenu = document.querySelector('.burger-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailContainer = document.querySelector('#productDetail');
const orders = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const divInferiorOrders = document.querySelector('.order');
const nProducts = document.querySelector('.nProducts');
const totalAmountOrder = document.querySelector('.total-amount');
const arrowOrders = document.querySelector("#arrowOrders");

let count = 0; // Counter for products in the cart
let totalAmount = 0; // Total amount of products in the cart

// Function to initialize the page once it's loaded
function initializePage() {
    // Hide elements when the page loads
    mobileMenu.classList.add('inactive');
    orders.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
window.addEventListener('load', initializePage);

// Event Listeners for interface elements
emailMenu.addEventListener('click', toggleMenuOrders);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleOrders);
arrowOrders.addEventListener('click', toggleOrders);

// Function to toggle the visibility of the desktop menu
function toggleMenuOrders() {

    desktopMenu.classList.toggle("inactive");
    orders.classList.add('inactive'); // Hide the shopping cart
    productDetailContainer.classList.add('inactive');  // Hide the product detail

}

// Function to toggle the visibility of the mobile menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    closeProductDetailAside(); // Close the product detail if it's open
    orders.classList.add('inactive'); // Hide the shopping cart
}


// Function to toggle the visibility of the shopping cart and other elements
function toggleOrders() {
    orders.classList.toggle('inactive');
    mobileMenu.classList.add('inactive'); // Hide the mobile menu
    desktopMenu.classList.add('inactive'); // Hide the desktop menu
    productDetailContainer.classList.add('inactive'); // Hide the product detail
}

// Function to close the product detail
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

// List of products
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
})

productList.push({
    name: 'Screen',
    price: 220,
    image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
})

productList.push({
    name: 'Computer',
    price: 520,
    image: "https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
})

productList.push({
    name: 'Jacket',
    price: 250,
    image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})

productList.push({
    name: 'Computer',
    price: 520,
    image: "https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
})

productList.push({
    name: 'Jacket',
    price: 250,
    image: 'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
})

productList.push({
    name: 'Screen',
    price: 220,
    image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
})

// Function to render the list of products on the page
function renderProducts(arr) {
    for (let i = 0; i < arr.length; i++) {
        const product = arr[i];
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', () => openProductDetailAside(product));

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');

        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
        productFigureImg.addEventListener('click', () => {
            addToCart(product);
        });


        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        productInfoFigure.appendChild(productFigureImg);

        cardsContainer.appendChild(productCard);
    }

}


// Render the list of products when the page loads
renderProducts(productList);

// Function to open the product detail
function openProductDetailAside(product) {

    mobileMenu.classList.toggle('inactive');
    while (productDetailContainer.firstChild) {
        productDetailContainer.removeChild(productDetailContainer.firstChild);
    }

    const productDetailClose = document.createElement('div');
    productDetailClose.classList.add("product-detail-close");

    productDetailContainer.appendChild(productDetailClose);

    const productDetailXicon = document.createElement('img');
    productDetailXicon.classList.add("product-detail-close-x");
    productDetailXicon.setAttribute("src", "./icons/icon_close.png");


    productDetailClose.appendChild(productDetailXicon);

    productDetailXicon.addEventListener('click', closeProductDetailAside);


    productDetailImgProduct = document.createElement("img");
    productDetailImgProduct.setAttribute("src", product.image);

    productDetailContainer.appendChild(productDetailImgProduct);

    const productInfoAside = document.createElement('div');
    productInfoAside.classList.add('product-info');

    productDetailContainer.appendChild(productInfoAside);

    const productPriceAside = document.createElement('p');
    productPriceAside.innerText = "$" + product.price;

    productInfoAside.appendChild(productPriceAside);

    const productNameAside = document.createElement('p');
    productNameAside.innerText = product.name;

    productInfoAside.appendChild(productNameAside);

    const productDescAside = document.createElement('p');
    productDescAside.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque repellendus odit nulla consectetur natus animi blanditiis temporibus deserunt ipsa libero at ratione culpa quidem nostrum, architecto non perspiciatis, soluta dolorem.";

    productInfoAside.appendChild(productDescAside);

    const btnAddAside = document.createElement('button');
    btnAddAside.classList.add('primary-button');
    btnAddAside.classList.add('add-to-cart-button');


    productInfoAside.appendChild(btnAddAside);
    btnAddAside.innerText = 'Add to cart ';

    const imgCart = document.createElement('img');
    imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    btnAddAside.appendChild(imgCart);

    btnAddAside.addEventListener('click', () => {
        addToCart(product);
    });

    const btnTextAside = document.createElement('p');
    btnTextAside.innerText = "Add to cart";

    productDetailContainer.classList.remove('inactive');
    orders.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

// Function to add a product to the shopping cart
function addToCart(product) {

    count += 1;
    nProducts.innerText = count;
    const shoppingCartOrder = document.createElement('div');
    shoppingCartOrder.classList.add('shopping-cart');

    const figureShoppingCart = document.createElement('figure');
    const figureShoppingCartImg = document.createElement('img');
    figureShoppingCartImg.setAttribute('src', product.image);

    const titleProduct = document.createElement('p');
    titleProduct.innerText = product.name;

    const productPriceOrders = document.createElement('p');
    productPriceOrders.innerText = '$' + product.price;

    totalAmount += product.price;

    const imgDeleteProduct = document.createElement('img');
    imgDeleteProduct.classList.add("imgDeleteProduct");
    imgDeleteProduct.setAttribute('src', './icons/icon_close.png');
    imgDeleteProduct.addEventListener('click', () => {
        count -= 1;
        nProducts.innerText = count;
        totalAmount -= product.price;
        shoppingCartOrder.remove();
        totalAmountOrder.innerText = '$' + totalAmount;
    });

    shoppingCartOrder.appendChild(figureShoppingCart);
    figureShoppingCart.appendChild(figureShoppingCartImg);
    shoppingCartOrder.appendChild(titleProduct);
    shoppingCartOrder.appendChild(productPriceOrders);
    shoppingCartOrder.appendChild(imgDeleteProduct);

    divInferiorOrders.parentNode.insertBefore(shoppingCartOrder, divInferiorOrders);

    totalAmountOrder.innerText = '$' + totalAmount;
}





