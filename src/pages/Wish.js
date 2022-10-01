import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Wishlist from "../components/wishItem/Wishlist";

const Wish = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <Header />
      </header>
      {/* Hero */}
      <main className="main">
        <Wishlist />
      </main>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Wish;
