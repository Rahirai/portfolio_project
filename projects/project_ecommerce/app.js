const allProductsBtn = document.querySelector("#all-products");
// const electronicsBtn = document.querySelector("#electronics");

const box = document.querySelector("#box");
allProductsBtn.addEventListener("click", fetchAllProducts);
// electronicsBtn.addEventListener("click", fetchElctronicsProducts);

async function fetchAllProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();

    data.map((product) => {
      box.innerHTML += `
            <div class="result">
          <img src="${product.image}" alt="" />
          <h1>${product.title}</h1>
          <p class="price">${product.price}</p>
          <p>  ${product.description.split(" ").slice(0, 20).join(" ")}...</p>
          <button>Buy Now</button>
        </div>
          `;
    });
  } catch (error) {
    console.log(error);
  }
}
/* async function fetchElctronicsProducts() {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products/category/electronics"
    );
    const data = await res.json();

    data.map((product) => {
      box.innerHTML += `
            <div class="result">
          <img src="${product.image}" alt="" />
          <h1>${product.title}</h1>
          <p class="price">${product.price}</p>
          <p>  ${product.description.split(" ").slice(0, 20).join(" ")}...</p>
          <button>Buy Now</button>
        </div>
          `;
    });
  } catch (error) {
    console.log(error);
  }
} */
