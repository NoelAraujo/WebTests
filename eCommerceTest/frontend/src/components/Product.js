import React from 'react'
import Rating from './Rating';

export default function Product(props){
    const { product } = props;
    return (
        <div>
            <div key={product._id} className="card">
            <a href={`product/${product._id}`}>
                {/* image size should be 680px by 830px  */}
                <img className="medium" src={product.image} alt={product.name}></img>
                
            </a>
            <div className="card-body">
                <a href={`product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
            </div>
            <Rating rating={product.rating} numReviews={product.numReviews} ></Rating>
            <div className="price">
                R$ {product.price}
            </div>
            </div>
        </div>
    )
}