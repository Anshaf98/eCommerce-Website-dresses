import React from "react";

const Checkout = ({ setOpen }) => {
  return (
    <div className="co-container">
      <form>
        <h5 className="co-title">You Will pay after delivery!</h5>
        <div className="close-form" onClick={() => setOpen(false)}>
          X
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" required />
        </div>
        <div className="co-btn">
          <button type="submit">Order</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
