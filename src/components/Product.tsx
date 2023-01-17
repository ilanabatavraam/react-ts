import React, {useState} from 'react';
import { Iproduct } from '../models';

interface ProductProps {
    product: Iproduct
}

export function Product({product}: ProductProps) {
    const [details, setInfo] = React.useState(false);
    let btnbgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
    let btnClasses = ['py-2', 'px-4', 'border', btnbgClassName]


    return (
        <div
        className='border py-2 px-4 rounded flex flex-col items-center mb-2'
        >
            <img src={product.image} alt={product.title} className="w-1/6" />
            <p>{product.title}</p>
            <span className='font-bold'>{product.price}</span>
            <button
             className={btnClasses.join(' ')}
             onClick={() => setInfo(prev => !prev)}
            >
                {details ? 'Hide info' : 'Show info'}
            </button>

            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    )
}