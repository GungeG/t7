const URL = "https://kea-alt-del.dk/t7/api/products?limit=100";

fetch(URL)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  products.forEach((product) => {
    const template = document.querySelector(".SProductTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector("a").href = `product.html?id=${product.id}`;
    copy.querySelector(".product_name").textContent = product.productdisplayname;
    copy.querySelector(
      ".product_image"
    ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    copy.querySelector(".product_brand").textContent = product.brandname;
    copy.querySelector(".product_type").textContent = product.articletype;
    copy.querySelector(".price").textContent = product.price;
    /* discount */
    if (product.discount > 0) {
      checkDiscount(product, copy);
    }
    //soldout
    if (product.soldout === 1) {
      copy.querySelector(".sold_out").style.display = "block";
      console.log("soldout");
    }
    if (product.discount > 1) {
        copy.querySelector(".discounted_p").style.display = "block";
      }
  
    document.querySelector("main").appendChild(copy);
  })
}


haa

function checkDiscount(product, copy){
  copy.querySelector(".discount").textContent = product.discount + "%";
  copy.querySelector(".price").classList.add("discounted");
  copy.querySelector(".discounted_price").textContent = Math.round(
    product.price - (product.price * product.discount) / 100
  );
}
/*         <article class="SProduct">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/1000/1163.webp"
            alt="img"
          />
          <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
          <p class="STitle">Nike | Tshirts</p>
          <p class="Price">895,-</p>
          <a href="product.html"></a>
        </article> */

/* productside */
