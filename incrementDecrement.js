import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";


 
 
 
 export const incrementDecrement =(event, id, price, stock) =>{

    const currentCartElement = document.querySelector(`#card${id}`);

    const  productQuantity = currentCartElement.querySelector(".productQuantity");
    const productPrice = currentCartElement.querySelector(".productPrice");

    let quantity = 1;
    let localStoragePrice = 0;

    let localCartProducts = getCartProductFromLS();

    let existingProd = localCartProducts.find((curProd) => curProd.id === id);


    if(existingProd){

        quantity = existingProd.quantity;

        localStoragePrice = existingProd.price;
        price = price;
    }

    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity += 1;
        }
        else if(quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock
        }
    }

    if(event.target.className ==="cartDecrement"){
        if(quantity >1){
            quantity -= 1;
        }
    }

    localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));


    let updateCart = {id, price: localStoragePrice, quantity };

    updateCart = localCartProducts.map((curProd) =>{
        return curProd.id === id ? updateCart : curProd;
    });
     //   console.log(updatedCart);
  localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

  //   also we need to reflect the changes on the screen too
  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;

updateCartProductTotal();

 };