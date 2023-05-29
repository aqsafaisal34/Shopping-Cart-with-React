import React from 'react';

function Product(props) {
 const {  productName, price, productImage } = props.data; 
  return (
    <div className="product">
      <img alt="" src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
        <button className="addToCartBttn">Add To Cart</button>
      </div>
    </div>
  )
}

export default Product;
