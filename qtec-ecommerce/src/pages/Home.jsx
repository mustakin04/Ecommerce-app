// src/Pages/Home.jsx
import React, { useState } from "react";
import Container from "../Components/Container";
import productsData from "../data/Products";
import ProductCard from "../Components/ProductCard";
import CartSidebar from "../Components/CartSidebar";
import CheckoutModel from "../Components/CheckoutModel";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
   
  const [open,setOpen]=useState(false)
  const handleCheckoutModel=()=>{
    setOpen(true)
  }
  
  const handleClick=()=>{
    setOpen(false)
  }
  const handleAddToCart = (product) => {
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
    setShowCart(true);
  };

  return (
    <div className="relative">
      <Container>
        <div className="p-6 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </Container>

      {showCart && (
        <CartSidebar
          products={cartItems}
          setProducts={setCartItems}
          setShow={setShowCart}
          handleCheckOut={handleCheckoutModel}
        />
      )}
      <div>
        {open&&(<CheckoutModel handleClick={handleClick} >

        </CheckoutModel>)}
      </div>
    </div>
  );
};

export default Home;
