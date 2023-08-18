const addToDB = (id) => {
 let shoppingCart;
 //check stored cart availability
 const storedCart = getStoredCart();
 if(storedCart){
    shoppingCart = JSON.parse(storedCart);
    console.log(shoppingCart[id]);
 }
 else{
    shoppingCart = {};
 }
//  add quantity
const quantity = shoppingCart[id];
if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
}
else{
    shoppingCart[id] =1;
}
localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart))
}
//check availability of shopping Cart in Local Storage
const getStoredCart = () =>{
   return localStorage.getItem('shoppingCart');
}

// remove form DB
const removeFromDB = (id) => {
   const storedCart = getStoredCart();
   const shoppingCart = JSON.parse(storedCart);
   if (id in shoppingCart){
    delete shoppingCart[id];
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
   }
   
}
//remove full shopping cart from local storage
const deleteShoppingCart = () => {
    localStorage.removeItem('shoppingCart');
}
export {
     addToDB,
     removeFromDB,
     deleteShoppingCart
    };