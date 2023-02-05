import React from "react";
import AppRoutes from "./Routes/AppRoutes";
import CartProvider from "./Storage/CardContext";





export default function App() {
  return (
    <div>
      <CartProvider>

        <AppRoutes />

      </CartProvider>

    </div>
  );
}