import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import TurfDetails from "../pages/TurfDetails";
import Bookings from "../pages/Bookings";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/turf-details/:id" element={<TurfDetails />} />
        <Route path="/booking/:id" element={<Bookings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;