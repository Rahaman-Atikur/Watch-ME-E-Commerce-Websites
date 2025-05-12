const ringButtons = document.querySelectorAll(".ring-button");
for (let i = 0; i < ringButtons.length; i++) {
  const ringButton = ringButtons[i];
  ringButton.addEventListener("click", function (event) {
    const color = event.target.id.replace("-color", "");
    for (let j = 0; j < ringButtons.length; j++) {
      ringButtons[j].classList.remove("border-purple-600");
      ringButtons[j].classList.add("border-gray-300");
    }
    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border-gray-300");

    const productImage = document.getElementById("product-image");

    productImage.src = "../images/" + color + ".png";
  });
}

function selectWristSize(size) {
  const sizes = ["S", "L", "M", "XL"];
  for (let i = 0; i < sizes.length; i++) {
    let btn = document.getElementById("size-" + sizes[i]);
    let element = sizes[i];
    if (size === element) {
      btn.classList.add("border-purple-600");
    } else {
      btn.classList.remove("border-purple-600");
    }
  }
}

const quantityElements = document.querySelectorAll(".quantity-button");
for (let quantityButton of quantityElements) {
  quantityButton.addEventListener("click", function (event) {
    const amount = event.target.innerText === "+" ? 1 : -1;
    const productQuantity = parseInt(
      document.getElementById("quantity").innerText
    );
    const newQuantity = Math.max(0, productQuantity + amount);
    document.getElementById("quantity").innerText = newQuantity;
  });
}

// Add to cart
let cartCount = 0;
document.getElementById("add-to-cart").addEventListener("click", function () {
  const checkoutContainer = document.getElementById("checkout-container");
  if (quantity > 0) {
    const quantity = parseInt(document.getElementById("quantity").innerText);
    cartCount = cartCount + quantity;
    document.getElementById("cart-count").innerText = cartCount;
  }
});
