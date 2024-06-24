import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import '../styles/Home.css';

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home">
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Home;
