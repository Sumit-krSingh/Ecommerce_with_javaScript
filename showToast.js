export const showToast = (operation, id) =>{

    const toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation === "add"){
        toast.textContent = `product with ${id} is added`;
    }else{
        toast.textContent = `product with ${id} is remove`;
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
      }, 2000);
};