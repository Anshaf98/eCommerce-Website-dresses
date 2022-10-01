import React from "react";
import ShopProduct from "./ShopProduct";

const ShopProducts = () => {
  return (
    <div className="sp-container">
      <div className="sp-row">
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
        <ShopProduct />
      </div>
    </div>
  );
};

export default ShopProducts;
