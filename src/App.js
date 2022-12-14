import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wish from "./pages/Wish";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Blog from "./pages/Blog";
import BlogItem from "./components/homeBlogs/BlogItem";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogItem />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
