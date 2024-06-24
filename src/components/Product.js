import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Product.css';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <Link to={`/details/${product.id}`} className="details-link">View Details</Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;
