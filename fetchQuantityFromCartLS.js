import { getCartProductFromLS } from "./getCartProducts";

export const fetchQuantityFromCartLS = (id, price) =>{
   
    
    let cartProducts = getCartProductFromLS();

    let existingProd = cartProducts.find((curProd) => curProd.id === id);
    let quantity = 1;

    if(existingProd){
        quantity = Number(existingProd.quantity)

        price = Number(existingProd.price);

    }
    return {quantity, price}
};