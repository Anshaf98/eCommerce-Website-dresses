import React from "react";
import "../../style/Shop.css";
import ShopFilter from "./ShopFilter";
import ShopProducts from "./ShopProducts";

const ShopProductItem = () => {
  return (
    <div className="s-conatiner">
      <div className="s-row">
        <h2 className="s-title">Shop</h2>
      </div>
      <div className="s-row">
        <div className="s-col">
          <h4 className="s-filters">Filters</h4>
          <div className="s-filterGroups">
            <ShopFilter />
          </div>
        </div>
        <div className="s-col">
          <ShopProducts />
        </div>
      </div>
    </div>
  );
};

export default ShopProductItem;
