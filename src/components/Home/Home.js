import React from "react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const store = useSelector((state) => state);

  return (
    <div>
      <div className="home-app-name">
      <span>Shopping Cart</span>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home Page
        </button>
        <button
          onClick={() => {
            navigate("/productlist");
          }}
        >
          Products
        </button>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart Page ({store.cart.length})
        </button>
      </div>
      <div className="homeItems">
        <h1>All Items</h1>
      </div>
    </div>
  );
};

export default Home;
