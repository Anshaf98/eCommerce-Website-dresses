import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductDetails from "../components/newProducts/ProductDetails";

const Product = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <Header />
      </header>
      {/* Hero */}
      <main className="main">
        <ProductDetails />
      </main>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Product;
