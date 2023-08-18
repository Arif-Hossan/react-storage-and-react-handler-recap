import React from 'react';

const Cosmetic = (props) => {
    const {id,name,price} = props.cosmetic;
    const addToCart = (id) =>{
        console.log('item added',id);
    }
    const addCart = () => addToCart(id);
    return (
        <div>
            <h4>Buy Now : {name}</h4>
            <p>Price : {price}</p>
            <button onClick={addCart}>Add To Cart</button>
            {/* shortcut and conventional way to pass data using event handler */}
            <button onClick={()=>addToCart(id)}>Purchase</button>
        </div>
    );
};

export default Cosmetic;