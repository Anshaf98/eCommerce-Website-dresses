import React from "react";
import { Link } from "react-router-dom";

const NewProduct = () => {
  return (
    <div className="np-group">
      <Link to="/product/:id8451515">
        <div className="np-body">
          <img
            className="product-img"
            src="https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span className="np-category">Dresses</span>
          <span className="np-price">$400</span>
        </div>
        <div className="np-footer">
          <div className="np-footerDiv">
            <h3 className="np-titlePro">P1</h3>
            <span className="np-star">4 ★</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewProduct;
