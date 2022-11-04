import React from "react";
import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <div className="products">
      {products.map((product) => {
        return (
          <div className="product" key={product.id}>
            <h4>{product.name}</h4>
            <img src={product.image} alt="car" />
            <Link to={`/products/${product.id}`} className="product-link">
              show product
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
