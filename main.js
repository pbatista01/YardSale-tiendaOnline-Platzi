const emailMenu = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const burgerMenu = document.querySelector('.burger-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const orders = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');


const isAsideClosed = orders.classList.toggle('inactive');
const isMobileMenuClosed = mobileMenu.classList.toggle('inactive');
const isEmailMenuClosed = desktopMenu.classList.toggle('inactive');
const isProductDetailContainerClosed  = desktopMenu.classList.toggle('inactive');



emailMenu.addEventListener('click',toggleMenuOrders);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleOrders);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleMenuOrders(){

    desktopMenu.classList.toggle("inactive");
    orders.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    /*if(!isAsideClosed){
        orders.classList.add('inactive');
    }
    if(isProductDetailContainerClosed){
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle("inactive");*/
}

function toggleMobileMenu(){
    
    /*if(!isAsideClosed){
        orders.classList.add('inactive');
    }*/
    mobileMenu.classList.toggle("inactive");
    closeProductDetailAside();
    orders.classList.add('inactive');
    
}

function toggleOrders(){
   
    /*if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isEmailMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if(isProductDetailContainerClosed){
        productDetailContainer.classList.add('inactive');
    }*/

   orders.classList.toggle('inactive'); 
   mobileMenu.classList.add('inactive');
   desktopMenu.classList.add('inactive');
   productDetailContainer.classList.add('inactive');

}

function openProductDetailAside(){
    
    /*if(!isAsideClosed){
        orders.classList.add('inactive');
    }
    if(!isEmailMenuClosed){
        desktopMenu.classList.add('inactive');
    }*/
    productDetailContainer.classList.remove('inactive');
    orders.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


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

/*<div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="" class="product-img">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div> -->
*/

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
    
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg')
    
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

renderProducts(productList);

