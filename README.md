
 🏠 index.html

- Displays a list of Apple products: MacBook, iPhone, AirPods, Watch, AirTags, iPad.
- Each product has an image, name, price, and an **Add to Cart** button.
- The cart icon in the header shows the number of items in the cart.
- Clicking "Add to Cart" stores the product in `localStorage`.

---

 🛒 cart.html

- Displays items added to the cart.
- Shows product image, name, and price.
- Users can:
  - **Remove** individual items from the cart.
  - **Clear Cart** to remove all items.
  - **Checkout**, which currently shows an alert.

 🎨 styles.css

- Modern, clean layout with a responsive product grid.
- Fixed header and footer for a consistent layout.
- Button and product card styles for a professional look.
- Colors:  
  - Header: Light background with dark text  
  - Footer: Dark background with white text  
  - Cart Button: Bright accent color (#ff5733)


 💻 script.js

- Adds products to the cart and stores them using `localStorage`.
- Updates the cart count in the header.
- Handles item removal and cart clearing.
- Parses image file names to store in the cart.
- Uses `DOMContentLoaded` to ensure DOM is ready before interaction.

🚀 How to Run

1. Clone the repository or download the files.
2. Open `index.html` in a web browser.
3. Click "Add to Cart" to store items.
4. Open `cart.html` to view and manage your cart.

📦 Future Enhancements

- Add product quantity feature.
- Include total price calculation.
- Enable persistent checkout form.
- Add backend integration for order processing.

 👨‍💻 Author

**Prudhvinadh Yanamadala**  
*© 2025 E-Commerce Apple Store. All rights reserved.*

