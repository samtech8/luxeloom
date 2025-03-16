// Cart Array to Store Items
let cart = [];

// Function to Add Items to Cart
function addToCart(productName, price, quantityId) {
    let quantity = document.getElementById(quantityId).value;
    quantity = parseInt(quantity, 10); // Convert to integer

    if (quantity < 1) {
        alert("Please enter a valid quantity.");
        return;
    }

    // Check if item is already in cart
    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += quantity; // Update quantity if item exists
    } else {
        cart.push({ name: productName, price: price, quantity: quantity });
    }

    updateCartDisplay();
}

// Function to Update Cart Display
function updateCartDisplay() {
    let cartList = document.getElementById("cart-list");
    let cartTotal = document.getElementById("cart-total");
    cartList.innerHTML = ""; // Clear previous list
    let total = 0;

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - ${item.quantity} x $${item.price} 
            <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(li);

        total += item.price * item.quantity;
    });

    cartTotal.innerText = total.toFixed(2);
}

// Function to Remove Item from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Function to Clear Cart
document.getElementById("clear-cart").addEventListener("click", function () {
    cart = [];
    updateCartDisplay();
});