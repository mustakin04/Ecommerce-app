import React, { useState } from "react";
import products from "./../data/Products";
import { useLocation, useParams } from "react-router";
import Container from "../Components/Container";
import CartSidebar from "../Components/CartSidebar";
import CheckoutModel from "../Components/CheckoutModel";

const ProductDetail = () => {
  const { pathname } = useLocation();
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const product = products.find((item) => item.id === id);

  const handleAddToCart = () => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    setShow(true);
  };

  const openCheckoutModal = () => setCheckoutOpen(true);
  const closeCheckoutModal = () => setCheckoutOpen(false);

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-500">Product not found</div>
    );
  }

  return (
    <Container>
      <div className="my-[40px]">home/{pathname.split("/")[1]}</div>

      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-[300px] h-auto object-cover rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-xl font-semibold text-green-600">
              ${product.price.toFixed(2)}
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-max"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {show && (
        <CartSidebar
          setShow={setShow}
          products={cartItems}
          setProducts={setCartItems}
          handleCheckOut={openCheckoutModal} 
        />
      )}

      {/* Checkout modal */}
      {checkoutOpen && (
        <CheckoutModel handleClick={closeCheckoutModal} />
      )}
    </Container>
  );
};

export default ProductDetail;
