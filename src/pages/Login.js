import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Signin from "../components/Signin";

const Login = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <Header />
      </header>
      {/* Hero */}
      <main className="main">
        <Signin />
      </main>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Login;
