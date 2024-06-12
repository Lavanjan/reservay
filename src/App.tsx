import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from "./containers/home/page";
import Header from "./components/widgets/Header";
import Providers from "./components/atoms/Provider";
import Footer2 from "./components/widgets/Footer2";
import AboutPage from "./pages/about/page";
import ContactPage from "./pages/contact/page";
import PricingPage from "./pages/pricing/page";

function App() {
  return (
    <Router>
      <Providers>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer2 />
      </Providers>
    </Router>
  );
}

export default App;
