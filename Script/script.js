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
let cartItems = [];
document.getElementById("add-to-cart").addEventListener("click", function () {
  const checkoutContainer = document.getElementById("checkout-container");
  const quantity = parseInt(document.getElementById("quantity").innerText);
  if (quantity > 0) {
    cartCount = cartCount + quantity;
    document.getElementById("cart-count").innerText = cartCount;

    // From this should look up
      const selectedColorButton= document.querySelector("button.border-purple-600.w-6");
      const selectedColor = selectedColorButton.id.split("-")[0];
      const selectedSizeButtons = document.querySelector("button.border-purple-600:not(w-6)");
      const selectedSize = selectedSizeButtons.innerText.split(" ")[0];
      const selectedPrice = selectedSizeButtons.innerText.split(" ")[1].split("$")[1];
      const productImage = document.getElementById("product-image");
      cartItems.push({
        image: selectedColor + ".png",
        title : "Classy Modern Smartwatch",
        color: selectedColor,
        size : selectedSize,
        price: quantity * parseInt(selectedPrice),

      })
    }
      else{
        alert("Please Select a quantity");
  }
});
document.getElementById("checkout-btn").addEventListener("click", function () {
  console.log("Btn clicked");
  const cartModal = document.getElementById("cart-modal");
  const cartItems = document.getElementById("cart-items");

  for (let i = 0; i < cartItems.length; i++) {
    const row = document.createElement("tr");

    row.classList.add("border-b");
    row.innerHTML = `
    <td>
     <div class="flex items-center space-x-2">
       <img src="${item-title}" alt="">
         <span class="font-semi-bold">${item-title}</span>
      </div>
    </td>
     `;
    cartContainer.appendChild(row);
  }
  cartModal.classList.remove("hidden");
});
