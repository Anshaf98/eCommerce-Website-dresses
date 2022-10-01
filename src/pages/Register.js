import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Signup from "../components/Signup";

const Register = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <Header />
      </header>
      {/* Hero */}
      <main className="main">
        <Signup />
      </main>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Register;
