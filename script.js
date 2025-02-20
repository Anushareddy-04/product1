// Select elements
const addToCartBtn = document.getElementById('addToCartBtn');
const cartItems = document.getElementById('cartItems');
const totalPriceElement = document.getElementById('totalPrice');

// Product data
const product = {
    name: "Awesome Product",
    price: 29.99,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image"  // Product image URL
};

let cart = [];

// Function to update cart display
function updateCart() {
    // Clear cart display
    cartItems.innerHTML = '';

    let total = 0;

    // Create cart items
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `<p><img src="${item.image}" alt="${item.name}" class="product-image" style="width: 50px; height: 50px; margin-right: 10px;">${item.name} - $${item.price}</p>`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    // Update total price
    totalPriceElement.textContent = total.toFixed(2);
}

// Handle Add to Cart button click
addToCartBtn.addEventListener('click', () => {
    cart.push(product); // Add product to cart
    updateCart(); // Update cart display
});
