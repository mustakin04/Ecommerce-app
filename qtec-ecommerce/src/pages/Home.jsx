import React, { useState } from "react";
import Container from "../Components/Container";
import products from "../data/Products";
import ProductCard from "../Components/ProductCard";
import CartSidebar from "../Components/CartSidebar";

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setShowCart(true);
  };

  return (
    <div>
      <Container>
        <div className="p-6 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart} // Pass callback
              />
            ))}
          </div>
        </div>
      </Container>

      {showCart && <CartSidebar products={cartItems} setShow={setShowCart} />}
    </div>
  );
};

export default Home;
