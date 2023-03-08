import { log } from "console";
import React from "react";

const getProduct1 = fetch("https://dummyjson.com/products/1").then((res) =>
  res.json()
);
const getProduct2 = fetch("https://dummyjson.com/products/2").then((res) =>
  res.json()
);

const RSC = () => {
  const product1 = React.use(getProduct1);
  const product2 = React.use(getProduct2);
  if (!product1 || !product2) return <div>Loading...</div>;
  console.log("RSC");

  return (
    <div>
      <div> {product1.title}</div>
      <div> {product2.title}</div>
    </div>
  );
};

export default RSC;
