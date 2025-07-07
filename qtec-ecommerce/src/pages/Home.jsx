import React from "react";
import Container from "../Components/Container";
import products from "../data/Products";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  return (
    <div>
      <Container>
        <div className="p-6 max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
