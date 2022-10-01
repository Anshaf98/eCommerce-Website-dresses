import React from "react";
import Category from "./Category";
import Price from "./Price";
import Search from "./Search";
import Star from "./Star";
import SubCategory from "./SubCategory";

const ShopFilter = () => {
  return (
    <>
      <div className="f-group">
        <span className="f-groupTitle">Search by Name</span>
        <Search />
      </div>
      <div className="f-group">
        <span className="f-groupTitle">Category</span>
        <Category />
      </div>
      <div className="f-group">
        <span className="f-groupTitle">SubCategory</span>
        <SubCategory />
      </div>
      <div className="f-group">
        <span className="f-groupTitle">Price</span>
        <Price />
      </div>
      <div className="f-group">
        <span className="f-groupTitle">Star Rating</span>
        <Star />
      </div>
    </>
  );
};

export default ShopFilter;
