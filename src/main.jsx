import { Toaster } from "sonner";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

import CartProvider from "./contexts/CartContext.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <CartProvider>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
);
