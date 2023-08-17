import React from 'react';
import { add, multiply } from '../../utilities/Calculate';

const Shoes = () => {
    const a = 10;
    const b = 5;
    const result = multiply(a,b);
    const sumResult = add(a,b);
    return (
        <div>
            <h2>This is a shoe Component</h2>
            <p>The multiplication of {a} and {b} is {result}</p>
            <p>The sum of {a} and {b} is {sumResult}</p>
        </div>
    );
};

export default Shoes;