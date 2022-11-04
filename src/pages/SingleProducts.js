import React from "react";
import { useParams, Link } from "react-router-dom"; // از url آیدی را بر میدارد نمایش میدم
import Products from "../data";

const SingleProducts = () => {
  const { productId } = useParams();
  const product = Products.find((product) => product.id === productId);

  const { name, image } = product;

  return (
    <>
      <img src={image} alt="car" />
      <h1>{name}</h1>
      <Link to="/products">back to products</Link>
    </>
  );
};

export default SingleProducts;
