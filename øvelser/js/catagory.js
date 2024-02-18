const URL = "https://kea-alt-del.dk/t7/api/";

fetch(URL)
  .then((res) => res.json())
  .then(showProducts);

  function showProducts(products) {
    products.forEach((product) => {
      const template = document.querySelector(".brandtemplate").content;
      const copy = template.cloneNode(true);
      copy.querySelector(".Nike").href = `productlist.html?id=${product.brandname}`;
    })
}