import React from 'react'
import '../Product/Product.css'
//? use to pass props: product to component parent
// const Product = ({product:{imgSrc,name,price,details}}) 
const Product = ({imgSrc,name,price,details}) => {
    //?1 const {imgSrc,name,price,details}=props.product;
  return (
    <article>
        <img src={imgSrc} alt="Profile" />
        <h1>{name}</h1>
        <h2>{price}</h2>
        <h3>{details}</h3>
    </article>
  )
}

export default Product