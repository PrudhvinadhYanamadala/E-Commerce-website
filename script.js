document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    updateCartCount();

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const product = e.target.closest(".product");
            const productId = product.getAttribute("data-id");
            const productName = product.getAttribute("data-name");
            const productPrice = product.getAttribute("data-price");
            const imgElement = product.querySelector("img");
            const imgSrc = imgElement ? imgElement.getAttribute("src") : "";
            //const productImage = product.getAttribute("src");
            //let imgSrc = document.getAttribute("img").src;
            let newUrl = imgSrc.replace("http://127.0.0.1:5500/", "");
            //cart	[{"id":"2","name":"iphone","price":"1199","image":"http://127.0.0.1:5500/iphone.png"}]
            console.log(newUrl,"newUrl")

            cart.push({ id: productId, name: productName, price: productPrice,image: newUrl });
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
            alert(`${productName} added to cart!`);
        });
    });

    function updateCartCount() {
        document.getElementById("cart-count").innerText = cart.length;
    }
});
