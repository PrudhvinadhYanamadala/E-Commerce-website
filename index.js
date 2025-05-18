// Sample product data - update or expand as needed!
const products = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 1399,
      image: "Macbook.png",
    },
    {
      id: 2,
      name: "iPhone 15",
      price: 1199,
      image: "iphone.png",
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 299,
      image: "airpods.png",
    },
    {
      id: 4,
      name: "Apple Watch",
      price: 399,
      image: "watch.png",
    },
    {
      id: 5,
      name: "AirTags",
      price: 29,
      image: "airtags.png",
    },
    {
      id: 6,
      name: "iPad Pro",
      price: 899,
      image: "ipad.png",
    },
  ];
  
  // Render products
  function renderProducts() {
    const list = document.getElementById("product-list");
    list.innerHTML = products
      .map(
        (p) => `
        <div class="product-card">
          <img src="/${p.image}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      `
      )
      .join("");
  }
  
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
  
  function addToCart(productId) {
    let cart = getCart();
    const prod = products.find((p) => p.id === productId);
    const existing = cart.find((item) => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...prod, quantity: 1 });
    }
    saveCart(cart);
    updateCartCount();
  }
  
  // Render on page load
  document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartCount();
  });