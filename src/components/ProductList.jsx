import React from 'react'
import {Data} from '../Data.js'
export const ProductList = ({allProducts, setAllProducts}) => {
    const onAddProduct = () =>{
        console.log('añadir al carrito')
    }
    return (
        <div className='container-items'>
            {Data.map(product => (
                <div className='item' key={product.id}>

                    <figure>
                        <img
                            src={product.urlImage}
                            alt={product.nameProduct}
                        />
                    </figure>
                    <div className="info-product">
                        <h2>{product.nameProduct}</h2>
                        <p className="price">{product.price}</p>
                        <button onClick={()=>onAddProduct()}>Añadir al carrito</button>
                    </div>

                </div>
            ))}
        </div>
    )
}
