import { Route, Routes } from "react-router";

import AuthLayout from "./layouts/AuthLayout";
import DashLayout from "./layouts/DashLayout";
import MainLayout from "./layouts/MainLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import DashHome from "./pages/Dashboard/Home";
import DashOrder from "./pages/Dashboard/Order";
import DashOrders from "./pages/Dashboard/Orders";

import ProtectedRoutes from "./features/auth/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route
        element={
          <ProtectedRoutes>
            <MainLayout />
          </ProtectedRoutes>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order/:id" element={<Order />} />
        <Route path="profile" element={<Profile />} />
        <Route path="cart" element={<Cart />} />

        <Route path="dashboard" element={<DashLayout />}>
          <Route index element={<DashHome />} />
          <Route path="orders" element={<DashOrders />} />
          <Route path="orders/:id" element={<DashOrder />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
