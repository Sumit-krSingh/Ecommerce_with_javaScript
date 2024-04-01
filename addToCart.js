import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();

export const addToCart = (event, id, stock) => {
    // variable dat contain function to get data from localstorage;
    let arrLocalStrogeProduct = getCartProductFromLS();

    const currentProElement = document.querySelector(`#card${id}`);

    let quantity = currentProElement.querySelector(".productQuantity").innerText;
    let price = currentProElement.querySelector(".productPrice").innerText;

    // console.log(quantity, price);

    price = price.replace("₹", "");

    // code for match click data id match with existing data in local storage

    let existingProd = arrLocalStrogeProduct.find((curProd) => curProd.id === id);

    // code to update quantity and price after check  click id match with existing data

    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);

         let updatedCart = {id, price, quantity};

         updatedCart = arrLocalStrogeProduct.map((curProd) => {
            // logic to match and update data

           return curProd.id ===id ? updatedCart :curProd;
        });
        // logic to set local storage with updated value of quantity and price
    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    showToast("add", id);



    }

    if (existingProd) {
        return false;
    }
    price = Number(price * quantity);
    quantity = Number(quantity);

    arrLocalStrogeProduct.push({ id, price, quantity });
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStrogeProduct));

    updateCartValue(arrLocalStrogeProduct);



}