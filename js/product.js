import React from 'react';

function Product(props){
    return (
        <section className='book'>
            <h2>{props.title}</h2>
            <h4>Av {props.author}</h4>
            <p>{props.text}</p>
            <button className='btn'>Add to cart</button>
        </section>
)
}
export default Product;