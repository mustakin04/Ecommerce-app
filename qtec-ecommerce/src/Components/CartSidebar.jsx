import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { ImCross } from "react-icons/im";

const CartSidebar = ({ setShow, products }) => {
  return (
    <div className="fixed top-0 right-0 w-[600px] h-full py-[100px] px-[20px] bg-yellow-400 z-50 overflow-y-auto">
      <div className="absolute top-8 right-6 text-3xl cursor-pointer" onClick={() => setShow(false)}>
        <ImCross />
      </div>

      <div className="flex font-sans font-medium text-[18px] justify-between border-b pb-2 mb-4">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

      {products.map((product, index) => (
        <div key={product.id + index} className="flex items-center justify-between mb-4">
          <div className="flex w-[175px] gap-5 items-center">
            <img src={product.image} alt={product.title} className="w-[54px] h-[54px] rounded" />
            <h5 className="font-sans font-medium">{product.title}</h5>
          </div>
          <p>{product.price}</p>
          <div className="flex items-center border px-3 py-1 gap-2">
            <h5>1</h5>
            <div className="flex flex-col">
              <IoIosArrowUp />
              <IoIosArrowDown />
            </div>
          </div>
          <h6>${product.price.toFixed(2)}</h6>
        </div>
      ))}
    </div>
  );
};

export default CartSidebar;
