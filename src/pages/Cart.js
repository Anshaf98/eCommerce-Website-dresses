import React from "react";
import CartItems from "../components/Cart/CartItems";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Cart = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <Header />
      </header>
      {/* Hero */}
      <main className="main">
        <CartItems />
      </main>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Cart;
