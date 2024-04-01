import { getCartProductFromLS } from "./getCartProducts";



export const updateCartProductTotal = () =>{
let localCartProducts = getCartProductFromLS();

let productSubTotal = document.querySelector(".productSubTotal");
let productFinalTotal = document.querySelector(".productFinalTotal");
let initialValue = 0

let totalProductPrice = localCartProducts.reduce((acc, curProd) =>{
    let productPrice = parseInt(curProd.price) || 0;
    return acc + productPrice;


},initialValue)
 
productSubTotal.textContent = `₹${totalProductPrice}`;
productFinalTotal.textContent = `₹${totalProductPrice + 50}`; 
}

