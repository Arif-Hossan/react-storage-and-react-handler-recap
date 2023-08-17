import React from 'react';
import { add } from '../../utilities/Calculate';
// import add from '../../utilities/Calculate';

const Cosmetics = () => {
    const a=5;
    const b=2;
    const result = add(a,b);
    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>
            <p>The sum of {a} and {b} is {result}</p>
        </div>
    );
};

export default Cosmetics;