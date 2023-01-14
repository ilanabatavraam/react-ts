import React, {useState} from 'react';
import { Iproduct } from '../models';

interface ProductProps {
    product: Iproduct
}

export function Product({product}: ProductProps) {
    const [details, setInfo] = React.useState(false)

    return (
        <div
        className='border py-2 px-4 rounded flex flex-col items-center mb-2'
        >
            <img src={product.image} alt={product.title} className="w-1/6" />
            <p>{product.title}</p>
            <span className='font-bold'>{product.price}</span>
            <button className='py-2 px-4 border bg-yellow-400'>Show info</button>
            {/* <p>{product.description}</p> */}
        </div>
    )
}