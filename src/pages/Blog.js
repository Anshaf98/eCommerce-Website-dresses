import React from "react";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Blog = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <Header />
      </header>
      {/* Hero */}
      <main className="main">
        <BlogList />
      </main>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;
