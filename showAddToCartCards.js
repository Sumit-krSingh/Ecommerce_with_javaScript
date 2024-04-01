import products from "./api/products.json";
import { incrementDecrement } from "./incrementDecrement";
import { getCartProductFromLS } from "./getCartProducts";
import { removeProdFromCart } from "./removeProdFromCart";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { updateCartProductTotal } from "./updateCartProductTotal";


let cartProducts = getCartProductFromLS();

let filterProduct = products.filter((curElem) => {
    return cartProducts.some((curProd) => curProd.id === curElem.id);
});
// console.log(filterProduct);

const cartTemplate = document.querySelector("#productCartTemplate");
const cartContainer = document.querySelector("#productCartContainer");

// function for loop to display data on template

const showCartProduct = () => {
    filterProduct.forEach((curProd) => {
        const { category, name, id, image, price, stock } = curProd;

        let productClone = document.importNode(cartTemplate.content, true);

        const lsActualPrice = fetchQuantityFromCartLS(id, price);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`)


        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productPrice").textContent = lsActualPrice.price;
        productClone.querySelector(".productQuantity").textContent =
      lsActualPrice.quantity;



        // add function event to handle increment and decrement

        productClone.querySelector(".stockElement").addEventListener("click", (event) =>{
            incrementDecrement(event, id, price, stock);
        });

        productClone.querySelector(".remove-to-cart-button")
        .addEventListener("click", () =>removeProdFromCart(id));
       
        

        cartContainer.append(productClone);
    });


};

showCartProduct();


// calculating the card total in our cartProducts page
// --------------------------------------------------------
updateCartProductTotal();



