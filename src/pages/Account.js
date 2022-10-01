import React from "react";
import Acc from "../components/Accounts/Acc";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Account = () => {
  return (
    <div className="wrapper">
      {/* Header */}
      <header className="header">
        <Header />
      </header>
      {/* Hero */}
      <main className="main">
        <Acc />
      </main>
      {/* Footer */}
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Account;
