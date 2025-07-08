import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const CheckoutModel = ({ handleClick }) => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
   const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const handleSubmit=()=>{
    console.log(formData,"14")
    alert("🎉 Order Placed Successfully!");
    setFormData({ name: "", email: "", address: "" });
  }
  return (
    <div
      className="fixed top-0 right-[550px] z-[999] w-[550px] h-full mt-[50px] py-[100px] px-[20px]
     bg-white rounded-lg shadow-lg"
    >
      <div
        className="absolute top-10 right-12 text-4xl"
        onClick={() => handleClick()}
      >
        <RxCross1 />
      </div>
      <div className="font-sans font-semibold text-[24px] text-black  text-center">
        <h1>Please enter your details to </h1>
        <h2>place a Cash on Delivery order</h2>
      </div>
      <div className="my-[50px]">
         <div>
           <p className="font-medium text-[16px] my-[10px]">Name:</p>
          <input type="text" className="w-full py-4 placeholder:text-blue-950 bg-slate-200 border-none 
          outline-none px-7"  
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}/>
         </div>
         <div>
           <p className="font-medium text-[16px] my-[10px]">Email:</p>
          <input type="email" className="w-full py-4 placeholder:text-blue-950 bg-slate-200 border-none 
          outline-none px-7"  
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}/>
         </div>
         <div>
           <p className="font-medium text-[16px] my-[10px]">Address:</p>
          <textarea type="text" className="w-full py-4 placeholder:text-blue-950 bg-slate-200 border-none 
          outline-none px-7"  
          placeholder="Enter your address"
          name="address"
          value={formData.address}
          onChange={handleChange}/>
         </div>
         <div className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition 
         text-center mt-[60px]"
         onClick={()=>handleSubmit()}>
          <p> Place Order</p>
         </div>
      </div>
    </div>
  );
};

export default CheckoutModel;
