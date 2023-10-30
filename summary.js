document.addEventListener('DOMContentLoaded', function() {
    const summary = document.getElementById('summary');
    const billingDetails = JSON.parse(localStorage.getItem('billingDetails'));
    if (billingDetails) {
        const summaryHTML = `
            <p><strong>Name:        </strong> ${billingDetails.name}</p>
            <p><strong>Address:     </strong> ${billingDetails.address}</p>
            <p><strong>Phone:       </strong> ${billingDetails.phone}</p>
            <p><strong>Email:       </strong> ${billingDetails.email}</p>
            <p><strong>Total Amount:</strong> Rs.${billingDetails.totalAmount}</p>
        `;
        summary.innerHTML = summaryHTML;
    } else {
        summary.innerHTML = "<p>No order details found...</p>";
    }
});
