document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('billing-form');
    const amount = document.getElementById('amount');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalAmount = 0;
    for (const item of cartItems) {
        totalAmount += item.price;
    }
    amount.innerText = totalAmount;
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const billingDetails = {
            name: form.name.value,
            address: form.address.value,
            phone: form.phone.value,
            email: form.email.value,
            totalAmount: totalAmount,
        };
        localStorage.setItem('billingDetails', JSON.stringify(billingDetails));
        window.location.href = 'summary.html';
    });
});
