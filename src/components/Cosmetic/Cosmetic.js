import React from 'react';

const Cosmetic = (props) => {
    const {name,price} = props.cosmetic;
    return (
        <div>
            <h4>Buy Now : {name}</h4>
            <p>Price : {price}</p>
        </div>
    );
};

export default Cosmetic;