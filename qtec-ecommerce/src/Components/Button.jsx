import React from 'react'


const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full mt-10 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
    >
      Checkout
    </button>
  );
};

export default Button;
