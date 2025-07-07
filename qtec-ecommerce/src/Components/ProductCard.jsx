import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-[200px] mx-auto">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[150px] object-cover mb-2 rounded"
        />
        <h2 className="text-lg font-semibold">{product.title}</h2>
      </Link>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>
      <button
        className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
