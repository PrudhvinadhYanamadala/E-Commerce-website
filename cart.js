function getCart() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  function updateCartCount() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").textContent = count;
  }
  
  function renderCart() {
    const cart = getCart();
    const container = document.getElementById("cart-items");
    if (cart.length === 0) {
      container.innerHTML = "<p>Your cart is empty.</p>";
      document.getElementById("cart-total").textContent = "";
      return;
    }
    container.innerHTML = cart
      .map(
        (item, i) => `
        <div class="cart-row">
          <img src="${item.image}" alt="${item.name}">
          <span>${item.name}</span>
          <input type="number" min="1" value="${item.quantity}" 
            onchange="updateQuantity(${i}, this.value)">
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
          <button onclick="removeFromCart(${i})">Remove</button>
        </div>
      `
      )
      .join("");
    // Cart total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("cart-total").textContent = `Total: $${total.toFixed(2)}`;
  }
  
  function updateQuantity(idx, value) {
    let cart = getCart();
    let qty = parseInt(value, 10);
    if (isNaN(qty) || qty < 1) qty = 1;
    cart[idx].quantity = qty;
    saveCart(cart);
    renderCart();
    updateCartCount();
  }
  
  function removeFromCart(idx) {
    let cart = getCart();
    cart.splice(idx, 1);
    saveCart(cart);
    renderCart();
    updateCartCount();
  }
  
  function clearCart() {
    localStorage.removeItem("cart");
    renderCart();
    updateCartCount();
  }
  
  document.getElementById("clear-cart").onclick = clearCart;
  
  // Checkout form
  document.getElementById("checkout-form").onsubmit = function (e) {
    e.preventDefault();
    // Feel free to add more validation here!
    document.getElementById("checkout-message").textContent =
      "Order placed! (Demo only)";
    clearCart();
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    renderCart();
    updateCartCount();
  });