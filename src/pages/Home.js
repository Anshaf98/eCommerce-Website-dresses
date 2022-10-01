import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeBlog from "../components/homeBlogs/HomeBlog";

import Intro from "../components/Intro";
import NewProducts from "../components/newProducts/NewProducts";

const Home = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <Header />
      </header>
      {/* Hero */}
      <Intro />
      <main className="main">
        <HomeBlog />
        <NewProducts />
      </main>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
