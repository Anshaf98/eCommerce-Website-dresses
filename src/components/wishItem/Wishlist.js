import React from "react";
import WishlistItem from "./WishlistItem";
import "../../style/Wish.css";

const Wishlist = () => {
  return (
    <div className="w-container">
      <div className="w-row">
        <h2 className="s-title">Wish List</h2>
      </div>
      <div className="w-row">
        <div className="w-groups">
          <WishlistItem />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
