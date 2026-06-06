import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Vendors from "./pages/Vendors";
import RFQs from "./pages/RFQs";
import Quotations from "./pages/Quotations";
import Approvals from "./pages/Approvals";
import PurchaseOrders from "./pages/PurchaseOrders";
import Activity from "./pages/Activity";

export default function App() {
  const [user, setUser] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleLogin = (data) => {
    setUser(data);
  };

  const handleRegister = (data) => {
    setUser(data);
    setIsRegistered(true);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          user ? (
            isRegistered ? (
              <Navigate to="/app/dashboard" />
            ) : (
              <Navigate to="/register" />
            )
          ) : (
            <Login setUser={handleLogin} />
          )
        }
      />

      <Route
        path="/register"
        element={
          user ? (
            isRegistered ? (
              <Navigate to="/app/dashboard" />
            ) : (
              <Register setUser={handleRegister} />
            )
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/app/*"
        element={
          user && isRegistered ? (
            <MainLayout user={user} />
          ) : (
            <Navigate to="/" />
          )
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="vendors" element={<Vendors />} />
        <Route path="rfqs" element={<RFQs />} />
        <Route path="quotations" element={<Quotations />} />
        <Route path="approvals" element={<Approvals />} />
        <Route path="orders" element={<PurchaseOrders />} />
        <Route path="activity" element={<Activity />} />
      </Route>
    </Routes>
  );
}