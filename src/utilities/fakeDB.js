const addToDB = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity){
        console.log("already added");
        // const newQuantity = + quantity + 1;
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id,newQuantity)
    }
    else{
        localStorage.setItem(id,1);
    }
}

export default addToDB;