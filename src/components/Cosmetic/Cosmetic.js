import React from 'react';
import {addToDB, removeFromDB } from '../../utilities/fakeDB';

const Cosmetic = (props) => {
    const {id,name,price} = props.cosmetic;
    const addToCart = (id) =>{
        addToDB(id);
    }
    const addCart = () => addToCart(id);

    const removeItem = (id) => {
        removeFromDB(id);
    }
    return (
        <div>
            <h4>Buy Now : {name}</h4>
            <p>Price : {price}</p>
            <button onClick={addCart}>Add To Cart</button>
            {/* shortcut and conventional way to pass data using event handler */}
            <button onClick={()=>addToCart(id)}>Purchase</button>
            <button onClick = {()=> removeItem(id)} >Remove</button>
        </div>
    );
};

export default Cosmetic;