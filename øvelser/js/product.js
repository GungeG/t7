const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


fetch("https://kea-alt-del.dk/t7/api/products/" + id)
.then((res)=>res.json())
.then((data) => showProduct(data));

function showProduct(product){
    console.log(product);
    document.querySelector(".purchase_box .product_name").textContent = product.productdisplayname;
    document.querySelector(".purchase_box .brand").textContent = product.brandname;
    document.querySelector(".purchase_box .price").textContent = product.price;
    document.querySelector(".purchase_box .article_type").textContent = product.articletype;
    document.querySelector(".product_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    document.querySelector(".product_image").alt = product.productdisplayname;
    document.querySelector(".breadcrumbs_product_name").textContent = product.productdisplayname;
    // Info
    document.querySelector(".info .variant_name").textContent = product.variantname;
    document.querySelector(".info .base_colour").textContent = product.basecolour;
    document.querySelector(".info .rel_id").textContent = product.relid;
    document.querySelector(".brand_info .brand_name").textContent = product.brandname;
    document.querySelector(".brand_info .brand_bio").textContent = product.brandbio;
    document.querySelector(".brand_info .brand_image").src = product.brandimage;
    document.querySelector(".brand_info .brand_image").alt = product.brandname;

    if (product.soldout === 1) {
        document.querySelector(".sold_out").style.display = "block";
        console.log("soldout");
      }
}
