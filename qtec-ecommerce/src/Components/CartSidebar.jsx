// src/Components/CartSidebar.jsx
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ImCross } from "react-icons/im";
import CheckoutModel from "./CheckoutModel";

const CartSidebar = ({ setShow, products, setProducts,handleCheckOut }) => {
  
  const handleIncrement = (id) => {
    const updated = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updated);
  };

  const handleDecrement = (id) => {
    const updated = products
      .map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter((product) => product.quantity > 0); // remove if qty = 0
    setProducts(updated);
  };

  const total = products
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="fixed top-0 right-0 w-[600px] h-full  py-[100px] px-[20px] bg-yellow-400 z-50 overflow-y-auto">
      <div
        className="absolute top-8 right-6 text-3xl cursor-pointer "
        onClick={() => setShow(false)}
      >
        <ImCross />
      </div>

      <div className="flex justify-between font-sans font-medium text-[18px] my-[60px] border-b pb-2 ">
        
        <div className="flex ">
           <p className=" w-[150px]">Product</p>
        </div>
        <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
      </div>

      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between mb-4"
        >
          <div className="flex w-[150px] gap-5 items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-[54px] h-[54px] rounded"
            />
            <h5 className="font-sans font-medium">{product.title}</h5>
          </div>
          <p>${product.price.toFixed(2)}</p>
          <div className="flex items-center border px-3 py-1 gap-2">
            <h5>{product.quantity}</h5>
            <div className="flex flex-col">
              <IoIosArrowUp
                onClick={() => handleIncrement(product.id)}
                className="cursor-pointer"
              />
              <IoIosArrowDown
                onClick={() => handleDecrement(product.id)}
                className="cursor-pointer"
              />
            </div>
          </div>
          <h6>${(product.price * product.quantity).toFixed(2)}</h6>
        </div>
      ))}

      <div className="mt-14 text-right font-bold text-xl">Total: ${total}</div>
      <div>
        <button className="w-full mt-[100px] bg-black text-white py-2 rounded hover:bg-gray-800 
        transition"
        onClick={()=>handleCheckOut()}>
          {" "}
          Checkout
        </button>
      </div>
      
    </div>
  );
};

export default CartSidebar;
