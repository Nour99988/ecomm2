import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log(products);
  return <div></div>;
};

export default Products;
