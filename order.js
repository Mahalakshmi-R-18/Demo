let cart = [];
let totalAmount = 0;

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalAmount += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - Rs${item.price}`;
        cartItems.appendChild(li);
    });
    total.innerText = totalAmount;
}

function checkout() {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    localStorage.setItem('totalAmount', totalAmount);
    window.location.href = 'billing.html';
}
