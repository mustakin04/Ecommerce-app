import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './Layout/RootLayout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/", Component: Home },
      { path: "/product/:id", Component: ProductDetail},
      
    ],
  },
]);


  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
