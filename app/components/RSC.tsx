import React from "react";

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

  return (
    <div>
      <h2>In the RSC passed as children to the RCC via page.tsx in next: </h2>
      <div>product.title from use hook query: {product.title}</div>
    </div>
  );
};

export default RSC;
