import React from "react";
import "../../style/NewProducts.css";
import NewProduct from "./NewProduct";

const NewProducts = () => {
  return (
    <div className="np-conatiner">
      <div className="np-row">
        <h2 className="np-title">New Products</h2>
      </div>
      <div className="np-row">
        <div className="np-groups">
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
          <NewProduct />
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
