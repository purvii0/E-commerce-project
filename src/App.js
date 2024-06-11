import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckOut from "./components/CheckOut";
import Home from "./components/Home";
import OrderConfirmation from "./components/OrderConfirmation";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
