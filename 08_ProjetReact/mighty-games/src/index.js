import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './App-routing'
import { CartProvider } from './components/CartContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>
)

