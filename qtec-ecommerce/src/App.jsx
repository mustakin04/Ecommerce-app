import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from './Layout/RootLayout';
import Home from './pages/Home';

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "/", Component: Home },
      
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
