import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="upperLine">
        <p>
          Signup and get 20% off to your first order.{" "}
          <a href="1">Sign UP Now</a>
        </p>
        <span className="cross">&#10006;</span>
      </div>
      <div className="navbar">
        <h2 className="Logo">SHOP.CO</h2>
        <ul>
          <li>
            <select name="" id="shopSelect">
              <option value="" selected>
                Shop
              </option>
              <option>Casual</option>
              <option>Formal</option>
              <option>Gym</option>
            </select>
          </li>
          <li>
            <p>On Sale</p>
          </li>
          <li>
            <p>New Arrivals</p>
          </li>
          <li>
            <p>Brands</p>
          </li>
        </ul>
        <input
          type="text"
          placeholder="Search for products..."
          class="search-input"
        ></input>
        <img src="/cart.png" alt="" />
        <img src="/Profile.png" alt="" />
      </div>
    </>
  );
};
export default Navbar;
