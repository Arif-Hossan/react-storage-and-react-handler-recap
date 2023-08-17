import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import { add } from '../../utilities/Calculate';
// import add from '../../utilities/Calculate';

const Cosmetics = () => {
    // const a=5;
    // const b=2;
    // const result = add(a,b);
    // manually create array of objects
    /*
    const cosmetics = [
        {id:1,name:"Shampo",price:12},
        {id:2,name:"Soap",price:20},
        {id:3,name:"Perfume",price:52},
    ]*/
    //manual json data
   /*
    const cosmetics = [
        {
          "id": "64de8e57e88fb75cb8a1ea45",
          "price": 22,
          "name": "Jana David"
        },
        {
          "id": "64de8e57efb93b7f938e4f7e",
          "price": 34,
          "name": "Helena Franks"
        },
        {
          "id": "64de8e57f95b81762653c59e",
          "price": 28,
          "name": "Hubbard Case"
        },
        {
          "id": "64de8e57f0c6f00d8777b866",
          "price": 30,
          "name": "Virginia Pollard"
        },
        {
          "id": "64de8e5768c2b3e250ff1cdb",
          "price": 26,
          "name": "Salinas Schmidt"
        }
      ]
      */
     //using data load from json file
     const [cosmetics,setCosmetics] = useState([]);
     useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
     },[])
    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>
            {/* <p>The sum of {a} and {b} is {result}</p> */}
            {
                cosmetics.map(cosmetic => <Cosmetic key = {cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;