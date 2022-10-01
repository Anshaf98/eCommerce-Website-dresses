import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import BlogDetails from "./BlogDetails";

const BlogItem = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <Header />
      </header>
      {/* Hero */}
      <main className="main">
        <BlogDetails />
      </main>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default BlogItem;
