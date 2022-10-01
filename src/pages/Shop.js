import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ShopProductItem from "../components/shop/ShopProductItem";

const Shop = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <Header />
      </header>
      {/* Hero */}
      <main className="main">
        <ShopProductItem />
      </main>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Shop;
