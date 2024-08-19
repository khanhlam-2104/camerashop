import React from "react";
import { Routes, Route } from "react-router";
import Home from "./home";
import Shop from "./shop";
import Cart from "./cart"
import Contact from "./contact"

const Rout = ({ shop, Filter, allcatefilter, addproduct, cart, setCart }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home addproduct={addproduct}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
        <Route path="shop" element={<Shop shop={shop} Filter={Filter} allcatefilter={allcatefilter} addproduct={addproduct}/>} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
};

export default Rout;
