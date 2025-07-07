import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      
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
