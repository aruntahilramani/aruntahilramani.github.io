$('a.remove').click(function () {
    event.preventDefault();
    $(this).parent().parent().parent().hide(400);

  })

  // Just for testing, show all items
  $('a.btn.continue').click(function () {
    $('li.items').show(400);
  })

  
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Fingertip Pulse Oximeter – Oxygize',
        Price: 2499,
        incart: 0
    },

    {
        name: 'Power Wheelchair Zip Lite - Vissco',
        Price: 5000,
        incart: 0
    },

    {
        name: 'Foldable Walker - MCP Lite Visco',
        Price: 899,
        incart: 0
    },

    {
        name: 'Blood Pressure Monitor',
        Price: 2099,
        incart: 0
    }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(products) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(products);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].incart += 1;
    }
    else {
        product.incart = 1;

        cartItems = {
            [product.name]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    //console.log("the products prize is",product.Price);
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.Price);
    }
    else {
        localStorage.setItem("totalCost", product.Price);
    }
}

function displayCart()
{
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer=document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer)
    {
        productContainer.innerHTML = '';
         
        Object.values(cartItems).map(item => {  
            productContainer.innerHTML += 
            `
            <div class="product">
              <ion-icon name="close-circle"></ion-icon>
              <img src="">
              <span>${item.name}</span>
            </div>
            <div class="price">Rs ${item.Price}.00/-</div>
            <div class="quantity">
            <ion-icon class="decrease " name="arrow-dropleft-circle"></ion-icon>
            <span>${item.incart}</span>
            <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon>
            </div>
            <div class="total">Rs ${item.incart * item.Price}.00/- </div>                  
           `;
        });

        productContainer.innerHTML+=`
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Basket Total
            </h4>
            <h4 class="basketTotal">
                Rs ${cartCost}.00/-
            </h4>
         `;
    }
}
onLoadCartNumbers();
displayCart();