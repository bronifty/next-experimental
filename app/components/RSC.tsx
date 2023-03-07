import React from "react";
import RCC from "./RCC";

const getProduct1 = fetch("https://dummyjson.com/products/1").then((res) =>
  res.json()
);
const getProduct2 = fetch("https://dummyjson.com/products/1").then((res) =>
  res.json()
);

// const TestRSC = () => {
//   const product = React.use(getProduct1);
//   if (!product) return <div>Loading...</div>;

//   return <div>In the RSC created in RSC file: {product.title}</div>;
// };
const RSC = () => {
  const product = React.use(getProduct1);
  if (!product) return <div>Loading...</div>;

  return <div>In the RSC created in RSC file: {product.title}</div>;
};

export default RSC;
