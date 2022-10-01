import React, { useState } from "react";
import Checkout from "../../pages/Checkout";
import "../../style/Cart.css";
import CartItem from "./CartItem";

const CartItems = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="c-container">
      <div className="w-row">
        <h2 className="s-title">Your Cart</h2>
      </div>
      <div className="c-row">
        <div className="c-col">
          <div className="w-groups">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="c-col">
          <div className="c-bill">
            <div className="cb-title">My Bill</div>
            <div className="cb-groups">
              <div className="cb-group">
                <span>p</span>
                <span>p</span>
              </div>
            </div>
            <div className="cb-total">
              <div className="cb-group">
                <span>SubTotal:</span>
                <span>p</span>
              </div>
              <div className="cb-group">
                <span>Tax 20%:</span>
                <span>p</span>
              </div>
              <div className="cb-group">
                <span>Total:</span>
                <span>p</span>
              </div>
            </div>
            <div className="cb-btn">
              <button onClick={() => setOpen(true)}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
      {open && <Checkout setOpen={setOpen} />}
    </div>
  );
};

export default CartItems;
